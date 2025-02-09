const HealthSectionDesktop = () => {
  return (
    <div className="bg-[#0A2125] w-full px-20 relative">
        <div className="">
            <img src="/images/blur2.png" alt="" className="absolute -top-[500px] left-10"/>
        <h1 className="text-4xl md:text-6xl relative font-extrabold uppercase mx-4 md:max-w-2xl break-words bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text ">
        <span className="ml-[145px]">Your Health</span> matters, on and off the pitch
      </h1>
        </div>
      <div className="flex flex-row justify-center pl-32 pr-10 -mt-20">
        <video
          className="max-w-[550px] xl:max-w-[700px]"
          src="/videos/zdravieSecVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="flex flex-col justify-between">
        <div className="flex items-center justify-center gap-2 bg-[#112A2F] max-w-max p-4 rounded-lg mb-4 opacity-0">
            <img src="/images/icons/Health2.png" alt="icon1" className="w-7" />
            <span className="border-l border-gray-400 h-5 mx-2"></span>
            <h3 className="text-gold_primary">Mental health specialists</h3>
          </div>
          <div className="flex items-center justify-center gap-2 bg-[#112A2F] max-w-max p-4 rounded-lg mb-4 opacity-85 -ml-16">
            <img src="/images/icons/Health2.png" alt="icon1" className="w-7" />
            <span className="border-l border-gray-400 h-5 mx-2"></span>
            <h3 className="text-gold_primary">Mental health specialists</h3>
          </div>
          <p className="text-white opacity-80 pl-20">Beyond physical health, we recognize the importance of mental well-being. Our agency partners with mental health professionals to offer guidance and support, helping players navigate the challenges of a high-pressure career with resilience and confidence.</p>
        </div>
      </div>
    </div>
  );
};

export default HealthSectionDesktop;
