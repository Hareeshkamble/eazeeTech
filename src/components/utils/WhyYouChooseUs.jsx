import { Award, Truck, Umbrella } from "lucide-react"

export default function WhyChooseUs() {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      {/* Curved dotted line - using pseudo-elements and absolute positioning */}
      <div className="hidden md:block absolute w-full h-full top-0 left-0 pointer-events-none">
        <div className="absolute w-[80%] h-[60%] top-[40%] left-[10%] border-t-2 border-l-2 border-r-2 border-dashed border-gray-200 rounded-t-[100px] z-0"></div>
      </div>

      <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">Why choose us?</h2>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {/* Fast & Free Shipping */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-gray-100 rounded-lg">
              <Truck className="h-8 w-8 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">FAST & FREE SHIPPING</h3>
            <p className="text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="bg-blue-600 text-white rounded-lg p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-white/20 rounded-lg">
              <Umbrella className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">WARRANTY PROTECTION</h3>
            <p>Enjoy peace of mind with our reliable warranty coverage, ensuring long-term product performance and support.</p>
          </div>
        </div>

        {/* Premium Materials */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-gray-100 rounded-lg">
              <Award className="h-8 w-8 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 uppercase"> Committed to Your Growth </h3>
            <p className="text-gray-600">We go the extra mile to help you succeed.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

