// alx-project-0x02/components/common/PostCard.tsx

import { PostProps } from '../../interfaces';

export default function PostCard({ id, title, body, userId }: PostProps) {
	return (
		<div className="border p-4 rounded">
			<h4 className="text-lg font-semibold">Post ID: {id}</h4>
			<h3 className="font-bold text-xl">{title}</h3>
			<p>{body}</p>
			<p className="text-sm text-gray-500">User ID: {userId}</p>
		</div>
	);
}