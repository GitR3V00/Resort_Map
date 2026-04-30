import { ResortMapIcons } from "../Types/types";
import ResortMapRender from "./ResortMapRender";
import mapBackground from "@/public/parchmentBasic.png";

const parseMap = (map: string): ResortMapIcons[][] => {
  return map
    .trim()
    .split(/\r?\n/)
    .map((row) => row.trimEnd().split("") as ResortMapIcons[]);
};

const ResortMap = async () => {
  const res = await fetch("http://localhost:3000/api/map");

  const data = await res.json();
  const grid = parseMap(data.map);

  return (
    <div
      className="h-full w-fit bg-cover bg-center"
      style={{ backgroundImage: `url(${mapBackground.src})` }}
    >
      <ResortMapRender grid={grid} />
    </div>
  );
};

export default ResortMap;
