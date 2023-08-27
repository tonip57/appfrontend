import { HttpStatusCode } from "axios"
import { ElectricityPriceDto } from "../dtos/ElectricityPriceDto"

export class ElectricityPricesResponse {
    electricityPrices: ElectricityPriceDto[]
    status: HttpStatusCode

    constructor(electricityPrices: ElectricityPriceDto[], status: HttpStatusCode) {
        this.electricityPrices = electricityPrices
        this.status = status
    }
}