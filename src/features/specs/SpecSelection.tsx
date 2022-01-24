import { Specification } from "./specSlice";

interface Props {
    title: string,
    specs: Specification[],
    selectedSpec: number,
    setSelected: (id: number) => void,
    keyPrefix: string
}

export const SpecSelection = ({title, specs, selectedSpec, setSelected, keyPrefix}: Props) => {
    const selectedClass = (id: number) => id === selectedSpec ? 'selected ' : '';

    return (
        <div className="spec-sheet__component">
            <h4 className="component__title">{title}</h4>
            <ul className="component__component-options list--no-style">
                {specs.map(({id, name, price}) => 
                    <li className={`${selectedClass(id)}component-options__component-option clickable rounded-grey-border`} 
                        data-price={`${price}`} 
                        data-component-id={`${id}`}
                        key={`${keyPrefix}${id}`}
                        onClick={(e) => setSelected(id)}>
                        <span className="component-option__name">{name}</span>
                        <span className="component-option__price">£{price}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default SpecSelection;