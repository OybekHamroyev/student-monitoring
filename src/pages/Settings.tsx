import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'

export default function Settings() {
  const { t } = useTranslation()
  const [settings, setSettings] = useState({
    pnflRequired: true,
    contractModuleEnabled: false,
  })

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
            <Switch checked={settings.pnflRequired} onCheckedChange={(checked) => setSettings({ ...settings, pnflRequired: checked })} />
          </div>

          <div className="border-t border-border pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t('settings.contractModule')}</p>
                <p className="text-sm text-muted-foreground">{t('settings.contractModuleDesc')}</p>
              </div>
              <Switch checked={settings.contractModuleEnabled} onCheckedChange={(checked) => setSettings({ ...settings, contractModuleEnabled: checked })} />
            </div>
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
