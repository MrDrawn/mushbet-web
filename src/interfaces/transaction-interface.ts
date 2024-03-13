import { IGame, IUser } from '.';

export interface ITransaction {
  id: string;
  user_id: string;
  amount: number;
  bonus_deposit_amount: number;
  used_bonus: boolean;
  description: string;
  external_transaction_id?: string;
  external_bet_transaction_id?: string;
  withdrawOrder: IWithdrawOrder;
  type: 'DEPOSIT' | 'WITHDRAW' | 'INDICATION' | 'BET' | 'WIN';
  status:
    | 'PENDING'
    | 'COMPLETED'
    | 'PAID'
    | 'REJECTED'
    | 'REFUNDED'
    | 'WAITING_PAYMENT_GATEWAY'
    | 'CANCELED'
    | 'FAILED';
  payment_gateway: string;
  game_id: string;
  game: IGame;
  withdraw_order_id: string;
  extra_data: string;
  user: IUser;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface IWithdrawOrder {
  id: string;
  user_id: string;
  amount: number;
  tax_amount: number;
  description: string;
  reference: string;
  status:
    | 'PENDING'
    | 'COMPLETED'
    | 'PAID'
    | 'REJECTED'
    | 'REFUNDED'
    | 'WAITING_PAYMENT_GATEWAY'
    | 'CANCELED'
    | 'FAILED';
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}
