# Flowly.Biz Booking Form UI
- The booking form is an embeddable application that allows users to book appointments with businesses. In theory, the booking form opens when a user clicks on a "Book Now" link on the business web site.

## Hard Rules
- The objective of the Booking Form UI redesign is to improve the overall end-user (client) experience, so ease of use in all pages must be prioritized.
- Use the root styles in `./src/app.css` in designing the application. The primary accent color is `--teal`, but different variations/opacities of the accent color may be used.
- As much as possible, adhere to the ShadCN UI style guide, using the --teal variable as the accent color.
- The output should be HTML pages only. No need to regenerate the svelte files. I only need a redesign of the application so only provide a UI without rewriting the SvelteKit files.

## Pages
- The following pages/screens represent the main use-cases of the booking form.

### Login Page UI
- The user should be able to log in using any of the following options:
    - As a guest
    - Using Google Authentication (OAuth 2.0)
    - Using their registered mobile number. If logging in using their registered mobile number, users should be able to enter a unique OTP.

### Location Select UI
- If the business has multiple locations, the user should be able to select at which location they will book services.

### Main Booking UI Logic
- The main booking form should be implemented as a SPA.
- The user should be able to book or puchase any of the following:
    - Services: These are the main services of the business. A service may be able to accommodate single clients only or multiple, such as with classes. Services may also include service bundles comprised of multiple services to be booked together.
    - Packages: Each package is a collection of services that may or may not be related to each other. Services within a package may have different quantities.
    - Vouchers: These are gift cards or credits that can be purchased by users for themselves or as gifts for other people.
    - Products: These are physical products that may be purchased either online (for later pickup) or in the store.
- The user should be able to see a running total (subtotal, tax, and total) of their current purchase.
- When the user selects a service and a package that contains that service exists, the UI will prompt the user accordingly.
- If the user selects both a service and a package that contains that service, the UI should be able to present the user with the following choices:
    - Buy the package and use it in place of any services that the user booked.
    - But the package and use it for later appointments.
- The user should be able to select a date, time, and specialist for the appointment. If multiple services are booked, it should be possible to select different specialists for each service.
- A confirmation page contianing the booking details and any other items the user purchased should be shown at the end of the booking flow.
