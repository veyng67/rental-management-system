"use client";

import { useState } from "react";

export default function EditPage() {

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(event: any) {

    event.preventDefault();

    alert("Изменения сохранены");
  }

  return (

    <main className="p-10">

      <h1 className="text-3xl font-bold">
        Редактирование
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-4"
      >

        <input
          type="text"
          placeholder="Название"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="border px-4 py-3 rounded-lg text-white"
        />

        <input
          type="text"
          placeholder="Адрес"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
          className="border px-4 py-3 rounded-lg text-white"
        />

        <input
          type="number"
          placeholder="Цена"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
          className="border px-4 py-3 rounded-lg text-white"
        />

        <button
          className="bg-blue-600 text-white py-3 rounded-lg"
        >
          Сохранить
        </button>

      </form>

    </main>
  );
}