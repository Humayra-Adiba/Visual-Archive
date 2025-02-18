
import { Gallery } from "@/components/gallery";
import Header from "@/components/header";
import { Navbar } from "@/components/nav";

const HomePage = () => {
  return (
    <main className="flex justify-center items-center min-h-screen bg-sky-200 p-32 bg-no-repeat bg-cover " style={{backgroundImage: "url('https://thumbs.dreamstime.com/b/abstract-blur-contemporary-art-gallery-background-modern-room-interior-concept-117372612.jpg')"}}>
      <div className="w-full max-w-screen-2xl border-[2px] border-red-600 mx-auto p-20 bg-slate-100 rounded-2xl shadow-lg">
        <Navbar />
        <Header />
        <Gallery />
      </div>
    </main>
  );
};

export default HomePage;
