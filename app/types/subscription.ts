type SubscriptionStatus =
  | "pending"
  | "draft"
  | "complete"
  | "paused"
  | "active"
  | "trial"
  | "pastdue"
  | "unpaid"
  | "canceled"
  | "paid";

type BillingCard = {
  brand: string;
  last4: string;
  exp_month: number;
  exp_year: number;
  token: string;
  test: boolean;
  address_check: string;
  zip_check: string;
  cvc_check: string;
  fingerprint: string;
  date_created: string;
};

type BillingAddress = {
  name: string;
  address1: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  country: string | null;
  phone: string | null;
  card: BillingCard;
  first_name: string;
  last_name: string;
  account_card_id: string;
  company: string | null;
};

type BillingSchedule = {
  interval: string;
  interval_count: number;
  limit: string | null;
  trial_days: number;
};

interface BillingDetails {
  name: string;
  address1: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  country: string | null;
  phone: string | null;
  card: BillingCard;
  first_name: string;
  last_name: string;
  account_card_id: string;
  company: string | null;
}

interface Billing {
  last4: string;
  card: Billing;
  billing_schedule: BillingSchedule;
  billing: BillingDetails;
}

type ProductPlan = {
  name: string;
  description: string;
  price: number;
  billing_schedule: BillingSchedule;
  id: string;
  active: boolean;
};

type ProductPurchaseOptions = {
  subscription: {
    active: boolean;
    plans: ProductPlan[];
  };
};

type ProductImage = {
  file: {
    id: string;
    date_uploaded: string;
    length: number;
    md5: string;
    filename: null | string;
    content_type: string;
    url: string;
    width: number;
    height: number;
  };
  id: string;
};

type ProductBundleItem = {
  variant_id: null;
  quantity: number;
  product_id: string;
  options: any[];
  id: string;
};

type Product = {
  purchase_options: ProductPurchaseOptions;
  options: any[];
  name: string;
  images: ProductImage[];
  description: string;
  bundle_items: ProductBundleItem[];
  bundle: boolean;
  id: string;
};

type BillingScheduleDetails = {
  interval: string;
  interval_count: number;
  limit: null;
  trial_days: number;
};

interface BillingDetails {
  name: string;
  address1: null | string;
  address2: null | string;
  city: null | string;
  state: null | string;
  zip: null | string;
  country: null | string;
  phone: null | string;
  card: BillingCard;
  first_name: string;
  last_name: string;
  account_card_id: string;
  company: null | string;
}

interface Billing {
  billing_schedule: BillingSchedule;
  billing: BillingDetails;
}

type ShippingDetails = {
  name: string;
  address1: string;
  address2: null | string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: null | string;
  first_name: string;
  last_name: string;
  account_address_id: string;
};

type SubscriptionItem = {
  variant_id: null;
  quantity: number;
  product_id: string;
  options: any[];
  id: string;
};

export interface Subscription {
  variant_id: null;
  unpaid: boolean;
  trial_days: number;
  trial: boolean;
  taxes: null;
  tax_total: number;
  tax_included_total: number;
  sub_total: number;
  status: SubscriptionStatus;
  shipping: ShippingDetails;
  recurring_total: number;
  recurring_tax_total: number;
  recurring_tax_included_total: number;
  recurring_item_total: number;
  recurring_item_tax: number;
  recurring_item_discount: number;
  recurring_discount_total: number;
  quantity: number;
  product_tax_total: number;
  product_tax_each: number;
  product_id: string;
  product_discount_total: number;
  product_discount_each: number;
  price_total: number;
  price: number;
  plan_name: string;
  plan_id: string;
  payment_total: number;
  payment_balance: number;
  paid: boolean;
  order_schedule: null;
  options: null;
  items: SubscriptionItem[];
  item_total: number;
  item_tax: number;
  item_discount: number;
  invoice_total: number;
  interval_count: number;
  interval: string;
  id: string;
  grand_total: number;
  discount_total: number;
  date_updated: string;
  date_period_start: string;
  date_period_end: string;
  date_created: string;
  currency: string;
  billing_schedule: BillingScheduleDetails;
  billing: Billing;
  active: boolean;
  account_id: string;
  variant: null;
  product: Product;
  coupon_code: null | string;
}

export interface SubscriptionProps {
  subscription: Subscription;
  product: any;
}
