interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="text-center mb-10">
      {/* Animated Title */}
      <h1 className="text-5xl text-[#003153] mb-4 animate-[fadeInUp_0.6s_ease-out]">
        {title}
      </h1>
      
      {/* Animated Orange Line */}
      <div className="w-24 h-1 bg-[#FF6600] mx-auto mb-6 animate-[expandWidth_0.8s_ease-out_0.3s_both]"></div>
      
      {/* Animated Description */}
      <p className="text-lg text-[#666666] max-w-3xl mx-auto animate-[fadeIn_0.8s_ease-out_0.5s_both]">
        {description}
      </p>
    </div>
  );
}
