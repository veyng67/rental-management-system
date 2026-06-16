export const dynamic = "force-dynamic";

import DeleteButton from "../properties/components/DeleteButton";

async function getProperties() {

  const response = await fetch(
    "http://localhost:3000/api/properties",
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export default async function PropertiesPage() {

  const properties = await getProperties();

  return (

    <main className="p-10">

      <h1 className="text-3xl font-bold">
        Недвижимость
      </h1>

      <a
        href="/properties/new"
        className="inline-block mt-6 bg-green-600 text-white px-5 py-3 rounded-lg"
      >
        Добавить недвижимость
      </a>

      <div className="mt-8 grid gap-4">

        {properties.map((property: any) => (

          <div
            key={property.id}
            className="border rounded-lg p-5 shadow-sm"
          >

            <h2 className="text-xl font-semibold">
              {property.title}
            </h2>

            <p className="mt-2 text-gray-600">
              Адрес: {property.address}
            </p>

            <p className="text-gray-600">
              Аренда: {property.price} ₽
            </p>

            <p className="mt-2 font-medium text-green-600">
              {property.isAvailable
                ? "Свободна"
                : "Занята"}
            </p>

            <DeleteButton id={property.id} />

            <a
              href={`/properties/${property.id}/edit`}
              className="inline-block mt-4 ml-3 bg-yellow-500 text-white px-4 py-2 rounded-lg"
            >
              Редактировать
            </a>

            <a
              href={`/properties/${property.id}`}
              className="inline-block mt-4 ml-3 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Открыть
            </a>

          </div>

        ))}

      </div>

    </main>
  );
}