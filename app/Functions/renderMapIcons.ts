import { IconData, ResortMapIcons } from "../Types/types";

interface RenderMapIconProps {
  icon: ResortMapIcons;
  columnIndex: number;
  rowIndex: number;
}

export default function mapIcons({
  icon,
  columnIndex,
  rowIndex,
}: RenderMapIconProps):IconData {
  if (columnIndex === 1 && rowIndex === 7) {
    return { src: "/arrowSplit.png" };
  }

  if (columnIndex === 1 && rowIndex === 16) {
    return { src: "/arrowCornerSquare.png" };
  }

  if (columnIndex === 6 && rowIndex === 2) {
    return { src: "/arrowSplit.png", className: "rotate-270" };
  }
    if (columnIndex === 8 && rowIndex === 2) {
    return { src: "/arrowSplit.png", className: "rotate-90" };
  }
   if (columnIndex === 13 && rowIndex === 2) {
    return { src: "/arrowSplit.png", className: "rotate-90" };
  }
   if (columnIndex === 15 && rowIndex === 2) {
    return { src: "/arrowSplit.png", className: "rotate-90" };
  }

    if (columnIndex === 1 && rowIndex === 5) {
    return { src: "/arrowCornerSquare.png", className: "rotate-90" };
  }

  if (columnIndex === 1 && rowIndex === 9) {
    return { src: "/arrowSplit.png" };
  }

   if (columnIndex === 5 && rowIndex === 9) {
    return { src: "/arrowSplit.png", className: "rotate-270"  };
  }
   if (columnIndex === 7 && rowIndex === 9) {
    return { src: "/arrowSplit.png", className: "rotate-270"  };
  }
   if (columnIndex === 14 && rowIndex === 9) {
    return { src: "/arrowSplit.png", className: "rotate-270"  };
  }
    if (columnIndex === 16 && rowIndex === 9) {
    return { src: "/arrowSplit.png", className: "rotate-270" };
  }
  if (columnIndex === 18 && rowIndex === 9) {
    return { src: "/arrowCornerSquare.png", className: "rotate-270" };
  }
   if (columnIndex === 18 && rowIndex === 7) {
    return { src: "/arrowCornerSquare.png", className: "rotate-180" };
  }
   if (columnIndex === 16 && rowIndex === 7) {
    return { src: "/arrowCornerSquare.png" };
  }
  if (columnIndex === 16 && rowIndex === 5) {
    return { src: "/arrowSplit.png", className: "rotate-90" };
  }
  if (columnIndex === 18 && rowIndex === 2) {
    return { src: "/arrowSplit.png", className: "rotate-180" };
  }
  if (columnIndex === 18 && rowIndex === 5) {
    return { src: "/arrowCornerSquare.png", className: "rotate-270" };
  }
   if (columnIndex === 3 && rowIndex === 2) {
    return { src: "/arrowSplit.png", className: "rotate-90" };
  }

  if (columnIndex === 3 && rowIndex === 5) {
    return { src: "/arrowCrossing.png" };
  }
   if (columnIndex === 5 && rowIndex === 5) {
    return { src: "/arrowSplit.png", className: "rotate-270" };
  }
   if (columnIndex === 10 && rowIndex === 5) {
    return { src: "/arrowSplit.png", className: "rotate-270" };
  }
if (columnIndex === 17 && rowIndex === 5) {
    return { src: "/arrowSplit.png", className: "rotate-270" };
  }
if (columnIndex === 17 && rowIndex === 7) {
    return { src: "/arrowSplit.png", className: "rotate-270" };
  }
  if (columnIndex === 11 && rowIndex === 7) {
    return { src: "/arrowSplit.png", className: "rotate-270" };
  }
   if (columnIndex === 7 && rowIndex === 7) {
    return { src: "/arrowSplit.png",  };
  }
   if (columnIndex === 17 && rowIndex === 16) {
    return { src: "/arrowEnd.png", className:"rotate-90"  };
  }

  if (columnIndex === 11 && rowIndex === 5) {
    return { src: "/arrowCrossing.png" };
  }

  if(rowIndex === 2 && columnIndex === 1){
     return { src: "/arrowEnd.png", className: "rotate-270" };
  }

  if(rowIndex === 2 && columnIndex === 11){
    return { src: "/arrowCrossing.png" };
  }

 if (icon === "#" && rowIndex === 2 ) {
  return { src: "/arrowStraight.png", className: "rotate-90" };
}
 if (icon === "#" && rowIndex === 5 ) {
  return { src: "/arrowStraight.png", className: "rotate-90" };
}
if (icon === "#" && rowIndex === 7 ) {
  return { src: "/arrowStraight.png", className: "rotate-90" };
}
if (icon === "#" && rowIndex === 9 ) {
  return { src: "/arrowStraight.png", className: "rotate-90" };
}
if (icon === "#" && rowIndex === 16 && columnIndex === 2) {
  return { src: "/arrowStraight.png", className: "rotate-90" };
}
if (icon === "#" && rowIndex === 16 ) {
  return { src: "/arrowSplit.png" , className: "rotate-270" };
}


  if (icon === ".") {
    return { src: "/textureWater.png" };
  }

  if (icon === "p") {
    return { src: "/pool.png" };
  }

  if (icon === "#") {
    return { src: "/arrowStraight.png" };
  }

  if (icon === "W") {
    return { src: "/cabana.png" };
  }

  if (icon === "c") {
    return { src: "/houseChimney.png" };
  }

  return { src: "/textureWater.png" };
}