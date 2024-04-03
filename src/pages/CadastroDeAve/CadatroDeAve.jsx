import Navegacao from '../../components/Navegacao/Navegacao';
import './CadastroDeAve.css'
import FormAnimal from '../../components/FormAnimal/FormAnimal';

function CadastroDeAve(){
    return(
        <>
            <Navegacao/>
            <h1 style={{color: "black"}}>CADASTRO DE AVE</h1>
            <FormAnimal/>
        </>
    );
}

export default CadastroDeAve