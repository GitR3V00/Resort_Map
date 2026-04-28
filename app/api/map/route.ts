import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "map.ascii");

  const map = fs.readFileSync(filePath, "utf-8");

  return Response.json({
    map
  });
}