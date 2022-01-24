import LaptopComponent from "./LaptopComponent";

export const Customisation = () => {
    return (
        <div className="spec-sheet rounded-grey-border">
                <h2>Customisation Choices</h2>
                <LaptopComponent title="Screen" components={[
                    {name: "13\" Retina", price: 400}, 
                    {name: "15\" Retina", price: 700}]} 
                />
                <LaptopComponent title="CPU" components={[
                    {name: "2.7GHz quad-core Intel Core i7 processor, Turbo Boost up to 3.6GHz", price: 300}, 
                    {name: "2.9GHz quad-core Intel Core i7 processor, Turbo Boost up to 3.8GHz", price: 500}]} 
                />
                <LaptopComponent title="Storage" components={[
                    {name: "512GB PCIe-based SSD", price: 100}, 
                    {name: "1TB PCIe-based SSD", price: 200},
                    {name: "2TB PCIe-based SSD", price: 250}]} 
                />
                <LaptopComponent title="Memory" components={[
                    {name: "8 GB 2133MHz memory", price: 100}, 
                    {name: "16 GB 2133MHz memory", price: 150}]} 
                />
                <LaptopComponent title="Graphics" components={[
                    {name: "Radeon Pro 455 with 2GB memory", price: 300}, 
                    {name: "Radeon Pro 460 with 4GB memory", price: 400}]} 
                />
            </div>
    )
}

export default Customisation;