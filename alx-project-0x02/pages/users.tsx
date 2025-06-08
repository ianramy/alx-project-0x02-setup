// alx-project-0x02/pages/users.tsx

import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';
import { GetStaticProps } from 'next';

type User = {
	id: number;
	user: string;
	name: string;
	email: string;
	address: any;
};

type Props = {
	users: User[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: User[] = await res.json();
    const users = data.slice(0, 5);

    return {
        props: {
            users,
        },
    };
};

export default function Users({ users }: Props) {
	return (
		<>
			<Header />
			<div className="p-4 grid gap-4">
				{users.map(user => (
					<UserCard
						key={user.id}
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
