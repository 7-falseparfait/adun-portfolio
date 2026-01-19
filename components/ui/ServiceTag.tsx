interface ServiceTagProps {
  label: string;
}

const ServiceTag = ({ label }: ServiceTagProps) => {
  return (
    <span
      className={`
        px-3 py-3 
        rounded-full 
        text-[14px] font-medium leading-none
        border-[0.5px] border-[#494949]
        bg-[#111111] text-white
        inline-flex items-center gap-2
      `}
    >
      <div className="w-2 h-2 bg-white rounded-full shrink-0" />
      {label}
    </span>
  );
};

export default ServiceTag;
