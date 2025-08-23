import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center   text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! Page not found.</p>
      <button
        onClick={() => navigate("/")}
        className="px-5 py-2 cursor-pointer bg-brand text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
