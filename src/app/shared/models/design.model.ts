import { IAppReference } from './app-reference.model';
import { ICover } from './cover.model';
import { IPage } from './page.model';
import { IPlanReference } from './plan-reference.model';
import { IProduct } from './product.model';

export interface IDesign {
  is_template: boolean;
  app_reference: IAppReference;
  products: IProduct[];
  tags: string[];
  is_deleted: boolean;
  is_premium: boolean;
  user_reference: IPlanReference;
  allow_preview: boolean;
  theme_reference: IPlanReference;
  author: any;
  module: null;
  created_at: Date;
  published: boolean;
  page_format_reference: IPlanReference;
  printable: boolean;
  cover: ICover;
  pages: Array<IPage[]>;
  updated_at: Date;
  app_demo: boolean;
  provider: string;
  price: null;
  is_printable: boolean;
  is_public: boolean;
  is_renamed: boolean;
  published_at: null;
  slug: null;
  is_featured: boolean;
  thumbs: ICover;
  id: string;
  title: string;
}
