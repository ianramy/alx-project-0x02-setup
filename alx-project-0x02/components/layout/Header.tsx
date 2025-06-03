// alx-project-0x02/components/layout/Header.tsx

import Link from "next/link";

export default function Header() {
	return (
		<header className="p-4 bg-blue-600 text-white flex gap-4">
			<Link href="/home">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/posts">Posts</Link>
			<Link href="/users">Users</Link>
		</header>
	);
}
