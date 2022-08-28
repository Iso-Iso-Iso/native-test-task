import {useNavigation} from "@react-navigation/native";
import React from "react";
import {GalleryGridItem} from "src/interfaces/gallery-grid";
import {useGetImagesQuery} from "src/store/rtk/unsplash";
import GalleryGrid from "src/components/gallery/gallery-grid";

function UnsplachGalleryGrid() {
    const navigation = useNavigation();
    const {data} = useGetImagesQuery();
    function onImageSelect(image: GalleryGridItem) {
        navigation.navigate("single-image", {
            id: image.id,
        });
    }

    return <GalleryGrid images={data || []} onImagePress={onImageSelect} />;
}

export default UnsplachGalleryGrid;
