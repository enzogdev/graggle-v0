import { CanvasState } from "../store/canvasSlice";

type Canvas = {
    pins: Pin[]
    backgroundColor: Color
}
type Pin = {
    id: string;
    color: Color;
    position: Position;
}

type Color = {
    hue: number;
    saturation: number;
    lightness: number;
    alpha: number;
}

type Position = {
    x: number;
    y: number;
}

type Slider = {
    tag: keyof Color;
    spectrum: {
        min: number;
        max: number;
        step: number;
    }
    unit?: string;
    value: number
}
type RootState = {
    // Define la estructura de tu estado global aquí
    canvas: CanvasState; // Supongo que tienes un slice llamado 'canvas'
    // Otros slices y propiedades del estado
};