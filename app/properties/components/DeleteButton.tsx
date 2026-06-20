"use client";

export default function DeleteButton({ id }: any) {
  async function handleDelete() {
    const res = await fetch(`/api/properties/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      window.location.reload();
    } else {
      alert("Ошибка удаления");
    }
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