
const Title = ({ title, subTitle }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
