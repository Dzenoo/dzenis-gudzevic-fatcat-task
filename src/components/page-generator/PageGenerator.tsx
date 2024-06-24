import React from 'react';

import Hero from '@homework-task/components/Hero';
import ItemsShowcase from '@homework-task/components/ItemsShowcase';
import TrustBar from '@homework-task/components/TrustBar';

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
