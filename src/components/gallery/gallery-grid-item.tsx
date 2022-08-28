import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {GalleryGridItemProps} from "src/interfaces/gallery-grid";

function GalleryGridItem(props: GalleryGridItemProps) {
    const {onImagePress, item} = props;

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => onImagePress(item)}>
            <Image style={style.image} source={{uri: item.urls.thumb}} />
            <View style={style.textWrapper}>
                <Text>{item.user.name}</Text>
                <Text>{item.created_at}</Text>
            </View>
        </TouchableOpacity>
    );
}
const style = StyleSheet.create({
    image: {
        borderRadius: 6,

        width: 300,

        height: 300,

        marginBottom: 10,
    },
    textWrapper: {
        marginBottom: 25,
        width: 300,
    },
});

export default GalleryGridItem;
