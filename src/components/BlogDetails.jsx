import { useParams } from "react-router-dom";
import BlogData from './BlogData';
import { Calendar, User } from "lucide-react";


const BlogDetails = () => {
  const { id } = useParams();
  const post = BlogData.find((item) => item.id === id);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-center font-inter px-4">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-[#003366]">Post Not Found</h2>
          <p className="text-gray-600">We couldn’t find the blog post you’re looking for.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 font-inter">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 md:h-[25rem] object-cover rounded-lg shadow mb-8"
      />
      <div className="text-sm text-gray-500 flex items-center gap-6 mb-4">
        <span className="flex items-center gap-1">
          <User size={14} /> {post.author}
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={14} /> {post.date}
        </span>
      </div>
      <h1 className="text-3xl font-bold text-black mb-6">{post.title}</h1>
      <div className="text-black leading-7 whitespace-pre-line">{post.content}</div>
    </div>
  );
};

export default BlogDetails;
