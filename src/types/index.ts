export type UserRole = 'tutor' | 'vice_dean' | 'dean' | 'admin'
export type StudentStatus = 'active' | 'inactive' | 'graduated' | 'suspended'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  createdAt: string
}

export interface Student {
  id: string
  hemisId: string
  name: string
  email: string
  phone?: string
  avatar?: string
  status: StudentStatus
  completion: number
  groupId: string
  personalInfo?: PersonalInfo
  educationInfo?: EducationInfo
  addressInfo?: AddressInfo
  healthInfo?: HealthInfo
  languageSkills?: LanguageSkill[]
  achievements?: Achievement[]
  contactInfo?: ContactInfo
  hayfisandRecords?: HayfisandRecord[]
  familyMembers?: FamilyMember[]
  socialStatus?: SocialStatus
  dormitory?: DormitoryInfo
  specialCategories?: SpecialCategory[]
  createdAt: string
  updatedAt: string
}

export interface PersonalInfo {
  firstName: string
  lastName: string
  middleName?: string
  dateOfBirth?: string
  gender?: string
  nationality?: string
}

export interface EducationInfo {
  programId: string
  enrollmentYear: number
  expectedGraduationYear: number
  gpa?: number
}

export interface AddressInfo {
  street: string
  city: string
  state: string
  postalCode: string
  country: string
}

export interface HealthInfo {
  bloodType?: string
  allergies?: string
  chronicConditions?: string
  insurance?: string
}

export interface LanguageSkill {
  language: string
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'native'
}

export interface Achievement {
  title: string
  description: string
  date: string
  certificate?: string
}

export interface ContactInfo {
  email: string
  phone: string
  emergencyContact?: string
  emergencyPhone?: string
}

export interface HayfisandRecord {
  recordNumber: string
  issueDate: string
  expiryDate: string
}

export interface FamilyMember {
  name: string
  relationship: string
  occupation?: string
  phone?: string
}

export interface SocialStatus {
  status: string
  income?: number
  dependents?: number
}

export interface DormitoryInfo {
  roomNumber: string
  buildingNumber: string
  occupancyDate: string
}

export interface SpecialCategory {
  name: string
  description: string
}

export interface Group {
  id: string
  name: string
  code: string
  program: string
  year: number
  studentCount: number
  tutorId?: string
  createdAt: string
}

export interface Tutor {
  id: string
  name: string
  email: string
  phone?: string
  groups: string[]
  avatar?: string
  createdAt: string
}

export interface AuditLog {
  id: string
  timestamp: string
  userId: string
  userName: string
  action: string
  entity: string
  entityId: string
  changes: Record<string, any>
}

export interface DeanSettings {
  id: string
  isPNFLRequired: boolean
  isContractModuleEnabled: boolean
  facultySettings: Record<string, any>
}
