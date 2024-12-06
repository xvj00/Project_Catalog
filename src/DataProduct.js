const products = [
    {
        id: 1,
        name: 'Optimum Nutrition Протеины',
        rating: 5,
        price: 3200,
        image: './img/image.png',
        sale: false,
        new: true,
    },
    {
        id: 2,
        name: 'MyProtein Креатин',
        rating: 5,
        price: 1530,
        image: './img/image.png',
        sale: true,
        new: false,
    },
    {
        id: 3,
        name: 'Scitec Nutrition BCAA',
        rating: 4,
        price: 1350,
        image: './img/image.png',

        sale: true,
        new: true,
    },
    {
        id: 4,
        name: 'Biotech USA Аминокислоты',
        rating: 5,
        price: 2100,
        image: './img/image.png',

        sale: false,
        new: false,
    },
    {
        id: 5,
        name: 'MuscleTech Гейнер',
        rating: 4,
        price: 2850,
        image: './img/image.png',

        sale: false,
        new: true,
    },
    {
        id: 6,
        name: 'PowerBar Изотоники',
        rating: 4,
        price: 970,
        image: './img/image.png',

        sale: false,
        new: false,
    },
    {
        id: 7,
        name: 'ON Креатин и BCAA',
        rating: 5,
        price: 1900,
        image:'./img/image.png',

        sale: false,
        new:true
    },
    {
        id: 8,
        name: 'Optimum Nutrition Протеины',
        rating: 5,
        price: 3200,
        image: './img/image.png',
        sale: false,
        new: true,
    },
    {
        id: 9,
        name: 'MyProtein Креатин',
        rating: 5,
        price: 1530,
        image: './img/image.png',
        sale: true,
        new: false,
    }

    ]

products.forEach(product => {
    if (product.name.includes('Протеины')) {
        product.image = './img/protein.png';
    } else if (product.name.includes('Креатин')) {
        product.image = './img/image.png';
    } else if (product.name.includes('BCAA')) {
        product.image = './img/bcaa.png';
    } else if (product.name.includes('Аминокислоты')) {
        product.image = './img/amino.png';
    } else if (product.name.includes('Гейнер')) {
        product.image = './img/gainer.png';
    } else if (product.name.includes('Изотоники')) {
        product.image = './img/powerbar_isotonic.png';
    } else {
        product.image = './img/default_image.png'; // Изображение по умолчанию
    }
});


export default products