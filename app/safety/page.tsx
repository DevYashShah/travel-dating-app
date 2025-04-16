import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Shield, Bell, Share2, AlertTriangle, Phone, MapPin, Users } from "lucide-react"
import BottomNavigation from "@/components/bottom-navigation"

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white p-4 border-b sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <Link href="/dashboard" className="flex items-center text-gray-600">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </Link>
          <h1 className="text-xl font-bold text-rose-500">Safety Center</h1>
          <div className="w-5"></div>
        </div>
      </header>

      <main className="max-w-lg mx-auto p-4">
        <Card className="p-4 mb-6 bg-blue-50 border-blue-200">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-full mr-4">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-blue-800 mb-1">Safety is our priority</h2>
              <p className="text-sm text-blue-700">
                WanderMatch is committed to creating a safe environment for all travelers. Use these tools to stay safe
                during your journey.
              </p>
            </div>
          </div>
        </Card>

        <h2 className="text-lg font-semibold mb-3">Safety Tools</h2>

        <div className="space-y-4 mb-6">
          <Card className="p-4">
            <div className="flex items-start">
              <div className="bg-rose-100 p-2 rounded-full mr-4">
                <Share2 className="h-5 w-5 text-rose-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-1">Share Trip Details</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Share your itinerary and travel companion details with trusted contacts
                </p>
                <Button variant="outline" size="sm">
                  Share My Trip
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-start">
              <div className="bg-red-100 p-2 rounded-full mr-4">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-1">Emergency Alert</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Quickly alert emergency contacts and local authorities if you need help
                </p>
                <Button variant="destructive" size="sm">
                  Set Up Emergency Contacts
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-start">
              <div className="bg-amber-100 p-2 rounded-full mr-4">
                <Bell className="h-5 w-5 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-1">Safety Check-ins</h3>
                <p className="text-sm text-gray-600 mb-3">Schedule automatic check-ins during your trips and dates</p>
                <Button variant="outline" size="sm">
                  Set Up Check-ins
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Phone className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-1">Emergency Hotlines</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Quick access to local emergency numbers based on your location
                </p>
                <Button variant="outline" size="sm">
                  View Emergency Numbers
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <h2 className="text-lg font-semibold mb-3">Active Safety Features</h2>

        <Card className="p-4 mb-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-sm">Location Sharing</span>
              </div>
              <div className="relative">
                <input type="checkbox" id="location" className="sr-only" defaultChecked />
                <label htmlFor="location" className="block w-12 h-6 rounded-full bg-rose-500 cursor-pointer">
                  <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform transform translate-x-6"></span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-sm">Profile Privacy</span>
              </div>
              <div className="relative">
                <input type="checkbox" id="privacy" className="sr-only" defaultChecked />
                <label htmlFor="privacy" className="block w-12 h-6 rounded-full bg-rose-500 cursor-pointer">
                  <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform transform translate-x-6"></span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bell className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-sm">Safety Notifications</span>
              </div>
              <div className="relative">
                <input type="checkbox" id="notifications" className="sr-only" defaultChecked />
                <label htmlFor="notifications" className="block w-12 h-6 rounded-full bg-rose-500 cursor-pointer">
                  <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform transform translate-x-6"></span>
                </label>
              </div>
            </div>
          </div>
        </Card>

        <h2 className="text-lg font-semibold mb-3">Safety Resources</h2>

        <div className="space-y-2 mb-6">
          <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
            <Shield className="h-5 w-5 mr-3 text-gray-500" />
            <div>
              <p className="font-medium">Travel Safety Tips</p>
              <p className="text-xs text-gray-500">Best practices for safe travel</p>
            </div>
          </Button>

          <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
            <Shield className="h-5 w-5 mr-3 text-gray-500" />
            <div>
              <p className="font-medium">Community Guidelines</p>
              <p className="text-xs text-gray-500">Our rules for a safe community</p>
            </div>
          </Button>

          <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
            <Shield className="h-5 w-5 mr-3 text-gray-500" />
            <div>
              <p className="font-medium">Report a Concern</p>
              <p className="text-xs text-gray-500">How to report safety issues</p>
            </div>
          </Button>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-600 mb-2">Need immediate assistance?</p>
          <Button className="bg-red-500 hover:bg-red-600">
            <Phone className="h-4 w-4 mr-2" />
            Contact Emergency Services
          </Button>
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}
