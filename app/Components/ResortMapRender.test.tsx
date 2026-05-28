import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import type { ResortMapIcons, IconData } from "../Types/types";

import ResortMapRender from "./ResortMapRender";
import mapIcons from "../Functions/renderMapIcons";
import bookingExists from "../Functions/validateBookings";

// =====================================================
// MOCKS
// =====================================================

vi.mock("../Functions/renderMapIcons", () => ({
  default: vi.fn(),
}));

vi.mock("../Functions/validateBookings", () => ({
  default: vi.fn(),
}));

const mockedMapIcons = vi.mocked(mapIcons);
const mockedBookingExists = vi.mocked(bookingExists);

// Mock Next/Image (required for Next.js)
vi.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} />
  ),
}));

// Mock framer-motion (prevents DOM issues)
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  },
}));

// Mock BookingModal
vi.mock("../Components/BookingModal", () => ({
  default: ({ onClose }: { onClose: () => void }) => (
    <div data-testid="booking-modal">
      <button onClick={onClose}>close</button>
    </div>
  ),
}));

// =====================================================
// TESTS
// =====================================================

describe("ResortMapRender", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // -----------------------------------------------------
  // 1. RENDER TEST
  // -----------------------------------------------------
  it("renders correct number of grid cells", () => {
    mockedMapIcons.mockReturnValue({
      src: "/test.png",
      className: "",
    } satisfies IconData);

    mockedBookingExists.mockReturnValue(false);

    const grid: ResortMapIcons[][] = [
      ["W", "."],
      ["c", "W"],
    ];

    render(<ResortMapRender grid={grid} />);

    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(4);
  });

  // -----------------------------------------------------
  // 2. mapIcons CALLED CORRECTLY
  // -----------------------------------------------------
  it("calls mapIcons with correct coordinates", () => {
    mockedMapIcons.mockReturnValue({
      src: "/test.png",
      className: "",
    } satisfies IconData);

    mockedBookingExists.mockReturnValue(false);

    const grid: ResortMapIcons[][] = [["W", "."]];

    render(<ResortMapRender grid={grid} />);

    expect(mockedMapIcons).toHaveBeenCalledWith({
      icon: "W",
      columnIndex: 0,
      rowIndex: 0,
    });

    expect(mockedMapIcons).toHaveBeenCalledWith({
      icon: ".",
      columnIndex: 1,
      rowIndex: 0,
    });
  });

  // -----------------------------------------------------
  // 3. CLICK OPENS BOOKING MODAL
  // -----------------------------------------------------
  it("opens booking modal when clicking available W spot", () => {
    mockedMapIcons.mockReturnValue({
      src: "/test.png",
      className: "",
    } satisfies IconData);

    mockedBookingExists.mockReturnValue(false);

    const grid: ResortMapIcons[][] = [["W"]];

    render(<ResortMapRender grid={grid} />);

    fireEvent.click(screen.getByRole("img"));

    expect(screen.getByTestId("booking-modal")).toBeInTheDocument();
  });
});
