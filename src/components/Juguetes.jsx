import {useParams} from 'react-router-dom';
function Juguetes() {

    const {id} = useParams();
    
    return(
        <>
        <div  >
            <h1>Juguetes</h1>
        </div>
        </>
    ) 

}
export default Juguetes;