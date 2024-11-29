'use client'
import BookCard from "@/components/app/card";
import Loading from "@/components/app/loading";
import Modal from "@/components/app/modal";
import Search from "@/components/app/search";
import CreateBooks from "@/components/page/home/createBook";
import NotFoundBook from "@/components/page/home/notFound";
import { useGetBooksQuery, useLazySearchBookByQuery, useLazySearchByNameQuery } from "@/redux/rtk/books";
import { BooksDataI } from "@/redux/rtk/books/books.interface";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1)
  const { data: books, isLoading } = useGetBooksQuery({ page, limit: 10 })
  const [show, setShow] = useState(false)
  const [getData, { data: searchData, isError }] = useLazySearchByNameQuery()
  const [getByQuery, { data: searchByData }] = useLazySearchBookByQuery()


  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };


  return (
    <div className="m-10 flex flex-col">
      <div className=" flex justify-center">
        <Search getData={getData} getByQuery={getByQuery} />
      </div>
      <div className="flex mt-5 justify-center md:justify-end">
        <button
          onClick={() => setShow(true)}
          className="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
          </svg>

          Publicar Libro</button>
      </div>
      <div className={`${isLoading ? 'flex justify-center' : 'grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'}`}>
        {isLoading ? <Loading /> : (

          (searchData || searchByData! || books?.data)?.length > 0 ? (
            (searchData || searchByData || books?.data)?.map((data: BooksDataI, index: number) => (
              <BookCard book={data} key={index} />
            ))
          ) : (<NotFoundBook />)
        )}
      </div>

      <div className={`${books?.data ? "flex justify-center mt-6" : 'hidden'}`}>
        <div className="join">
          <button
            className="join-item btn"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            ‹
          </button>
          {[...Array(books?.pagination.totalPages || 1)].map((_, index) => (
            <button
              key={index}
              className={`join-item btn ${page === index + 1 ? 'btn-active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="join-item btn"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === books?.pagination.totalPages}
          >
            ›
          </button>
        </div>
      </div>

      <Modal
        show={show}
        setShow={setShow}
        title="Publicar nuevo libro">
        <CreateBooks setShow={setShow} />
      </Modal>
    </div>
  );
}
