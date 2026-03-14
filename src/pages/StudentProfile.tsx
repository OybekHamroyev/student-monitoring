import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ProfileHeader } from '@/components/profile/ProfileHeader'
import { CollapsibleSection } from '@/components/profile/CollapsibleSection'
import { BookOpen, FileText, Heart, Home, Languages, MapPin, Phone, Shield, Trophy, User, Users } from 'lucide-react'
import { demoStudentProfile } from '@/mocks/demoData'

export default function StudentProfile() {
  const { t } = useTranslation()
  const [isSaving, setIsSaving] = useState(false)
  const student = demoStudentProfile

  const handleSave = async () => {
    setIsSaving(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="panel-title">{t('profile.title')}</h1>
        <p className="mt-2 text-muted-foreground">{t('profile.subtitle')}</p>
      </div>

      <ProfileHeader name={student.name} email={student.email} hemisId={student.hemisId} completion={student.completion} />

      <section className="grid gap-4 md:grid-cols-3">
        <Card className="soft-surface"><CardContent className="pt-6"><p className="text-sm text-muted-foreground">{t('profile.faculty')}</p><p className="mt-2 text-xl font-semibold">{student.faculty}</p></CardContent></Card>
        <Card className="soft-surface"><CardContent className="pt-6"><p className="text-sm text-muted-foreground">{t('profile.advisor')}</p><p className="mt-2 text-xl font-semibold">{student.advisor}</p></CardContent></Card>
        <Card className="soft-surface"><CardContent className="pt-6"><p className="text-sm text-muted-foreground">{t('profile.status')}</p><p className="mt-2 text-xl font-semibold">{t('profile.readyForDemo')}</p></CardContent></Card>
      </section>

      <div className="sticky top-4 z-40 flex justify-end gap-4 rounded-[24px] border border-border bg-background/95 px-4 py-3 shadow-lg backdrop-blur">
        <Button variant="outline" disabled={isSaving}>{t('common.reset')}</Button>
        <Button onClick={handleSave} disabled={isSaving}>{isSaving ? t('profile.saving') : t('profile.saveChanges')}</Button>
      </div>

      <div className="space-y-4">
        <CollapsibleSection title={t('profile.sections.personal')} icon={<User className="h-5 w-5" />} defaultOpen={true} completed={true}>
          <div className="grid gap-4 md:grid-cols-2">
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.firstName')}</label><p className="font-medium">{student.personalInfo.firstName}</p></div>
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.lastName')}</label><p className="font-medium">{student.personalInfo.lastName}</p></div>
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.dateOfBirth')}</label><p className="font-medium">{student.personalInfo.dateOfBirth}</p></div>
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.gender')}</label><p className="font-medium">{student.personalInfo.gender}</p></div>
            <div className="md:col-span-2"><label className="text-sm text-muted-foreground">{t('profile.labels.nationality')}</label><p className="font-medium">{student.personalInfo.nationality}</p></div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title={t('profile.sections.education')} icon={<BookOpen className="h-5 w-5" />} completed={true}>
          <div className="grid gap-4 md:grid-cols-2">
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.program')}</label><p className="font-medium">{student.educationInfo.program}</p></div>
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.enrollmentYear')}</label><p className="font-medium">{student.educationInfo.enrollmentYear}</p></div>
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.expectedGraduation')}</label><p className="font-medium">{student.educationInfo.expectedGraduation}</p></div>
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.gpa')}</label><p className="font-medium">{student.educationInfo.gpa}</p></div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title={t('profile.sections.address')} icon={<MapPin className="h-5 w-5" />} completed={true}>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2"><label className="text-sm text-muted-foreground">{t('profile.labels.streetAddress')}</label><p className="font-medium">{student.addressInfo.street}</p></div>
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.city')}</label><p className="font-medium">{student.addressInfo.city}</p></div>
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.state')}</label><p className="font-medium">{student.addressInfo.state}</p></div>
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.postalCode')}</label><p className="font-medium">{student.addressInfo.zipCode}</p></div>
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.country')}</label><p className="font-medium">{student.addressInfo.country}</p></div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title={t('profile.sections.health')} icon={<Heart className="h-5 w-5" />} completed={true}>
          <div className="grid gap-4 md:grid-cols-3">
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.bloodType')}</label><p className="font-medium">{student.healthInfo.bloodType}</p></div>
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.disability')}</label><p className="font-medium">{student.healthInfo.disability}</p></div>
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.insurance')}</label><p className="font-medium">{student.healthInfo.insurance}</p></div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title={t('profile.sections.languages')} icon={<Languages className="h-5 w-5" />} completed={true}>
          <div className="flex flex-wrap gap-2">{student.languages.map((language) => <span key={language} className="rounded-full bg-secondary px-3 py-1 text-sm font-medium">{language}</span>)}</div>
        </CollapsibleSection>

        <CollapsibleSection title={t('profile.sections.achievements')} icon={<Trophy className="h-5 w-5" />} completed={true}>
          <ul className="space-y-2 text-sm text-foreground">{student.achievements.map((item) => <li key={item} className="rounded-2xl bg-muted/60 px-4 py-3">{item}</li>)}</ul>
        </CollapsibleSection>

        <CollapsibleSection title={t('profile.sections.contact')} icon={<Phone className="h-5 w-5" />} completed={true}>
          <div className="grid gap-4 md:grid-cols-2">
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.phone')}</label><p className="font-medium">{student.contacts.phone}</p></div>
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.emergencyContact')}</label><p className="font-medium">{student.contacts.emergency}</p></div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title={t('profile.sections.records')} icon={<FileText className="h-5 w-5" />} completed={true}>
          <ul className="space-y-2 text-sm">{student.hayfisandRecords.map((record) => <li key={record} className="rounded-2xl bg-muted/60 px-4 py-3">{record}</li>)}</ul>
        </CollapsibleSection>

        <CollapsibleSection title={t('profile.sections.family')} icon={<Users className="h-5 w-5" />} completed={true}>
          <ul className="space-y-2 text-sm">{student.familyMembers.map((member) => <li key={member} className="rounded-2xl bg-muted/60 px-4 py-3">{member}</li>)}</ul>
        </CollapsibleSection>

        <CollapsibleSection title={t('profile.sections.social')} icon={<Shield className="h-5 w-5" />} completed={true}>
          <ul className="space-y-2 text-sm">{student.socialStatus.map((item) => <li key={item} className="rounded-2xl bg-muted/60 px-4 py-3">{item}</li>)}</ul>
        </CollapsibleSection>

        <CollapsibleSection title={t('profile.sections.dormitory')} icon={<Home className="h-5 w-5" />} completed={true}>
          <div className="grid gap-4 md:grid-cols-3">
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.building')}</label><p className="font-medium">{student.dormitory.building}</p></div>
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.room')}</label><p className="font-medium">{student.dormitory.room}</p></div>
            <div><label className="text-sm text-muted-foreground">{t('profile.labels.status')}</label><p className="font-medium">{student.dormitory.status}</p></div>
          </div>
        </CollapsibleSection>
      </div>

      <div className="flex justify-end gap-4 border-t border-border py-6">
        <Button variant="outline">{t('common.cancel')}</Button>
        <Button onClick={handleSave} disabled={isSaving}>{isSaving ? t('profile.saving') : t('profile.saveChanges')}</Button>
      </div>
    </div>
  )
}
