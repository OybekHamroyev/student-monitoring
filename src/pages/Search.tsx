import { useMemo, useState } from 'react'
import { Download, Eye, Filter, RotateCcw } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import PreviewModal from '@/components/shared/PreviewModal'
import { demoGroups, demoStudents, type DemoStudent } from '@/mocks/demoData'

const statusClasses: Record<DemoStudent['status'], string> = {
  active: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  inactive: 'bg-slate-100 text-slate-600 dark:bg-slate-500/15 dark:text-slate-300',
  graduated: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300',
  warning: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
}

export default function Search() {
  const { t } = useTranslation()
  const [filters, setFilters] = useState({ search: '', status: 'all', group: 'all', scholarship: 'all' })
  const [selectedStudent, setSelectedStudent] = useState<DemoStudent | null>(null)

  const results = useMemo(
    () =>
      demoStudents.filter((student) => {
        const query = filters.search.toLowerCase()
        const matchesSearch = !query || student.name.toLowerCase().includes(query) || student.hemisId.includes(filters.search) || student.email.toLowerCase().includes(query)
        const matchesStatus = filters.status === 'all' || student.status === filters.status
        const matchesGroup = filters.group === 'all' || student.group === filters.group
        const matchesScholarship = filters.scholarship === 'all' || (filters.scholarship === 'yes' ? student.scholarship : !student.scholarship)
        return matchesSearch && matchesStatus && matchesGroup && matchesScholarship
      }),
    [filters]
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="panel-title">{t('searchPage.title')}</h1>
        <p className="mt-2 text-muted-foreground">{t('searchPage.subtitle')}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('searchPage.filtersTitle')}</CardTitle>
          <CardDescription>{t('searchPage.filtersDescription')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <div className="xl:col-span-2">
              <label className="mb-2 block text-sm font-medium">{t('common.search')}</label>
              <Input placeholder={t('searchPage.searchPlaceholder')} value={filters.search} onChange={(e) => setFilters({ ...filters, search: e.target.value })} />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">{t('searchPage.status')}</label>
              <select className="h-11 w-full rounded-2xl border border-border/80 bg-background px-4 text-sm" value={filters.status} onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
                <option value="all">{t('searchPage.allStatuses')}</option>
                <option value="active">{t('status.active')}</option>
                <option value="warning">{t('status.warning')}</option>
                <option value="inactive">{t('status.inactive')}</option>
                <option value="graduated">{t('status.graduated')}</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">{t('searchPage.group')}</label>
              <select className="h-11 w-full rounded-2xl border border-border/80 bg-background px-4 text-sm" value={filters.group} onChange={(e) => setFilters({ ...filters, group: e.target.value })}>
                <option value="all">{t('searchPage.allGroups')}</option>
                {demoGroups.map((group) => (
                  <option key={group.id} value={group.name}>{group.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">{t('searchPage.scholarship')}</label>
              <select className="h-11 w-full rounded-2xl border border-border/80 bg-background px-4 text-sm" value={filters.scholarship} onChange={(e) => setFilters({ ...filters, scholarship: e.target.value })}>
                <option value="all">{t('common.all')}</option>
                <option value="yes">{t('common.yes')}</option>
                <option value="no">{t('common.no')}</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              {t('common.filter')}
            </Button>
            <Button variant="outline" className="gap-2" onClick={() => setFilters({ search: '', status: 'all', group: 'all', scholarship: 'all' })}>
              <RotateCcw className="h-4 w-4" />
              {t('common.reset')}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <CardTitle>{t('searchPage.resultsTitle')}</CardTitle>
            <CardDescription>{t('searchPage.resultsCount', { count: results.length })}</CardDescription>
          </div>
          <Button className="gap-2 self-start" size="sm">
            <Download className="h-4 w-4" />
            {t('common.export')}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-hidden rounded-[24px] border border-border/70">
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-muted/80">
                <tr>
                  <th className="px-4 py-4 text-left font-medium">{t('searchPage.table.name')}</th>
                  <th className="px-4 py-4 text-left font-medium">{t('searchPage.table.group')}</th>
                  <th className="px-4 py-4 text-left font-medium">{t('searchPage.table.tutor')}</th>
                  <th className="px-4 py-4 text-center font-medium">{t('searchPage.table.completion')}</th>
                  <th className="px-4 py-4 text-left font-medium">{t('searchPage.table.status')}</th>
                  <th className="px-4 py-4 text-right font-medium">{t('searchPage.table.action')}</th>
                </tr>
              </thead>
              <tbody>
                {results.map((student) => (
                  <tr key={student.id} className="border-b border-border/70 hover:bg-muted/30">
                    <td className="px-4 py-4">
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-xs text-muted-foreground">{student.email}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-muted-foreground">{student.group}</td>
                    <td className="px-4 py-4 text-muted-foreground">{student.tutor}</td>
                    <td className="px-4 py-4 text-center">{student.completion}%</td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium capitalize ${statusClasses[student.status]}`}>
                        {t(`status.${student.status}`)}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <Button variant="ghost" size="sm" className="gap-2" onClick={() => setSelectedStudent(student)}>
                        <Eye className="h-4 w-4" />
                        {t('searchPage.preview')}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <PreviewModal open={!!selectedStudent} title={selectedStudent?.name ?? ''} subtitle={selectedStudent?.email} onClose={() => setSelectedStudent(null)}>
        {selectedStudent ? (
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="shadow-none">
              <CardContent className="space-y-3 pt-6 text-sm">
                <div><p className="text-muted-foreground">{t('students.table.hemisId')}</p><p className="font-medium">{selectedStudent.hemisId}</p></div>
                <div><p className="text-muted-foreground">{t('students.modal.phone')}</p><p className="font-medium">{selectedStudent.phone}</p></div>
                <div><p className="text-muted-foreground">{t('students.modal.city')}</p><p className="font-medium">{selectedStudent.city}</p></div>
              </CardContent>
            </Card>
            <Card className="shadow-none">
              <CardContent className="space-y-3 pt-6 text-sm">
                <div><p className="text-muted-foreground">{t('students.modal.tutor')}</p><p className="font-medium">{selectedStudent.tutor}</p></div>
                <div><p className="text-muted-foreground">{t('students.table.group')}</p><p className="font-medium">{selectedStudent.group}</p></div>
                <div><p className="text-muted-foreground">{t('students.modal.scholarship')}</p><p className="font-medium">{selectedStudent.scholarship ? t('common.yes') : t('common.no')}</p></div>
              </CardContent>
            </Card>
          </div>
        ) : null}
      </PreviewModal>
    </div>
  )
}
