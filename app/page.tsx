import ImageGallery from '@/components/image-gallery/image-gallery';
import Navbar from '@/components/navbar/navbar';
import Paragraph from '@/components/paragraph/paragraph';
import text from '@/app/constant';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <ImageGallery />
      </div>
      <Link
        href="https://waiting-charlie.vercel.app/"
        className="flex justify-center bg-[#426B1F] text-white p-4 rounded-lg m-8"
        target="_blank"
        rel="noreferrer"
      >
        Jouer
      </Link>
      <div className="p-32 flex justify-center flex-col items-center">
        <Paragraph text={text} />
      </div>
    </>
  );
}
