"use client";

import { tenats } from "../lib/store";
import { useState } from "react";

export default function TenantsPage() {

  const [search, setSearch] = useState("");
  const [propertyFilter, setPropertyFilter] = useState("");

  return (

    <main className="p-10">

      <h1 className="text-3xl font-bold">
        Арендаторы
      </h1>

      <input
        type="text"
        placeholder="Поиск арендатора"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="mt-6 border px-4 py-2 rounded-lg text-white"
      />
      <select value={propertyFilter}
      onChange={(e) =>
        setPropertyFilter(e.target.value)
      }
      className="mt-4 border px-4 py-2 rounded-lg bg-white text-black"
      >
        <option value="">
          Вся недвижимость
        </option>
        <option value="1">
          недвижимость 1
        </option>
        <option value="2">
          недвижимость 2
        </option>
        <option value="3">
          недвижимость 3
        </option>
      </select>
      
      <div className="mt-8 grid gap-4">

        {tenats
          .filter((tenant: any) => {

  const matchesSearch =
    tenant.fullName
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchesProperty =
    propertyFilter === "" ||
    tenant.propertyId === Number(propertyFilter);

  return (
    matchesSearch &&
    matchesProperty
  );
}
        )
        .map((tenant: any) => (

          <div
            key={tenant.id}
            className="border rounded-lg p-5 shadow-sm"
        >

          <h2 className="text-xl font-semibold">
              {tenant.fullName}
          </h2>

          <p className="mt-2 text-gray-600">
              Email: {tenant.email}
          </p>

          <p className="text-gray-600">
              Телефон: {tenant.phone}
          </p>

            <p className="mt-2 text-blue-600">
              ID недвижимости:
            {" "}
            {tenant.propertyId}
          </p>

            </div>

          ))}

      </div>

    </main>
  );
}