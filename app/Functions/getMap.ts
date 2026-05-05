import fs from "fs";
import path from "path";

import { config } from "../lib/config"

export function getMap() {
  const filePath = path.join(process.cwd(), config.mapPath);

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${config.mapPath}`);
  }

  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error("Error reading map file:", error);
    throw new Error(`Failed to read map data from ${config.mapPath}`);
  }
}