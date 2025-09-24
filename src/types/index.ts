export interface INotification {
  id: string;
  type: string;
  details: {
    payment_id: number;
    amount: number;
    status: string;
    message: string;
  };
  read_at: string | null;
  created_at: string;
}

export interface IPaymentMethod {
  id: number;
  brand: string;
  last_four: string;
  is_default: number;
  provider: string;
}

export interface IPaymentHistory {
  date: string;
  course: string;
  amount: number;
  currency: string;
  method: string;
}
