const Sponsors = () => {
  const sponsors = [
      {
          name: 'TechCorp',
          logo: 'https://via.placeholder.com/150', // Replace with actual sponsor logo URL
          description: 'TechCorp is a leading technology company supporting innovative solutions.',
      },
      {
          name: 'DevHub',
          logo: 'https://via.placeholder.com/150',
          description: 'DevHub is a global platform empowering developers with resources and tools.',
      },
      {
          name: 'CodeCraft',
          logo: 'https://via.placeholder.com/150',
          description: 'CodeCraft provides coding bootcamps and workshops for aspiring developers.',
      },
  ];

  return (
      <section className="pt-24 container mx-auto p-8"> {/* Added pt-24 to account for header height */}
          <h2 className="text-4xl font-oswald mb-8 text-center">Our Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sponsors.map((sponsor, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                      <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="h-32 w-32 mx-auto object-cover mb-4"
                      />
                      <h3 className="text-2xl font-semibold">{sponsor.name}</h3>
                      <p className="mt-2 text-gray-700">{sponsor.description}</p>
                  </div>
              ))}
          </div>
      </section>
  );
};

export default Sponsors;
