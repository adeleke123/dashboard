"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PartyPopper, X } from "lucide-react"

export function WelcomeMessage() {
  const [showWelcome, setShowWelcome] = useState(false)
  const [userName, setUserName] = useState("")

  useEffect(() => {
    // Check if user is new
    const userData = localStorage.getItem("user")
    if (userData) {
      const user = JSON.parse(userData)
      if (user.isNewUser) {
        setUserName(user.name.split(" ")[0]) // Get first name
        setShowWelcome(true)

        // Update user so they're no longer considered new
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...user,
            isNewUser: false,
          }),
        )
      }
    }
  }, [])

  const handleClose = () => {
    setShowWelcome(false)
  }

  if (!showWelcome) {
    return null
  }

  return (
    <AnimatePresence>
      {showWelcome && (
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
                <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={handleClose}>
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>

                <div className="flex justify-center mb-4">
                  <PartyPopper className="h-16 w-16 text-primary" />
                </div>

                <CardTitle className="text-center font-heading text-2xl">
                  Welcome to Finance Tracker, {userName}!
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-center text-muted-foreground mb-4">
                  Thank you for signing up! We're excited to help you manage your finances and reach your financial
                  goals.
                </p>

                <div className="bg-muted p-4 rounded-md">
                  <h3 className="font-medium mb-2">Here's what you can do next:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">1.</span>
                      <span>Complete the onboarding process to customize your experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">2.</span>
                      <span>Add your first transaction to start tracking your finances</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">3.</span>
                      <span>Explore the dashboard to see your financial overview</span>
                    </li>
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="flex justify-center">
                <Button onClick={handleClose}>Get Started</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

