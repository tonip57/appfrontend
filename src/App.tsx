import { useState, useEffect } from 'react'
import { ElectricityPriceAPI } from "./api/ElectricityPriceAPI"
import { ElectricityPriceDto } from './dtos/ElectricityPriceDto'
import { Calculation } from './helpers/Calculation'
//import { GetDummyElectricityValues } from './helpers/DummyElectricityValues'
import Chart from './components/Chart'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import "./styles/App.css"
import SmallCard from './components/SmallCard'
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs"
import { VscGraph, VscGraphScatter } from "react-icons/vsc"

const App = () => {
  const [electricityPrices, setElectricityPrices] = useState<ElectricityPriceDto[]>([])

  useEffect(() => {
    // Creating dummy electricity values without api calls. Used for testing.
    //setElectricityPrices(GetDummyElectricityValues())

    async function getElectricityPrices() {
      let response = await ElectricityPriceAPI.getElectricityPrices()

      if (response.status === 200) {
        setElectricityPrices(response.electricityPrices)
      }
    }

    getElectricityPrices()
  }, [])

  return (
    <div className="app-background">
      <Container>
        <Row className="pt-5 g-2">
          <Col lg={3} md={6}>
            {electricityPrices.length > 0 && <SmallCard title="Highest" value={Calculation.getMaxPriceObject(electricityPrices).price.toFixed(2)} icon={<BsGraphUpArrow className="small-card-icon" style={{ color: "#0388fc", width: "35px", height: "35px" }}/>}/>}
          </Col>
          <Col lg={3} md={6}>
            {electricityPrices.length > 0 && <SmallCard title="Lowest" value={Calculation.getMinPriceObject(electricityPrices).price.toFixed(2)} icon={<BsGraphDownArrow className="small-card-icon" style={{ color: "#be03fc", width: "35px", height: "35px" }}/>}/>}
          </Col>
          <Col lg={3} md={6}>
            {electricityPrices.length > 0 && <SmallCard title="Average" value={Calculation.getAveragePrice(electricityPrices).toFixed(2)} icon={<VscGraph className="small-card-icon" style={{ color: "#fc9003", width: "40px", height: "40px" }}/>}/>}
          </Col>
          <Col lg={3} md={6}>
            {electricityPrices.length > 0 && <SmallCard title="Standard Deviation" value={Calculation.getStandardDeviation(electricityPrices).toFixed(2)} icon={<VscGraphScatter className="small-card-icon" style={{ color: "#fc032d", width: "40px", height: "40px" }}/>}/>}
          </Col>
          <Col lg={12} className="mt-4">
            <div className="chart-card">
              {electricityPrices.length > 0 ? <Chart electricityPrices={electricityPrices}></Chart> : <p>No data</p>}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App