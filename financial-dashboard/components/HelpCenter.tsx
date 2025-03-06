"use client"

import { useOnboarding } from "./OnboardingProvider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, X } from "lucide-react"
import { motion } from "framer-motion"

export function HelpCenter() {
  const { showHelpCenter, toggleHelpCenter } = useOnboarding()

  if (!showHelpCenter) {
    return null
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <Card className="w-full max-w-md border-t-4 border-t-primary">
          <CardHeader className="relative">
            <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={toggleHelpCenter}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
            <div className="flex justify-center mb-4">
              <HelpCircle className="h-16 w-16 text-primary" />
            </div>
            <CardTitle className="text-center font-heading">Help Center</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-medium text-sm">How do I add a transaction?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs">
                  To add a transaction, click the "Add Transaction" button on the dashboard. Fill in the description,
                  amount, and select whether it's an income or expense.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-medium text-sm">How do I view my spending reports?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs">
                  Navigate to the "Reports" section from the main menu. There you can view charts and breakdowns of your
                  spending by category and time period.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-medium text-sm">Can I set a budget?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs">
                  Yes! Go to the "Budget" section to set monthly limits for different spending categories. The app will
                  notify you when you're approaching your limits.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-medium text-sm">How do I export my data?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs">
                  In the "Settings" menu, you'll find an option to export your data as CSV or PDF. This is useful for
                  tax purposes or further analysis in spreadsheet software.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline" onClick={toggleHelpCenter} size="sm">
              Close Help Center
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  )
}

