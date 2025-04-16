"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, MapPin, Compass, Bell, Settings, Search, Filter, Shield } from "lucide-react"
import BottomNavigation from "@/components/bottom-navigation"

export default function DashboardPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const mockProfiles = [
    {
      id: 1,
      name: "Emma",
      age: 28,
      location: "Paris, France",
      distance: "Currently there",
      bio: "Adventure seeker looking for someone to explore the city of lights with me!",
      compatibility: 92,
      travelStyle: "Explorer",
      images: ["/placeholder.svg?height=400&width=300"],
      verified: true,
    },
    {
      id: 2,
      name: "James",
      age: 31,
      location: "Bali, Indonesia",
      distance: "Planning trip in 2 weeks",
      bio: "Digital nomad seeking travel companions for island hopping and surfing.",
      compatibility: 85,
      travelStyle: "Nomad",
      images: ["/placeholder.svg?height=400&width=300"],
      verified: true,
    },
    {
      id: 3,
      name: "Sophia",
      age: 26,
      location: "Tokyo, Japan",
      distance: "Currently there",
      bio: "Foodie and culture enthusiast looking for someone to share amazing experiences.",
      compatibility: 78,
      travelStyle: "Cultural",
      images: ["/placeholder.svg?height=400&width=300"],
      verified: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white p-4 border-b sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <h1 className="text-xl font-bold text-rose-500">WanderMatch</h1>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto pb-20">
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations or travelers"
                className="w-full pl-10 pr-4 py-2 border rounded-full text-sm"
              />
            </div>
            <Button variant="outline" size="icon" className="rounded-full">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex overflow-x-auto pb-2 mb-4 gap-2 no-scrollbar">
            {["all", "nearby", "popular", "new", "verified"].map((filter) => (
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

          <Tabs defaultValue="discover">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="discover">Discover</TabsTrigger>
              <TabsTrigger value="matches">Matches</TabsTrigger>
              <TabsTrigger value="trips">Trips</TabsTrigger>
            </TabsList>

            <TabsContent value="discover" className="space-y-6">
              {mockProfiles.map((profile) => (
                <Card key={profile.id} className="overflow-hidden">
                  <div className="relative">
                    <img
                      src={profile.images[0] || "/placeholder.svg"}
                      alt={profile.name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                    <div className="absolute top-4 left-4 flex space-x-2">
                      <Badge className="bg-rose-500">{profile.travelStyle}</Badge>
                      {profile.verified && (
                        <Badge className="bg-blue-500">
                          <Shield className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="text-xl font-bold">
                            {profile.name}, {profile.age}
                          </h3>
                          <div className="flex items-center text-sm">
                            <MapPin className="h-3 w-3 mr-1" />
                            {profile.location}
                          </div>
                          <div className="text-xs text-gray-300 mt-1">{profile.distance}</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium">
                          {profile.compatibility}% Match
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-gray-700 text-sm mb-4">{profile.bio}</p>

                    <div className="flex justify-between">
                      <Button variant="outline" className="flex-1 mr-2">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                      <Button className="flex-1 bg-rose-500 hover:bg-rose-600">
                        <Heart className="h-4 w-4 mr-2" />
                        Connect
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="matches">
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">No matches yet</h3>
                <p className="text-gray-500 text-sm mt-1 mb-4">
                  Start connecting with travelers to see your matches here
                </p>
                <Button className="bg-rose-500 hover:bg-rose-600">Discover Travelers</Button>
              </div>
            </TabsContent>

            <TabsContent value="trips">
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Compass className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">No trips planned</h3>
                <p className="text-gray-500 text-sm mt-1 mb-4">Create or join a trip to start your adventure</p>
                <Button className="bg-rose-500 hover:bg-rose-600">Plan a Trip</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}
