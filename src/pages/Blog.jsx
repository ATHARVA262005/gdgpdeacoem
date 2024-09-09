const Blog = () => {
    return (
        <section className="pt-24 container mx-auto p-8"> {/* Added pt-24 to account for header height */}
            <h2 className="text-4xl font-oswald mb-4">Our Latest Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Blog Post Cards */}
                <div className="bg-white shadow-lg rounded-md p-4">
                    <img src="https://picsum.photos/400/300" alt="Blog Post" className="rounded-md mb-4" />
                    <h3 className="text-2xl font-semibold">Blog Title</h3>
                    <p className="text-gray-700 mt-2">This is a summary of the blog post.</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Read More</button>
                </div>
                {/* Add more blog cards here */}
            </div>
        </section>
    );
};

export default Blog;
