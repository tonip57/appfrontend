import { ElectricityPriceDto } from "../dtos/ElectricityPriceDto"

export class Calculation {
    static getMaxPriceObject = (electricityPrices: ElectricityPriceDto[]) => {
        return electricityPrices.reduce((max, object) => max.price > object.price ? max : object)
    }

    static getMinPriceObject = (electricityPrices: ElectricityPriceDto[]) => {
        return electricityPrices.reduce((min, object) => min.price < object.price ? min : object)
    }

    static getAveragePrice = (electricityPrices: ElectricityPriceDto[]) => {
        let list: number[] = []

        electricityPrices.forEach(obj => {
            list.push(obj.price)
        })

        return list.reduce((a, b) => a + b, 0) / list.length
    }

    static getStandardDeviation = (electricityPrices: ElectricityPriceDto[]) => {
        let list: number[] = []

        electricityPrices.forEach(obj => {
            list.push(obj.price)
        })

        const n = list.length
        const mean = list.reduce((a, b) => a + b) / n
        return Math.sqrt(list.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
    }
}