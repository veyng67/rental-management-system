import { NextResponse } from "next/server";
import { getProperties, saveProperties } from "@/app/lib/json-db";

export async function GET() {
  const properties = getProperties();
  return NextResponse.json(properties);
}

export async function POST(request: Request) {
  const properties = getProperties();
  const body = await request.json();

  const newProperty = {
    id: Date.now(),
    title: body.title,
    address: body.address,
    price: Number(body.price),
    isAvailable: true,
  };

  properties.push(newProperty);
  saveProperties(properties);

  return NextResponse.json(newProperty);
}