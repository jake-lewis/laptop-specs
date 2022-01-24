import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Specification {
    id: number,
    name: string,
    price: number
}

export interface SpecificationGroup {
    specs: Specification[],
    selected: number
}

export interface SpecState {
    screen: SpecificationGroup,
    cpu: SpecificationGroup,
    storage: SpecificationGroup,
    memory: SpecificationGroup,
    graphics: SpecificationGroup
}

const initialState: SpecState = {
    screen: {
        specs: [
            { id: 1, name: "13\" Retina", price: 400 },
            { id: 2, name: "15\" Retina", price: 700 }
        ],
        selected: 1
    },
    cpu: {
        specs: [
            { id: 1, name: "2.7GHz quad-core Intel Core i7 processor, Turbo Boost up to 3.6GHz", price: 300 },
            { id: 2, name: "2.9GHz quad-core Intel Core i7 processor, Turbo Boost up to 3.8GHz", price: 500 }
        ],
        selected: 2
    },
    storage: {
        specs: [
            { id: 1, name: "512GB PCIe-based SSD", price: 100 },
            { id: 2, name: "1TB PCIe-based SSD", price: 200 },
            { id: 3, name: "2TB PCIe-based SSD", price: 250 }
        ],
        selected: 1
    },
    memory: {
        specs: [
            { id: 1, name: "8 GB 2133MHz memory", price: 100 },
            { id: 2, name: "16 GB 2133MHz memory", price: 150 }
        ],
        selected: 1
    },
    graphics: {
        specs: [
            { id: 1, name: "Radeon Pro 455 with 2GB memory", price: 300 },
            { id: 2, name: "Radeon Pro 460 with 4GB memory", price: 400 }
        ],
        selected: 1
    }
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