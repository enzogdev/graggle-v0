import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { Color, Pin } from '../types/types';

export interface CanvasState {
    activeColorElement: Pin | null,
    backgroundColor: Color,
    pins: Pin[];
}

const initialState: CanvasState = {
    activeColorElement: null,
    backgroundColor: {
        hue: 0,
        saturation: 0,
        lightness: 100,
        alpha: 1
    },
    pins: [],
}

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
        createPin: (state, action: PayloadAction<Pin>) => {
            state.pins.push(action.payload)
        },
        updatePin: (state, action: PayloadAction<Pin>) => {
            state.pins = state.pins.map((pin: Pin) => {
                if (pin.id === action.payload.id) {
                    return action.payload;
                }
                return pin;
            });
        },
        deletePinById: (state, action: PayloadAction<string>) => {
            state.pins = state.pins.filter(pin => pin.id !== action.payload);
            state.activeColorElement = null;
        },
        updateActiveColorElement: (state, action: PayloadAction<Pin | null>) => {
            state.activeColorElement = action.payload;
        },
        updateBackgroundColor: (state, action: PayloadAction<Color>) => {
            state.backgroundColor = action.payload;
        },
        updatePinOrder: (state, action: PayloadAction<Pin[]>) => {
            state.pins = action.payload;
        }
    }
})

export const {
    createPin,
    updatePin,
    deletePinById,
    updateActiveColorElement,
    updateBackgroundColor,
    updatePinOrder
} = canvasSlice.actions;