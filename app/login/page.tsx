"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Mail, Lock, Facebook, Instagram } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-sky-50 p-4 flex flex-col">
      <div className="max-w-md mx-auto w-full pt-8">
        <Link href="/" className="inline-flex items-center text-gray-600 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to home
        </Link>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h1>
        <p className="text-gray-600 mb-6">Sign in to continue your journey</p>

        <Card className="p-6 mb-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input id="email" type="email" placeholder="Enter your email" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-xs text-rose-500 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input id="password" type="password" placeholder="Enter your password" className="pl-10" />
              </div>
            </div>

            <Button className="w-full bg-rose-500 hover:bg-rose-600 py-6">
              Sign In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <Facebook className="mr-2 h-4 w-4 text-blue-600" />
              Facebook
            </Button>
            <Button variant="outline" className="w-full">
              <Instagram className="mr-2 h-4 w-4 text-rose-600" />
              Instagram
            </Button>
          </div>
        </Card>

        <p className="text-center text-gray-600 text-sm">
          Don't have an account?{" "}
          <Link href="/onboarding" className="text-rose-500 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
