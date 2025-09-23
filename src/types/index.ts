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
