import { appConfig } from "@/config";
import paramsSerializerUtils from "@/utils/paramsSerializer.utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BooksDataI, BooksResponseI } from "./books.interface";

export const booksRTKProvider = createApi({
    reducerPath: "booksRTKProvider",
    baseQuery: fetchBaseQuery({
        baseUrl: `${appConfig.api.url}/books`,
        credentials: "include",
        paramsSerializer(params) {
            return paramsSerializerUtils(params);
        },
    }),
    tagTypes: ["Books"],
    endpoints: (builder) => ({
        getBooks: builder.query<BooksResponseI, { page?: number, limit?: number }>({
            query: ({ page, limit }) => ({
                url: `?page=${page}&limit=${limit}`,
                method: "GET"
            }),
            providesTags: ["Books"]
        }),
        createBooks: builder.mutation<any, any>({
            query: (data) => ({
                url: "",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Books"],
        }),
        searchByName: builder.query<BooksDataI[], string>({
            query: (name) => ({
                url: `search/name/${name}`,
                method: "GET"
            })
        }),
        getBooksById: builder.query<BooksDataI, string>({
            query: (id) => ({
                url: `${id}`,
                method: "GET"
            }),
            providesTags: ["Books"]
        }),
        deleteBook: builder.mutation<BooksDataI, string>({
            query: (uuid) => ({
                url: `/${uuid}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Books"]
        }),
        searchBookBy: builder.query<BooksDataI[], { prop: string, value: string }>({
            query: ({ prop, value }) => ({
                url: `getBy?${prop}=${value}`,
                method: "GET"
            }),
            providesTags: ["Books"]
        }),
    })

})


export const {
    useGetBooksQuery,
    useCreateBooksMutation,
    useSearchByNameQuery,
    useLazySearchByNameQuery,
    useGetBooksByIdQuery,
    useDeleteBookMutation,
    useSearchBookByQuery,
    useLazySearchBookByQuery
} = booksRTKProvider