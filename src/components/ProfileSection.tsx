import Image from "next/image";

export default function ProfileSection() {
  return (
    <div className="flex items-center justify-center mt-32 mb-24">
      <Image 
        src="/media/photo pro carré.JPG" 
        alt="profile" 
        width={150} 
        height={150}
        className="w-1/6 h-auto rounded-full"
      />
      <div className="ml-8">
        <h1 className="text-[#FFC300] text-4xl font-bold mb-2">Damien Drozd</h1>
        <h2 className="text-white text-2xl mb-2">Développeur Web Full Stack</h2>
        <p className="text-gray-300 text-lg">Montpellier, France</p>
        <div className="flex space-x-4 mt-2">
          <span className="text-[#FFC300]">damien.drozd@icloud.com</span>
        </div>
      </div>
    </div>
  );
}
