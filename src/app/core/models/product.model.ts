export class ProductModel {
  id!:number;
  title:string = "";
  price:number = 0;
  image:string = "";
  description:string = "";
  category!:string;
  rating!:RatingModel;
}
export class RatingModel{
  rate!:number;
  count!:number;
}
