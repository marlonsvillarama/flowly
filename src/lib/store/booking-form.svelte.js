export const bookingFormData = $state({
    activeCategory: '',
    activeStep: 'services',
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
        packages: [],
        products: [],
        services: [],
        vouchers: []
    },
    date: '',
    steps: [
        { id: 'services', label: 'Services' },
        { id: 'packages', label: 'Packages' },
        { id: 'vouchers', label: 'Vouchers' },
        { id: 'products', label: 'Products' },
    ],
    timeEnd: '1445',
    timeStart: '',
    filters: {
        package: []
    },
    activeToasts: [],
    toasts: {
        'hasPackages': { type: 'warning', text: 'One or more services you selected come with a package.', action: 'View packages' }
    }
});

export const dismissToasts = () => {
    bookingFormData.activeToasts = [];
};