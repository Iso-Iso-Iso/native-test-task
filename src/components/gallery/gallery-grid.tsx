import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {GalleryGridProps} from "src/interfaces/gallery-grid";
import GalleryGridItem from "./gallery-grid-item";

function GalleryGrid(props: GalleryGridProps) {
    const {onImagePress, images} = props;

    return (
        <View style={style.gridWrapper}>
            <FlatList
                contentContainerStyle={style.grid}
                data={images}
                renderItem={({item, index}) => (
                    <GalleryGridItem
                        key={index}
                        item={item}
                        onImagePress={onImagePress}
                    />
                )}
            />
        </View>
    );
}

const style = StyleSheet.create({
    gridWrapper: {
        alignItems: "center",
    },
    grid: {
        width: "100%",
        flexDirection: "column",
        padding: 10,
        alignItems: "flex-start",

        numColumns: 3,
        backgroundColor: "transparent",
    },
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

export default GalleryGrid;
