import { properties, tenats } from "./lib/store";

export default function HomePage() {

  return (

    <main className="p-10">

      <h1 className="text-4xl font-bold">
        Система аренды недвижимости
      </h1>

      <p className="mt-3 text-gray-400">
        Учет недвижимости и арендаторов
      </p>

      <div className="mt-10 grid grid-cols-2 gap-6">

        <div className="bg-black text-white p-6 rounded-xl">

          <h2 className="text-xl">
            Недвижимость
          </h2>

          <p className="mt-4 text-4xl font-bold">
            {properties.length}
          </p>

        </div>

        <div className="bg-black text-white p-6 rounded-xl">

          <h2 className="text-xl">
            Арендаторы
          </h2>

          <p className="mt-4 text-4xl font-bold">
            {tenats.length}
          </p>

        </div>

      </div>

    </main>
  );
}