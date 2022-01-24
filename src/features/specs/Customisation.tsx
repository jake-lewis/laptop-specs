import { useAppDispatch, useAppSelector } from "../../app/hooks";
import SpecSelection from "./SpecSelection";
import { setCpu, setGraphics, setMemory, setScreen, setStorage } from "./specSlice";

export const Customisation = () => {
    const dispatch = useAppDispatch();
    const screenSpecs = useAppSelector(state => state.laptopSpecs.screen);
    const cpuSpecs = useAppSelector(state => state.laptopSpecs.cpu);
    const storageSpecs = useAppSelector(state => state.laptopSpecs.storage);
    const memorySpecs = useAppSelector(state => state.laptopSpecs.memory);
    const graphicsSpecs = useAppSelector(state => state.laptopSpecs.graphics);

    return (
        <div className="spec-sheet rounded-grey-border">
            <h2>Customisation Choices</h2>
            <SpecSelection title="Screen" specs={screenSpecs.specs} selectedSpec={screenSpecs.selected} 
                setSelected={id => dispatch(setScreen(id))} keyPrefix="screen" />
            <SpecSelection title="CPU" specs={cpuSpecs.specs} selectedSpec={cpuSpecs.selected} 
                setSelected={id => dispatch(setCpu(id))} keyPrefix="cpu" />
            <SpecSelection title="Storage" specs={storageSpecs.specs} selectedSpec={storageSpecs.selected} 
                setSelected={id => dispatch(setStorage(id))} keyPrefix="storage" />
            <SpecSelection title="Memory" specs={memorySpecs.specs} selectedSpec={memorySpecs.selected} 
                setSelected={id => dispatch(setMemory(id))} keyPrefix="memory" />
            <SpecSelection title="Graphics" specs={graphicsSpecs.specs} selectedSpec={graphicsSpecs.selected} 
                setSelected={id => dispatch(setGraphics(id))} keyPrefix="graphics" />
        </div>
    )
}

export default Customisation;