export type TLoginUser = {
    email: string;
    password: string;
  };
  
  export type TUserRole = 'admin' | 'user';

  export interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    role: TUserRole;
    address: string;
  }
  