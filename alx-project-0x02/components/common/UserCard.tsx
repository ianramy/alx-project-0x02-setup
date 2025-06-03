// alx-project-0x02/components/common/UserCard.tsx

import { UserProps } from '../../interfaces';

export default function UserCard({ id, user, name, email, address }: UserProps) {
    return (
        <div className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{name}</h2>
            <h4 className="text-lg font-semibold">User ID: {id}</h4>
            <p className="text-sm text-gray-600">Username: {user}</p>
            <p>Email: {email}</p>
            <p>Address: {address.street}, {address.city}</p>
        </div>
    );
}
