import { packagesData } from "./packages.svelte";

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
        // { id: 'bundles', label: 'Bundles' },
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

// export const createBookingFormData = class
let packagesMatchingServices = $derived.by(() => {
    let items = bookingFormData.cart.services;
    if (items.length <= 0) return [];

    let output = [];
    items.forEach(item => {
        let packages = packagesData.filter(p => p.services.filter(s => s.service === item).length > 0);
        console.log(`item = ${item}; packages`, packages);

        let packageIds = packages.map(p => p.id);
        let newPackageIds = packageIds.filter(id => output.map(o => o.id).includes(id) === false);
        console.log(`item = ${item}; newPackageIds`, newPackageIds);

        output = [
            ...output,
            ...packagesData.filter(p => newPackageIds.includes(p.id))
        ];

        console.log(`item = ${item}; output`, output);
    });
    return output;
});

let redeemablePackages = $derived.by(() => {
    let output = packagesMatchingServices.filter(p => (bookingFormData.cart.packages || []).includes(p.id));
    console.log('redeemablePackages', output);
    return output;
});

export const hasMatchingPackages = () => {
    console.log('packagesMatchingServices', packagesMatchingServices);
    // packagesMatching('')
    return packagesMatchingServices.length > 0;
};

export const hasRedeemablePackages = () => {
    console.log('redeemablePackages', redeemablePackages);
    return redeemablePackages.length > 0;
};

export const packagesForRedemption = () => {
    return redeemablePackages;
};

export const packagesForReview = () => {
    if (bookingFormData.cart.packages.length <= 0) {
        return [];
    }

    let output = packagesMatchingServices.filter(p => bookingFormData.cart.packages.includes(p.id) === true);
    console.log('packagesForReview output', output);

    return output;
};

export const dismissToasts = () => {
    bookingFormData.activeToasts = [];
};
