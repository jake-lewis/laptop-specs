interface Props {
    title: string,
    components: Component[]
}

interface Component {
    price: number,
    name: string
}

export const LaptopComponent = ({title, components}: Props) => {
    return (
        <div className="spec-sheet__component">
            <h4 className="component__title">{title}</h4>
            <ul className="component__component-options list--no-style">
                {components.map(({name, price}, index) => 
                    <li className="selected component-options__component-option clickable rounded-grey-border" 
                        data-price={`${price}`} 
                        data-component-id={`${index}`}>
                        <span className="component-option__name">{name}</span>
                        <span className="component-option__price">£{price}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default LaptopComponent;