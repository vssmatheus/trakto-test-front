import { IAppReference } from './app-reference.model';
import { ICreatedAt } from './created-at.model';
import { IPlanReference } from './plan-reference.model';
import { IRules } from './rules.model';
import { ITitle } from './title';
import { IUpdatedAt } from './updated-at.model';

export interface IProductSubscribed {
  metadata: any;
  app_reference: IAppReference;
  is_published: boolean;
  active: boolean;
  created_at: ICreatedAt;
  plan_reference: IPlanReference;
  rules: IRules;
  hotmart_product_id: any;
  descriptor: ITitle;
  titles: ITitle;
  is_default: boolean;
  locale: string[];
  gateway_product_id: any;
  is_deleted: boolean;
  payment_required: boolean;
  updated_at: IUpdatedAt;
  sortment_descriptor: ITitle;
  is_free: boolean;
  team_members: number;
  id: string;
  from_hotmart: boolean;
  gateway_name: any;
}
