"use client";

import Controll from "@/components/Controll/Controll";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/header";
import Sidebar from "@/components/Sidebar/Sidebar";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-black px-2 pt-2">
      <Provider store={store}>
        <div className="flex gap-2">
          {/* side bar */}
          <Sidebar />

          {/* Content */}
          <section className="w-full rounded-lg relative">
            {/* header */}
            <Header />
            <main
              id="scrollbar"
              className="text-white flex flex-col gap-5 flex-grow max-h-[calc(100vh-150px)] min-h-[500px] overflow-y-scroll"
            >
              {children}
              <Footer />
            </main>
          </section>
        </div>
        <Controll />
      </Provider>
    </div>
  );
}
