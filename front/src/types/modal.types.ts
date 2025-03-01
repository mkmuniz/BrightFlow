import React from "react";

interface ModalControlProps {
    handleOpen: () => void;
    onConfirm: () => void;
    isDeleting: boolean;
}

export interface ModalConfirmDeleteProps extends ModalControlProps {
    open: boolean;
}

export interface ModalContainerProps {
    children: React.ReactNode;
    open: boolean;
}

export interface ModalContentProps extends ModalControlProps {
    children: React.ReactNode;
}

export interface ModalActionsProps extends ModalControlProps {
    children: React.ReactNode;
}

export type CancelButtonProps = Pick<ModalControlProps, "handleOpen">;
