// alx-project-0x02/pages/home.tsx

import Card from '@/components/common/Card';
import Header from '@/components/layout/Header';

export default function Home() {
    return (
        <>
            <Header />
            <div className="p-4">
                <Card title="Card One" content="This is the first card." />
                <Card title="Card Two" content="This is the second card." />
            </div>
        </>
    );
}
