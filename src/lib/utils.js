import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}
export function formatDateTime(date) {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}
export function truncate(str, length) {
    return str.length > length ? `${str.substring(0, length)}...` : str;
}
export function getInitials(name) {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase();
}
