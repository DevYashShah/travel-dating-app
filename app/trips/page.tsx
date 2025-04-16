"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Plus, Calendar, MapPin, Users, Plane, CreditCard, Clock, ChevronRight, Filter } from "lucide-react"
import BottomNavigation from "@/components/bottom-navigation"

export default function TripsPage() {
  const [view, setView] = useState("list")

  const trips = [
    {
      id: 1,
      name: "Paris Adventure",
      image: "/placeholder.svg?height=200&width=300",
      dates: "May 15-22, 2025",
      location: "Paris, France",
      companions: 2,
      status: "upcoming",
      budget: "$2,500",
      activities: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"],
    },
    {
      id: 2,
      name: "Bali Getaway",
      image: "/placeholder.svg?height=200&width=300",
      dates: "August 10-20, 2025",
      location: "Bali, Indonesia",
      companions: 3,
      status: "planning",
      budget: "$3,200",
      activities: ["Beach Day", "Temple Visit", "Surfing Lessons"],
    },
    {
      id: 3,
      name: "Tokyo Exploration",
      image: "/placeholder.svg?height=200&width=300",
      dates: "October 5-15, 2025",
      location: "Tokyo, Japan",
      companions: 1,
      status: "planning",
      budget: "$4,000",
      activities: ["Shibuya Crossing", "Mount Fuji Day Trip", "Sushi Making Class"],
    },
  ]

  const invitations = [
    {
      id: 1,
      name: "European Summer Tour",
      image: "/placeholder.svg?height=120&width=200",
      dates: "June 15 - July 10, 2025",
      locations: ["Paris", "Rome", "Barcelona"],
      inviter: {
        name: "James",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      companions: 6,
    },
    {
      id: 2,
      name: "Greek Island Hopping",
      image: "/placeholder.svg?height=120&width=200",
      dates: "September 5-20, 2025",
      locations: ["Athens", "Mykonos", "Santorini"],
      inviter: {
        name: "Sophia",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      companions: 4,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white p-4 border-b sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <Link href="/dashboard" className="flex items-center text-gray-600">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </Link>
          <h1 className="text-xl font-bold text-rose-500">My Trips</h1>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Filter className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="max-w-lg mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            <Button
              variant={view === "list" ? "default" : "outline"}
              className={view === "list" ? "bg-rose-500 hover:bg-rose-600" : ""}
              onClick={() => setView("list")}
            >
              List
            </Button>
            <Button
              variant={view === "calendar" ? "default" : "outline"}
              className={view === "calendar" ? "bg-rose-500 hover:bg-rose-600" : ""}
              onClick={() => setView("calendar")}
            >
              Calendar
            </Button>
          </div>
          <Button className="bg-rose-500 hover:bg-rose-600">
            <Plus className="h-4 w-4 mr-2" />
            New Trip
          </Button>
        </div>

        <Tabs defaultValue="upcoming">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="planning">Planning</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            {view === "list" ? (
              <div className="space-y-4">
                {trips
                  .filter((trip) => trip.status === "upcoming")
                  .map((trip) => (
                    <Card key={trip.id} className="overflow-hidden">
                      <div className="relative">
                        <img
                          src={trip.image || "/placeholder.svg"}
                          alt={trip.name}
                          className="w-full h-40 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-green-500">Upcoming</Badge>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                          <h3 className="text-xl font-bold">{trip.name}</h3>
                          <div className="flex items-center text-sm">
                            <MapPin className="h-4 w-4 mr-1" />
                            {trip.location}
                          </div>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="text-sm">{trip.dates}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Users className="h-4 w-4 mr-1" />
                            <span className="text-sm">{trip.companions} companions</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center text-gray-600">
                            <CreditCard className="h-4 w-4 mr-1" />
                            <span className="text-sm">Budget: {trip.budget}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-1" />
                            <span className="text-sm">7 days</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">Activities:</h4>
                          <div className="flex flex-wrap gap-2">
                            {trip.activities.map((activity, index) => (
                              <Badge key={index} variant="outline" className="bg-gray-50">
                                {activity}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex -space-x-2">
                            {[...Array(trip.companions)].map((_, i) => (
                              <Avatar key={i} className="h-8 w-8 border-2 border-white">
                                <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                                <AvatarFallback>U{i + 1}</AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                          <Button variant="outline" className="text-rose-500 border-rose-200">
                            View Details
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}

                <h3 className="text-lg font-semibold mt-8 mb-4">Trip Invitations</h3>

                {invitations.map((invitation) => (
                  <Card key={invitation.id} className="p-4">
                    <div className="flex">
                      <div className="w-1/3 mr-3">
                        <img
                          src={invitation.image || "/placeholder.svg"}
                          alt={invitation.name}
                          className="w-full h-24 object-cover rounded-md"
                        />
                      </div>
                      <div className="w-2/3">
                        <h3 className="font-medium mb-1">{invitation.name}</h3>
                        <div className="flex items-center text-xs text-gray-600 mb-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          {invitation.dates}
                        </div>
                        <div className="flex items-center text-xs text-gray-600 mb-1">
                          <Plane className="h-3 w-3 mr-1" />
                          {invitation.locations.join(", ")}
                        </div>
                        <div className="flex items-center text-xs text-gray-600 mb-2">
                          <Users className="h-3 w-3 mr-1" />
                          {invitation.companions} travelers
                        </div>

                        <div className="flex items-center">
                          <Avatar className="h-6 w-6 mr-2">
                            <AvatarImage src={invitation.inviter.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{invitation.inviter.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-xs">Invited by {invitation.inviter.name}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2 mt-3">
                      <Button variant="outline" className="flex-1">
                        Decline
                      </Button>
                      <Button className="flex-1 bg-rose-500 hover:bg-rose-600">Accept</Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Calendar View</h3>
                <p className="text-gray-500 text-sm mt-1 mb-4">Calendar view is coming soon</p>
                <Button variant="outline" onClick={() => setView("list")}>
                  Switch to List View
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="planning">
            <div className="space-y-4">
              {trips
                .filter((trip) => trip.status === "planning")
                .map((trip) => (
                  <Card key={trip.id} className="overflow-hidden">
                    <div className="relative">
                      <img
                        src={trip.image || "/placeholder.svg"}
                        alt={trip.name}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-blue-500">Planning</Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                        <h3 className="text-xl font-bold">{trip.name}</h3>
                        <div className="flex items-center text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          {trip.location}
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">{trip.dates}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="h-4 w-4 mr-1" />
                          <span className="text-sm">{trip.companions} companions</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center text-gray-600">
                          <CreditCard className="h-4 w-4 mr-1" />
                          <span className="text-sm">Budget: {trip.budget}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">10 days</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Activities:</h4>
                        <div className="flex flex-wrap gap-2">
                          {trip.activities.map((activity, index) => (
                            <Badge key={index} variant="outline" className="bg-gray-50">
                              {activity}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex -space-x-2">
                          {[...Array(trip.companions)].map((_, i) => (
                            <Avatar key={i} className="h-8 w-8 border-2 border-white">
                              <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                              <AvatarFallback>U{i + 1}</AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                        <Button variant="outline" className="text-rose-500 border-rose-200">
                          Continue Planning
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No past trips</h3>
              <p className="text-gray-500 text-sm mt-1 mb-4">Your completed trips will appear here</p>
              <Button className="bg-rose-500 hover:bg-rose-600">
                <Plus className="h-4 w-4 mr-2" />
                Plan a Trip
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNavigation />
    </div>
  )
}
