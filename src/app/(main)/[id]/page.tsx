'use client'
import Loading from '@/components/app/loading';
import { useDeleteBookMutation, useGetBooksByIdQuery } from '@/redux/rtk/books';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import Swal from 'sweetalert2';

interface PageProps {
    params: {
        id: string;
    };
}

const bookSelected = ({ params }: PageProps) => {
    const { id } = params;
    const { data: book, isLoading } = useGetBooksByIdQuery(id)
    const [deleteBook] = useDeleteBookMutation()
    const router = useRouter()

    const handleDeleted = async () => {
        try {
            await deleteBook(id).unwrap();
            Swal.fire({
                toast: true,
                icon: "success",
                text: "Libro borrado correctamente",
            });
            router.push('/')

        } catch (error) {
            Swal.fire({
                toast: true,
                icon: "error",
                text: "Error borrando libro",
            });
        }
    }

    return (
        <div>
            {
                isLoading ? <Loading /> :
                    <div className="container mx-auto  p-6">
                        <div className="card lg:card-side bg-base-100 dark:bg-white shadow-xl">

                            <figure className="w-full lg:w-1/3">
                                {book?.coverImage ? (
                                    <img src={book?.coverImage} alt={`${book?.title} cover`} className="rounded-lg" />
                                ) : (
                                    <div className="flex items-center justify-center w-full h-64 bg-gray-200">
                                        <span className="text-gray-500">Sin portada</span>
                                    </div>
                                )}
                            </figure>

                            <div className="card-body ">
                                <h2 className="card-title text-2xl font-bold">{book?.title}</h2>
                                <p className="text-lg">
                                    <span className="font-semibold">Autor:</span> {book?.author}
                                </p>
                                <p>
                                    <span className="font-semibold">Año:</span> {book?.year}
                                </p>
                                <p>
                                    <span className="font-semibold">Género:</span>{' '}
                                    {book!.genre?.length > 0 ? book?.genre.join(', ') : 'Desconocido'}
                                </p>
                                <p>
                                    <span className="font-semibold">Calificación:</span> {book?.rating} / 5
                                </p>
                                <p>
                                    <span className="font-semibold">Favorito:</span>{' '}
                                    {book?.isFavorite ? (
                                        <span className="text-success">Sí</span>
                                    ) : (
                                        <span className="text-error">No</span>
                                    )}
                                </p>
                                <p className="text-sm text-gray-500">
                                    <span className="font-semibold">Creado el:</span>{' '}
                                    {new Date(book!.createdAt).toLocaleDateString()}
                                </p>
                                <p className="text-sm text-gray-500">
                                    <span className="font-semibold">Actualizado el:</span>{' '}
                                    {new Date(book!.updatedAt).toLocaleDateString()}
                                </p>
                                <div className="card-actions justify-end ">
                                    <button className="btn btn-success">Editar</button>
                                    <button
                                        onClick={handleDeleted}
                                        className="btn btn-error text-white">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default bookSelected