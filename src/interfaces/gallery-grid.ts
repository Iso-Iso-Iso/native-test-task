export interface GalleryGridItem {
    id: string;
    user: {
        name: string;
    };
    urls: {
        raw: string;
        thumb: string;
        small: string;
    };
    created_at: string;
    description: string;
}

export interface GalleryGridItemProps {
    onImagePress: (item: GalleryGridItem) => void;
    item: GalleryGridItem;
}

export interface GalleryGridProps {
    onImagePress: (galleryGridItem: GalleryGridItem) => void;
    images: GalleryGridItem[];
}
