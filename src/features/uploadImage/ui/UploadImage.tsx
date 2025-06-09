'use client';
import { useModal } from '@/shared/hooks/useModal';
import clsx from 'clsx';
import { ImageUp } from 'lucide-react';
import { type UploadImageParams } from '../hooks/useUploadImage';
import { useUploadImageForm } from '../hooks/useUploadImageForm';
import styles from './UploadImage.module.scss';

export const UploadImage = ({
	entityData,
	desc,
	className,
}: {
	entityData: UploadImageParams;
	desc?: string;
	className?: string;
}) => {
	const {
		inputRef,
		formRef,
		handleDivClick,
		handleSubmit,
		onSubmit,
		preview,
		isPending,
		watchFileSelected,
		rest,
	} = useUploadImageForm({ entityData: entityData });
	const { showModal } = useModal();
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
				<div
					className={clsx(styles.posterLoaderWrapper, className)}
					onClick={handleDivClick}
					role='button'
				>
					<input
						hidden
						id='image'
						type='file'
						accept='image/*'
						{...rest}
						ref={e => {
							formRef(e);
							inputRef.current = e;
						}}
					/>

					<ImageUp size={48} strokeWidth={1} />
					<span>{desc ? desc : 'Нажмите или перетащите изображение'}</span>
				</div>

				{/* {errors.image && (
					<p className='text-red-500 mt-1'>{errors.image.message}</p>
				)} */}

				{watchFileSelected && (
					<div className='mt-4'>
						<p className='mb-2'>Выбран файл: {watchFileSelected.name}</p>
						<button
							type='submit'
							disabled={isPending}
							className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400'
						>
							{isPending ? 'Загрузка...' : 'Загрузить'}
						</button>
					</div>
				)}

				{/*
			{isSuccess && (
				<div className='p-3 bg-green-100 text-green-700 rounded'>
					Изображение успешно загружено!
				</div>
			)}

			{isError && (
				<div className='p-3 bg-red-100 text-red-700 rounded'>
					Ошибка при загрузке изображения
				</div>
			)} */}
			</form>

			{preview && (
				<div className='mt-4'>
					<p className='mb-2'>Предпросмотр:</p>
					<img
						src={preview}
						alt='Preview'
						className='max-w-full h-48 object-contain border rounded'
					/>
				</div>
			)}
		</>
	);
};
