const Events = () => {
    return (
        <section className="pt-24 container mx-auto p-8"> {/* Added pt-24 to account for header height */}
            <h2 className="text-4xl font-oswald mb-4">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Event Card */}
                <div className="bg-white shadow-lg rounded-md p-4">
                    <img src="https://picsum.photos/400/300" alt="Event" className="rounded-md mb-4" />
                    <h3 className="text-2xl font-semibold">Event Title</h3>
                    <p className="text-gray-700 mt-2">Details about the event...</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Register Now</button>
                </div>
                {/* Add more event cards here */}
            </div>
        </section>
    );
};

export default Events;
