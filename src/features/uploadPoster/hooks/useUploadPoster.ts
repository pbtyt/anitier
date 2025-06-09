import { axiosWithAuth } from '@/shared/interceptors';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type EntityType = 'card' | 'user';

export interface UploadPosterParams {
	entityId: string;
	entity: EntityType;
}

type UploadResponse = {
	id: number;
	filename: string;
	path: string;
};

export const useUploadPoster = ({ entityId, entity }: UploadPosterParams) => {
	const url =
		entity === 'user'
			? `/user/profile/${entityId}/avatar`
			: `/card/${entityId}/poster`;

	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (file: File) => {
			const formData = new FormData();
			formData.append('file', file);

			const { data } = await axiosWithAuth.post<UploadResponse>(url, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			return data;
		},
		onSuccess() {
			console.log('success');
			console.log(entity, entityId);
			queryClient.invalidateQueries({ queryKey: [entity, entityId] });
		},
	});
};
