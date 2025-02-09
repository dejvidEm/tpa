const HealthSectionMobile = () => {
  return (
    <div className="bg-[#0A2125]">
      <div className="px-8 flex flex-col gap-8">
      <h1 className="text-3xl md:text-6xl font-extrabold uppercase mt-4 md:mx-32 md:max-w-3xl break-words bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text">
        <span className="ml-20">Your health matters, on and off the pitch</span>
      </h1>
        <div className="flex w-full justify-center">
          <img src="/images/healthMobile.png" alt="" className="w-full" />
        </div>
        <div className="flex flex-row gap-2 bg-[#0f2b30] items-center justify-center p-4 rounded-lg w-max">
            <img src="/images/icons/Health2.png" alt="icon2" className="w-6 h-auto"/>
              <span className="border-l border-gray-400 h-5 mx-2"></span>
              <h3 className="text-gold_primary">Mental health specialists</h3>
            </div>
        <p className="text-white opacity-90">
          Beyond physical health, we recognize the importance of mental
          well-being. Our agency partners with mental health professionals to
          offer guidance and support, helping players navigate the challenges of
          a high-pressure career with resilience and confidence.
        </p>
      </div>
    </div>
  );
};

export default HealthSectionMobile;
