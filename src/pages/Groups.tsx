import { useState } from 'react'
import { BarChart3, Eye, Plus, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import PreviewModal from '@/components/shared/PreviewModal'
import { demoGroups, type DemoGroup } from '@/mocks/demoData'

export default function Groups() {
  const { t } = useTranslation()
  const [selectedGroup, setSelectedGroup] = useState<DemoGroup | null>(null)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="panel-title">{t('groups.title')}</h1>
          <p className="mt-2 text-muted-foreground">{t('groups.subtitle')}</p>
        </div>
        <Button className="gap-2 self-start">
          <Plus className="h-4 w-4" />
          {t('groups.addGroup')}
        </Button>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        <Card className="soft-surface">
          <CardContent className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm text-muted-foreground">{t('groups.activeGroups')}</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{demoGroups.length}</p>
            </div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/12 text-primary">
              <Users className="h-5 w-5" />
            </span>
          </CardContent>
        </Card>
        <Card className="soft-surface">
          <CardContent className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm text-muted-foreground">{t('groups.highestCompletion')}</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">91%</p>
            </div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-300">
              <BarChart3 className="h-5 w-5" />
            </span>
          </CardContent>
        </Card>
        <Card className="soft-surface">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">{t('groups.previewMode')}</p>
            <p className="mt-2 text-sm leading-6">{t('groups.previewModeText')}</p>
          </CardContent>
        </Card>
      </section>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {demoGroups.map((group) => (
          <Card key={group.id} className="soft-surface transition-transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-lg">{group.name}</CardTitle>
              <CardDescription>{group.code}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t('groups.card.program')}</span>
                  <span className="font-medium">{group.program}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t('groups.card.year')}</span>
                  <span className="font-medium">{group.year}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t('groups.card.students')}</span>
                  <span className="font-medium">{group.students}</span>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{t('groups.card.profileCompletion')}</span>
                  <span className="font-medium">{group.completion}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${group.completion}%` }} />
                </div>
              </div>

              <Button variant="outline" className="w-full gap-2" size="sm" onClick={() => setSelectedGroup(group)}>
                <Eye className="h-4 w-4" />
                {t('groups.viewDetails')}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <PreviewModal
        open={!!selectedGroup}
        title={selectedGroup?.name ?? ''}
        subtitle={selectedGroup ? `${selectedGroup.program} - ${selectedGroup.code}` : ''}
        onClose={() => setSelectedGroup(null)}
        actions={
          <>
            <Button variant="outline" onClick={() => setSelectedGroup(null)}>{t('common.close')}</Button>
            <Button>{t('common.edit')}</Button>
          </>
        }
      >
        {selectedGroup ? (
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="shadow-none">
              <CardContent className="space-y-3 pt-6 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t('groups.modal.tutor')}</span>
                  <span className="font-medium">{selectedGroup.tutor}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t('groups.modal.room')}</span>
                  <span className="font-medium">{selectedGroup.room}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t('groups.modal.schedule')}</span>
                  <span className="font-medium">{selectedGroup.schedule}</span>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-none">
              <CardContent className="space-y-3 pt-6 text-sm">
                <p className="text-muted-foreground">{t('groups.modal.curatorNote')}</p>
                <p className="leading-6 text-foreground">{selectedGroup.curatorNote}</p>
              </CardContent>
            </Card>
          </div>
        ) : null}
      </PreviewModal>
    </div>
  )
}
