import Navbar from '@/components/navbar/navbar';

export default function AboutUsPage() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-gray-50">
      <Navbar />
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h2>Constantin MAGNIN</h2>
          <p></p>

          <h2>Alexis BONIS</h2>
          <p></p>

          <h2>Lea ROULLIER</h2>
          <p></p>

          <h2>Lucie FOURNIER</h2>
          <p></p>

          <h2>Lucas PETIT</h2>
          <p></p>

          <h2>Mathis SPATARO</h2>
          <p></p>

          <h2>Enzo CECILLON</h2>
          <p></p>
        </div>
      </div>
    </div>
  );
}
