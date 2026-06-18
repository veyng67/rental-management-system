"use client";

import { tenats } from "../lib/store";
import { useState } from "react";

export default function TenantsPage() {
  const [search, setSearch] = useState("");
  const [propertyFilter, setPropertyFilter] = useState("");

  const filteredTenants = tenats.filter((tenant: any) => {
    const nameMatch = tenant.fullName
      .toLowerCase()
      .includes(search.toLowerCase());

    const propertyMatch =
      propertyFilter === "" ||
      tenant.propertyId === Number(propertyFilter);

    return nameMatch && propertyMatch;
  });

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Арендаторы
      </h1>

      <div className="mt-6 flex gap-4">
        <input
          type="text"
          placeholder="Поиск арендатора"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-lg text-white"
        />

        <select
          value={propertyFilter}
          onChange={(e) => setPropertyFilter(e.target.value)}
          className="border px-4 py-2 rounded-lg bg-white text-black"
        >
          <option value="">Вся недвижимость</option>
          <option value="1">Недвижимость 1</option>
          <option value="2">Недвижимость 2</option>
          <option value="3">Недвижимость 3</option>
          <option value="4">Недвижимость 4</option>
        </select>
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full border">
          <thead>
            <tr className="bg-green-500 text-black">
              <th className="border p-3 text-left">ФИО</th>
              <th className="border p-3 text-left">Email</th>
              <th className="border p-3 text-left">Телефон</th>
              <th className="border p-3 text-left">Недвижимость</th>
            </tr>
          </thead>

          <tbody>
            {filteredTenants.map((tenant: any) => (
              <tr key={tenant.id}>
                <td className="border p-3">
                  {tenant.fullName}
                </td>

                <td className="border p-3">
                  {tenant.email}
                </td>

                <td className="border p-3">
                  {tenant.phone}
                </td>

                <td className="border p-3 text-blue-600">
                  #{tenant.propertyId}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}