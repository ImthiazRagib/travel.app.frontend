interface Location {
  name: string;
  image: string;
  offer: string;
}

const locations: Location[] = [
  {
    name: "Dubai, UAE",
    image: "https://mediaim.expedia.com/destination/9/cd8a3f3db7149b0ce36d052aea1182df.jpg",
    offer: "Up to 30% off flights & hotels",
  },
  {
    name: "Maldives",
    image: "https://www.vistajet.com/contentassets/96e7a76aa62f4feb91928fa165cd77b5/beach-666122_1920.jpg?width=1200&upscale=false",
    offer: "Luxury beach resorts starting from $199",
  },
  {
    name: "Istanbul, Turkey",
    image: "https://media.istockphoto.com/id/160193420/photo/blue-mosque-in-istanbul.jpg?s=612x612&w=0&k=20&c=GABmGJwvlo-ejMwPZKCU4YCUyiVxXNHc5dDneL7o0Mg=",
    offer: "Historic city tours with 20% discount",
  },
  {
    name: "Paris, France",
    image: "https://www.travelescape.in/wp-content/uploads/2020/10/eiffel-tower-Paris.jpg",
    offer: "Romantic getaway + Eiffel Tower visit",
  },
];

export default function LocationOffers() {
  return (
    <section className="py-12 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-gray-100">
          ✈️ Top Travel Offers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{loc.name}</h3>
                <p className="text-sm opacity-90">{loc.offer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
