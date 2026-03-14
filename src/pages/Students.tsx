import { useMemo, useState } from 'react'
import { Eye, Plus, Search, ShieldCheck, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import PreviewModal from '@/components/shared/PreviewModal'
import { demoStudents, type DemoStudent } from '@/mocks/demoData'

const statusClasses: Record<DemoStudent['status'], string> = {
  active: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  inactive: 'bg-slate-100 text-slate-600 dark:bg-slate-500/15 dark:text-slate-300',
  graduated: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300',
  warning: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
}

export default function Students() {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStudent, setSelectedStudent] = useState<DemoStudent | null>(null)

  const filteredStudents = useMemo(
    () =>
      demoStudents.filter(
        (student) =>
          student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.hemisId.includes(searchQuery) ||
          student.group.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  )

  const highlightedCount = filteredStudents.filter((student) => student.completion >= 85).length

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="panel-title">{t('students.title')}</h1>
          <p className="mt-2 text-muted-foreground">{t('students.subtitle')}</p>
        </div>
        <Button className="gap-2 self-start">
          <Plus className="h-4 w-4" />
          {t('students.addStudent')}
        </Button>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        <Card className="soft-surface">
          <CardContent className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm text-muted-foreground">{t('students.visibleStudents')}</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{filteredStudents.length}</p>
            </div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/12 text-primary">
              <Sparkles className="h-5 w-5" />
            </span>
          </CardContent>
        </Card>
        <Card className="soft-surface">
          <CardContent className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm text-muted-foreground">{t('students.highCompletion')}</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{highlightedCount}</p>
            </div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300">
              <ShieldCheck className="h-5 w-5" />
            </span>
          </CardContent>
        </Card>
        <Card className="soft-surface">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">{t('students.quickNote')}</p>
            <p className="mt-2 text-sm leading-6 text-foreground">{t('students.quickNoteText')}</p>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>{t('students.listTitle')}</CardTitle>
          <CardDescription>{t('students.listDescription')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder={t('students.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11"
              />
            </div>

            <div className="overflow-hidden rounded-[24px] border border-border/70">
              <table className="w-full text-sm">
                <thead className="border-b border-border bg-muted/80">
                  <tr>
                    <th className="px-4 py-4 text-left font-medium">{t('students.table.name')}</th>
                    <th className="px-4 py-4 text-left font-medium">{t('students.table.hemisId')}</th>
                    <th className="px-4 py-4 text-left font-medium">{t('students.table.group')}</th>
                    <th className="px-4 py-4 text-center font-medium">{t('students.table.completion')}</th>
                    <th className="px-4 py-4 text-left font-medium">{t('students.table.status')}</th>
                    <th className="px-4 py-4 text-right font-medium">{t('students.table.actions')}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="border-b border-border/70 hover:bg-muted/30">
                      <td className="px-4 py-4">
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-xs text-muted-foreground">{student.email}</p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-muted-foreground">{student.hemisId}</td>
                      <td className="px-4 py-4 text-muted-foreground">{student.group}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <div className="h-2 w-20 overflow-hidden rounded-full bg-muted">
                            <div className="h-full rounded-full bg-[hsl(var(--success))]" style={{ width: `${student.completion}%` }} />
                          </div>
                          <span className="text-xs font-medium">{student.completion}%</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium capitalize ${statusClasses[student.status]}`}>
                          {t(`status.${student.status}`)}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <Button variant="ghost" size="sm" className="gap-2" onClick={() => setSelectedStudent(student)}>
                          <Eye className="h-4 w-4" />
                          {t('common.view')}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      <PreviewModal
        open={!!selectedStudent}
        title={selectedStudent?.name ?? ''}
        subtitle={selectedStudent ? `${selectedStudent.group} - ${selectedStudent.hemisId}` : ''}
        onClose={() => setSelectedStudent(null)}
        actions={
          <>
            <Button variant="outline" onClick={() => setSelectedStudent(null)}>{t('common.close')}</Button>
            <Button>{t('students.openFullProfile')}</Button>
          </>
        }
      >
        {selectedStudent ? (
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="shadow-none">
              <CardContent className="space-y-3 pt-6 text-sm">
                <div>
                  <p className="text-muted-foreground">{t('students.modal.email')}</p>
                  <p className="font-medium">{selectedStudent.email}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t('students.modal.tutor')}</p>
                  <p className="font-medium">{selectedStudent.tutor}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t('students.modal.phone')}</p>
                  <p className="font-medium">{selectedStudent.phone}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-none">
              <CardContent className="space-y-3 pt-6 text-sm">
                <div>
                  <p className="text-muted-foreground">{t('students.modal.city')}</p>
                  <p className="font-medium">{selectedStudent.city}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t('students.modal.scholarship')}</p>
                  <p className="font-medium">{selectedStudent.scholarship ? t('common.active') : t('common.none')}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t('students.modal.lastUpdate')}</p>
                  <p className="font-medium">{selectedStudent.lastUpdate}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : null}
      </PreviewModal>
    </div>
  )
}
