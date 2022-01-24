import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import initialState from "./initialState";

export interface Specification {
    id: number,
    name: string,
    price: number
}

export interface SpecificationGroup {
    specs: Specification[],
    selected: number
}

export const specSlice = createSlice({
    name: 'laptopSpecs',
    initialState,
    reducers: {
        setScreen: (state, action: PayloadAction<number>) => { state.screen.selected = action.payload },
        setCpu: (state, action: PayloadAction<number>) => { state.cpu.selected = action.payload },
        setStorage: (state, action: PayloadAction<number>) => { state.storage.selected = action.payload },
        setMemory: (state, action: PayloadAction<number>) => { state.memory.selected = action.payload },
        setGraphics: (state, action: PayloadAction<number>) => { state.graphics.selected = action.payload }
    }
});

export const selectScreen = (state: RootState) => {
    const screenState = state.laptopSpecs.screen;
    return screenState.specs.find(screen => screen.id === screenState.selected)!;
}

export const selectCpu = (state: RootState) => {
    const cpuState = state.laptopSpecs.cpu;
    return cpuState.specs.find(cpu => cpu.id === cpuState.selected)!;
}

export const selectStorage = (state: RootState) => {
    const storageState = state.laptopSpecs.storage;
    return storageState.specs.find(storage => storage.id === storageState.selected)!;
}

export const selectMemory = (state: RootState) => {
    const memoryState = state.laptopSpecs.memory;
    return memoryState.specs.find(memory => memory.id === memoryState.selected)!;
}

export const selectGraphics = (state: RootState) => {
    const graphicsState = state.laptopSpecs.graphics;
    return graphicsState.specs.find(graphics => graphics.id === graphicsState.selected)!;
}

export const selectTotalCost = createSelector(selectScreen, selectCpu, selectStorage, selectMemory, selectGraphics, 
    (screen, cpu, storage, memory, graphics) => 
        screen.price + 
        cpu.price + 
        storage.price + 
        memory.price + 
        graphics.price);

export const { setScreen, setCpu, setStorage, setMemory, setGraphics } = specSlice.actions;

export default specSlice.reducer;