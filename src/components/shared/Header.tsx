import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { RootState, AppDispatch } from '@/store'
import { setTheme } from '@/store/slices/theme'
import { setLanguage } from '@/store/slices/language'
import { logout } from '@/store/slices/auth'
import { setMobileMenuOpen } from '@/store/slices/ui'
import { Bell, ChevronDown, LogOut, Menu, Moon, Search, ShieldCheck, Sun, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const ROUTE_LABELS: Record<string, string> = {
  dashboard: 'nav.dashboard',
  groups: 'nav.groups',
  students: 'nav.studentProfiles',
  tutors: 'nav.tutorManagement',
  search: 'nav.searchFilter',
  settings: 'nav.deanSettings',
  audit: 'nav.auditLogs',
  'components-demo': 'nav.uiComponents',
}

function getBreadcrumbs(pathname: string, t: (key: string) => string): { label: string; href: string }[] {
  const segments = pathname.split('/').filter(Boolean)
  const crumbs: { label: string; href: string }[] = [{ label: t('app.home'), href: '/' }]
  let href = ''

  for (const segment of segments) {
    href += `/${segment}`
    const labelKey = ROUTE_LABELS[segment]
    const label = labelKey ? t(labelKey) : segment.match(/^\d+$/) ? t('profile.title') : segment
    crumbs.push({ label, href })
  }

  return crumbs
}

export default function Header() {
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()
  const location = useLocation()
  const { user } = useSelector((state: RootState) => state.auth)
  const { mode } = useSelector((state: RootState) => state.theme)
  const { currentLanguage } = useSelector((state: RootState) => state.language)
  const breadcrumbs = getBreadcrumbs(location.pathname, t)

  const handleThemeToggle = () => {
    dispatch(setTheme(mode === 'dark' ? 'light' : 'dark'))
  }

  const handleLanguageChange = (lang: 'en' | 'ru' | 'uz') => {
    dispatch(setLanguage(lang))
    i18n.changeLanguage(lang)
  }

  return (
    <header className="sticky top-0 z-30 flex flex-col gap-3 border-b border-border/60 bg-background/85 px-4 py-4 backdrop-blur md:px-6 xl:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-4">
          <Button
            variant="ghost"
            size="icon-sm"
            className="lg:hidden"
            onClick={() => dispatch(setMobileMenuOpen(true))}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="hidden max-w-[280px] flex-1 md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-10" placeholder={t('common.search')} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-2xl border border-border/70 bg-card px-3 py-2 text-sm text-muted-foreground shadow-sm md:flex">
            <ShieldCheck className="h-4 w-4 text-[hsl(var(--success))]" />
            {t('app.safeMode')}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 rounded-xl">
                <span className="hidden sm:inline">{currentLanguage.toUpperCase()}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
                {t('languages.en')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('ru')}>
                {t('languages.ru')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('uz')}>
                {t('languages.uz')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="icon-sm" className="rounded-xl">
            <Bell className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="icon-sm" onClick={handleThemeToggle} className="rounded-xl">
            {mode === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2 rounded-xl px-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary/12 text-sm text-primary">
                    {user?.name?.charAt(0) ?? 'U'}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline">{user?.name}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="px-3 py-2">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/dashboard">
                  <User className="mr-2 h-4 w-4" />
                  {t('nav.dashboard')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings">
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  {t('nav.deanSettings')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => dispatch(logout())} className="text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                {t('common.logout')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm">
        {breadcrumbs.map((crumb, index) => (
          <span key={crumb.href} className="flex items-center gap-2">
            {index > 0 && <span className="text-muted-foreground">/</span>}
            {index === breadcrumbs.length - 1 ? (
              <span className="font-medium">{crumb.label}</span>
            ) : (
              <Link to={crumb.href} className="text-muted-foreground hover:text-foreground">
                {crumb.label}
              </Link>
            )}
          </span>
        ))}
      </div>
    </header>
  )
}
