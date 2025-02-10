interface FeatureItemProps {
    number: string;
    title: string;
    text: string;
  }
  
  const FeatureItemF: React.FC<FeatureItemProps> = ({ number, title, text }) => {
    return (
      <div className="w-max">
          <div className="flex items-center space-x-3 mb-2 w-[490px]" >
              <h3 className="md:text-[96px] md:leading-[96px] text-[56px] leading-[64px] font-bold text-gold_primary">{number}</h3>
              <h2 className="md:text-[34px] md:leading-[40px] text-[24px] leading-[24px] font-bold text-white max-w-[400px] uppercase">{title}</h2>
          </div>
        <p className="lg:text-[18px] lg:leading-[22px] md:text-[18px] md:leading-[22px] max-w-80">{text}</p>
      </div>
    );
  }; 
  
  export default FeatureItemF;