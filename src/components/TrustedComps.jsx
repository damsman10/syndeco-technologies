import React from 'react'

const TrustedComps = () => {

    const clients = [
    "/kfila.png",
    "/supportpr.png",
    "/alpha.jpg",
    "/afrilogo.png",
    "/reddot.png",
    "/msn.png",
    "/retain.jpg",
    "/sail.jpg",
    "/snap.svg",
    "/dp.png",
  ];


  return (
    <div className="md:pt-28 bg-[#f3f4f6] py-12 px-6 md:px-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-8 font-poppins">
            Trusted by Leading Businesses
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8">
            {clients.slice(0, 8).map((logo, i) => (
            <img
                key={i}
                src={logo}
                alt="Client Logo"
                className="h-10 max-w-[150px] object-contain grayscale opacity-80 hover:opacity-100 transition"
                loading="lazy"
            />
            ))}
        </div>
    </div>

  )
}

export default TrustedComps