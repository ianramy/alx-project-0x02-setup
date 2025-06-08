// alx-project-0x02/pages/posts.tsx

import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { GetStaticProps } from "next";

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

type Props = {
    posts: Post[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: Post[] = await res.json();
    const posts = data.slice(0, 5);

    return {
        props: {
            posts,
        },
    };
};

export default function Posts({ posts }: Props) {
    return (
        <>
            <Header />
            <div className="p-4 grid gap-4">
                {posts.map(post => (
                    <PostCard key={post.id} id={post.id} title={post.title} body={post.body} userId={post.userId} />
                ))}
            </div>
        </>
    );
}
