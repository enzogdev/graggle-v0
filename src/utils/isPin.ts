import { Canvas, Pin } from "../types/types";

export function isPin(element: Pin | Canvas | null): element is Pin {
    return typeof element === "object" && "id" in element;
}