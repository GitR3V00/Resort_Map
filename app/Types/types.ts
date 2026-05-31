export type ResortMapIcons = '.' | 'c' |'W' | 'p' | '#'

export type IconData = {
  src: string;
  className?: string;
};

export interface BookingData {
  guestName: string;
  roomNumber: string;
  columnIndex: number;
  rowIndex: number;
}

export type BookingResult =
  | {
      ok: true;
      data: {
        message: string;
      };
    }
  | {
      ok: false;
      error: string;
    };

 export type Spot = {
  columnIndex: number;
  rowIndex: number;
};