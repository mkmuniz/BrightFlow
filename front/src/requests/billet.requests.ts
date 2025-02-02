import { del, upload } from "./request.config";

export async function handleUpload(formData: FormData) {
    return upload('billet', formData);
};

export async function deleteBillet(billetId: string) {
    return del(`billet/${billetId}`);
};