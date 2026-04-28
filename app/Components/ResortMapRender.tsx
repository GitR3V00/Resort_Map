import Image from "next/image";
import mapIcons from "../Functions/renderMapIcons";
import { ResortMapIcons } from "../Types/types";

interface ResortMapRenderProps {
  grid: ResortMapIcons[][];
}

const ResortMapRender = ({ grid }: ResortMapRenderProps) => {
  return (
    <div className="h-full w-full mx-auto shadow-2xl">
      {grid.map((row, rowIndex) => (
        <div className="m-2 flex gap-4" key={rowIndex}>
          {row.map((icon, colIndex) => (
            <span key={colIndex}>
              <Image
                src={mapIcons(icon) || "/arrowEnd.png"}
                alt=""
                height={50}
                width={50}
              />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ResortMapRender;
