import Item from "./Item";
import "./ItemList.css"

function ItemList({products}) {
    
    return(
        
            <div className="mx-auto my-5 p-3 contenedor">
                <div className="row   align-items-center">
                    {products?.map(item => <Item key={item.id} product={item} id={item.category}/>)}
                </div>
            </div>
    
    ) 

}
export default ItemList;