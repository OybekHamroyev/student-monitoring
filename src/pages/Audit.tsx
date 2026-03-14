import { useMemo, useState } from 'react'
import { AlertTriangle, Eye, Search, Shield } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import PreviewModal from '@/components/shared/PreviewModal'
import { demoAuditLogs, type DemoAuditLog } from '@/mocks/demoData'

const severityClasses: Record<DemoAuditLog['severity'], string> = {
  low: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300',
  medium: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
  high: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300',
}

export default function Audit() {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLog, setSelectedLog] = useState<DemoAuditLog | null>(null)

  const filteredLogs = useMemo(
    () =>
      demoAuditLogs.filter(
        (log) =>
          log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
          log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
          log.entity.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="panel-title">{t('audit.title')}</h1>
        <p className="mt-2 text-muted-foreground">{t('audit.subtitle')}</p>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        <Card className="soft-surface">
          <CardContent className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm text-muted-foreground">{t('audit.logEntries')}</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{demoAuditLogs.length}</p>
            </div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/12 text-primary">
              <Shield className="h-5 w-5" />
            </span>
          </CardContent>
        </Card>
        <Card className="soft-surface">
          <CardContent className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm text-muted-foreground">{t('audit.highSeverity')}</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{demoAuditLogs.filter((log) => log.severity === 'high').length}</p>
            </div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300">
              <AlertTriangle className="h-5 w-5" />
            </span>
          </CardContent>
        </Card>
        <Card className="soft-surface">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">{t('audit.demoCoverage')}</p>
            <p className="mt-2 text-sm leading-6">{t('audit.demoCoverageText')}</p>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>{t('audit.activityLog')}</CardTitle>
          <CardDescription>{t('audit.activityLogDesc')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder={t('audit.searchPlaceholder')} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-11" />
          </div>

          <div className="overflow-x-auto overflow-hidden rounded-[24px] border border-border/70">
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-muted/80">
                <tr>
                  <th className="px-4 py-4 text-left font-medium">{t('audit.table.timestamp')}</th>
                  <th className="px-4 py-4 text-left font-medium">{t('audit.table.user')}</th>
                  <th className="px-4 py-4 text-left font-medium">{t('audit.table.action')}</th>
                  <th className="px-4 py-4 text-left font-medium">{t('audit.table.entity')}</th>
                  <th className="px-4 py-4 text-left font-medium">{t('audit.table.severity')}</th>
                  <th className="px-4 py-4 text-right font-medium">{t('audit.table.inspect')}</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map((log) => (
                  <tr key={log.id} className="border-b border-border/70 hover:bg-muted/30">
                    <td className="whitespace-nowrap px-4 py-4 text-muted-foreground">{log.timestamp}</td>
                    <td className="px-4 py-4">{log.user}</td>
                    <td className="px-4 py-4">{log.action}</td>
                    <td className="px-4 py-4">{log.entity}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium capitalize ${severityClasses[log.severity]}`}>
                        {t(`audit.severity.${log.severity}`)}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <Button variant="ghost" size="sm" className="gap-2" onClick={() => setSelectedLog(log)}>
                        <Eye className="h-4 w-4" />
                        {t('audit.inspect')}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <PreviewModal open={!!selectedLog} title={selectedLog?.action ?? ''} subtitle={selectedLog ? `${selectedLog.user} - ${selectedLog.timestamp}` : ''} onClose={() => setSelectedLog(null)}>
        {selectedLog ? (
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="shadow-none">
              <CardContent className="space-y-3 pt-6 text-sm">
                <div><p className="text-muted-foreground">{t('audit.modal.entity')}</p><p className="font-medium">{selectedLog.entity}</p></div>
                <div><p className="text-muted-foreground">{t('audit.modal.ipAddress')}</p><p className="font-medium">{selectedLog.ipAddress}</p></div>
                <div><p className="text-muted-foreground">{t('audit.modal.severity')}</p><p className="font-medium capitalize">{t(`audit.severity.${selectedLog.severity}`)}</p></div>
              </CardContent>
            </Card>
            <Card className="shadow-none">
              <CardContent className="space-y-3 pt-6 text-sm">
                <p className="text-muted-foreground">{t('audit.modal.changeDetails')}</p>
                <p className="leading-6 text-foreground">{selectedLog.changes}</p>
              </CardContent>
            </Card>
          </div>
        ) : null}
      </PreviewModal>
    </div>
  )
}
