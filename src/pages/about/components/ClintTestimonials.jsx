import React, { useState } from "react";
import { Play, X } from "lucide-react";


const clientImages = Object.values(
  import.meta.glob("../../../assets/clients/*.{jpg,jpeg,png}", {
    query: '?url',
  import: 'default',
  eager:true
  })
);

const clientThumbnails = Object.values(
  import.meta.glob("../../../assets/thumb*.{jpg,jpeg,png,webp}",{
    query:'?url',
    import:'default',
    eager:true
  })
);

const clientVideos = Object.keys(
  import.meta.glob("../../../assets/clients/testimonial*.{mp4,webm}", {
    query: '?url',
    import: 'default',
    eager: true
  })
)
  .sort() // sorts alphabetically by filename
  .map(key => import.meta.glob("../../../assets/clients/testimonial*.{mp4,webm}", {
    query: '?url',
    import: 'default',
    eager: true
  })[key]);


const ClientTestimonials = () => {
  const [openVideo, setOpenVideo] = useState(null); // store current video URL


 const videos = clientVideos.map((url, index) => ({
  id: index + 1,
  url,
  thumbnail: clientThumbnails[index]
}));

  return (
    <div className="w-full h-full py-16 px-5 bg-[#f8f9fb]">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="uppercase text-sm font-semibold text-blue-700 tracking-wider">
          + See Your Happy Clients
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
          Our Lovely Clients.
        </h2>
      </div>

      {/* Video Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => setOpenVideo(video.url)}
            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          >
            <img
              src={video.thumbnail}
              alt="testimonial"
              className="w-full h-72 object-contain"
            />

            {/* Play button */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition">
              <Play className="w-14 h-14 text-white opacity-90 group-hover:scale-110 transition" />
            </div>
          </div>
        ))}
      </div>

      {/* Images Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {clientImages.map((img, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
          >
            <img src={img} alt={`client-${idx}`} className="w-full h-80 object-cover" />
          </div>
        ))}
      </div>

      {/* Video Modal - FIXED */}
      {openVideo && (
        <div 
          className="fixed inset-0 w-full h-full bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999] p-4"
          onClick={() => setOpenVideo(null)} // Close when clicking backdrop
        >
          <div 
            className="relative bg-black rounded-xl w-full max-w-sm p-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking video
          >
            <button
              onClick={() => setOpenVideo(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition z-10"
            >
              <X size={24} className="text-gray-700" />
            </button>

            <video
              src={openVideo}
              controls
              autoPlay
              className="w-full rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientTestimonials;

