# Resort Map

## Overview

This is a full-stack Next.js application for browsing a resort map and booking cabanas in real time using REST API routes.

The frontend renders an interactive ASCII-based resort map, and cabana booking is handled via internal API endpoints.

---

## Running the application

The entire application is started with a single command:

npm install
npm run build
npm start

This runs the Next.js application, including both frontend and API routes.

---

## Data sources

The application uses local static files:

- map.ascii (resort layout)
- bookings.json (guest validation data)

These are loaded internally by the backend API routes.

---

## Development

npm run dev

---

## Use of App

Once the app has been loaded using the above commands, you will be greeting with a single page. This will contain the Resort Map, documenting the layout of the Resort. Due to the focus on Cabana bookings any Pictures of Cabana's that were rendered are animated with a pulse when available, and slightly down-scaled and static when unavailable. There is also a clear user message when an unavailable cabana is hovered over.

You are able to select a Cabana of your choice, which will then render the booking modal to fill in a guest name and a room number. These are then checked by the booking API route to make sure all the relevant and correct information is provded. Upon clicking 'Book Now' You will either be greeted with a Booking Confirmed message and returned to the Map, or a helpful error message based on the API response.

The UI then updates automatically to show the now unavailable Cabana.

## Design decisions

- Used Next.js API routes to avoid a separate backend service and keep the system unified.
- Booking state is handled server-side in memory for simplicity (no persistence required).
- Map rendering is fully driven by API data to ensure consistency between backend state and UI.

Even though this is a small application, I did make use of a components folder to avoid writing out code on the page itself to keep the code clean and avoid any potential duplication if the app were to scale.

I did choose to make the booking modal instead of having a seperate page as I believed this to be a cleaner implemention then having a full page for this to avoid over-complication.

I did also make a function which was to map the Icons or pictures based on the character received from each column/ row which was mapped from the map.ascii. Although do not Over-Engineer was mentioned, I did have to make sure all of the images were in the correct places and directions.

The UI was made clean but but basic, that being said if this was a larger app/ website this would have follwed a set theme through out the pages and been made responsive for bigger and smaller devices.

I also considered using libraries such as TanStack/ React Query, Zustand and Toast however I did not see the need due to the scale of the app. I did end up using Framer Motion to have a clean look upon loading.
