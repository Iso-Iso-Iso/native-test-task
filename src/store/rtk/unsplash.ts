import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {GalleryGridItem} from "src/interfaces/gallery-grid";

const unsplashApi = createApi({
    reducerPath: "unsplashApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.unsplash.com/photos",
        prepareHeaders(headers) {
            headers.set(
                "Authorization",
                "Client-ID ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9 ",
            );
            return headers;
        },
    }),
    endpoints: build => ({
        getSingleImage: build.query({
            query: id => "/" + id,
        }),
        getImages: build.query<GalleryGridItem[], void>({
            query: () => "",
        }),
    }),
});

export const {useGetImagesQuery, useGetSingleImageQuery} = unsplashApi;
export default unsplashApi;
