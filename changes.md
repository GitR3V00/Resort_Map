## CHANGES MADE SINCE LAST SUBMISSION.

## NPM Build - Fixed Errors.

- After reviewing the npm run build messages the aysnc fetch for the map using localhost:3000 would not exist due to the page being a server component. The app was essentially trying to call upon itself before it existed.
I changed this so getMap is now a function which does not require an API route looking back this was just quite inefficient. This is now in Functions/getMap.ts. After testing the Map still renders with no issues. The build is now able to run with no TS errors.

## Error Handling within getMap and handleBookings.ts.

-Added error handling for getMap.ts to ensure the file exists, if not an error is thrown. Functions/getMap.ts
-Error handling also added into handleBooking.ts.

## Spec Non-Compliance.

- Now created a config.ts file within /lib. So users can now enter custom --map and --bookings upon build/ run time. getMap was also updated to appropriately use the config from within config.ts to allow dynamic file access. If custom files are not entered this does have a fallback of the files within the app folder map.ascii and bookings.json.

example start up: npm run start -- --map map.ascii --bookings bookings.json

## ES Lint.

- Linting is properly configured and enforceable via npm scripts

## Invalid Validation Logic.

- Improved validation flow within api/booking/route.ts. This now:
- Checks the body for all basic valid fields.
- Builds a strucutred booking object.
- Checks against known bookings from Bookings.json
- Checks if the cabana has already been booked or not.
- Checks for any duplicate bookings for the guest.
- Checks if the guest is booked onto any other Cabana's at that time.

