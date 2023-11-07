// useDraggable.js
import { useState } from "react";
import { updatePin } from "../store/canvasSlice";

export function useDraggable(initialValue) {
    const [value, setValue] = useState(initialValue);

    const handleDrag = (e, containerRef, activePin, dispatch) => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (e.clientX - containerRect.left) / containerRect.width));
        const y = Math.max(0, Math.min(1, 1 - (e.clientY - containerRect.top) / containerRect.height));

        const newLeft = Math.max(0, Math.min(100, x * 100));
        const newTop = Math.max(0, Math.min(100, y * 100));

        const newValue = Math.round(x * 100);

        setValue(newValue);

        if (activePin) {
            const saturation = Math.round(x * 100);
            const lightness = Math.round((y - (x * y) / 2) * 100);

            const newPin = {
                ...activePin,
                color: { ...activePin.color, saturation, lightness },
            };

            dispatch(updatePin(newPin));
        }
    };

    return {
        value,
        handleDrag,
    };
}
