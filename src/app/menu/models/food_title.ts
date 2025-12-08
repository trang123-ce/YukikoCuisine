import { FoodDetail } from "./food_detail";

export interface FoodTitle {
    title: string;
    overview: string;
    FoodDetail: FoodDetail[];
}