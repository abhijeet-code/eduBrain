import React, { useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

const Toast = ({ message, type = 'info', onClose, duration = 4000 }) => {
    useEffect(() => {
        if (duration) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, onClose]);

    const typeStyles = {
        success: {
            bg: 'bg-green-50',
            border: 'border-green-200',
            text: 'text-green-800',
            icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        },
        error: {
            bg: 'bg-red-50',
            border: 'border-red-200',
            text: 'text-red-800',
            icon: <XCircle className="w-5 h-5 text-red-500" />,
        },
        warning: {
            bg: 'bg-yellow-50',
            border: 'border-yellow-200',
            text: 'text-yellow-800',
            icon: <AlertCircle className="w-5 h-5 text-yellow-500" />,
        },
        info: {
            bg: 'bg-blue-50',
            border: 'border-blue-200',
            text: 'text-blue-800',
            icon: <Info className="w-5 h-5 text-blue-500" />,
        },
    };

    const style = typeStyles[type] || typeStyles.info;

    return (
        <div
            className={`${style.bg} ${style.border} ${style.text} border rounded-lg shadow-lg p-4 mb-3 flex items-start gap-3 min-w-[300px] max-w-[400px] animate-slideIn`}
            role="alert"
        >
            <div className="flex-shrink-0">{style.icon}</div>
            <p className="flex-1 text-sm font-medium leading-relaxed">{message}</p>
            <button
                onClick={onClose}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close notification"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
};

export default Toast;
