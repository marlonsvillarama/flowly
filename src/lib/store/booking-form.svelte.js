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
    date: '',
    steps: [
        { id: 'services', label: 'Services' },
        // { id: 'time', label: 'Calendar' },
        { id: 'products', label: 'Products' },
        { id: 'packages', label: 'Packages' },
        { id: 'vouchers', label: 'Vouchers' },
        // { id: 'client', label: 'Your Info' },
        // { id: 'submit', label: 'Submit' }
    ],
    timeEnd: '1445',
    timeStart: ''
});
