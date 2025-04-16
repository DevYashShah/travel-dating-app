"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Facebook, Instagram } from "lucide-react"
import OnboardingProgress from "@/components/onboarding-progress"

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const totalSteps = 4

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-sky-50 p-4">
      <div className="max-w-md mx-auto pt-8">
        <Link href="/" className="inline-flex items-center text-gray-600 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to home
        </Link>

        <OnboardingProgress currentStep={step} totalSteps={totalSteps} />

        <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-2">
          {step === 1 && "Create your account"}
          {step === 2 && "Verify your identity"}
          {step === 3 && "Travel preferences"}
          {step === 4 && "Almost there!"}
        </h1>

        <p className="text-gray-600 mb-6">
          {step === 1 && "Choose how you'd like to register"}
          {step === 2 && "Help us keep the community safe"}
          {step === 3 && "Tell us about your travel style"}
          {step === 4 && "Set up your profile details"}
        </p>

        {step === 1 && (
          <Card className="p-6">
            <Tabs defaultValue="email">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="phone">Phone</TabsTrigger>
                <TabsTrigger value="social">Social</TabsTrigger>
              </TabsList>

              <TabsContent value="email" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Create password</Label>
                  <Input id="password" type="password" placeholder="Create a secure password" />
                </div>
              </TabsContent>

              <TabsContent value="phone" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <p className="text-sm text-gray-500">We'll send you a verification code</p>
              </TabsContent>

              <TabsContent value="social" className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Facebook className="mr-2 h-4 w-4 text-blue-600" />
                  Continue with Facebook
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Instagram className="mr-2 h-4 w-4 text-rose-600" />
                  Continue with Instagram
                </Button>
              </TabsContent>
            </Tabs>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <Button onClick={nextStep} className="w-full bg-rose-500 hover:bg-rose-600">
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </Card>
        )}

        {step === 2 && (
          <Card className="p-6">
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mb-2">Upload a selfie or photo ID</p>
                <Button variant="outline" size="sm">
                  Choose file
                </Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullname">Full legal name</Label>
                <Input id="fullname" placeholder="As it appears on your ID" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthdate">Date of birth</Label>
                <Input id="birthdate" type="date" />
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="verification" className="mr-2" />
                <Label htmlFor="verification" className="text-sm">
                  I confirm this is my real identity and information
                </Label>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex space-x-4">
              <Button variant="outline" onClick={prevStep} className="w-1/2">
                Back
              </Button>
              <Button onClick={nextStep} className="w-1/2 bg-rose-500 hover:bg-rose-600">
                Continue
              </Button>
            </div>
          </Card>
        )}

        {step === 3 && (
          <Card className="p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>I travel as a:</Label>
                <div className="grid grid-cols-2 gap-3">
                  {["Solo Traveler", "Group Seeker", "Travel Funder", "Nomad"].map((type) => (
                    <Button key={type} variant="outline" className="justify-start h-auto py-3">
                      {type}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>I'm looking for:</Label>
                <div className="grid grid-cols-2 gap-3">
                  {["Romance", "Friendship", "Adventure Partners", "Local Guides"].map((type) => (
                    <Button key={type} variant="outline" className="justify-start h-auto py-3">
                      {type}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>My travel style:</Label>
                <div className="grid grid-cols-2 gap-3">
                  {["Luxury", "Budget", "Adventure", "Cultural", "Relaxation", "Foodie"].map((style) => (
                    <Button key={style} variant="outline" className="justify-start h-auto py-3">
                      {style}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex space-x-4">
              <Button variant="outline" onClick={prevStep} className="w-1/2">
                Back
              </Button>
              <Button onClick={nextStep} className="w-1/2 bg-rose-500 hover:bg-rose-600">
                Continue
              </Button>
            </div>
          </Card>
        )}

        {step === 4 && (
          <Card className="p-6">
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mb-2">Upload profile photos</p>
                <Button variant="outline" size="sm">
                  Add photos
                </Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea
                  id="bio"
                  className="w-full min-h-[100px] p-3 border rounded-md"
                  placeholder="Tell potential matches about yourself and your travel dreams..."
                />
              </div>

              <div className="space-y-2">
                <Label>Top destinations I want to visit:</Label>
                <Input placeholder="Add destinations" />
              </div>

              <div className="space-y-2">
                <Label>Languages I speak:</Label>
                <Input placeholder="Add languages" />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex space-x-4">
              <Button variant="outline" onClick={prevStep} className="w-1/2">
                Back
              </Button>
              <Link href="/dashboard" className="w-1/2">
                <Button className="w-full bg-rose-500 hover:bg-rose-600">Complete Profile</Button>
              </Link>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
