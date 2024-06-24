import './styles.css';
import React from 'react';

import Landing from '@homework-task/components/landing/Landing';
import PageGenerator from './components/page-generator/PageGenerator';

const data = [
    {
        type: 'componentHero',
        props: {
            title: 'Welcome to Fat Cat',
            image: '/media/panel/shape1.svg',
        },
        components: [],
    },
    {
        type: 'layoutSection',
        props: {},
        components: [
            {
                type: 'componentItemsShowcase',
                props: {
                    items: [
                        {
                            title: 'FatCat 1',
                            description: 'FatCat Description 1',
                        },
                        {
                            title: 'FatCat 2',
                            description: 'FatCat Description 2',
                        },
                    ],
                },
            },
            {
                type: 'componentTrustBar',
                props: {
                    images: [
                        '/media/cats/cat_1.png',
                        '/media/cats/cat_2.png',
                        '/media/cats/cat_3.png',
                        '/media/cats/cat_4.png',
                        '/media/cats/cat_5.png',
                        '/media/cats/cat_6.png',
                    ],
                },
            },
        ],
    },
];

function App() {
    return (
        <main>
            <Landing />
            <PageGenerator data={data} />
        </main>
    );
}

export default App;
