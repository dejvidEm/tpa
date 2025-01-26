interface FeatureItemProps {
    number: string;
    title: string;
    text: string;
  }
  
  const FeatureItem: React.FC<FeatureItemProps> = ({ number, title, text }) => {
    return (
      <div >
          <div className="flex items-center space-x-4 mb-2 " >
              <h3 className="md:text-[96px] md:leading-[96px] text-[56px] leading-[64px] font-bold text-gold_primary">{number}</h3>
              <h2 className="md:text-[40px] md:leading-[40px] text-[24px] leading-[24px] font-bold text-white max-w-[400px]">{title}</h2>
          </div>
        <p className="lg:text-[18px] lg:leading-[24px] md:text-[14px] md:leading-[20px]  ">{text}</p>
      </div>
    );
  }; 
  
  export default FeatureItem;