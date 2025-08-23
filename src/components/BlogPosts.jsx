import { Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "ai-automation-business",
    title: "AI & Automation: Driving the Next Business Revolution",
    author: "Mary Ann",
    date: "Mar 15, 24",
    image: "/ai.jpg",
  },
  {
    id: "data-privacy-2024",
    title: "Data Privacy in 2024: What Companies Need to Know",
    author: "David Green",
    date: "Mar 18, 24",
    image: "/data-privacy.jpg",
  },
  {
    id: "cloud-computing-trends",
    title: "Cloud Computing Trends: Scaling Smarter in 2024",
    author: "Sophia Lee",
    date: "Mar 22, 24",
    image: "/cloud-computing.jpg",
  },
];

// Base and hover shadows using hex colors for iOS compatibility
const baseShadow = "0 4px 6px -1px #00000040, 0 2px 4px -2px #00000030";
const hoverShadow = "0 10px 15px -3px #00000070, 0 4px 6px -2px #00000050";

const BlogPosts = () => {
  return (
    <div className="py-16 bg-white text-center font-inter">
      <p className="text-sm text-[#0A2342] font-semibold mb-2">Blog & Latest News</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
        Latest News & Blog
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 md:px-0">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden flex flex-col transition-shadow duration-300 ease-in-out"
            style={{ boxShadow: baseShadow }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = hoverShadow)}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = baseShadow)}
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
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
              <Link
                to={`/blog/${post.id}`}
                className="inline-block text-sm font-semibold border-solid border border-[#003366] text-[#003366] bg-white hover:bg-[#003366] hover:text-white px-4 py-2 rounded-md mt-auto w-full sm:w-fit text-center"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          to="/blog"
          className="inline-block px-6 py-3 bg-[#003366] text-white font-semibold rounded-lg shadow-md hover:bg-[#002244] transition"
        >
          View More Blog Posts →
        </Link>
      </div>
    </div>
  );
};

export default BlogPosts;
