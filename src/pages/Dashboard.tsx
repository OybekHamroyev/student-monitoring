import { useTranslation } from 'react-i18next'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  BookMarked,
  CircleEllipsis,
  Filter,
  Search,
  ShoppingBag,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const monthlySales = [
  { month: 'Feb', previous: 460, current: 530 },
  { month: 'Mar', previous: 500, current: 570 },
  { month: 'Apr', previous: 590, current: 680 },
  { month: 'May', previous: 490, current: 600 },
  { month: 'Jun', previous: 560, current: 640 },
  { month: 'Jul', previous: 610, current: 700 },
  { month: 'Aug', previous: 430, current: 490 },
  { month: 'Sep', previous: 570, current: 650 },
]

const earningTrend = [
  { value: 140 },
  { value: 155 },
  { value: 162 },
  { value: 198 },
  { value: 176 },
  { value: 184 },
  { value: 201 },
  { value: 130 },
  { value: 186 },
]

const orders = [
  { id: 1, product: 'UltraSoft Premium Cooling Memory Foam Pillow Set', customer: 'Mark Johnson', quantity: 2, status: 'pending', price: '$120.00' },
  { id: 2, product: 'Solar powered desk lamp with sleek metallic finish', customer: 'Jane Smith', quantity: 3, status: 'shipped', price: '$1120.00' },
  { id: 3, product: 'Coffee maker with glass and wood finishes', customer: 'Chris Miller', quantity: 1, status: 'delivered', price: '$45.00' },
  { id: 4, product: 'Fully automatic washing machine with top load and front load', customer: 'Lavoursa Serin', quantity: 4, status: 'shipped', price: '$785.00' },
]

const statusClasses: Record<string, string> = {
  pending: 'bg-[#ff946d]/20 text-[#ef7f5a] dark:bg-[#ff946d]/15 dark:text-[#ffb59c]',
  shipped: 'bg-[#ffb524]/20 text-[#dc9200] dark:bg-[#ffb524]/15 dark:text-[#ffd070]',
  delivered: 'bg-[#25d0b3]/18 text-[#12a58c] dark:bg-[#25d0b3]/14 dark:text-[#73f0dc]',
}

export default function Dashboard() {
  const { t } = useTranslation()

  const stats = [
    {
      title: t('dashboard.stats.productsSold.title'),
      subtitle: t('dashboard.stats.productsSold.subtitle'),
      value: '16',
      icon: ShoppingBag,
      tint: 'bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300',
    },
    {
      title: t('dashboard.stats.totalSales.title'),
      subtitle: t('dashboard.stats.totalSales.subtitle'),
      value: '$ 5000',
      icon: Wallet,
      tint: 'bg-rose-100 text-rose-500 dark:bg-rose-500/15 dark:text-rose-300',
    },
    {
      title: t('dashboard.stats.monthlySales.title'),
      subtitle: t('dashboard.stats.monthlySales.subtitle'),
      value: '$ 670',
      icon: BookMarked,
      tint: 'bg-amber-100 text-amber-500 dark:bg-amber-500/15 dark:text-amber-300',
    },
    {
      title: t('dashboard.stats.totalCustomers.title'),
      subtitle: t('dashboard.stats.totalCustomers.subtitle'),
      value: '5',
      icon: Users,
      tint: 'bg-cyan-100 text-cyan-500 dark:bg-cyan-500/15 dark:text-cyan-300',
    },
  ]

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="soft-surface gap-4">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-0">
                <div className="space-y-2">
                  <CardTitle className="text-[1.05rem]">{stat.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
                </div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${stat.tint}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-[2rem] font-semibold tracking-[-0.04em] text-foreground">{stat.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.85fr]">
        <div className="space-y-6">
          <Card className="min-h-[120px] border-transparent bg-[linear-gradient(145deg,#dfe5f8,#cfd7ee)] text-slate-900 dark:bg-[linear-gradient(145deg,#252e4d,#1f2741)] dark:text-slate-100">
            <CardContent className="flex h-full items-center px-6">
              <div className="space-y-1">
                <p className="text-3xl font-semibold tracking-[-0.04em]">{t('dashboard.welcomeBack')}</p>
                <p className="text-3xl font-semibold tracking-[-0.04em]">{t('dashboard.admin')}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-0">
              <div className="space-y-3">
                <CardTitle className="text-[1.85rem] tracking-[-0.05em]">$670</CardTitle>
                <div>
                  <p className="text-[1.05rem] font-semibold">{t('dashboard.monthlyEarnings')}</p>
                  <div className="mt-3 flex items-center gap-2 text-sm text-[hsl(var(--success))]">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[hsl(var(--success))]/12">
                      <TrendingUp className="h-3.5 w-3.5" />
                    </span>
                    {t('dashboard.lastMonthGrowth', { value: '14.68%' })}
                  </div>
                </div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-500 dark:bg-cyan-500/15 dark:text-cyan-300">
                <Wallet className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent className="px-0 pt-6">
              <div className="h-28 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={earningTrend} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
                    <Tooltip cursor={false} contentStyle={{ borderRadius: 16, border: '1px solid hsl(var(--border))', background: 'hsl(var(--card))' }} />
                    <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={3} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[1.9rem] tracking-[-0.05em]">{t('dashboard.salesOverview')}</CardTitle>
            <Button variant="outline" className="rounded-2xl px-4">
              {t('dashboard.lastMonths', { count: 8 })}
            </Button>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="h-[340px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlySales} barCategoryGap={28}>
                  <CartesianGrid vertical={false} strokeDasharray="4 4" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 14 }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 14 }} />
                  <Tooltip cursor={{ fill: 'hsl(var(--muted) / 0.35)' }} contentStyle={{ borderRadius: 18, border: '1px solid hsl(var(--border))', background: 'hsl(var(--card))' }} />
                  <Bar dataKey="previous" fill="hsl(var(--primary))" radius={[10, 10, 0, 0]} maxBarSize={18} />
                  <Bar dataKey="current" fill="hsl(var(--info))" radius={[10, 10, 0, 0]} maxBarSize={18} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-primary" />
                {t('dashboard.previousMonth')}
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[hsl(var(--info))]" />
                {t('dashboard.currentMonth')}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader className="flex flex-col gap-4 pb-2 lg:flex-row lg:items-center lg:justify-between">
            <CardTitle className="text-[1.7rem] tracking-[-0.04em]">{t('dashboard.totalOrders')}</CardTitle>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button variant="secondary" className="rounded-2xl bg-secondary px-5 text-primary hover:bg-secondary/90">
                <Filter className="h-4 w-4" />
                {t('common.filter')}
              </Button>
              <div className="relative min-w-[280px]">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input className="pl-11" placeholder={t('dashboard.searchOrders')} />
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="overflow-hidden rounded-[24px] border border-border/70">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-sm">
                  <thead className="bg-muted/80 text-foreground">
                    <tr>
                      <th className="px-5 py-4 text-left font-semibold">{t('dashboard.table.id')}</th>
                      <th className="px-5 py-4 text-left font-semibold">{t('dashboard.table.product')}</th>
                      <th className="px-5 py-4 text-left font-semibold">{t('dashboard.table.customer')}</th>
                      <th className="px-5 py-4 text-left font-semibold">{t('dashboard.table.quantity')}</th>
                      <th className="px-5 py-4 text-left font-semibold">{t('dashboard.table.status')}</th>
                      <th className="px-5 py-4 text-left font-semibold">{t('dashboard.table.price')}</th>
                      <th className="px-5 py-4 text-left font-semibold">{t('dashboard.table.action')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-t border-border/70 bg-card transition-colors hover:bg-muted/30">
                        <td className="px-5 py-4 text-muted-foreground">{order.id}</td>
                        <td className="px-5 py-4">
                          <div className="max-w-[260px] font-medium leading-6 text-foreground">{order.product}</div>
                        </td>
                        <td className="px-5 py-4 text-muted-foreground">{order.customer}</td>
                        <td className="px-5 py-4 text-muted-foreground">{order.quantity}</td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusClasses[order.status]}`}>
                            {t(`status.${order.status}`)}
                          </span>
                        </td>
                        <td className="px-5 py-4 font-medium">{order.price}</td>
                        <td className="px-5 py-4">
                          <Button variant="ghost" size="icon-sm" className="rounded-xl">
                            <CircleEllipsis className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <div className="inline-flex overflow-hidden rounded-2xl border border-border/70 bg-background">
                <Button variant="ghost" className="rounded-none px-4 text-muted-foreground">{t('common.previous')}</Button>
                <Button variant="ghost" className="rounded-none bg-secondary px-4 text-primary">1</Button>
                <Button variant="ghost" className="rounded-none px-4">2</Button>
                <Button variant="ghost" className="rounded-none px-4">{t('common.next')}</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
