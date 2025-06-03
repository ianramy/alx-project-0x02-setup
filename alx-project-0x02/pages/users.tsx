// alx-project-0x02/pages/users.tsx

import { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';

type User = {
    id: number;
    user: string;
    name: string;
    email: string;
    address: any;
};

export default function Users() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <>
            <Header />
            <div className="p-4 grid gap-4">
                {users.map(user => (
                    <UserCard
                        id={user.id}
                        user={user.user}
                        name={user.name}
                        email={user.email}
                        address={user.address}
                    />
                ))}
            </div>
        </>
    );
}