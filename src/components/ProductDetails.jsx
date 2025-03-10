"use client"

import { useState } from "react"
import { Heart, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProductSection() {
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Product Image */}
        <div className="relative group">
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="Modern ergonomic chair"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
          >
            <Heart className="h-5 w-5" />
            <span className="sr-only">Add to wishlist</span>
          </button>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Ergonomic Office Chair</h1>
            <p className="text-lg text-muted-foreground mt-2">Premium comfort for long work hours</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < 4 ? "fill-primary text-primary" : "text-muted-foreground"}`} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(128 reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">$249.99</span>
            <span className="text-sm text-muted-foreground line-through">$299.99</span>
            <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded">Save 17%</span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground">
            Designed with ergonomics and comfort in mind, this premium office chair provides exceptional lumbar support
            and adjustable features to help you maintain proper posture during long work sessions. The breathable mesh
            back and cushioned seat ensure all-day comfort.
          </p>

          {/* Features */}
          <div className="space-y-2">
            <h3 className="font-medium">Key Features:</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Adjustable height and armrests</li>
              <li>Breathable mesh back</li>
              <li>360° swivel with smooth-rolling casters</li>
              <li>Weight capacity: 300 lbs</li>
              <li>5-year warranty</li>
            </ul>
          </div>

          {/* Quantity */}
          <div className="flex items-center space-x-4">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center border rounded-md">
              <button
                onClick={decrementQuantity}
                className="px-3 py-1 border-r hover:bg-muted transition-colors"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="px-3 py-1 border-l hover:bg-muted transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex-1 gap-2">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
            <button variant="outline" className="flex-1">
              Buy Now
            </button>
          </div>

          {/* Shipping Info */}
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <p className="text-sm">
                <span className="font-medium">Free shipping</span> on orders over $50. Expected delivery: 3-5 business
                days
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

