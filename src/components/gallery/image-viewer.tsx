import {useRoute} from "@react-navigation/native";
import React from "react";
import {Image, StyleSheet, View} from "react-native";
interface ImageViewerProps {
    src: string;
}

function ImageViewer(props: ImageViewerProps) {
    const {src} = props;

    return (
        <View style={style.imageWrapper}>
            <Image style={style.image} source={{uri: src}} />
        </View>
    );
}
const style = StyleSheet.create({
    image: {
        resizeMode: "cover",
        height: "100%",
        width: "100%",
    },
    imageWrapper: {
        flex: 1,
    },
});
export default ImageViewer;
