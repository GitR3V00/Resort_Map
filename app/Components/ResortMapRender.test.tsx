import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

// =====================================================
// MOCKS
// =====================================================

vi.mock("../Functions/renderMapIcons", () => ({
  default: vi.fn(),
}));

vi.mock("../Functions/validateBookings", () => ({
  default: vi.fn(),
}));

vi.mock("next/image", () => ({
  default: (props: any) => <img {...props} />,
}));

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  },
}));

vi.mock("../Components/BookingModal", () => ({
  default: ({ onClose }: { onClose: () => void }) => (
    <div data-testid="booking-modal">
      <button onClick={onClose}>close</button>
    </div>
  ),
}));

// =====================================================
// IMPORTS (after mocks)
// =====================================================

import ResortMapRender from "./ResortMapRender";
import mapIcons from "../Functions/renderMapIcons";
import bookingExists from "../Functions/validateBookings";

import type { ResortMapIcons, IconData } from "../Types/types";

// =====================================================
// TESTS
// =====================================================

describe("ResortMapRender", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders correct number of grid cells", () => {
    vi.mocked(mapIcons).mockReturnValue({
      src: "/test.png",
      className: "",
    } satisfies IconData);

    vi.mocked(bookingExists).mockReturnValue(false);

    const grid: ResortMapIcons[][] = [
      ["W", "."],
      ["c", "W"],
    ];

    render(<ResortMapRender grid={grid} />);

    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(4);
  });

  it("calls mapIcons with correct coordinates", () => {
    vi.mocked(mapIcons).mockReturnValue({
      src: "/test.png",
      className: "",
    } satisfies IconData);

    vi.mocked(bookingExists).mockReturnValue(false);

    const grid: ResortMapIcons[][] = [["W", "."]];

    render(<ResortMapRender grid={grid} />);

    expect(mapIcons).toHaveBeenCalledWith({
      icon: "W",
      columnIndex: 0,
      rowIndex: 0,
    });

    expect(mapIcons).toHaveBeenCalledWith({
      icon: ".",
      columnIndex: 1,
      rowIndex: 0,
    });
  });

  it("opens booking modal when clicking available W spot", () => {
    vi.mocked(mapIcons).mockReturnValue({
      src: "/test.png",
      className: "",
    } satisfies IconData);

    vi.mocked(bookingExists).mockReturnValue(false);

    const grid: ResortMapIcons[][] = [["W"]];

    render(<ResortMapRender grid={grid} />);

    fireEvent.click(screen.getByRole("img"));

    expect(screen.getByTestId("booking-modal")).toBeInTheDocument();
  });
});