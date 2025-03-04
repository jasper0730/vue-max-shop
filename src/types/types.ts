// 使用者資訊
export type UserType = {
  name?: string;
  email: string;
  tel?: string;
  address?: string;
};

// 產品基本資訊
export type ProductInfoType = {
  title: string;
  unit: string;
};

// 訂單內的產品項目
export type ProductItemType = {
  id: string;
  product: ProductInfoType;
  qty: number;
  final_total: number;
  total: number;
};

// 訂單
export type OrderType = {
  id: string;
  is_paid: boolean;
  create_at: number;
  paid_date: number | null;
  user: UserType;
  products: ProductItemType[];
  total: number;
};

// 產品類型
export type ProductType = {
  id?: string;
  title: string;
  category: string;
  unit?: string;
  origin_price: number;
  price: number;
  imageUrl?: string;
  imagesUrl?: string[];
  is_enabled: boolean;
  description?: string;
  content?: string;
};

// 優惠券
export type CouponType = {
  code: string;
  due_date: number;
  id: string;
  is_enabled: number;
  num: number;
  percent: number;
  title: string;
};
