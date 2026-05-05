/* eslint-disable @typescript-eslint/no-require-imports */
const { spawn } = require("child_process");

function getArg(flag) {
  const index = process.argv.indexOf(flag);
  if (index === -1) return undefined;
  return process.argv[index + 1];
}

const map = getArg("--map") ?? "map.ascii";
const bookings = getArg("--bookings") ?? "bookings.json";

console.log("Starting app with:");
console.log("Map:", map);
console.log("Bookings:", bookings);


process.env.MAP_PATH = map;
process.env.BOOKINGS_PATH = bookings;

spawn("next", ["start"], {
  stdio: "inherit",
  shell: true,
  env: process.env,
});