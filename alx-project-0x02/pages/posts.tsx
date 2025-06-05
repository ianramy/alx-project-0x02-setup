// alx-project-0x02/pages/posts.tsx

import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';

export default function Posts() {
	type Post = {
		id: number;
		title: string;
		body: string;
		userId: number;
	};

	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => setPosts(data.slice(0, 5)));
	}, []);

	return (
		<>
			<Header />
			<div className="p-4 grid gap-4">
				{posts.map(post => (
					<PostCard id={post.id} title={post.title} body={post.body} userId={post.userId} />
				))}
			</div>
		</>
	);
}