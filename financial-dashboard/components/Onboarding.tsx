"use client"

import { useOnboarding } from "./OnboardingProvider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, ArrowRight, BarChart3, DollarSign, HelpCircle, PiggyBank, Star, Users, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Onboarding() {
  const {
    showOnboarding,
    currentStep,
    totalSteps,
    userRole,
    feedbackRating,
    demoTransaction,
    nextStep,
    prevStep,
    skipOnboarding,
    setUserRole,
    setFeedbackRating,
    updateDemoTransaction,
    toggleHelpCenter,
  } = useOnboarding()

  if (!showOnboarding) {
    return null
  }

  // Define step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Welcome
        return (
          <>
            <div className="flex justify-center mb-4">
              <PiggyBank className="h-16 w-16 text-primary" />
            </div>
            <CardTitle className="text-center font-heading">Welcome to Your Finance Tracker!</CardTitle>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Track your finances, manage expenses, and reach your financial goals with ease.
              </p>
            </CardContent>
          </>
        )

      case 1: // Role Selection
        return (
          <>
            <div className="flex justify-center mb-4">
              <Users className="h-16 w-16 text-primary" />
            </div>
            <CardTitle className="text-center font-heading">How will you use this app?</CardTitle>
            <CardContent>
              <p className="text-center text-muted-foreground mb-6">
                We'll customize your experience based on your needs.
              </p>

              <RadioGroup
                value={userRole || ""}
                onValueChange={(value) => setUserRole(value as any)}
                className="space-y-3"
              >
                <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted">
                  <RadioGroupItem value="personal" id="personal" />
                  <Label htmlFor="personal" className="flex-1 cursor-pointer">
                    Personal Finance
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted">
                  <RadioGroupItem value="business" id="business" />
                  <Label htmlFor="business" className="flex-1 cursor-pointer">
                    Business Expenses
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted">
                  <RadioGroupItem value="family" id="family" />
                  <Label htmlFor="family" className="flex-1 cursor-pointer">
                    Family Budget
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </>
        )

      case 2: // Track Expenses
        return (
          <>
            <div className="flex justify-center mb-4">
              <DollarSign className="h-16 w-16 text-primary" />
            </div>
            <CardTitle className="text-center font-heading">Track Your Expenses</CardTitle>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Add your income and expenses to keep track of where your money is going.
              </p>
              <div className="mt-4 p-3 bg-muted rounded-md">
                <p className="text-sm font-medium">Pro Tips:</p>
                <ul className="text-sm list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                  <li>Categorize transactions for better insights</li>
                  <li>Set up recurring transactions for bills</li>
                  <li>Take photos of receipts for your records</li>
                </ul>
              </div>
            </CardContent>
          </>
        )

      case 3: // Demo Transaction
        return (
          <>
            <div className="flex justify-center mb-4">
              <DollarSign className="h-16 w-16 text-primary" />
            </div>
            <CardTitle className="text-center font-heading">Try Adding a Transaction</CardTitle>
            <CardContent>
              <p className="text-center text-muted-foreground mb-4">
                Let's practice adding a transaction to get familiar with the process.
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    placeholder="e.g., Grocery shopping"
                    value={demoTransaction.description}
                    onChange={(e) => updateDemoTransaction("description", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    placeholder="0.00"
                    value={demoTransaction.amount}
                    onChange={(e) => updateDemoTransaction("amount", e.target.value)}
                    className="currency"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="expense-type"
                    checked={demoTransaction.isExpense}
                    onCheckedChange={(checked) => updateDemoTransaction("isExpense", checked)}
                  />
                  <Label htmlFor="expense-type" className={demoTransaction.isExpense ? "text-expense" : "text-income"}>
                    This is an {demoTransaction.isExpense ? "expense" : "income"}
                  </Label>
                </div>
              </div>
            </CardContent>
          </>
        )

      case 4: // Monitor Progress
        return (
          <>
            <div className="flex justify-center mb-4">
              <BarChart3 className="h-16 w-16 text-primary" />
            </div>
            <CardTitle className="text-center font-heading">Monitor Your Progress</CardTitle>
            <CardContent>
              <p className="text-center text-muted-foreground">
                View detailed charts and reports to understand your spending habits.
              </p>

              <div className="mt-4 flex justify-center">
                <div className="w-full max-w-xs">
                  <div className="bg-muted rounded-md p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Housing</span>
                        <span className="font-mono">35%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "35%" }}></div>
                      </div>
                    </div>

                    <div className="space-y-2 mt-3">
                      <div className="flex justify-between text-sm">
                        <span>Food</span>
                        <span className="font-mono">25%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                    </div>

                    <div className="space-y-2 mt-3">
                      <div className="flex justify-between text-sm">
                        <span>Transportation</span>
                        <span className="font-mono">15%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </>
        )

      case 5: // Feedback
        return (
          <>
            <div className="flex justify-center mb-4">
              <Star className="h-16 w-16 text-primary" />
            </div>
            <CardTitle className="text-center font-heading">How was your experience?</CardTitle>
            <CardContent>
              <p className="text-center text-muted-foreground mb-6">
                Your feedback helps us improve the onboarding process.
              </p>

              <div className="flex justify-center space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <Button
                    key={rating}
                    variant={feedbackRating === rating ? "default" : "outline"}
                    size="icon"
                    className="h-12 w-12 font-mono"
                    onClick={() => setFeedbackRating(rating as any)}
                  >
                    {rating}
                  </Button>
                ))}
              </div>

              <p className="text-center text-sm text-muted-foreground mt-4">
                {feedbackRating
                  ? feedbackRating >= 4
                    ? "Great! We're glad you enjoyed it."
                    : "Thanks for your feedback. We'll work on improving."
                  : "Select a rating from 1-5"}
              </p>
            </CardContent>
          </>
        )

      default:
        return null
    }
  }

  const canProceed = () => {
    if (currentStep === 1 && !userRole) return false
    if (currentStep === 3 && (!demoTransaction.description || !demoTransaction.amount)) return false
    if (currentStep === 5 && !feedbackRating) return false
    return true
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
            <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={skipOnboarding}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>
          </CardHeader>

          <div className="flex justify-center px-6">
            <div className="flex space-x-1">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-1.5 rounded-full ${index === currentStep ? "bg-primary w-8" : "bg-muted w-4"}`}
                  initial={{ opacity: 0.6 }}
                  animate={{
                    opacity: index === currentStep ? 1 : 0.6,
                    width: index === currentStep ? 32 : 16,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>

          <CardFooter className="flex justify-between mt-4">
            <div>
              {currentStep > 0 ? (
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              ) : (
                <Button variant="ghost" onClick={skipOnboarding}>
                  Skip
                </Button>
              )}
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" size="icon" onClick={toggleHelpCenter}>
                <HelpCircle className="h-4 w-4" />
              </Button>

              <Button onClick={nextStep} disabled={!canProceed()} className={!canProceed() ? "opacity-50" : ""}>
                {currentStep === totalSteps - 1 ? "Get Started" : "Next"}
                {currentStep !== totalSteps - 1 && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  )
}

