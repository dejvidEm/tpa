interface FeatureItemProps {
    number: string;
    title: string;
    text: string;
  }
  
  const FeatureItem: React.FC<FeatureItemProps> = ({ number, title, text }) => {
    return (
      <div className="w-max">
          <div className="flex items-center space-x-3 mb-2 w-[440px]" >
              <h3 className="md:text-[96px] md:leading-[96px] text-[56px] leading-[64px] font-bold text-gold_primary">{number}</h3>
              <h2 className="md:text-[34px] md:leading-[40px] text-[20px] leading-[24px] font-bold text-white max-w-[200px] uppercase">{title}</h2>
          </div>
        <p className="lg:text-[16px] lg:leading-[24px] md:text-[14px] md:leading-[20px] max-w-80">{text}</p>
      </div>
    );
  }; 
  
  export default FeatureItem;