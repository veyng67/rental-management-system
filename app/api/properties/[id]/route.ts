import { NextResponse } from "next/server";
import { properties } from "@/app/lib/store";

function getIdFromUrl(req: Request) {
  const url = new URL(req.url);
  const parts = url.pathname.split("/");
  return Number(parts[parts.length - 1]);
}

export async function GET(req: Request) {
  const id = getIdFromUrl(req);

  const property = properties.find((item: any) => item.id === id);

  if (!property) {
    return NextResponse.json({ error: "Не найдено" }, { status: 404 });
  }

  return NextResponse.json(property);
}

export async function PATCH(req: Request) {
  const id = getIdFromUrl(req);
  const body = await req.json();

  const property = properties.find((item: any) => item.id === id);

  if (!property) {
    return NextResponse.json({ error: "Не найдено" }, { status: 404 });
  }

  property.title = body.title;
  property.address = body.address;
  property.price = body.price;

  return NextResponse.json(property);
}

export async function DELETE(req: Request) {
  const id = getIdFromUrl(req);

  const index = properties.findIndex((item: any) => item.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Не найдено" }, { status: 404 });
  }

  properties.splice(index, 1);

  return NextResponse.json({ success: true });
}