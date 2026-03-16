import { useState } from 'react'
import type { AxiosError } from 'axios'
import { Loader2, RefreshCw, Upload } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { useNotification } from '@/hooks/useNotification'
import { hemisApi, type HemisSyncResponse } from '@/services/api'

export default function Settings() {
  const { t } = useTranslation()
  const toast = useNotification()
  const [settings, setSettings] = useState({
    pnflRequired: true,
    contractModuleEnabled: false,
  })
  const [isImportLoading, setIsImportLoading] = useState(false)
  const [isUpdateLoading, setIsUpdateLoading] = useState(false)

  const buildSyncMessage = (data: HemisSyncResponse) =>
    `${data.message}. Yangi: ${data.created}, yangilandi: ${data.updated}, oxirgi sahifa: ${data.last_page}.`

  const getErrorMessage = (error: unknown, fallback: string) => {
    if (error instanceof Error && error.message === 'VITE_BACKEND_URL is not configured') {
      return 'Backend URL sozlanmagan (.env)'
    }

    const responseMessage = (error as AxiosError<{ message?: string }>)?.response?.data?.message
    return responseMessage || fallback
  }

  const handleImportStudents = async () => {
    setIsImportLoading(true)

    try {
      const response = await hemisApi.importStudents()
      toast.success('Import yakunlandi', buildSyncMessage(response.data))
    } catch (error) {
      toast.error(
        'Import bajarilmadi',
        getErrorMessage(error, 'Talabalarni import qilishda xatolik yuz berdi')
      )
    } finally {
      setIsImportLoading(false)
    }
  }

  const handleUpdateStudents = async () => {
    setIsUpdateLoading(true)

    try {
      const response = await hemisApi.updateStudents()
      toast.success('Yangilash yakunlandi', buildSyncMessage(response.data))
    } catch (error) {
      toast.error(
        'Yangilash bajarilmadi',
        getErrorMessage(error, 'Talabalarni yangilashda xatolik yuz berdi')
      )
    } finally {
      setIsUpdateLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="panel-title">{t('settings.title')}</h1>
        <p className="mt-2 text-muted-foreground">{t('settings.subtitle')}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('settings.systemConfiguration')}</CardTitle>
          <CardDescription>{t('settings.systemConfigurationDesc')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">{t('settings.pnflRequirement')}</p>
              <p className="text-sm text-muted-foreground">{t('settings.pnflRequirementDesc')}</p>
            </div>
            <Switch
              checked={settings.pnflRequired}
              onCheckedChange={(checked) => setSettings({ ...settings, pnflRequired: checked })}
            />
          </div>

          <div className="border-t border-border pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t('settings.contractModule')}</p>
                <p className="text-sm text-muted-foreground">{t('settings.contractModuleDesc')}</p>
              </div>
              <Switch
                checked={settings.contractModuleEnabled}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, contractModuleEnabled: checked })
                }
              />
            </div>
          </div>

          <div className="space-y-4 border-t border-border pt-6">
            <div>
              <p className="font-medium">HEMIS bilan sinxronlash</p>
              <p className="text-sm text-muted-foreground">
                Talabalar ma&apos;lumotlarini boshqa HEMIS tizimidan xavfsiz import qilish va
                yangilash.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <Button
                className="h-auto justify-start gap-3 rounded-2xl px-5 py-4 text-left"
                onClick={handleImportStudents}
                disabled={isImportLoading || isUpdateLoading}
              >
                {isImportLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Upload className="h-4 w-4" />
                )}
                <span className="flex flex-col items-start">
                  <span>Talabalarni import qilish</span>
                  <span className="text-xs font-normal text-primary-foreground/80">
                    `/import-students/` orqali talabalarni yuklaydi
                  </span>
                </span>
              </Button>

              <Button
                variant="outline"
                className="h-auto justify-start gap-3 rounded-2xl px-5 py-4 text-left"
                onClick={handleUpdateStudents}
                disabled={isImportLoading || isUpdateLoading}
              >
                {isUpdateLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <RefreshCw className="h-4 w-4" />
                )}
                <span className="flex flex-col items-start">
                  <span>Talabalarni yangilash</span>
                  <span className="text-xs font-normal text-muted-foreground">
                    `/update-students/` orqali mavjud yozuvlarni yangilaydi
                  </span>
                </span>
              </Button>
            </div>

            {(isImportLoading || isUpdateLoading) && (
              <div className="rounded-2xl border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
                HEMIS ma&apos;lumotlari yuklanmoqda. Jarayon tugaguncha sahifani yopmang.
              </div>
            )}
          </div>

          <div className="flex justify-end gap-4 border-t border-border pt-6">
            <Button variant="default" className="min-w-24 bg-destructive hover:bg-destructive/90">
              {t('common.cancel')}
            </Button>
            <Button className="min-w-24">{t('common.submit')}</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
