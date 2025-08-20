
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex items-center justify-center min-h-[90vh] bg-gradient-to-b from-[#003366] to-[#001a33] text-white font-montserrat px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-white drop-shadow-lg">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-6">Page Not Found</h2>
        <p className="text-gray-300 mt-4 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>
        
        <Link
          to="/"
          className="inline-block mt-8 bg-white text-[#003366] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
