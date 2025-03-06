"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatDistanceToNow } from "date-fns"

const transactions = [
  { id: 1, description: "Grocery Shopping", amount: -85.5, date: "2023-07-01" },
  { id: 2, description: "Salary Deposit", amount: 2350.0, date: "2023-06-30" },
  { id: 3, description: "Electric Bill", amount: -75.2, date: "2023-06-28" },
  { id: 4, description: "Freelance Payment", amount: 450.0, date: "2023-06-25" },
  { id: 5, description: "Restaurant Dinner", amount: -62.8, date: "2023-06-23" },
]

export function RecentTransactions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-medium">Description</TableHead>
          <TableHead className="font-medium">Amount</TableHead>
          <TableHead className="font-medium">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">{transaction.description}</TableCell>
            <TableCell className={`currency ${transaction.amount > 0 ? "positive-amount" : "negative-amount"}`}>
              {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
            </TableCell>
            <TableCell className="text-muted-foreground">
              {formatDistanceToNow(new Date(transaction.date), { addSuffix: true })}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

