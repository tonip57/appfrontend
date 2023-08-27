import { ElectricityPriceDto } from "../dtos/ElectricityPriceDto"

export const GetDummyElectricityValues = () => {
    let listOfElectricityPrices: ElectricityPriceDto [] = []

    for (let i = 1; i < 8; i++) {
        for (let x = 0; x < 24; x++) {
            const date: Date = new Date(2023, 10, i, x, 0, 0, 0)
            listOfElectricityPrices.push(new ElectricityPriceDto(date, GetRandomElectricityPrice()))
        }
    }

    return listOfElectricityPrices
}

const GetRandomElectricityPrice = () => {
    var precision = 100
    return Math.floor(Math.random() * (70 * precision - 1 * precision) + 1 * precision) / (1*precision)
}