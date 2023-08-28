export const toggleOpacityPins = (isVisible: boolean) => {
    const pins = document.getElementsByClassName('pin');

    for (let i = 0; i < pins.length; i++) {
        const pin = pins[i] as HTMLElement;
        if (isVisible) {
            pin.style.opacity = '1';
        } else {
            pin.style.opacity = '0';
        }
    }
}
