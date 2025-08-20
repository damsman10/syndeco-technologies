import { motion } from "framer-motion";

const posts = [
  {
    title: "Digital Transformation: Why It Matters Now More Than Ever",
    summary:
      "Explore how businesses around the world are leveraging digital tools to streamline operations and enhance customer experiences.",
    image: "/server.jpg",
    author: "Jane Mensah",
    date: "August 12, 2025",
    link: "#",
  },
  {
    title: "AI & Automation: The Future of Enterprise IT",
    summary:
      "A deep dive into how artificial intelligence is revolutionizing infrastructure management and enterprise decision-making.",
    image: "/server.jpg",
    author: "Luca Okoro",
    date: "July 25, 2025",
    link: "#",
  },
  {
    title: "Scaling Securely: Cybersecurity in a Cloud-first World",
    summary:
      "From SMEs to multinational corporations, here’s what it takes to keep your data safe in an increasingly digital environment.",
    image: "/server.jpg",
    author: "Aaliyah Johnson",
    date: "June 30, 2025",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50 font-montserrat">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-[#003366] mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Syndeco <span className="text-[#f4b400]">Insights</span>
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Thought leadership, industry trends, and digital innovation from our global team of experts. Stay ahead with perspectives tailored for the African market and beyond.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transform hover:scale-[1.02] hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#003366] mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-5">{post.summary}</p>
                </div>
                <div className="mt-auto">
                  <p className="text-xs text-gray-400 mb-2">
                    By {post.author} · {post.date}
                  </p>
                  <a
                    href={post.link}
                    className="inline-block text-[#f4b400] font-semibold hover:underline text-sm"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14">
          <a
            href="#"
            className="px-6 py-3 bg-[#003366] text-white rounded-full font-semibold hover:bg-[#002244] transition"
          >
            Explore More Insights
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
