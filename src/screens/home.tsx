import {useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import React from "react";
import {View} from "react-native";
import UnsplachGalleryGrid from "src/components/home/unsplach-gallery-grid";
import GalleryGrid from "src/components/gallery/gallery-grid";
import {useGetImagesQuery} from "src/store/rtk/unsplash";

function HomeScreen() {
    const a = useGetImagesQuery();
    return (
        <View>
            <UnsplachGalleryGrid />
        </View>
    );
}

export default HomeScreen;
