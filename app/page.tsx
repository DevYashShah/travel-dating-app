import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-rose-50 to-sky-50">
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-8 relative">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-rose-500/10 blur-3xl"></div>
            <div className="absolute top-8 -left-8 w-24 h-24 rounded-full bg-sky-500/10 blur-3xl"></div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">
              Wander<span className="text-rose-500">Match</span>
            </h1>
            <p className="text-gray-600 text-lg">Connect with travelers who share your wanderlust</p>
          </div>

          <div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/placeholder.svg?height=256&width=384"
              alt="Travel dating app preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 text-white text-left">
                <p className="text-sm font-medium">Find your perfect</p>
                <h2 className="text-xl font-bold">Travel Companion</h2>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Link href="/onboarding" className="w-full">
              <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-6">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link href="/login" className="w-full">
              <Button variant="outline" className="w-full py-6">
                I already have an account
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-sm text-gray-500">
        <p>© 2025 WanderMatch. All rights reserved.</p>
      </footer>
    </div>
  )
}
