import { DragEvent } from "react"

export interface UploadFormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
    uploadedFiles: File[],
    formState: { status: string, message: string },
    isDragging: boolean,
    handleDragEnter: (e: DragEvent<HTMLLabelElement>) => void,
    handleDragLeave: (e: DragEvent<HTMLLabelElement>) => void,
    handleDragOver: (e: DragEvent<HTMLLabelElement>) => void,
    handleDrop: (e: DragEvent<HTMLLabelElement>) => void,
    handleFileChange: (files: FileList | null) => void,
    fileInputRef: React.RefObject<HTMLInputElement>
}

export interface FileUploadAreaProps {
    isDragging: boolean,
    handleDragEnter: (e: DragEvent<HTMLLabelElement>) => void,
    handleDragLeave: (e: DragEvent<HTMLLabelElement>) => void,
    handleDragOver: (e: DragEvent<HTMLLabelElement>) => void,
    handleDrop: (e: DragEvent<HTMLLabelElement>) => void,
    handleFileChange: (files: FileList | null) => void,
    fileInputRef: React.RefObject<HTMLInputElement>
}

export interface ModalUploadProps {
    open: boolean;
    handleOpen: VoidFunction;
    onUploadSuccess: VoidFunction;
}

export interface FileListProps {
    uploadedFiles: File[];
}