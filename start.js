/* eslint-disable @typescript-eslint/no-require-imports */
const { spawn } = require("child_process");

function getArg(flag) {
  const index = process.argv.indexOf(flag);

  if (index === -1) return undefined;

  const value = process.argv[index + 1];

  if (!value || value.startsWith("--")) {
    throw new Error(`Missing value for ${flag}`);
  }

  return value;
}

process.env.MAP_PATH = getArg("--map") ?? "map.ascii";
process.env.BOOKINGS_PATH = getArg("--bookings") ?? "bookings.json";

spawn("npx", ["next", "dev"], {
  stdio: "inherit",
  env: process.env,
  shell: true,
});