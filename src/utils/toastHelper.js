// Toast utility helper - use this in any component that needs toast notifications
// Import: import { useToast } from './utils/toastHelper';
// Usage: const showToast = useToast();
//        showToast("Message", "success" | "error" | "warning" | "info");

import { useToast as useToastContext } from '../contexts/ToastContext';

export const useToast = () => {
    return useToastContext().showToast;
};

// For use in non-component files or callbacks
export const createToastHelper = (showToastFunction) => {
    return (message, type = 'info') => {
        showToastFunction(message, type);
    };
};
