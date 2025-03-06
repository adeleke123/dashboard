"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { PiggyBank, LogOut, User } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [userName, setUserName] = useState("")

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem("user")
    if (userData) {
      const user = JSON.parse(userData)
      setUserName(user.name.split(" ")[0]) // Get first name
    }
  }, [])

  const handleLogout = () => {
    // In a real app, you would clear the session/token
    // For this demo, we'll just redirect to login
    router.push("/login")
  }

  // Don't show navigation on login or signup pages
  if (pathname === "/login" || pathname === "/signup") {
    return null
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <PiggyBank className="h-6 w-6 text-primary" />
          <span className="font-heading font-bold text-xl">Finance Tracker</span>
        </Link>

        <div className="flex items-center space-x-4">
          {userName && (
            <div className="flex items-center text-sm">
              <User className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>Hi, {userName}</span>
            </div>
          )}

          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}

