import Price from "./Price"
import {ChildrensPrices, NewReleasePrice, RegularPrice} from "./Price"

export enum MovieType {
    REGULAR,
    NEW_RELEASE,
    CHILDRENS
}


export default class Movie {
    static REGULAR = MovieType.REGULAR;
    static NEW_RELEASE = MovieType.NEW_RELEASE;
    static CHILDRENS = MovieType.CHILDRENS;

    private _title: string;
    private _price: Price;

    constructor(title: string, priceCode: number) {
        this._title = title;
        this.setPriceCode(priceCode)
    }

    public getPriceCode() {
        return this._price.getPriceCode()
    }

    public setPriceCode(arg: number) {
        switch (arg) {
            case Movie.REGULAR:
                this._price = new RegularPrice();
                break;
            case Movie.CHILDRENS:
                this._price = new ChildrensPrices();
                break;
            case Movie.NEW_RELEASE:
                this._price = new NewReleasePrice();
                break;
            default:
                throw new Error("Incorrect Price Code")

        }
    }

    public getTitle(): string {
        return this._title;
    }


    public getCharge(getDaysRented: number) {
        return this._price.getCharge(getDaysRented)

    }


    public getFrequentRenterPoints(getDaysRented: number) {
        return this._price.getFrequentRenterPoints(getDaysRented)
    }

}
