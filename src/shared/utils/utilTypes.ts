import { Dispatch, SetStateAction } from 'react';

export type SetStateType<T> = Dispatch<SetStateAction<T>>;
export type TypeFrom<T> = T[keyof T];
