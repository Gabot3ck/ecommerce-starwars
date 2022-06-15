import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import ItemListLayout from "./ItemListLayout";

function ItemListContainer() {
    const greet = ["Bienvenido al E-Commerce de Star Wars "]
    const [products, setProducts] = useState([])

    useEffect(() => {
        const juguetes = new Promise((res, rej) => {
            setTimeout(() => {
                res([
                { id:'001', category:'juguetes', titulo: 'Anakin Skywalker', image:'https://m.media-amazon.com/images/I/71xNjFxx6ZL._AC_SX569_.jpg' },
                { id:'002', category:'juguetes', titulo: 'Luke Skywalker', image:'https://http2.mlstatic.com/D_NQ_NP_654023-MLC32882792051_112019-O.webp'},
                { id:'003', category:'juguetes', titulo: 'Leia Skywalker', image:'https://images-na.ssl-images-amazon.com/images/I/418Alq4HZYL._SX300_SY300_QL70_FMwebp_.jpg'},
                { id:'004', category:'juguetes', titulo: 'Obi-Wan Kenobi', image:'https://images-na.ssl-images-amazon.com/images/I/61DqTM75frS.__AC_SX300_SY300_QL70_FMwebp_.jpg'},
                { id:'005', category:'juguetes', titulo: 'Hans Solo', image:'https://images-na.ssl-images-amazon.com/images/I/716oYlZXVcL.__AC_SX300_SY300_QL70_FMwebp_.jpg'},
                { id:'006', category:'juguetes', titulo: 'Ahsoka Tano', image:'https://images-na.ssl-images-amazon.com/images/I/315XjE5qcbL.jpg'},
                { id:'007', category:'ropa', titulo: 'Poleron Hombre Grogu Sense Gris', image:'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dwed4aa61c/images/imagenes-productos/800/MK1B/MK1B9R9WXO-002.jpg'},
                { id:'008', category:'ropa', titulo: 'Polerón de hombre con capucha Stormtrooper', image:'https://falabella.scene7.com/is/image/Falabella/gsc_110785712_246040_1'},
                { id:'009', category:'ropa', titulo: 'Polerón mujer de capucha que la fuerza te acompañe negro', image:'https://falabella.scene7.com/is/image/Falabella/gsc_110784844_245934_1'},
                { id:'010', category:'ropa', titulo: 'Polera Grogu Cute Rosado', image:'https://cdn.shopify.com/s/files/1/0280/4731/0936/products/p-804863-1-03cbcd3e-3668-4541-a214-9248a2570135_500x.jpg'},
                { id:'011', category:'ropa', titulo: 'Polera Hombre Mandalorian Neon Negro', image:'https://cdn.shopify.com/s/files/1/0280/4731/0936/products/p-805135-1-39e6517e-2882-4283-b623-fc9f82cfb0f6_eab1d581-f9d9-478d-9e94-aa00adb6d78b_500x.jpg'},
                { id:'012', category:'ropa', titulo: 'Poleron mujer Gris Letters Star Wars', image:'https://cdn.shopify.com/s/files/1/0280/4731/0936/products/p-900744-1_500x.jpg?v=1654871973'},
                { id:'013', category:'juegos', titulo: 'UNO Star Wars', image:'https://falabella.scene7.com/is/image/Falabella/gsc_112916685_458835_1'},
                { id:'014', category:'juegos', titulo: 'Monopoly Star Wars', image:'https://http2.mlstatic.com/D_NQ_NP_672985-MLA48023290628_102021-O.webp'},
                { id:'015', category:'juegos', titulo: 'Cartas Star Wars', image:'https://http2.mlstatic.com/D_NQ_NP_809583-MLC49665695260_042022-O.webp'},
                { id:'016', category:'juegos', titulo: 'La Senda Jedi', image:'https://images.cdn2.buscalibre.com/fit-in/360x360/92/1b/921b4c426761573baf0b3a63066f173f.jpg'},
                { id:'017', category:'peliculas', titulo: 'Episodio I: LA AMENAZA FANTASMA', image:'https://lastfm.freetls.fastly.net/i/u/500x500/97d21228748732abae213c62d046e442.jpg'},
                { id:'018', category:'peliculas', titulo: 'Episodio IV: EL REGRESO DEL JEDI', image:'https://flxt.tmsimg.com/assets/p8890_p_v8_ae.jpg'},
                { id:'019', category:'peliculas', titulo: 'Episodio IX: EL ASCENSO DE SKYWALKER', image:'https://pbs.twimg.com/media/EL_m4hDXYAAdR33.jpg'},
                { id:'020', category:'peliculas', titulo: 'SOLO', image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTBMuoLzLefV60Y7cSSbcXAnLh8FVFFd5avt0kUqIxYF4ZbHlVH'},
                { id:'021', category:'series', titulo: 'El ataque de los clones', image:'https://sm.ign.com/t/ign_es/tv/s/star-wars-/star-wars-the-clone-wars_1jes.1200.jpg'},
                { id:'022', category:'series', titulo: 'Bad Bach', image:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQIYMW4h0Swh_NGflXsFV4J2CFpcg4imaRbSFAB4Rde8id3YRZv'},
                { id:'023', category:'series', titulo: 'The Mandalorian', image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR7GQ6ezssbwUU53xMM6irHjU_kCIPCVFoYnvLSKhaIKNLsvEqM'},
                { id:'024', category:'series', titulo: 'El Libro de Bobafet', image:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvz_QozjBxTDaAKuoylo1l2OKoXlKrXeTHrgxbASZcrwMedi_A'},
                ]);
            }, 2000);
        });
        juguetes
            .then(res => setProducts(res))
            .catch(error => console.error("Error:", error))
    
    }, [])
    
    
    return( <>
        <ItemListLayout greeting={greet} name={"Gabriel"}/>
        <ItemList products={products} />
    </>)

}
export default ItemListContainer;