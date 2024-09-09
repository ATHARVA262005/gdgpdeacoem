const Team = () => {
    return (
        <section className="pt-24 container mx-auto p-8"> {/* Added pt-24 to account for header height */}
            <h2 className="text-4xl font-oswald mb-4">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Team Member Card */}
                <div className="bg-white shadow-lg rounded-md p-4">
                    <img src="https://picsum.photos/200/200" alt="Team Member" className="rounded-full mb-4 mx-auto" />
                    <h3 className="text-2xl font-semibold">Member Name</h3>
                    <p className="text-gray-700 mt-2">Position</p>
                </div>
                {/* Add more team cards here */}
            </div>
        </section>
    );
};

export default Team;
