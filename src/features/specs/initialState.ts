import { SpecificationGroup } from "./specSlice";

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
        selected: 1
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

export default initialState;