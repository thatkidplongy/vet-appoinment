import Image from "next/image";
import { Inter } from "next/font/google";
import SideBar from "@/components/SideBar";
import { useState } from "react";
import { tabs } from "@/definitions/tabs";
import TopBar from "@/components/TopBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <main className="flex min-h-full">
      <SideBar
        tabs={tabs}
        isMinimized={isMinimized}
        toggleMinimize={toggleMinimize}
      />
      <TopBar isMinimized={isMinimized} />
    </main>
  );
}
