
function getArg(flag: string): string | undefined {
  const index = process.argv.indexOf(flag);

  if (index === -1) return undefined;

  const value = process.argv[index + 1];

  if (!value || value.startsWith("--")) {
    throw new Error(`Missing value for ${flag}`);
  }

  return value;
};

export const config = {
  mapPath: getArg("--map") ?? "map.ascii",
  bookingsPath: getArg("--bookings") ?? "bookings.json",
};