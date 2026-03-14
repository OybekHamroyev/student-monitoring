import { z } from 'zod'
import { BLOOD_TYPES, RELATIONSHIPS } from '@/constants'

export const personalInfoSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  middleName: z.string().optional(),
  dateOfBirth: z.string().optional(),
  gender: z.enum(['male', 'female', 'other']).optional(),
  nationality: z.string().optional(),
})

export const educationInfoSchema = z.object({
  programId: z.string().min(1, 'Program is required'),
  enrollmentYear: z.number().min(2000).max(new Date().getFullYear() + 1),
  expectedGraduationYear: z.number().min(2000).max(new Date().getFullYear() + 5),
  gpa: z.number().min(0).max(4).optional(),
})

export const healthInfoSchema = z.object({
  bloodType: z.enum(BLOOD_TYPES as [string, ...string[]]).optional(),
  allergies: z.string().optional(),
  chronicConditions: z.string().optional(),
  insurance: z.string().optional(),
})

export const familyMemberSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  relationship: z.enum(RELATIONSHIPS as [string, ...string[]]),
  occupation: z.string().optional(),
  phone: z.string().optional(),
})

export const studentCreateSchema = z.object({
  hemisId: z.string().min(1, 'HEMIS ID is required'),
  email: z.string().email('Invalid email'),
  name: z.string().min(1, 'Name is required'),
  phone: z.string().optional(),
  groupId: z.string().min(1, 'Group is required'),
  personalInfo: personalInfoSchema.optional(),
})

export type StudentCreateFormData = z.infer<typeof studentCreateSchema>
export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>
export type EducationInfoFormData = z.infer<typeof educationInfoSchema>
export type HealthInfoFormData = z.infer<typeof healthInfoSchema>
export type FamilyMemberFormData = z.infer<typeof familyMemberSchema>
