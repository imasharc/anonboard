import PostForm from './PostForm';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-blue-500 pt-32">
      <PostForm />
      <div className="w-full max-w-5xl p-4">
        <div id="posts-container" className="mt-8 w-full max-w-md">
          {/* Posts will appear here */}
        </div>
      </div>
    </main>
  );
}
