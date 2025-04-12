import { axiosUpload } from '@/shared/interceptors';
import { useMutation } from '@tanstack/react-query';

type UploadResponse = {
	id: number;
	filename: string;
	path: string;
};

export const useUploadImage = () => {
	const entityId: string = '';
	return useMutation({
		mutationFn: async (file: File) => {
			const formData = new FormData();
			formData.append('file', file);

			const { data } = await axiosUpload.post<UploadResponse>(
				`/user/profile/${entityId}/avatar`,
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			);
			return data;
		},
	});
};
