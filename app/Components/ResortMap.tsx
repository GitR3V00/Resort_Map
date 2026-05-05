import { ResortMapIcons } from "../Types/types";
import ResortMapRender from "./ResortMapRender";
import mapBackground from "@/public/parchmentBasic.png";
import { getMap } from "../Functions/getMap";

const parseMap = (map: string): ResortMapIcons[][] => {
  return map
    .trim()
    .split(/\r?\n/)
    .map((row) => row.trimEnd().split("") as ResortMapIcons[]);
};

const ResortMap = () => {
  const mapData = getMap();
  const grid = parseMap(mapData);

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
