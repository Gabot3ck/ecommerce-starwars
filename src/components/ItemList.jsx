import Item from "./Item";
import "./ItemList.css"

function ItemList({products}) {
    
    return(
        
            <div className="mx-5 mb-5 p-3 contenedor ">
                {products?.map(item => <Item key={item.id} product={item} id={item.category}/>)}
            </div>
    
    ) 

}
export default ItemList;