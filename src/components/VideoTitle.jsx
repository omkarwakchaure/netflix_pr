const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[10%] px-14 text-white bg-gradient-to-r from-black to-transparent">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-white text-black p-3 px-10 text-xl rounded-lg cursor-pointer">
          Play
        </button>
        <button className="bg-gray-500 text-white p-3 px-6 text-xl rounded-lg cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
