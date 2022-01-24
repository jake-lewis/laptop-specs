import { useAppSelector } from "../../app/hooks";
import { selectCpu, selectGraphics, selectMemory, selectScreen, selectStorage, selectTotalCost } from "./specSlice";

export const Summary = () => {
    const screenSpecs = useAppSelector(selectScreen);
    const cpuSpecs = useAppSelector(selectCpu);
    const storageSpecs = useAppSelector(selectStorage);
    const memorySpecs = useAppSelector(selectMemory);
    const graphicsSpecs = useAppSelector(selectGraphics);
    const totalCost = useAppSelector(selectTotalCost);
    
    return (
        <div className="summary-window rounded-grey-border">
            <h2>Summary</h2>
            <div className="summary-window__chosen-specs">
                <ul className="chosen-specs__spec-list list--no-style">
                    <li className="spec-list__spec">{screenSpecs.name}</li>
                    <li className="spec-list__spec">{cpuSpecs.name}</li>
                    <li className="spec-list__spec">{storageSpecs.name}</li>
                    <li className="spec-list__spec">{memorySpecs.name}</li>
                    <li className="spec-list__spec">{graphicsSpecs.name}</li>
                </ul>
            </div>
            <span className="summary-window__total">Total: £{totalCost}</span>
            <button className="buy-button clickable">Buy now</button>
        </div>
    )
}

export default Summary;