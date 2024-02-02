"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Wallpapers from "@/components/wallpapers";
import Hero from "@/components/hero";
import Input from "@/components/input";
import { useEffect, useState } from "react";
import { Wallpaper } from "@/types/wallpaper";

export default function Home() {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);

  const fetchWallpapers = async function () {
    try {
      const result = await fetch("/api/get-wallpapers");

      const { data } = await result.json();
      console.log("get wallpapers before:", data);

      if (data) {
        setWallpapers(data);
        //setWallpapers(data);是异步执行的，所以下面log并不会
        console.log("get wallpapers after:", wallpapers);
      }
    } catch (e) {
      console.log("get wallpapers failed:", e);
    }
  };

  useEffect(() => {
    fetchWallpapers();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Input wallpapers={wallpapers} setWallpapers={setWallpapers} />
      <Wallpapers wallpapers={wallpapers} />
      <Footer />
    </>
  );
}
