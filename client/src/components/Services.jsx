
import React from "react";
import {
  FaUtensils,
  FaCameraRetro,
  FaGopuram,
  FaRing,
  FaMusic,
  FaHandsHelping,
} from "react-icons/fa";

const services = [
  {
    title: "Venue Selection",
    icon: <FaGopuram size={32} className="text-[#8b1f1f]" />,
    description:
      "Beautiful palaces, gardens, or luxury halls — we help you find the perfect location for your wedding.",
  },
  {
    title: "Catering & Sweets",
    icon: <FaUtensils size={32} className="text-[#8b1f1f]" />,
    description:
      "From traditional thalis to live counters and desserts, we serve flavors that match your celebration.",
  },
  {
    title: "Photography & Videography",
    icon: <FaCameraRetro size={32} className="text-[#8b1f1f]" />,
    description:
      "Candid moments, rituals, and cinematic trailers — captured with passion and perfection.",
  },
  {
    title: "Mehendi & Makeup",
    icon: <FaRing size={32} className="text-[#8b1f1f]" />,
    description:
      "Professional artists for mehendi, bridal makeup, and grooming to make you shine on your big day.",
  },
  {
    title: "Entertainment",
    icon: <FaMusic size={32} className="text-[#8b1f1f]" />,
    description:
      "DJs, live bands, traditional folk dancers — we bring energy and elegance to your sangeet and reception.",
  },
  {
    title: "Guest Management",
    icon: <FaHandsHelping size={32} className="text-[#8b1f1f]" />,
    description:
      "From airport pickups to gift hampers and room bookings, we ensure your guests feel royal.",
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-[#fbe8d3] to-[#fff3e0] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#8b1f1f] mb-6 font-serif">
          Our Services
        </h2>
        <p className="text-[#6c3d0c] mb-12">
          We craft your wedding from dreams to reality. Here’s what we bring to
          your big day.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-[#c49b63] rounded-xl shadow-md p-6 text-left hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#fce7d3] p-3 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#8b1f1f]">
                  {service.title}
                </h3>
              </div>
              <p className="text-[#5e2c04] text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
