import {RouteProp, useRoute} from "@react-navigation/native";
import React from "react";
import {useGetSingleImageQuery} from "src/store/rtk/unsplash";
import ImageViewer from "../gallery/image-viewer";

function UnsplashImageViewer() {
    const route = useRoute<RouteProp<any>>();
    const imageId = route?.params?.id || 1;
    const {data} = useGetSingleImageQuery(imageId);
    return <ImageViewer src={data?.urls?.small} />;
}

export default UnsplashImageViewer;
