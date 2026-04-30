import ResortMap from "./Components/ResortMap";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 text-gray-800">
      <div className="max-w-4xl w-fit px-6 text-center bg-white shadow-sm rounded-2xl p-6">
        <h1 className="text-4xl font-semibold tracking-tight mb-2">
          Resort Map
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Book an available cabana below:
        </p>

        <ResortMap />
      </div>
    </div>
  );
}
