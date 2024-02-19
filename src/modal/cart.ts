import { Food } from "./food";

export interface Cart extends Food{
    quantity : number;
}