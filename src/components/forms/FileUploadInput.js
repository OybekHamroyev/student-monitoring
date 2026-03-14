import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from 'react';
import { Upload, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
export const FileUploadInput = forwardRef(({ label, error, helperText, required, accept, maxSize = 5 * 1024 * 1024, // 5MB
onFileChange, ...props }, ref) => {
    const { t } = useTranslation();
    const [fileName, setFileName] = useState(null);
    const [fileError, setFileError] = useState(null);
    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        setFileError(null);
        if (file) {
            if (maxSize && file.size > maxSize) {
                setFileError(t('fileUpload.maxSizeError', { size: maxSize / 1024 / 1024 }));
                setFileName(null);
                onFileChange?.(null);
                return;
            }
            setFileName(file.name);
            onFileChange?.(file);
        }
    };
    const handleClear = () => {
        setFileName(null);
        setFileError(null);
        onFileChange?.(null);
        if (ref && 'current' in ref) {
            ref.current.value = '';
        }
    };
    return (_jsxs("div", { className: "space-y-2", children: [label && (_jsxs("label", { className: "text-sm font-medium text-foreground", children: [label, required && _jsx("span", { className: "text-destructive ml-1", children: "*" })] })), _jsxs("div", { className: "relative", children: [_jsx("input", { ref: ref, id: "file-upload-input", type: "file", accept: accept, onChange: handleFileChange, className: "hidden", ...props }), _jsx("label", { htmlFor: "file-upload-input", className: "flex items-center justify-center p-6 border-2 border-dashed border-border rounded-lg hover:border-primary hover:bg-muted/50 transition-colors cursor-pointer", children: _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Upload, { className: "h-6 w-6 text-muted-foreground" }), _jsx("p", { className: "text-sm text-muted-foreground", children: t('fileUpload.prompt') }), _jsx("p", { className: "text-xs text-muted-foreground", children: accept
                                        ? t('fileUpload.acceptHint', {
                                            types: accept.split(',').join(', '),
                                            size: maxSize / 1024 / 1024,
                                        })
                                        : t('fileUpload.sizeOnly', { size: 5 }) })] }) })] }), fileName && (_jsxs("div", { className: "flex items-center justify-between p-3 bg-muted rounded-lg", children: [_jsx("p", { className: "text-sm text-foreground", children: fileName }), _jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: handleClear, children: _jsx(X, { className: "h-4 w-4" }) })] })), fileError || error ? (_jsx("p", { className: "text-sm text-destructive", children: fileError || error })) : helperText ? (_jsx("p", { className: "text-sm text-muted-foreground", children: helperText })) : null] }));
});
FileUploadInput.displayName = 'FileUploadInput';
