import { authRTKProvider } from "../rtk/auth";
import { booksRTKProvider } from "../rtk/books";

export default [
    booksRTKProvider.middleware,
    authRTKProvider.middleware
]