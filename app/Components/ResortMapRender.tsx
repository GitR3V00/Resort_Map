import { ResortMapIcons } from '../Types/types';

interface ResortMapRenderProps {
  grid: ResortMapIcons[][];
}

const ResortMapRender = ({ grid }: ResortMapRenderProps) => {
  return (
    <div
  className="min-w-[50%] h-[70%] mx-auto shadow-2xl"
>
      {grid.map((row, rowIndex) => (
        <div className='mb-2' key={rowIndex}>
          {row.map((icon, colIndex) => (
            <span key={colIndex}>{icon}</span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ResortMapRender