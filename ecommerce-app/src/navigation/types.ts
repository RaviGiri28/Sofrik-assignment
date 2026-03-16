import { Product } from '../models';

export type RootStackParamList = {
  MainTabs: undefined;
  ProductDetail: { product: Product };
};

export type TabParamList = {
  Products: undefined;
  Cart: undefined;
};
