// alx-project-0x02/components/common/PostModal.tsx

import { useState } from 'react';

export default function PostModal({ onSubmit }: { onSubmit: (post: { title: string, content: string }) => void }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-lg font-bold mb-2">Create Post</h2>
                <input className="border p-2 mb-2 w-full" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                <textarea className="border p-2 w-full mb-2" placeholder="Content" value={content} onChange={e => setContent(e.target.value)} />
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => onSubmit({ title, content })}>
                    Submit
                </button>
            </div>
        </div>
    );
}