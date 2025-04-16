"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowLeft,
  Edit,
  MapPin,
  Calendar,
  Globe,
  MessageCircle,
  Heart,
  Shield,
  Star,
  Settings,
  Share2,
  Instagram,
  Music,
  Users,
} from "lucide-react"
import BottomNavigation from "@/components/bottom-navigation"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white p-4 border-b sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <Link href="/dashboard" className="flex items-center text-gray-600">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </Link>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto">
        <div className="relative">
          <div className="h-40 bg-gradient-to-r from-rose-400 to-sky-400"></div>
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <Avatar className="h-32 w-32 border-4 border-white">
              <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="mt-20 px-4 text-center">
          <div className="flex items-center justify-center mb-1">
            <h1 className="text-2xl font-bold text-gray-900 mr-2">Jessica Davis, 29</h1>
            <Badge className="bg-blue-500">
              <Shield className="h-3 w-3 mr-1" />
              Verified
            </Badge>
          </div>

          <div className="flex items-center justify-center text-gray-600 text-sm mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            San Francisco, California
          </div>

          <div className="flex justify-center space-x-4 mb-6">
            <Button variant="outline" className="rounded-full">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
            <Button className="rounded-full bg-rose-500 hover:bg-rose-600">
              <MessageCircle className="h-4 w-4 mr-2" />
              Message
            </Button>
          </div>

          <div className="flex justify-center space-x-8 mb-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">24</p>
              <p className="text-xs text-gray-500">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">156</p>
              <p className="text-xs text-gray-500">Connections</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">12</p>
              <p className="text-xs text-gray-500">Trips</p>
            </div>
          </div>
        </div>

        <Card className="mx-4 p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">About Me</h2>
          <p className="text-gray-700 mb-4">
            Digital nomad and adventure enthusiast. I love exploring new cultures, trying local cuisines, and meeting
            fellow travelers. Currently planning my next trip to Southeast Asia!
          </p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center text-sm">
              <Globe className="h-4 w-4 text-gray-500 mr-2" />
              <span>Travel Funder</span>
            </div>
            <div className="flex items-center text-sm">
              <Calendar className="h-4 w-4 text-gray-500 mr-2" />
              <span>Member since 2023</span>
            </div>
            <div className="flex items-center text-sm">
              <Star className="h-4 w-4 text-gray-500 mr-2" />
              <span>4.9 Rating</span>
            </div>
            <div className="flex items-center text-sm">
              <Heart className="h-4 w-4 text-gray-500 mr-2" />
              <span>Looking for Romance</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-sm font-medium mb-2">Connected Accounts</h3>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="rounded-full">
                <Instagram className="h-4 w-4 mr-2 text-rose-500" />
                Instagram
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <Music className="h-4 w-4 mr-2 text-green-500" />
                Spotify
              </Button>
            </div>
          </div>
        </Card>

        <div className="px-4 mb-6">
          <Tabs defaultValue="photos">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="photos">Photos</TabsTrigger>
              <TabsTrigger value="trips">Trips</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="photos">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-md overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=150&width=150`}
                      alt={`Travel photo ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="trips">
              <div className="space-y-4">
                <Card className="p-3">
                  <div className="flex items-start">
                    <div className="w-20 h-20 rounded-md overflow-hidden mr-3">
                      <img
                        src="/placeholder.svg?height=80&width=80"
                        alt="Bali trip"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Bali Adventure</h3>
                      <div className="flex items-center text-xs text-gray-500 mb-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        May 15-28, 2025
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Users className="h-3 w-3 mr-1" />2 travel companions
                      </div>
                    </div>
                    <Badge className="bg-green-500">Upcoming</Badge>
                  </div>
                </Card>

                <Card className="p-3">
                  <div className="flex items-start">
                    <div className="w-20 h-20 rounded-md overflow-hidden mr-3">
                      <img
                        src="/placeholder.svg?height=80&width=80"
                        alt="Paris trip"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Paris Getaway</h3>
                      <div className="flex items-center text-xs text-gray-500 mb-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        February 10-18, 2025
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Users className="h-3 w-3 mr-1" />1 travel companion
                      </div>
                    </div>
                    <Badge className="bg-gray-500">Completed</Badge>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="space-y-4">
                <Card className="p-3">
                  <div className="flex items-start mb-2">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Reviewer" />
                      <AvatarFallback>MK</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Michael K.</h3>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        Traveled together in March 2025
                      </div>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Jessica was an amazing travel companion! Very organized and fun to be around. Would definitely
                    travel with her again.
                  </p>
                </Card>

                <Card className="p-3">
                  <div className="flex items-start mb-2">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Reviewer" />
                      <AvatarFallback>AL</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Anna L.</h3>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        Traveled together in January 2025
                      </div>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Great experience traveling with Jessica. She knows all the best local spots and is very respectful
                    of different cultures.
                  </p>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}
