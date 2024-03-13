export interface IUser {
  id: string;
  name: string;
  username: string;
  email?: string;
  role: 'USER' | 'ADMIN';
  active: boolean;
  external_id: string;
  remote_address: string;
  rollover: number;
  last_login?: Date;
  blocked_withdraw: boolean;
  document: IUserDocument;
  indicationCode: IUserIndicationCode;
  wallet: IUserWallet;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface IUserDocument {
  id: string;
  user_id: string;
  document: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface IUserWallet {
  id: string;
  user_id: string;
  balance: number;
  bonus: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface IUserIndicationCode {
  id: string;
  user_id: string;
  code: string;
  percentage: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}
