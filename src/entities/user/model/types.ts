import { IUser } from '@/entities/auth/model/types';

export interface IUserProfile {
	user: IUser;
}
export type UserFormType = Omit<IUser, 'id'> & { password?: string };
