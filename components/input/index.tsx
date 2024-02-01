"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function () {
  const [description, setDescription] = useState("");

  const generateWallpaper = async function () {
    const param = {
      description: description,
    };
    const result = await fetch("/api/gen-wallpaper", {
      method: "POST",
      body: JSON.stringify(param),
    });

    const { data } = await result.json();

    if (data) {
      console.log("new wallpaper", data);
    }
  };

  const handleSubmit = async function () {
    console.log("submit desc:", description);
    if (!description) {
      alert("提示词不能为空");
      return;
    }

    await generateWallpaper();
  };

  useEffect(() => {
    console.log("current desc:", description);
  }, [description]);

  return (
    <div className="max-w-4xl flex items-center mx-auto">
      <Input
        type="text"
        placeholder="请输入想要生成的壁纸描述"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button className="ml-8" onClick={handleSubmit}>
        提交
      </Button>
    </div>
  );
}
