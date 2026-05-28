## CHANGES TO MAKE

-User tests on booking and map

## MARCIN FEEDBACK

Security concern: There is a potential security vulnerability that needs to be addressed.

Build failure: npm run build is currently failing and blocking production builds.

Insufficient error handling: Several HTTP requests lack proper error handling, which may lead to unhandled failures.

Spec non-compliance: The implementation does not follow the required specification that “the backend reads map layout and booking/guest data from files specified via CLI options.”

Missing linting: The project does not currently enforce linting, reducing code consistency and quality control.

Invalid validation logic: The validation implemented in route.ts does not appear to be correct or aligned with expected input rules.

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

## Security Concern Change

- guestBookings are no longer returned in the response on success to stop guest details being shown, only the Success Message is.

## Testing Implementation

Vitest and Testing Library have been installed to introduce automated testing across key areas of the application, with an initial focus on booking logic and map rendering.

handleBooking.test.ts

Tests core API interaction logic, covering:

Successful booking creation response
API error responses (e.g. invalid or rejected booking)
Network failures and exception handling (e.g. fetch failure)

These tests ensure that handleBooking correctly handles different API outcomes and returns a consistent, predictable structure to the UI layer.

parseMap.test.ts

Tests the ASCII map parsing logic, ensuring that:

The ASCII input is correctly converted into a 2D grid
Row and column dimensions are accurately preserved
ResortMapRender.test.tsx

Tests the main map rendering component, verifying that:

The component renders successfully with a valid grid
mapIcons is called with the correct icon and coordinate data
Booking modal opens correctly when clicking an available “W” spot
