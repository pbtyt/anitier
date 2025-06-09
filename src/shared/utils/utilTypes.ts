import { Dispatch, SetStateAction } from 'react';

export type SetStateType<T> = Dispatch<SetStateAction<T>>;
export type TypeFrom<T> = T[keyof T];

// export type SplitFieldsString<
// 	T,
// 	F extends string
// > = F extends `${infer First},${infer Rest}`
// 	? Extract<First, keyof T> | SplitFieldsString<T, Rest>
// 	: Extract<F, keyof T>;

// export type PickFields<U, T extends keyof U> = Pick<U, T>;

export type SplitFieldsString<T, F extends string> = F extends ''
	? keyof T // All fields if F is empty
	: F extends `${infer First},${infer Rest}`
	? Extract<First, keyof T> | SplitFieldsString<T, Rest>
	: F extends keyof T
	? F
	: never;

export type PickFields<U, F extends string> = F extends ''
	? U
	: Pick<U, SplitFieldsString<U, F>>;
