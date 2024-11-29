import { BooksDataI } from '@/redux/rtk/books/books.interface';
import { useRouter } from 'next/navigation';

const BookCard = ({ book }: { book: BooksDataI }) => {
    const router = useRouter();
    return (
        <div className="card card-side bg-base-100 shadow-xl px-4">
            <figure>
                <img
                    src={'https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp'}
                    alt={book.title}
                    width={150}
                    height={200}
                    className="rounded"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">{book?.title}</h2>
                <p className="text-sm text-gray-600">Autor: {book?.author}</p>
                <p className="text-sm text-gray-600">Año: {book?.year}</p>
                <p className="text-sm text-gray-600">Rating: ⭐ {book?.rating}</p>
                <p className="text-sm text-gray-600">
                    Genre: {book.genre.join(', ')}
                </p>
                <p className="text-xs text-gray-400">
                    Created at: {new Date(book.createdAt).toLocaleDateString()}
                </p>
                <p className="text-xs text-gray-400">
                    Last updated: {new Date(book.updatedAt).toLocaleDateString()}
                </p>
                <div className="card-actions justify-start">
                    {book.isFavorite && (
                        <span className="badge badge-warning">Favorite</span>
                    )}
                </div>
                <button
                    onClick={() => router.push(`/${book.id}`)}
                    className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                    Ver
                </button>
            </div>
        </div>
    );
};

export default BookCard;
