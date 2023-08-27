import request from "axios"
import { ElectricityPriceDto } from "../dtos/ElectricityPriceDto"
import { ElectricityPricesResponse } from "../responses/ElectricityPricesResponse";

const url = `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/api/ElectricityPrices`

export class ElectricityPriceAPI {
  static async getElectricityPrices() {
    try {
      const response = await request.get(url)
      
      if (response === undefined) {
        return new ElectricityPricesResponse([], 404)
      }

      return new ElectricityPricesResponse(response.data as ElectricityPriceDto[], response.status)
    } catch (e: any) {
      if (e.response !== undefined) {
        return new ElectricityPricesResponse([], e.response.status)
      }

      return new ElectricityPricesResponse([], 400)
    }
  }
}