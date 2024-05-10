import { useState } from 'react';
import './ListaAnimais.css'
import { useEffect} from 'react';
import AnimalRequests from '../../fetch/AnimalRequests';
import { FaTrash } from 'react-icons/fa';

function ListaAnimais() {

    const [animais,setAnimais] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setAnimais(await AnimalRequests.listarAnimais());
        }

        fetchData();
    }, []);

    const deletarAnimal = async (id) => {
        const confirma = window.confirm(`Deseja deletar o animal com o id ${id}?`); 
        if(confirma){
            await AnimalRequests.deletarAnimal(id);
            window.location.reload();
        }else {
            window.alert('Erro ao deletar o animal');
        }
    }


    return (
        <>
            <div className='pagina'>
            <div className='alinhar'>
            <h1>Lista de animais</h1>
            <table className='tabela'>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Idade</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Envergadura</th>
                        <th scope="col">Ação</th>
                    </tr>
                </thead>
                <tbody>
                {animais.length > 0 ? (
                    animais.map((animal) => (
                        <tr>
                        <td>{animal.idanimal}</td>
                        <td>{animal.nomeanimal}</td>
                        <td>{animal.idadeanimal}</td>
                        <td>{animal.generoanimal}</td>
                        <td>{animal.envergadura}</td>
                        <td onClick={() => deletarAnimal(animal.idanimal)}><FaTrash /></td>
                    </tr>
                    )
                )): (
                    <p>Carregando... Verifique se o servidor está funcionando</p>
                )}
                    
                </tbody>
            </table>
            </div>
            </div>
        </>
    );
}

export default ListaAnimais;