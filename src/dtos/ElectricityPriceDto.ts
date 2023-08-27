export class ElectricityPriceDto {
    dateTime: Date
    price: number

    constructor(dateTime: Date, price: number) {
        this.dateTime = dateTime
        this.price = price
    }
}