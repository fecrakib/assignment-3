export type TRoll='admin' | 'user'

export interface  TUser {
    name: string;  
    email: string;  
    password: string;  
    phone: number;  
    role: TRoll;  
    address: string;  
  }
  
