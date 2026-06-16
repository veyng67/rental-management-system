import { NextResponse } from "next/server";
import { properties } from "@/app/lib/store";

export async function GET() {
  return NextResponse.json(properties);
}

export async function POST(request: Request) {

  const body = await request.json();

  const newProperty = {
    id: Date.now(),
    title: body.title,
    address: body.address,
    price: Number(body.price),
    isAvailable: true,
  };

  properties.push(newProperty);

  return NextResponse.json(newProperty);
}