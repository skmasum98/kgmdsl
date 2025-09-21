import React from 'react'

export default function VideoGallery() {
  return (
    <div>
      <section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-2xl font-bold mb-4">Our Work in Action</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
  Here’s a quick peek into what we’ve been up to!  
  From exciting projects to hands-on moments, these clips bring our journey to life.
</p>


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <video src="/videos/v1.mp4" autoPlay muted loop controls className="rounded-lg shadow-md" />
      <video src="/videos/v2.mp4" autoPlay muted loop controls className="rounded-lg shadow-md" />
      <video src="/videos/v3.mp4" autoPlay muted loop controls className="rounded-lg shadow-md" />
      <video src="/videos/v4.mp4" autoPlay muted loop controls className="rounded-lg shadow-md" />
    </div>
  </div>
</section>

    </div>
  )
}
