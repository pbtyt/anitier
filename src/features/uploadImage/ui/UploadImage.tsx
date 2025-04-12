'use client';
import { ImageUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUploadImage } from '../hooks/useUploadImage';
import styles from './UploadImage.module.scss';

type FormValues = {
	image: FileList;
	description?: string;
};

export const UploadImage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm<FormValues>();

	const { mutate, isPending, isError, isSuccess } = useUploadImage();
	const selectedFile = watch('image')?.[0];

	const onSubmit = async (data: FormValues) => {
		if (!data.image[0]) return;

		mutate(data.image[0], {
			onSuccess: () => reset(),
		});
	};

	const inputRef = useRef<HTMLInputElement>(null);

	const { ref: formRef, ...rest } = register('image', {
		required: 'Файл обязателен',
		validate: {
			fileType: files =>
				files?.[0]?.type.startsWith('image/') || 'Только изображения',
			fileSize: files =>
				files?.[0]?.size <= 5 * 1024 * 1024 || 'Максимальный размер 5MB',
		},
	});

	const handleDivClick = () => {
		inputRef.current?.click();
	};

	//preview
	const [preview, setPreview] = useState<string | null>(null);
	useEffect(() => {
		if (selectedFile) {
			const reader = new FileReader();
			reader.onload = () => setPreview(reader.result as string);
			reader.readAsDataURL(selectedFile);
		} else {
			setPreview(null);
		}
	}, [selectedFile]);

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
				<div
					className={styles.posterLoaderWrapper}
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
					<span>Нажмите или перетащите изображение</span>
				</div>

				{/* {errors.image && (
					<p className='text-red-500 mt-1'>{errors.image.message}</p>
				)} */}

				{selectedFile && (
					<div className='mt-4'>
						<p className='mb-2'>Выбран файл: {selectedFile.name}</p>
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
