import Navegacao from '../../components/Navegacao/Navegacao';
import './Depoimentos.css'
import React, { useEffect, useState } from 'react';

function Depoimentos(){

    const [animais, setAnimais] = useState(null);

    // Recupera a lista de todos os animais do servidor
    useEffect(() => {
        // função para fazer o fetch (busca) das informações na API
        const fetchData = async () => {
            // tenta fazer aa busca
            try {
                // Faz a busca e armazena o resultado em response
                const response = await fetch('http://localhost:3000/listar-aves');
                // verifica se o estado da response (ok) é falso
                if (!response.ok) {
                    // caso seja falso, houve algum erro na requisição, e o erro é lançado
                    throw new Error('Erro ao buscar servidor');
                }
                // caso a busca seja bem sucedida, o resultado é convertido em um JSON e armazenado
                // na variável listaAnimais
                const listaAnimais = await response.json();
                // atribui o valor de listaAnimais a variável animais
                // usando o setAnimais
                setAnimais(listaAnimais);
                // caso haja algum erro na busca, é disparado o catch
            } catch (error) {
                // escreve o erro no console
                console.error('Erro: ', error);
            }
        };

        // executa a função fetchData
        fetchData();
    }, []);

    return (
        <>
            <Navegacao />
            <div className='ctn-animais'>
                {animais ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Gênero</th>
                                <th>Idade</th>
                                <th>Envergadura</th>
                            </tr>
                        </thead>
                        <tbody>
                            {animais.map(animal => (
                                <tr key={animal}>
                                    <td>{animal.nomeanimal}</td>
                                    <td>{animal.generoanimal}</td>
                                    <td>{animal.idadeanimal}</td>
                                    <td>{animal.envergadura}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Carregando... Verifique se o servidor está funcionando</p>
                )}
            </div>
        </>
    );
}

export default Depoimentos;
