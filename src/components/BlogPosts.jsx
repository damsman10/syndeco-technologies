import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    title: "AI & Automation: Driving the Next Business Revolution",
    author: "Mary Ann",
    date: "Mar 15, 24",
    image: "/ai.jpg",
  },
  {
    title: "Data Privacy in 2024: What Companies Need to Know",
    author: "David Green",
    date: "Mar 18, 24",
    image: "/data-privacy.jpg",
  },
  {
    title: "Cloud Computing Trends: Scaling Smarter in 2024",
    author: "Sophia Lee",
    date: "Mar 22, 24",
    image: "/cloud-computing.jpg",
  },
];

const BlogPosts = () => {
  return (
    <div className="py-16 bg-white text-center font-inter">
      <p className="text-sm text-[#0A2342] font-semibold mb-2">
        Blog & Latest News
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
        Latest News & Blog
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 md:px-0">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col flex-grow text-left">
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3 gap-x-4 gap-y-2">
                <span className="flex items-center gap-1">
                  <User size={14} /> {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {post.date}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-4 text-[17px] leading-snug flex-grow">
                {post.title}
              </h3>
              <a
                href="#"
                className="inline-block text-sm font-semibold border border-[#003366] text-[#003366] bg-white hover:bg-[#003366] hover:text-white px-4 py-2 rounded-md mt-auto w-full sm:w-fit text-center"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
