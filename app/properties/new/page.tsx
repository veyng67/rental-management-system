"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPropertyPage() {

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");

  async function handleSubmit(event: any) {

    event.preventDefault();

    await fetch("/api/properties", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title,
        address,
        price: Number(price),
        isAvailable: true,
      }),
    });

    router.push("/properties");
  }

  return (
    <main className="p-10 flex justify-center">

      <div className="w-full max-w-xl bg-zinc-900 p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-white">
          Добавить недвижимость
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-5"
        >

          <div>
            <label className="block mb-2 text-gray-300">
              Название
            </label>

            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Адрес
            </label>

            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Цена
            </label>

            <input
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3 text-white"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-green-600 hover:bg-green-700 transition py-3 rounded-lg text-white font-medium"
          >
            Сохранить
          </button>

        </form>

      </div>

    </main>
  );
}