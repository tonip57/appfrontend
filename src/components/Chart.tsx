import { format } from "date-fns"
import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,
    ReferenceDot
} from "recharts"
import CustomToolTip from '../components/CustomToolTip'
import { Calculation } from '../helpers/Calculation'
import { ElectricityPriceDto } from "../dtos/ElectricityPriceDto"

const Chart = ({ electricityPrices }: { electricityPrices: ElectricityPriceDto[] }) => {
    let previousTick = ""
    const maxPriceObject = Calculation.getMaxPriceObject(electricityPrices)
    const minPriceObject = Calculation.getMinPriceObject(electricityPrices)

    return (
        <>
            <div style={{ display: "flex" }}>
                <h5 className="chart-card-title">Price {"(last 7 days)"}</h5>
                <div style={{ marginLeft: "auto" }}>
                    <div style={{ display: "flex", marginBottom: "5px" }}>
                        <div className="circle" style={{ backgroundColor: "#0388fc", marginTop: "auto", marginBottom: "auto" }}>
                        </div>
                        <div style={{ fontSize: "13px", marginLeft: "4px", marginBottom: "1px" }}>
                            Highest: {maxPriceObject.price.toFixed(2)} c/kWh | {format(Date.parse(maxPriceObject.dateTime.toString()), "dd.MM, HH:mm")}
                        </div>
                    </div>
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                        <div className="circle" style={{ backgroundColor: "#be03fc", marginTop: "auto", marginBottom: "auto" }}>
                        </div>
                        <div style={{ fontSize: "13px", marginLeft: "4px", marginBottom: "1px" }}>
                            Lowest: {minPriceObject.price.toFixed(2)} c/kWh | {format(Date.parse(minPriceObject.dateTime.toString()), "dd.MM, HH:mm")}
                        </div>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={electricityPrices}>
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#21D375" stopOpacity={1}></stop>
                            <stop offset="75%" stopColor="#21D375" stopOpacity={0.1}></stop>
                        </linearGradient>
                    </defs>

                    <Area dataKey="price" stroke="#08A045" fill="url(#color)" />
                    <XAxis dataKey="dateTime" axisLine={false} tickLine={false} tickFormatter={str => {
                        if (previousTick === "") {
                            previousTick = format(Date.parse(str), "dd.MM")
                            return ""
                        }

                        if (previousTick !== format(Date.parse(str), "dd.MM")) {
                            previousTick = format(Date.parse(str), "dd.MM")
                            return previousTick
                        }

                        return ""
                    }} />
                    <YAxis dataKey="price" axisLine={false} tickLine={false} tickCount={8} label={{ value: 'c/kWh', angle: -90, position: 'insideLeft' }} />
                    <Tooltip content={<CustomToolTip />} />
                    <CartesianGrid opacity={0.2} vertical={false} />
                    <ReferenceDot y={maxPriceObject.price} x={maxPriceObject.dateTime.toString()} stroke="#0388fc" fill="#0388fc" r={4} />
                    <ReferenceDot y={minPriceObject.price} x={minPriceObject.dateTime.toString()} stroke="#be03fc" fill="#be03fc" r={4} />
                </AreaChart>
            </ResponsiveContainer>
        </>
    )
}

export default Chart