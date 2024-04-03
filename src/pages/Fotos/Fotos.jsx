import Navegacao from '../../components/Navegacao/Navegacao';
import './Fotos.css'
import ImgCarrossel from '../../components/ImgCarrossel/ImgCarrossel';

function Fotos(){
    return(
        <>
            <Navegacao/>
            <h1 style={{color: "#A7A000"}}>FOTOS</h1>
            <ImgCarrossel/>
        </>
    );
}

export default Fotos