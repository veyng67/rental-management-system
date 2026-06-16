import { properties } from "@/app/lib/store";

export async function GET(
  request: Request,
  { params }: any
) {

  const property = properties.find(
    (item: any) =>
      item.id == params.id
  );

  if (!property) {

    return Response.json({
      error: "Не найдено",
    });
  }

  return Response.json(property);
}

export async function PATCH(
  request: Request,
  { params }: any
) {

  const body = await request.json();

  const property = properties.find(
    (item: any) =>
      item.id == params.id
  );

  if (!property) {

    return Response.json({
      error: "Не найдено",
    });
  }

  property.title = body.title;
  property.address = body.address;
  property.price = body.price;

  return Response.json(property);
}

export async function DELETE(
  request: Request,
  { params }: any
) {

  const propertyIndex =
    properties.findIndex(
      (item: any) =>
        item.id == params.id
    );

  if (propertyIndex === -1) {

    return Response.json({
      error: "Не найдено",
    });
  }

  properties.splice(propertyIndex, 1);

  return Response.json({
    success: true,
  });
}