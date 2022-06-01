import ItemListLayout from "./ItemListLayout";

function ItemListContainer() {
    const greet = ["Bienvenido al E-Commerce de Star Wars "]
    return <>
        <ItemListLayout greeting={greet} name={"Gabriel"}/>
    </>

}
export default ItemListContainer;