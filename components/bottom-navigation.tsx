"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, MessageCircle, User, Shield } from "lucide-react"

export default function BottomNavigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4 z-10">
      <div className="max-w-lg mx-auto flex justify-between items-center">
        <Link href="/dashboard" className="flex flex-col items-center">
          <div className={`p-1 rounded-full ${isActive("/dashboard") ? "bg-rose-100" : ""}`}>
            <Home className={`h-6 w-6 ${isActive("/dashboard") ? "text-rose-500" : "text-gray-500"}`} />
          </div>
          <span className={`text-xs mt-1 ${isActive("/dashboard") ? "text-rose-500 font-medium" : "text-gray-500"}`}>
            Home
          </span>
        </Link>

        <Link href="/search" className="flex flex-col items-center">
          <div className={`p-1 rounded-full ${isActive("/search") ? "bg-rose-100" : ""}`}>
            <Search className={`h-6 w-6 ${isActive("/search") ? "text-rose-500" : "text-gray-500"}`} />
          </div>
          <span className={`text-xs mt-1 ${isActive("/search") ? "text-rose-500 font-medium" : "text-gray-500"}`}>
            Explore
          </span>
        </Link>

        <Link href="/safety" className="flex flex-col items-center">
          <div className={`p-1 rounded-full ${isActive("/safety") ? "bg-rose-100" : ""}`}>
            <Shield className={`h-6 w-6 ${isActive("/safety") ? "text-rose-500" : "text-gray-500"}`} />
          </div>
          <span className={`text-xs mt-1 ${isActive("/safety") ? "text-rose-500 font-medium" : "text-gray-500"}`}>
            Safety
          </span>
        </Link>

        <Link href="/messages" className="flex flex-col items-center">
          <div className={`p-1 rounded-full ${isActive("/messages") ? "bg-rose-100" : ""}`}>
            <MessageCircle className={`h-6 w-6 ${isActive("/messages") ? "text-rose-500" : "text-gray-500"}`} />
          </div>
          <span className={`text-xs mt-1 ${isActive("/messages") ? "text-rose-500 font-medium" : "text-gray-500"}`}>
            Messages
          </span>
        </Link>

        <Link href="/profile" className="flex flex-col items-center">
          <div className={`p-1 rounded-full ${isActive("/profile") ? "bg-rose-100" : ""}`}>
            <User className={`h-6 w-6 ${isActive("/profile") ? "text-rose-500" : "text-gray-500"}`} />
          </div>
          <span className={`text-xs mt-1 ${isActive("/profile") ? "text-rose-500 font-medium" : "text-gray-500"}`}>
            Profile
          </span>
        </Link>
      </div>
    </div>
  )
}
