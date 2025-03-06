"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RecentTransactions } from "./RecentTransactions"
import { Onboarding } from "./Onboarding"
import { OnboardingProvider } from "./OnboardingProvider"
import { HelpCenter } from "./HelpCenter"
import { WelcomeMessage } from "./WelcomeMessage"
import { Button } from "@/components/ui/button"
import { HelpCircle, RefreshCw, TrendingUp, TrendingDown, Wallet } from "lucide-react"
import { useOnboarding } from "./OnboardingProvider"

function DashboardContent() {
  const { resetOnboarding, toggleHelpCenter } = useOnboarding()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-heading font-semibold">Financial Overview</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={toggleHelpCenter}>
            <HelpCircle className="mr-2 h-4 w-4" />
            Help Center
          </Button>
          <Button variant="outline" size="sm" onClick={resetOnboarding}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Show Onboarding
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold currency">$5,231.89</div>
            <p className="text-xs text-muted-foreground mt-1">Updated today at 4:30 PM</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-income">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Income</CardTitle>
            <TrendingUp className="h-4 w-4 text-income" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold currency positive-amount">$2,350.00</div>
            <p className="text-xs text-muted-foreground mt-1">+15% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-expense">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-expense" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold currency negative-amount">$1,125.50</div>
            <p className="text-xs text-muted-foreground mt-1">-3% from last month</p>
          </CardContent>
        </Card>

        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentTransactions />
          </CardContent>
        </Card>
      </div>

      <Onboarding />
      <HelpCenter />
      <WelcomeMessage />
    </div>
  )
}

export default function Dashboard() {
  return (
    <OnboardingProvider>
      <DashboardContent />
    </OnboardingProvider>
  )
}

