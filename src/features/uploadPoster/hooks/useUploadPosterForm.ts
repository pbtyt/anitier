import { useModal } from '@/shared/hooks/useModal';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { type UploadPosterParams, useUploadPoster } from './useUploadPoster';

type FormValues = {
	image: FileList;
	description?: string;
};

export function useUploadPosterForm({
	entityData,
}: {
	entityData: UploadPosterParams;
}) {
	const inputRef = useRef<HTMLInputElement>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm<FormValues>();

	const { ref: formRef, ...rest } = register('image', {
		required: 'Файл обязателен',
		validate: {
			fileType: files =>
				files?.[0]?.type.startsWith('image/') || 'Только изображения',
			fileSize: files =>
				files?.[0]?.size <= 5 * 1024 * 1024 || 'Максимальный размер 5MB',
		},
	});

	const watchFileSelected = watch('image')?.[0];

	const { mutate, isPending, isError, isSuccess } = useUploadPoster(entityData);
	const { showModal, hideModal } = useModal();
	const onSubmit = async (data: FormValues) => {
		if (!data.image[0]) return;

		mutate(data.image[0], {
			onSuccess: () => {
				reset();
				hideModal();
			},
		});
	};

	const handleOnPosterSelect = () => {
		inputRef.current?.click();
	};

	return {
		watchFileSelected,
		reset,
		handleSubmit,
		onSubmit,
		handleOnPosterSelect,
		rest,
		formRef,
		inputRef,
		showModal,
	};
}
