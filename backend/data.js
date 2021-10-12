import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Nana',
            email: '17nkwon@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: 'John',
            email: 'sample@email.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],
    products: [
        {
            name: 'Hanging Plants',
            category: 'Plants',
            image: '/images/product1.jpg',
            price: '1.00',
            rating: 0,
            numReviews: 0,
            description: 'three plants hanging',
        },
        {
            name: 'Love Me Daisy',
            category: 'Plants',
            image: '/images/product2.jpg',
            price: '1.00',
            rating: 0,
            numReviews: 0,
            description: 'daisy with the words love me or love me not',
        },
        {
            name: 'Tree',
            category: 'Plants',
            image: '/images/product3.jpg',
            price: '1.00',
            rating: 0,
            numReviews: 0,
            description: 'tree in a box',
        },
        {
            name: 'Lit Outfit',
            category: 'Characters',
            image: '/images/product4.jpg',
            price: '1.00',
            rating: 0,
            numReviews: 0,
            description: 'girl with a flame skirt and blue background',
        },
        {
            name: 'Space Girl',
            category: 'Characters',
            image: '/images/product5.jpg',
            price: '1.00',
            rating: 0,
            numReviews: 0,
            description: 'girl with space buns and galaxy background',
        },
        {
            name: 'Star Girl',
            category: 'Characters',
            image: '/images/product6.jpg',
            price: '1.00',
            rating: 0,
            numReviews: 0,
            description: 'mystical girl with a star necklace and star background',
        }
    ]
};

export default data;