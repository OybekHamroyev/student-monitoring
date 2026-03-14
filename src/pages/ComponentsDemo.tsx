import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import * as Tabs from '@radix-ui/react-tabs'
import * as Accordion from '@radix-ui/react-accordion'
import * as Dialog from '@radix-ui/react-dialog'
import { AppDispatch } from '@/store'
import { addNotification } from '@/store/slices/notifications'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { RoleBadge } from '@/components/shared/RoleBadge'
import { DataTable } from '@/components/table/DataTable'
import { FileUploadInput } from '@/components/forms/FileUploadInput'
import { demoStudents } from '@/mocks/demoData'

export default function ComponentsDemo() {
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()
  const [dialogOpen, setDialogOpen] = useState(false)

  const showToast = (type: 'success' | 'error' | 'info' | 'warning') => {
    dispatch(
      addNotification({
        id: crypto.randomUUID(),
        title: t(`componentsDemo.toast.${type}.title`),
        message: t(`componentsDemo.toast.${type}.message`),
        type,
      })
    )
  }

  const columns = [
    { key: 'name', label: t('componentsDemo.table.name') },
    { key: 'hemisId', label: t('componentsDemo.table.hemisId') },
    {
      key: 'status',
      label: t('componentsDemo.table.status'),
      render: (value: string) => <StatusBadge status={value as 'active' | 'inactive' | 'graduated' | 'warning'} />,
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="panel-title">{t('componentsDemo.title')}</h1>
        <p className="mt-2 text-muted-foreground">{t('componentsDemo.subtitle')}</p>
      </div>

      <section>
        <Card>
          <CardHeader><CardTitle>{t('componentsDemo.buttons.title')}</CardTitle><CardDescription>{t('componentsDemo.buttons.desc')}</CardDescription></CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button>{t('componentsDemo.buttons.default')}</Button>
            <Button variant="secondary">{t('componentsDemo.buttons.secondary')}</Button>
            <Button variant="outline">{t('componentsDemo.buttons.outline')}</Button>
            <Button variant="destructive">{t('componentsDemo.buttons.destructive')}</Button>
            <Button variant="ghost">{t('componentsDemo.buttons.ghost')}</Button>
            <Button size="sm">{t('componentsDemo.buttons.small')}</Button>
            <Button size="lg">{t('componentsDemo.buttons.large')}</Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader><CardTitle>{t('componentsDemo.inputs.title')}</CardTitle><CardDescription>{t('componentsDemo.inputs.desc')}</CardDescription></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2"><label className="text-sm font-medium">{t('componentsDemo.inputs.input')}</label><Input placeholder={t('componentsDemo.inputs.placeholder')} /></div>
            <div className="flex items-center space-x-2"><Checkbox id="demo-check" /><label htmlFor="demo-check" className="text-sm">{t('componentsDemo.inputs.checkbox')}</label></div>
            <div className="flex items-center space-x-2"><Switch id="demo-switch" /><label htmlFor="demo-switch" className="text-sm">{t('componentsDemo.inputs.switch')}</label></div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader><CardTitle>{t('componentsDemo.badges.title')}</CardTitle><CardDescription>{t('componentsDemo.badges.desc')}</CardDescription></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2"><StatusBadge status="active" /><StatusBadge status="inactive" /><StatusBadge status="graduated" /><StatusBadge status="warning" /></div>
            <div className="flex flex-wrap gap-2"><RoleBadge role="tutor" /><RoleBadge role="vice_dean" /><RoleBadge role="dean" /><RoleBadge role="admin" /></div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader><CardTitle>{t('componentsDemo.tabs.title')}</CardTitle><CardDescription>{t('componentsDemo.tabs.desc')}</CardDescription></CardHeader>
          <CardContent>
            <Tabs.Root defaultValue="tab1">
              <Tabs.List className="flex gap-2 rounded-xl border border-border p-1">
                <Tabs.Trigger value="tab1" className="rounded-lg px-4 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">{t('componentsDemo.tabs.tab1')}</Tabs.Trigger>
                <Tabs.Trigger value="tab2" className="rounded-lg px-4 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">{t('componentsDemo.tabs.tab2')}</Tabs.Trigger>
                <Tabs.Trigger value="tab3" className="rounded-lg px-4 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">{t('componentsDemo.tabs.tab3')}</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="tab1" className="mt-4"><p className="text-sm text-muted-foreground">{t('componentsDemo.tabs.content1')}</p></Tabs.Content>
              <Tabs.Content value="tab2" className="mt-4"><p className="text-sm text-muted-foreground">{t('componentsDemo.tabs.content2')}</p></Tabs.Content>
              <Tabs.Content value="tab3" className="mt-4"><p className="text-sm text-muted-foreground">{t('componentsDemo.tabs.content3')}</p></Tabs.Content>
            </Tabs.Root>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader><CardTitle>{t('componentsDemo.accordion.title')}</CardTitle><CardDescription>{t('componentsDemo.accordion.desc')}</CardDescription></CardHeader>
          <CardContent>
            <Accordion.Root type="single" collapsible className="space-y-2">
              <Accordion.Item value="1" className="rounded-xl border border-border">
                <Accordion.Header><Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 text-left font-medium">{t('componentsDemo.accordion.section1')}</Accordion.Trigger></Accordion.Header>
                <Accordion.Content className="px-4 pb-3 text-sm text-muted-foreground">{t('componentsDemo.accordion.content1')}</Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="2" className="rounded-xl border border-border">
                <Accordion.Header><Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 text-left font-medium">{t('componentsDemo.accordion.section2')}</Accordion.Trigger></Accordion.Header>
                <Accordion.Content className="px-4 pb-3 text-sm text-muted-foreground">{t('componentsDemo.accordion.content2')}</Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader><CardTitle>{t('componentsDemo.dialog.title')}</CardTitle><CardDescription>{t('componentsDemo.dialog.desc')}</CardDescription></CardHeader>
          <CardContent>
            <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
              <Dialog.Trigger asChild><Button>{t('componentsDemo.dialog.open')}</Button></Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-6 shadow-lg">
                  <Dialog.Title className="text-lg font-semibold">{t('componentsDemo.dialog.modalTitle')}</Dialog.Title>
                  <Dialog.Description className="mt-2 text-sm text-muted-foreground">{t('componentsDemo.dialog.modalDesc')}</Dialog.Description>
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setDialogOpen(false)}>{t('common.cancel')}</Button>
                    <Button onClick={() => setDialogOpen(false)}>{t('common.confirm')}</Button>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader><CardTitle>{t('componentsDemo.toastTitle')}</CardTitle><CardDescription>{t('componentsDemo.toastDesc')}</CardDescription></CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button onClick={() => showToast('success')}>{t('componentsDemo.toast.success.button')}</Button>
            <Button variant="destructive" onClick={() => showToast('error')}>{t('componentsDemo.toast.error.button')}</Button>
            <Button variant="outline" onClick={() => showToast('info')}>{t('componentsDemo.toast.info.button')}</Button>
            <Button variant="secondary" onClick={() => showToast('warning')}>{t('componentsDemo.toast.warning.button')}</Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader><CardTitle>{t('componentsDemo.fileUpload.title')}</CardTitle><CardDescription>{t('componentsDemo.fileUpload.desc')}</CardDescription></CardHeader>
          <CardContent><FileUploadInput accept="image/*,.pdf" onFileChange={(file) => console.log('Selected:', file?.name)} /></CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader><CardTitle>{t('componentsDemo.dataTable.title')}</CardTitle><CardDescription>{t('componentsDemo.dataTable.desc')}</CardDescription></CardHeader>
          <CardContent><DataTable data={demoStudents.slice(0, 3)} columns={columns} /></CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader><CardTitle>{t('componentsDemo.avatar.title')}</CardTitle><CardDescription>{t('componentsDemo.avatar.desc')}</CardDescription></CardHeader>
          <CardContent className="flex gap-4"><Avatar><AvatarFallback>AB</AvatarFallback></Avatar><Avatar><AvatarFallback className="bg-primary/12 text-primary">U</AvatarFallback></Avatar></CardContent>
        </Card>
      </section>
    </div>
  )
}
