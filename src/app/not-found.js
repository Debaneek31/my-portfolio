// src/app/not-found.js
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-6">
                Oops! The page you’re looking for doesn’t exist.
            </p>
            <Link href="/">
                <span className="text-blue-500 hover:underline">Go back home</span>
            </Link>
        </div>
    );
}
