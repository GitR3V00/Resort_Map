export interface BookingData {
    guestName: string;
    roomNumber: string;
    columnIndex: number;
    rowIndex: number;
}

export default async function handleBooking({guestName, roomNumber, columnIndex, rowIndex}: BookingData) 
{
   const res = await fetch('/api/booking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            guestName,
            room: roomNumber,
            columnIndex: columnIndex,
            rowIndex: rowIndex
        })
    });
   
       const data = await res.json();

    return {
        ok: res.ok,
        data
    };
}

