import { useRef } from "react";
import { useDispatch } from "react-redux";
import { deletePinById, updateActiveColorElement, updatePin } from "../store/canvasSlice";
import { Pin } from "../types/types";

export function useDraggablePin(pin: Pin) {

    const lastMousePos = useRef({ x: 0, y: 0 });
    const dispatch = useDispatch();
    const canvas = document.getElementById('canvas');

    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(updateActiveColorElement(pin));
    };

    const calculateNewPosition = (e) => {
        if (!canvas) return { x: 0, y: 0 };

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
        const newPin: Pin = { ...pin, position: { x, y } };
        dispatch(updatePin(newPin));
        lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleDragEnd = (e) => {
        e.stopPropagation();

        const { x, y } = calculateNewPosition(e);
        const newPin: Pin = { ...pin, position: { x, y } };
        if (x < 0 || x > 100 || y < 0 || y > 100) {
            dispatch(deletePinById(newPin.id));
        } else {
            dispatch(updateActiveColorElement(newPin));
            dispatch(updatePin(newPin));
        }
    };

    return {
        handleDragStart,
        handleDrag,
        handleDragEnd,
        handleClick,
    };
}
