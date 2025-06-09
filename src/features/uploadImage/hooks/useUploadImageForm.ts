import { useModal } from '@/shared/hooks/useModal';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { type UploadImageParams, useUploadImage } from './useUploadImage';
type FormValues = {
	image: FileList;
	description?: string;
};

export function useUploadImageForm({
	entityData,
}: {
	entityData: UploadImageParams;
}) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm<FormValues>();
	const { mutate, isPending, isError, isSuccess } = useUploadImage(entityData);

	const watchFileSelected = watch('image')?.[0];

	const onSubmit = async (data: FormValues) => {
		if (!data.image[0]) return;

		mutate(data.image[0], {
			onSuccess: () => {
				reset();
			},
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

	const { showModal } = useModal();
	const handleDivClick = () => {
		inputRef.current?.click();
	};

	const [preview, setPreview] = useState<string | null>(null);
	//preview
	useEffect(() => {
		if (watchFileSelected) {
			const reader = new FileReader();
			reader.readAsDataURL(watchFileSelected);
			reader.onload = () => {
				setPreview(reader.result as string);
			};
		} else {
			setPreview(null);
		}
	}, [watchFileSelected]);
	return {
		watchFileSelected,
		preview,
		handleSubmit,
		onSubmit,
		handleDivClick,
		inputRef,
		formRef,
		isPending,
		rest,
	};
}
