export default function useColorSelector() {

    const getLightness = (event) => {
        const positionX =
            (event.clientX - event.target.getBoundingClientRect().x) / event.target.clientWidth;
        const positionY =
            1 -
            (event.clientY - event.target.getBoundingClientRect().y) / event.target.clientHeight;

        return Math.round((positionY - (positionX * positionY) / 2) * 100);
    }

    const getSaturation = (event) => {
        const positionX =
            (event.clientX - event.target.getBoundingClientRect().x) / event.target.clientWidth;

        return Math.round(positionX * 100);
    }
}