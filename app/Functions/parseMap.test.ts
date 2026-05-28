import { describe, expect, it } from "vitest";
import { parseMap } from "./parseMap";

describe("parseMap", () => {
  it("parses ascii map into a 2D grid", () => {
    const map = `
W.
.W
`;

    expect(parseMap(map)).toEqual([
      ["W", "."],
      [".", "W"],
    ]);
  });

  it("keeps the correct row and column sizes", () => {
    const map = `
W..
.W.
..W
`;

    const result = parseMap(map);

    expect(result).toHaveLength(3);
    expect(result[0]).toHaveLength(3);
  });
});
