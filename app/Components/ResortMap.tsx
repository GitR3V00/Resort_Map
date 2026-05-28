import ResortMapRender from "./ResortMapRender";
import mapBackground from "@/public/parchmentBasic.png";
import { getMap } from "../Functions/getMap";
import { parseMap } from "../Functions/parseMap";

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
