"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Wallpaper } from "@/types/wallpaper";

interface Props {
  wallpapers: Wallpaper[];
  setWallpapers: Dispatch<SetStateAction<Wallpaper[]>>;
}

export default function ({ setWallpapers }: Props) {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const [wallpaper, setWallpaper] = useState<Wallpaper | null>(null);

  const generateWallpaper = async function () {
    const param = {
      description: description,
    };
    setLoading(true);

    const result = await fetch("/api/gen-wallpaper", {
      method: "POST",
      body: JSON.stringify(param),
    });

    const { data } = await result.json();

    // console.log("before wallpapers:" + wallpapers);
    if (data) {
      const wallpaper: Wallpaper = data;
      setWallpaper(wallpaper);

      setWallpapers((wallpapers: Wallpaper[]) => [wallpaper, ...wallpapers]);
    }
    // console.log("after wallpapers:" + wallpapers);
    setLoading(false);
  };

  const handleSubmit = async function () {
    console.log("submit desc:", description);
    if (!description) {
      alert("提示词不能为空");
      return;
    }

    await generateWallpaper();
  };

  // useEffect(() => {
  //   console.log("current desc:", description);
  // }, [description]);

  return (
    <div className="max-w-4xl flex items-center mx-auto">
      <Input
        type="text"
        placeholder="请输入想要生成的壁纸描述"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={loading}
      />
      <Button className="ml-8" onClick={handleSubmit} disabled={loading}>
        {loading ? "生成中..." : "提交"}
      </Button>
    </div>
  );
}
