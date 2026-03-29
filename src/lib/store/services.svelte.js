export let servicesData = [
    {
        id: 1,
        category: 'Haircuts',
        items: [
            {
                id: 1,
                name: 'Under 16 years old',
                price: 25,
                duration: 30,
                description: 'Gupit syete for the chikitings.'
            },
            {
                id: 2,
                name: 'Women\'s Haircut',
                price: 40,
                duration: 30,
                description: 'Layered at kung ano ano pa...',
                addons: [
                    {
                        id: 3,
                        name: 'Hair wash'
                    },
                    {
                        id: 4,
                        name: 'Hair iron'
                    }
                ]
            },
        ]
    },
    {
        id: 2,
        category: 'Massage',
        items: [
            {
                id: 5,
                name: 'Hard Massage',
                price: 25,
                duration: 60,
                description: 'Mapapa-aray ka sa sarap...'
            },
            {
                id: 6,
                name: 'Ventosa',
                price: 40,
                duration: 60,
                description: 'Sipsip higop'
            },
        ]
    }
];