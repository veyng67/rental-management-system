"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({
  id,
}: any) {

  const router = useRouter();

  async function handleDelete() {

    await fetch(
      `/api/properties/${id}`,
      {
        method: "DELETE",
      }
    );

    window.location.reload();
  }

  return (

    <button
      onClick={handleDelete}
      className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
    >
      Удалить
    </button>

  );
}