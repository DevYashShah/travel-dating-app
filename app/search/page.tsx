"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, MapPin, Calendar, Users, Plane, Globe, CreditCard, Star } from "lucide-react"
import BottomNavigation from "@/components/bottom-navigation"

export default function SearchPage() {
  const [activeFilter, setActiveFilter] = useState("destinations")

  const destinations = [
    {
      id: 1,
      name: "Paris, France",
      image: "/placeholder.svg?height=200&width=300",
      travelers: 245,
      rating: 4.8,
      popular: true,
    },
    {
      id: 2,
      name: "Bali, Indonesia",
      image: "/placeholder.svg?height=200&width=300",
      travelers: 189,
      rating: 4.7,
      popular: true,
    },
    {
      id: 3,
      name: "Tokyo, Japan",
      image: "/placeholder.svg?height=200&width=300",
      travelers: 156,
      rating: 4.9,
      popular: false,
    },
    {
      id: 4,
      name: "Santorini, Greece",
      image: "/placeholder.svg?height=200&width=300",
      travelers: 132,
      rating: 4.6,
      popular: true,
    },
  ]

  const groups = [
    {
      id: 1,
      name: "European Summer Adventure",
      image: "/placeholder.svg?height=120&width=200",
      members: 8,
      destinations: ["Paris", "Rome", "Barcelona"],
      dates: "Jun 15 - Jul 10, 2025",
    },
    {
      id: 2,
      name: "Southeast Asia Backpackers",
      image: "/placeholder.svg?height=120&width=200",
      members: 12,
      destinations: ["Bangkok", "Bali", "Singapore"],
      dates: "Sep 5 - Oct 2, 2025",
    },
    {
      id: 3,
      name: "Japan Cherry Blossom Tour",
      image: "/placeholder.svg?height=120&width=200",
      members: 6,
      destinations: ["Tokyo", "Kyoto", "Osaka"],
      dates: "Mar 20 - Apr 5, 2025",
    },
  ]

  const events = [
    {
      id: 1,
      name: "Paris Travelers Meetup",
      image: "/placeholder.svg?height=120&width=200",
      location: "Le Marais, Paris",
      date: "May 18, 2025",
      attendees: 24,
    },
    {
      id: 2,
      name: "Bali Beach Party",
      image: "/placeholder.svg?height=120&width=200",
      location: "Kuta Beach, Bali",
      date: "Jun 5, 2025",
      attendees: 45,
    },
    {
      id: 3,
      name: "Tokyo Food Tour",
      image: "/placeholder.svg?height=120&width=200",
      location: "Shibuya, Tokyo",
      date: "Apr 12, 2025",
      attendees: 18,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white p-4 border-b sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <h1 className="text-xl font-bold text-rose-500">Explore</h1>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Filter className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="max-w-lg mx-auto pb-20">
        <div className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations, travelers, or groups"
              className="w-full pl-10 pr-4 py-2 border rounded-full text-sm"
            />
          </div>

          <div className="flex overflow-x-auto pb-2 mb-4 gap-2 no-scrollbar">
            {["destinations", "groups", "events", "funded"].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`rounded-full text-xs whitespace-nowrap px-4 ${
                  activeFilter === filter ? "bg-rose-500 hover:bg-rose-600" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Button>
            ))}
          </div>

          <Tabs defaultValue="popular">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="nearby">Nearby</TabsTrigger>
            </TabsList>

            <TabsContent value="popular" className="space-y-6">
              {activeFilter === "destinations" && (
                <div className="grid grid-cols-2 gap-4">
                  {destinations.map((destination) => (
                    <Card key={destination.id} className="overflow-hidden">
                      <div className="relative">
                        <img
                          src={destination.image || "/placeholder.svg"}
                          alt={destination.name}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {destination.popular && (
                          <Badge className="absolute top-2 left-2 bg-rose-500">
                            <Star className="h-3 w-3 mr-1 fill-white" />
                            Popular
                          </Badge>
                        )}

                        <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                          <h3 className="font-bold text-sm">{destination.name}</h3>
                        </div>
                      </div>

                      <div className="p-2">
                        <div className="flex justify-between items-center text-xs text-gray-600">
                          <div className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {destination.travelers} travelers
                          </div>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                            {destination.rating}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {activeFilter === "groups" && (
                <div className="space-y-4">
                  {groups.map((group) => (
                    <Card key={group.id} className="overflow-hidden">
                      <div className="flex">
                        <div className="w-1/3">
                          <img
                            src={group.image || "/placeholder.svg"}
                            alt={group.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-2/3 p-3">
                          <h3 className="font-medium text-sm mb-1">{group.name}</h3>
                          <div className="flex items-center text-xs text-gray-600 mb-1">
                            <Users className="h-3 w-3 mr-1" />
                            {group.members} members
                          </div>
                          <div className="flex items-center text-xs text-gray-600 mb-1">
                            <Plane className="h-3 w-3 mr-1" />
                            {group.destinations.join(", ")}
                          </div>
                          <div className="flex items-center text-xs text-gray-600">
                            <Calendar className="h-3 w-3 mr-1" />
                            {group.dates}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {activeFilter === "events" && (
                <div className="space-y-4">
                  {events.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="flex">
                        <div className="w-1/3">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-2/3 p-3">
                          <h3 className="font-medium text-sm mb-1">{event.name}</h3>
                          <div className="flex items-center text-xs text-gray-600 mb-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            {event.location}
                          </div>
                          <div className="flex items-center text-xs text-gray-600 mb-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            {event.date}
                          </div>
                          <div className="flex items-center text-xs text-gray-600">
                            <Users className="h-3 w-3 mr-1" />
                            {event.attendees} attending
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {activeFilter === "funded" && (
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-start mb-4">
                      <div className="bg-amber-100 p-2 rounded-full mr-3">
                        <CreditCard className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Funded Travel Opportunities</h3>
                        <p className="text-sm text-gray-600">
                          Connect with travelers offering sponsored trips or looking to share expenses
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="border rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-sm">Luxury Yacht Experience</h4>
                            <div className="flex items-center text-xs text-gray-600 mt-1">
                              <Globe className="h-3 w-3 mr-1" />
                              Mediterranean Sea
                            </div>
                            <div className="flex items-center text-xs text-gray-600 mt-1">
                              <Calendar className="h-3 w-3 mr-1" />
                              Jul 10-20, 2025
                            </div>
                          </div>
                          <Badge className="bg-green-500">Fully Funded</Badge>
                        </div>
                        <div className="mt-2 flex justify-between items-center">
                          <div className="flex -space-x-2">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className="h-6 w-6 rounded-full bg-gray-200 border border-white"></div>
                            ))}
                          </div>
                          <Button size="sm" className="bg-rose-500 hover:bg-rose-600">
                            Apply
                          </Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-sm">Safari Adventure</h4>
                            <div className="flex items-center text-xs text-gray-600 mt-1">
                              <Globe className="h-3 w-3 mr-1" />
                              Kenya
                            </div>
                            <div className="flex items-center text-xs text-gray-600 mt-1">
                              <Calendar className="h-3 w-3 mr-1" />
                              Sep 5-15, 2025
                            </div>
                          </div>
                          <Badge className="bg-blue-500">50% Funded</Badge>
                        </div>
                        <div className="mt-2 flex justify-between items-center">
                          <div className="flex -space-x-2">
                            {[...Array(2)].map((_, i) => (
                              <div key={i} className="h-6 w-6 rounded-full bg-gray-200 border border-white"></div>
                            ))}
                          </div>
                          <Button size="sm" className="bg-rose-500 hover:bg-rose-600">
                            Apply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </TabsContent>

            <TabsContent value="trending">
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Coming Soon</h3>
                <p className="text-gray-500 text-sm mt-1 mb-4">We're gathering the hottest trending destinations</p>
              </div>
            </TabsContent>

            <TabsContent value="nearby">
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Enable Location</h3>
                <p className="text-gray-500 text-sm mt-1 mb-4">
                  Allow location access to see nearby travelers and events
                </p>
                <Button className="bg-rose-500 hover:bg-rose-600">Enable Location</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}
