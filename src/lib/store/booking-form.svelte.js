export const bookingFormData = $state({
    activeStep: 0,
    company: {
        id: 1,
        name: 'Studio 4 Hair Salon'
    },
    client: {
        id: 1,
        name: {
            first: 'Apple'
        }
    },
    cart: {
        items: []
    }
});
