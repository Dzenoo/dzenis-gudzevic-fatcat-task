import React from 'react';

import Hero from '@homework-task/components/Hero';
import ItemsShowcase from '@homework-task/components/ItemsShowcase';
import TrustBar from '@homework-task/components/TrustBar';

// const data = [
//     {
//         type: 'componentHero',
//         props: {
//             title: 'Welcome to Fat Cat',
//             image: '/media/panel/shape1.svg',
//         },
//         components: [],
//     },
//     {
//         type: 'layoutSection',
//         props: {},
//         components: [
//             {
//                 type: 'componentItemsShowcase',
//                 props: {
//                     items: [
//                         {
//                             title: 'FatCat 1',
//                             description: 'FatCat Description 1',
//                         },
//                         {
//                             title: 'FatCat 2',
//                             description: 'FatCat Description 2',
//                         },
//                     ],
//                 },
//             },
//             {
//                 type: 'componentTrustBar',
//                 props: {
//                     images: [
//                         '/media/cats/cat_1.png',
//                         '/media/cats/cat_2.png',
//                         '/media/cats/cat_3.png',
//                         '/media/cats/cat_4.png',
//                         '/media/cats/cat_5.png',
//                         '/media/cats/cat_6.png',
//                     ],
//                 },
//             },
//         ],
//     },
// ];

export interface ComponentProps {
    type: string;
    props: any;
}

export interface LayoutProps {
    type: string;
    props: any;
    components: ComponentProps[];
}

const componentMap: { [key: string]: React.ElementType } = {
    componentHero: Hero,
    componentItemsShowcase: ItemsShowcase,
    componentTrustBar: TrustBar,
};

const PageGenerator: React.FC<{ data: LayoutProps[] }> = ({ data }) => {
    return (
        <div>
            {data.map((section, index) => {
                const SectionLayout =
                    componentMap[section.type] || DefaultLayout;

                return (
                    <SectionLayout key={index} {...section.props}>
                        {section.components.map((component, idx: number) => {
                            const Component =
                                componentMap[component.type] ||
                                DefaultComponent;
                            return <Component key={idx} {...component.props} />;
                        })}
                    </SectionLayout>
                );
            })}
        </div>
    );
};

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => <div className="flex flex-col gap-10">{children}</div>;

const DefaultComponent: React.FC = () => <div>Unknown Component</div>;

export default PageGenerator;
