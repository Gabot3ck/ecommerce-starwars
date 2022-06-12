import Item2 from "./Item2";

function ItemDetail({toy}) {
    
    
    return(
        <>
            <div className="mx-auto mb-5  contenedor card-group w-25">
                {toy?.map(item => <Item2 key={item.id} item2={item} />)}
            </div>
        </>
    ) 

}
export default ItemDetail;