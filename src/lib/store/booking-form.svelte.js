export const bookingFormData = $state({
    activeCategory: '',
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
        items: [],
        products: []
    },
    date: '2026-04-02',
    steps: [
        { id: 'services', label: 'Services' },
        { id: 'time', label: 'Calendar' },
        { id: 'products', label: 'Products' },
        // { id: 'submit', label: 'Submit' }
    ],
    timeEnd: '1445',
    timeStart: '1030'
});
