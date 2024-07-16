'use client';

import { useState, useEffect } from 'react';

export default function PostForm() {
  const [inputValue, setInputValue] = useState('');
  const [posts, setPosts] = useState<{ id: number, content: string }[]>([]);
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    // Check if the user already has an ID in localStorage
    let anonId = localStorage.getItem('anonId');
    if (!anonId) {
      // Generate a new ID if none exists
      anonId = `anon${Math.floor(Math.random() * 10000)}`;
      localStorage.setItem('anonId', anonId);
    }
    setUserId(anonId);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim()) {
      const newPost = { id: Date.now(), content: `${userId}: ${inputValue}` };
      setPosts([newPost, ...posts]);
      setInputValue('');
    }
  };

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-blue-500 p-4">
      <form onSubmit={handleSubmit} className="flex items-center w-full">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="p-2 border rounded-l mb-0 w-full text-black"
          placeholder="Write something here..."
        />
        <button type="submit" className="p-2 bg-white text-blue-500 rounded-r">
          Submit
        </button>
      </form>
      <div className="mt-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white text-black p-2 rounded mb-2 shadow w-full">
            {post.content}
          </div>
        ))}
      </div>
    </div>
  );
}
