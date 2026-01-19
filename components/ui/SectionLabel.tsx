const SectionLabel = ({ text = "Selected Works", className = "" }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="w-3 h-3 bg-white rounded-full opacity-100 shrink-0" />

      <h3 className="font-[family-name:var(--font-switzer)] font-medium text-[16px] leading-6 tracking-[4px] uppercase text-white">
        {text}
      </h3>
    </div>
  );
};

export default SectionLabel;
