import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import middlewares from "./middlewares";
import { booksRTKProvider } from "./rtk/books";
import { authRTKProvider } from "./rtk/auth";


export const store = configureStore({
    reducer: {
        [booksRTKProvider.reducerPath]: booksRTKProvider.reducer,
        [authRTKProvider.reducerPath]: authRTKProvider.reducer
    },
    middleware: (gDM) => {
        return gDM().concat(middlewares);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;