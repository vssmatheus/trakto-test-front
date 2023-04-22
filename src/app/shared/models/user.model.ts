import { IAppReference } from './app-reference.model';
import { ICurrentLocale } from './current-locale.model';
import { ICurrentProfile } from './current-profile.model';
import { ILimits } from './limits.model';
import { IProfile } from './profile.model';
import { IRole } from './role.model';
import { ISubscriptionReference } from './subscription-reference.model';
import { ISubscriptionRules } from './subscription-rule.model';

export interface IUser {
  id: string;
  firstname: string;
  role: IRole;
  app_reference: IAppReference;
  created_at: string;
  can_authenticate: boolean;
  products: string[];
  force_reset_password: boolean;
  approved_terms_use: boolean;
  email: string;
  customer_id: string;
  subscription_payment_status: string;
  subscription_reference: ISubscriptionReference;
  current_profile: ICurrentProfile;
  subscription_status: string;
  profiles: IProfile[];
  subscription_rules: ISubscriptionRules;
  subscription_plan_name: string;
  current_locale: ICurrentLocale;
  email_verified: boolean;
  limits: ILimits;
  firebase_token: string;
  access_token: string;
  refresh_token: string;
}
