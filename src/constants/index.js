import { BookOpen, FileDown, FileText, LayoutDashboard, LayoutGrid, Search, Settings, UserCheck, Users, } from 'lucide-react';
export const USER_ROLES = {
    TUTOR: 'tutor',
    VICE_DEAN: 'vice_dean',
    DEAN: 'dean',
    ADMIN: 'admin',
};
export const STUDENT_STATUSES = {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    GRADUATED: 'graduated',
    SUSPENDED: 'suspended',
};
export const PROFICIENCY_LEVELS = {
    BEGINNER: 'beginner',
    INTERMEDIATE: 'intermediate',
    ADVANCED: 'advanced',
    NATIVE: 'native',
};
export const MENU_ITEMS = [
    {
        labelKey: 'nav.dashboard',
        icon: LayoutDashboard,
        href: '/dashboard',
        roles: [USER_ROLES.TUTOR, USER_ROLES.VICE_DEAN, USER_ROLES.DEAN, USER_ROLES.ADMIN],
    },
    {
        labelKey: 'nav.groups',
        icon: Users,
        roles: [USER_ROLES.VICE_DEAN, USER_ROLES.DEAN, USER_ROLES.ADMIN],
        children: [
            { labelKey: 'nav.groupList', href: '/groups' },
            { labelKey: 'nav.studentList', href: '/students' },
        ],
    },
    {
        labelKey: 'nav.studentProfiles',
        icon: BookOpen,
        href: '/students',
        roles: [USER_ROLES.TUTOR, USER_ROLES.VICE_DEAN, USER_ROLES.DEAN, USER_ROLES.ADMIN],
    },
    {
        labelKey: 'nav.searchFilter',
        icon: Search,
        href: '/search',
        roles: [USER_ROLES.VICE_DEAN, USER_ROLES.DEAN, USER_ROLES.ADMIN],
    },
    {
        labelKey: 'nav.pdfExport',
        icon: FileDown,
        href: '/search',
        roles: [USER_ROLES.VICE_DEAN, USER_ROLES.DEAN, USER_ROLES.ADMIN],
    },
    {
        labelKey: 'nav.tutorManagement',
        icon: UserCheck,
        href: '/tutors',
        roles: [USER_ROLES.VICE_DEAN, USER_ROLES.DEAN, USER_ROLES.ADMIN],
    },
    {
        labelKey: 'nav.deanSettings',
        icon: Settings,
        href: '/settings',
        roles: [USER_ROLES.DEAN, USER_ROLES.ADMIN],
    },
    {
        labelKey: 'nav.auditLogs',
        icon: FileText,
        href: '/audit',
        roles: [USER_ROLES.DEAN, USER_ROLES.ADMIN],
    },
    {
        labelKey: 'nav.uiComponents',
        icon: LayoutGrid,
        href: '/components-demo',
        roles: [USER_ROLES.TUTOR, USER_ROLES.VICE_DEAN, USER_ROLES.DEAN, USER_ROLES.ADMIN],
    },
];
export const RELATIONSHIPS = [
    'Father',
    'Mother',
    'Brother',
    'Sister',
    'Grandmother',
    'Grandfather',
    'Other',
];
export const BLOOD_TYPES = ['A', 'B', 'AB', 'O', 'A-', 'B-', 'AB-', 'O-'];
export const COUNTRIES = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Uzbekistan',
    'United States',
    'United Kingdom',
    'Russia',
    'China',
    'Japan',
    'India',
];
export const PAGINATION_LIMITS = {
    SMALL: 10,
    MEDIUM: 25,
    LARGE: 50,
};
