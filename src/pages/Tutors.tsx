import { useState } from 'react'
import { Briefcase, Eye, Plus, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import PreviewModal from '@/components/shared/PreviewModal'
import { demoTutors, type DemoTutor } from '@/mocks/demoData'

export default function Tutors() {
  const { t } = useTranslation()
  const [selectedTutor, setSelectedTutor] = useState<DemoTutor | null>(null)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="panel-title">{t('tutors.title')}</h1>
          <p className="mt-2 text-muted-foreground">{t('tutors.subtitle')}</p>
        </div>
        <Button className="gap-2 self-start">
          <Plus className="h-4 w-4" />
          {t('tutors.addTutor')}
        </Button>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        <Card className="soft-surface">
          <CardContent className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm text-muted-foreground">{t('tutors.visibleTutors')}</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{demoTutors.length}</p>
            </div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/12 text-primary">
              <Briefcase className="h-5 w-5" />
            </span>
          </CardContent>
        </Card>
        <Card className="soft-surface">
          <CardContent className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm text-muted-foreground">{t('tutors.coveredStudents')}</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{demoTutors.reduce((sum, tutor) => sum + tutor.students, 0)}</p>
            </div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-300">
              <Users className="h-5 w-5" />
            </span>
          </CardContent>
        </Card>
        <Card className="soft-surface">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">{t('tutors.demoExtras')}</p>
            <p className="mt-2 text-sm leading-6">{t('tutors.demoExtrasText')}</p>
          </CardContent>
        </Card>
      </section>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {demoTutors.map((tutor) => (
          <Card key={tutor.id}>
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle>{tutor.name}</CardTitle>
                <p className="mt-2 text-sm text-muted-foreground">{tutor.role}</p>
              </div>
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${tutor.status === 'available' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300' : 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300'}`}>
                {t(`status.${tutor.status}`)}
              </span>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="mb-2 text-sm text-muted-foreground">{t('tutors.assignedGroups')}</p>
                <div className="flex flex-wrap gap-2">
                  {tutor.groups.map((group) => (
                    <span key={group} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {group}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">{t('tutors.totalStudents')}</p>
                  <p className="mt-1 text-2xl font-semibold tracking-[-0.03em]">{tutor.students}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t('tutors.completion')}</p>
                  <p className="mt-1 text-2xl font-semibold tracking-[-0.03em]">{tutor.completionRate}%</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full gap-2" onClick={() => setSelectedTutor(tutor)}>
                <Eye className="h-4 w-4" />
                {t('tutors.previewTutor')}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <PreviewModal
        open={!!selectedTutor}
        title={selectedTutor?.name ?? ''}
        subtitle={selectedTutor?.role}
        onClose={() => setSelectedTutor(null)}
        actions={
          <>
            <Button variant="outline" onClick={() => setSelectedTutor(null)}>{t('common.close')}</Button>
            <Button>{t('common.edit')}</Button>
          </>
        }
      >
        {selectedTutor ? (
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="shadow-none">
              <CardContent className="space-y-3 pt-6 text-sm">
                <div>
                  <p className="text-muted-foreground">{t('tutors.modal.email')}</p>
                  <p className="font-medium">{selectedTutor.email}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t('tutors.modal.phone')}</p>
                  <p className="font-medium">{selectedTutor.phone}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t('tutors.modal.office')}</p>
                  <p className="font-medium">{selectedTutor.office}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-none">
              <CardContent className="space-y-3 pt-6 text-sm">
                <p className="text-muted-foreground">{t('tutors.modal.assignedGroups')}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedTutor.groups.map((group) => (
                    <span key={group} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {group}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : null}
      </PreviewModal>
    </div>
  )
}
