import Image from "next/image";

export default function CVSection() {
  return (
    <div className="text-center mb-16">
      <h2 className="text-[#FFC300] text-3xl font-bold mb-8">Mon CV complet</h2>
      <div className="max-w-4xl mx-auto">
        <Image 
          src="/media/Drozd_Damien_CV_FullStack.jpg" 
          alt="CV Damien Drozd" 
          width={800} 
          height={600}
          className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
