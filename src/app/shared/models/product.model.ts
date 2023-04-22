import { ITitle } from './title';

export interface IProduct {
  id: string;
  title: string | ITitle;
  type: string;
  amount: any;
  usage_type: any;
  product_id: any;
  currency: any;
}
