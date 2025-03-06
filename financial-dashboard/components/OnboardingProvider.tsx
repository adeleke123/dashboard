"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type UserRole = "personal" | "business" | "family" | null
type FeedbackRating = 1 | 2 | 3 | 4 | 5 | null

type OnboardingContextType = {
  showOnboarding: boolean
  currentStep: number
  totalSteps: number
  userRole: UserRole
  feedbackRating: FeedbackRating
  demoTransaction: {
    description: string
    amount: string
    isExpense: boolean
  }
  nextStep: () => void
  prevStep: () => void
  skipOnboarding: () => void
  resetOnboarding: () => void
  setUserRole: (role: UserRole) => void
  setFeedbackRating: (rating: FeedbackRating) => void
  updateDemoTransaction: (field: string, value: string | boolean) => void
  showHelpCenter: boolean
  toggleHelpCenter: () => void
}

const defaultDemoTransaction = {
  description: "",
  amount: "",
  isExpense: true,
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined)

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [userRole, setUserRole] = useState<UserRole>(null)
  const [feedbackRating, setFeedbackRating] = useState<FeedbackRating>(null)
  const [demoTransaction, setDemoTransaction] = useState(defaultDemoTransaction)
  const [showHelpCenter, setShowHelpCenter] = useState(false)

  // We now have 6 steps: Welcome, Role Selection, Track Expenses, Demo Transaction, Monitor Progress, Feedback
  const totalSteps = 6

  useEffect(() => {
    // Check if this is the user's first visit
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding")
    if (!hasSeenOnboarding) {
      setShowOnboarding(true)
    }
  }, [])

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      completeOnboarding()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const skipOnboarding = () => {
    completeOnboarding()
  }

  const resetOnboarding = () => {
    localStorage.removeItem("hasSeenOnboarding")
    setShowOnboarding(true)
    setCurrentStep(0)
    setUserRole(null)
    setFeedbackRating(null)
    setDemoTransaction(defaultDemoTransaction)
  }

  const completeOnboarding = () => {
    // Save user preferences
    localStorage.setItem("hasSeenOnboarding", "true")
    if (userRole) {
      localStorage.setItem("userRole", userRole)
    }
    if (feedbackRating) {
      localStorage.setItem("onboardingFeedback", feedbackRating.toString())
    }

    setShowOnboarding(false)
  }

  const updateDemoTransaction = (field: string, value: string | boolean) => {
    setDemoTransaction((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const toggleHelpCenter = () => {
    setShowHelpCenter((prev) => !prev)
  }

  return (
    <OnboardingContext.Provider
      value={{
        showOnboarding,
        currentStep,
        totalSteps,
        userRole,
        feedbackRating,
        demoTransaction,
        nextStep,
        prevStep,
        skipOnboarding,
        resetOnboarding,
        setUserRole,
        setFeedbackRating,
        updateDemoTransaction,
        showHelpCenter,
        toggleHelpCenter,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  )
}

export function useOnboarding() {
  const context = useContext(OnboardingContext)
  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider")
  }
  return context
}

