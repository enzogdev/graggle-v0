export const calculateNewPosition = (e) => {
    const canvas = e.target.parentNode;
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;
    const newX = (pin.position.x + (deltaX / canvas.clientWidth) * 100).toFixed(2);
    const newY = (pin.position.y + (deltaY / canvas.clientHeight) * 100).toFixed(2);
    return { x: parseFloat(newX), y: parseFloat(newY) };
};