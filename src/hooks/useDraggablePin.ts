import { useRef } from "react";
import { deletePinById, updateActiveColorElement, updatePin } from "../store/canvasSlice";
import { Pin, RootState } from "../types/types";
import { useSelector } from "react-redux";

export function useDraggablePin(pin: Pin) {

    const activePin = useSelector((state: RootState) => state.canvas.activeColorElement);
    const lastMousePos = useRef({ x: 0, y: 0 });

    const calculateNewPosition = (e) => {
        const canvas = e.target.parentNode;
        const deltaX = e.clientX - lastMousePos.current.x;
        const deltaY = e.clientY - lastMousePos.current.y;
        const newX = (pin.position.x + (deltaX / canvas.clientWidth) * 100).toFixed(2);
        const newY = (pin.position.y + (deltaY / canvas.clientHeight) * 100).toFixed(2);
        return { x: parseFloat(newX), y: parseFloat(newY) };
    };


    const handleDragStart = (e) => {
        lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleDrag = (e) => {
        const { x, y } = calculateNewPosition(e);
        const newActivePin: Pin = { ...activePin, position: { x, y } }
        updatePin(newActivePin);
        lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleDragEnd = (e) => {
        e.stopPropagation();
        const { x, y } = calculateNewPosition(e);
        const newActivePin: Pin = { ...activePin, position: { x, y } }
        if (x < 0 || x > 100 || y < 0 || y > 100) {
            deletePinById(newActivePin.id);
        } else {
            updatePin(newActivePin);
        }
    };

    const handleClick = (e) => {
        e.stopPropagation();
        updateActiveColorElement(pin);
    };

    return {
        handleDragStart,
        handleDrag,
        handleDragEnd,
        handleClick,
    };
}
