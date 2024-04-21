import Controll from "@/components/Controll/Controll";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/header";
import Sidebar from "@/components/Sidebar/Sidebar";
export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-black px-2 pt-2">
      <div className="flex gap-2 container">
        {/* side bar */}
        <Sidebar />

        {/* Content */}
        <section className="w-full rounded-lg relative overflow-y-scroll flex-grow max-h-[calc(100vh-80px)] min-h-[500px]">
          {/* header */}
          <Header />

          <main className="text-white flex flex-col gap-5 ">{children}</main>
          <Footer />
        </section>
      </div>
      <Controll />
    </div>
  );
}
