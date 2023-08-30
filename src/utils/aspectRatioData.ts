import { AspectRatio } from "../types/types";

export const aspectRatioArray: AspectRatio[] = [
    {
        ratio: "responsive",
        orientation: "",
        tailwindClass: "h-full w-full",
    },
    {
        ratio: "4/3",
        orientation: "landscape",
        tailwindClass: "aspect-[4/3] w-full",
    },
    {
        ratio: "16/9",
        orientation: "landscape",
        tailwindClass: "aspect-[16/9] w-full",
    },
    {
        ratio: "square",
        orientation: "square",
        tailwindClass: "aspect-square h-full",
    },
    {
        ratio: "9/16",
        orientation: "portrait",
        tailwindClass: "aspect-[9/16] h-full",
    },
    {
        ratio: "3/4",
        orientation: "portrait",
        tailwindClass: "aspect-[3/4] h-full",
    },
];
