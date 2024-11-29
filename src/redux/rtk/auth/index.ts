
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import paramsSerializerUtils from "@/utils/paramsSerializer.utils";
import { appConfig } from "@/config";
import { ILoginRequest, ILoginResponse, IRegisterRequest } from "./auth.interfaces";

export const authRTKProvider = createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({
        baseUrl: `${appConfig.api.url}/auth`,
        credentials: 'include',

        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
        paramsSerializer(params) {
            return paramsSerializerUtils(params);
        },
    }),
    tagTypes: ["login"],
    endpoints: (builder) => ({
        login: builder.mutation<ILoginResponse, ILoginRequest>({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data,
            }),
            transformResponse: (res: any, meta, arg) => {
                return res;
            },
            transformErrorResponse(baseQueryReturnValue, meta, arg) {
                return baseQueryReturnValue.data;
            },
            invalidatesTags: ["login"],
        }),
        register: builder.mutation<any, IRegisterRequest>({
            query: (data) => ({
                url: "/signup",
                method: "POST",
                body: data,
            }),
        })

    }),
});

export const { useLoginMutation, useRegisterMutation } = authRTKProvider;
