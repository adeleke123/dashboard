"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RecentTransactions } from "./RecentTransactions"

export default function Dashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$5,231.89</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Income</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$2,350.00</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$1,125.50</div>
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
  )
}
