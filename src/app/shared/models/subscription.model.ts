import { IGateway } from './gateway.model';
import { ILimits } from './limits.model';
import { IProductSubscribed } from './product-subscribed.model';

export interface ISubscription {
  renew_at: string;
  product_subscribed: IProductSubscribed;
  payment_status: string;
  active: boolean;
  created_at: string;
  id: string;
  is_trial: boolean;
  gateway: IGateway;
  limits: ILimits;
}
