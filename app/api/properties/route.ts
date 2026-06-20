import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data/properties.json");

function readData() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeData(data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export async function GET() {
  return NextResponse.json(readData());
}

export async function POST(req: Request) {
  const body = await req.json();

  const data = readData();

  const newProperty = {
    id: Date.now(),
    title: body.title,
    address: body.address,
    price: Number(body.price),
    isAvailable: true,
  };

  data.push(newProperty);
  writeData(data);

  return NextResponse.json(newProperty);
}