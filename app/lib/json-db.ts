import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "properties.json");

export function getProperties() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export function saveProperties(properties: any) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(properties, null, 2)
  );
}