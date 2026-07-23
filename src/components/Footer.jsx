import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className="bg-gray-800 text-white mt-10">
      
      <div className="max-w-6xl mx-auto px-4 py-6 grid md:grid-cols-3 gap-4">

        {/* About */}
        <div>
          <h3 className="font-bold">Gas Point</h3>
          <p className="text-sm">
            Fast and reliable gas delivery service.
          </p>
        </div>

      
        {/* Contact */}
        <div>
          <h3 className="font-bold">Contact</h3>
          <p className="text-sm">Email: paulmuli878@gmail.com</p>
          <p className="text-sm">Phone: +254 706201319</p>
        </div>

      </div>

      <div className="text-center text-sm border-t border-gray-600 py-2">
        © 2026 Gas Point
      </div>
    </footer>
    </div>
  )
}

export default Footer

