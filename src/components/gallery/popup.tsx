"use client";

import { TCategory } from "@/types";
import { FC, useState } from "react";

interface Props {
  submit: (name: string, category: TCategory, file: File) => void;
  close: () => void;
}
export const Popup: FC<Props> = ({ submit, close }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("photo");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = () => {
    if (name && category && file) submit(name, category as TCategory, file);
    setName("");
    setCategory("photo");
    setFile(null);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center absolute top-0 left-0  z-50 ">
      <div className="w-full max-w-md bg-slate-100 p-5 rounded space-y-2.5 border border-orange-600 shadow-lg">
        <div className="flex justify-between items-center gap-2.5 p-2">
          <h1 className="font-semibold text-[20px]">Add new Image</h1>
          <button onClick={close} className="active:translate-y-0.5 w-16">
            ❌
          </button>
        </div>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full py-2 px-4 bg-slate-100 border-2 border-slate-400 focus:outline-none text-slate-500 rounded focus:border-slate-700"
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full py-2 px-4 bg-slate-200  focus:outline-none text-slate-500 rounded"
        />
        <select
          className="w-full py-2 px-4 bg-slate-100 border-2 border-slate-400 focus:outline-none focus:border-slate-700 text-slate-500 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="photo">Photo</option>
          <option value="vector">Vector</option>
        </select>

        <button
          onClick={handleSubmit}
          className="w-full bg-teal-600 text-white text-base uppercase font-bold py-2.5 rounded-md hover:bg-green-400 active:translate-y-0.5"
        >
          Upload
        </button>
      </div>
    </div>
  );
};