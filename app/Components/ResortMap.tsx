"use client ";
import { ResortMapIcons } from "../Types/types";
import ResortMapRender from "./ResortMapRender";
import mapBackground from "@/public/parchmentBasic.png";

const ResortMap = async () => {
  const res = await fetch("http://localhost:3000/api/map");
  const data = await res.json();
  const map: string = data.map;
  const rows = map.split("\n");
  const grid: ResortMapIcons[][] = rows.map(
    (row) => row.split("") as ResortMapIcons[],
  );

  return (
    <div
      className="h-full w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${mapBackground.src})` }}
    >
      <ResortMapRender grid={grid} />
    </div>
  );
};

export default ResortMap;
