"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Search,
  MoreVertical,
  Send,
  Paperclip,
  MapPin,
  Calendar,
  Shield,
  Phone,
  Video,
  MessageCircle,
} from "lucide-react"
import BottomNavigation from "@/components/bottom-navigation"

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState<number | null>(null)

  const conversations = [
    {
      id: 1,
      name: "Emma",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "When do you arrive in Paris?",
      time: "2m ago",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "James",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "The beach here is amazing!",
      time: "1h ago",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: "Sophia",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Let's meet at the Tokyo Tower",
      time: "5h ago",
      unread: 0,
      online: true,
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "Emma",
      text: "Hi! I saw we're both going to be in Paris next week!",
      time: "10:30 AM",
      isMine: false,
    },
    { id: 2, sender: "You", text: "Yes! I'm so excited. I arrive on Tuesday morning.", time: "10:32 AM", isMine: true },
    {
      id: 3,
      sender: "Emma",
      text: "That's perfect! I'll be there Monday. Would you like to meet up for coffee or explore some sights together?",
      time: "10:35 AM",
      isMine: false,
    },
    {
      id: 4,
      sender: "You",
      text: "I'd love to! I was planning to visit the Louvre on Wednesday. Would you like to join?",
      time: "10:40 AM",
      isMine: true,
    },
    {
      id: 5,
      sender: "Emma",
      text: "That sounds perfect! What time were you thinking?",
      time: "10:42 AM",
      isMine: false,
    },
    {
      id: 6,
      sender: "Emma",
      text: "Also, have you booked your accommodation yet? I found a great place near the city center.",
      time: "10:43 AM",
      isMine: false,
    },
    {
      id: 7,
      sender: "You",
      text: "I was thinking around 10am for the Louvre. And yes, I've booked a small hotel in Le Marais district.",
      time: "10:50 AM",
      isMine: true,
    },
    { id: 8, sender: "Emma", text: "When do you arrive in Paris?", time: "10:55 AM", isMine: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white p-4 border-b sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          {activeChat ? (
            <>
              <Link href="/messages" className="flex items-center" onClick={() => setActiveChat(null)}>
                <ArrowLeft className="h-5 w-5 mr-2" />
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Emma" />
                  <AvatarFallback>EM</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-sm font-medium">Emma</h1>
                  <div className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
                    <span className="text-xs text-gray-500">Online</span>
                  </div>
                </div>
              </Link>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Video className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-xl font-bold text-rose-500">Messages</h1>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </>
          )}
        </div>
      </header>

      <main className="max-w-lg mx-auto pb-20">
        {!activeChat ? (
          <div className="p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages"
                className="w-full pl-10 pr-4 py-2 border rounded-full text-sm"
              />
            </div>

            <div className="space-y-2">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
                  onClick={() => setActiveChat(conversation.id)}
                >
                  <div className="relative">
                    <Avatar className="h-12 w-12 mr-3">
                      <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                      <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {conversation.online && (
                      <span className="absolute bottom-0 right-3 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium truncate">{conversation.name}</h3>
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                  </div>

                  {conversation.unread > 0 && <Badge className="ml-2 bg-rose-500">{conversation.unread}</Badge>}
                </div>
              ))}
            </div>

            {conversations.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">No messages yet</h3>
                <p className="text-gray-500 text-sm mt-1 mb-4">Connect with travelers to start chatting</p>
                <Link href="/dashboard">
                  <Button className="bg-rose-500 hover:bg-rose-600">Find Travelers</Button>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col h-[calc(100vh-8rem)]">
            <div className="p-4 border-b bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">Paris, France</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">May 15-22, 2025</span>
                </div>
                <Badge className="bg-blue-500">
                  <Shield className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isMine ? "justify-end" : "justify-start"}`}>
                  {!message.isMine && (
                    <Avatar className="h-8 w-8 mr-2 mt-1">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt={message.sender} />
                      <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}

                  <div
                    className={`max-w-[70%] ${message.isMine ? "bg-rose-500 text-white" : "bg-gray-100 text-gray-800"} rounded-2xl p-3`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.isMine ? "text-rose-100" : "text-gray-500"}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t bg-white">
              <div className="flex items-center">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Paperclip className="h-5 w-5 text-gray-500" />
                </Button>
                <Input placeholder="Type a message..." className="flex-1 mx-2 rounded-full" />
                <Button size="icon" className="rounded-full bg-rose-500 hover:bg-rose-600">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>

      <BottomNavigation />
    </div>
  )
}
