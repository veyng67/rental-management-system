import { properties } from "@/app/lib/store";

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const property = properties.find(
    (item: any) => item.id == id
  );

  if (!property) {
    return (
      <main className="p-10">
        <h1>
          Не найдено
        </h1>
      </main>
    );
  }

  return (
    <main className="p-10">

      <h1 className="text-3xl font-bold">
        {property.title}
      </h1>

      <p className="mt-4">
        {property.address}
      </p>

      <p className="mt-2">
        {property.price} ₽
      </p>

    </main>
  );
}