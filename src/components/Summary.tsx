export const Summary = () => {
    return (
        <div className="summary-window rounded-grey-border">
            <h2>Summary</h2>
            <div className="summary-window__chosen-specs">
                <ul className="chosen-specs__spec-list list--no-style">
                    <li className="spec-list__spec">13" Retina</li>
                    <li className="spec-list__spec">2.7GHz quad-core Intel Core i7 processor, Turbo Boost up to 3.6GHz</li>
                    <li className="spec-list__spec">512GB PCIe-based SSD</li>
                    <li className="spec-list__spec">8 GB 2133MHz memory</li>
                    <li className="spec-list__spec">Radeon Pro 455 with 2GB memory</li>
                </ul>
            </div>
            <span className="summary-window__total">Total: £1500</span>
            <button className="buy-button clickable">Buy now</button>
        </div>
    )
}

export default Summary;