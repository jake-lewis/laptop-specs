import laptopSpecReducer, { selectScreen, selectTotalCost, setScreen } from './specSlice';
import realInitialState, { SpecState } from './initialState';

describe('laptop spec reducer', () => {
    const initialState: SpecState = {
        screen: { specs: [{ id: 1, name: "13\" Retina", price: 400 }], selected: 1 },
        cpu: { specs: [{ id: 2, name: "2.7GHz quad-core Intel Core i7 processor, Turbo Boost up to 3.6GHz", price: 300 }], selected: 2 },
        storage: { specs: [{ id: 3, name: "2TB PCIe-based SSD", price: 250 }], selected: 3 },
        memory: { specs: [{ id: 1, name: "8 GB 2133MHz memory", price: 100 }], selected: 1 },
        graphics: {
            specs: [
                { id: 1, name: "Radeon Pro 455 with 2GB memory", price: 300 },
                { id: 2, name: "Radeon Pro 460 with 4GB memory", price: 400 }
            ],
            selected: 1
        }
    };

    it('should handle initial state', () => {
        expect(laptopSpecReducer(undefined, { type: 'unknown' })).toEqual(realInitialState);
    });

    it('setScreen setsState', () => {
        expect(laptopSpecReducer(initialState, setScreen(2))).toEqual({
            ...initialState,
            screen: { specs: [{ id: 1, name: "13\" Retina", price: 400 }], selected: 2 }
        })
    })

    it('selectScreen returns as expected', () => {
        const state = { laptopSpecs: laptopSpecReducer(initialState, { type: 'unknown' }) };
        expect(selectScreen(state)).toStrictEqual({ id: 1, name: "13\" Retina", price: 400 })
    })

    it('total price selector returns as expected', () => {
        const state = { laptopSpecs: laptopSpecReducer(initialState, { type: 'unknown' }) };
        expect(selectTotalCost(state)).toBe(1350)
    })

});
