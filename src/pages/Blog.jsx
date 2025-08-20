import { motion } from "framer-motion";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Why Frontend Development Matters in 2025",
      excerpt: "Explore the evolving landscape of frontend technologies and how they shape user experience globally.",
      date: "August 15, 2025",
    },
    {
      id: 2,
      title: "Optimizing Performance for Modern Web Apps",
      excerpt: "Speed and optimization are no longer optional. Learn strategies to keep your website blazing fast.",
      date: "August 10, 2025",
    },
    {
      id: 3,
      title: "The Rise of Remote Tech Internships",
      excerpt: "How international companies are offering opportunities to talents worldwide without borders.",
      date: "August 5, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6 md:px-16">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Blog
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <button className="text-brand font-semibold hover:underline">
              Read More →
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
