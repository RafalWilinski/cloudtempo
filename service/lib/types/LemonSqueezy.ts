export interface Attributes {
  status: string;
  ends_at?: any;
  order_id: number;
  store_id: number;
  test_mode: boolean;
  user_name: string;
  created_at: Date;
  product_id: number;
  updated_at: Date;
  user_email: string;
  variant_id: number;
  product_name: string;
  variant_name: string;
  order_item_id: number;
  trial_ends_at?: any;
  status_formatted: string;
}

export interface Order {
  links: Links;
}

export interface Store {
  links: Links;
}

export interface Product {
  links: Links;
}

export interface Variant {
  links: Links;
}

export interface Links {
  self: string;
  related?: string;
}

export interface OrderItem {
  links: Links;
}

export interface Relationships {
  order: Order;
  store: Store;
  product: Product;
  variant: Variant;
  "order-item": any;
}

export interface Data {
  id: string;
  type: string;
  links: Links;
  attributes: Attributes;
  relationships: Relationships;
}

export interface Meta {
  test_mode: boolean;
  event_name: string;
}

export interface WebhookEvent {
  data: Data;
  meta: Meta;
}
