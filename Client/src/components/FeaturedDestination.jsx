import HotelCard from "./HotelCard";
import { roomsDummyData, assets } from "../assets/assets";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Enhanced Title Section */}
        <div className="text-center mb-12 lg:mb-16">
          <Title
            title="Featured Destinations"
            subTitle="Discover the most popular destinations around the world. Offering unparalleled luxury and comfort."
          />

        </div>

        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {roomsDummyData.slice(0, 4).map((room, index) => (
            <div
              key={room._id}
              className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <HotelCard rooms={room} index={index} />
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Explore More Amazing Destinations
              </h3>
              <p className="text-gray-600 text-sm">
                Discover hundreds of luxury hotels worldwide
              </p>
            </div>

            <button
              onClick={() => {
                navigate("/rooms");
                scrollTo(0, 0);
              }}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <span className="relative z-10">View All Destinations</span>
              <svg
                className="relative z-10 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestination;
