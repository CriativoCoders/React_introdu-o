
// axios permite a comunição com as paginas http (https)
import axios from "axios";
// as ferrramentas começadas com use são hooks de manuseio da biblioteca React
import React, {useState, useEffect} from "react";
import { Card } from "./Card";
import estilos from '.Lista.module.css';

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7'
//colocar chave da api 
const API_URL = 'https://api.themoviedb.org/3/'
//enedreço da api ir em aplication 

export function Lista(){
//crio uma variavel chamada movie, e "seto" o estado dela como vazia 
    const [movies, setMovie] = useState([]);

    // Effect trabalha com uma estrutura especifiva; paremtros () cripts {} e dependencias []

    useEffect(()=>{
        axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)
        // se deu certo a comunicação, então grava o resultado no "Response" que pode pegar elemento atráves da data
        .then(response =>{
            console.log(response.data.results);
            setMovie(response.data.results)

        })
        // se der ruim, exibe no inspecionar o erro de comunicação
        .catch(error =>{
            console.log('erro', error);

        });

    },[])

    return(
        <div className={estilos.container}>
            <figure style={{display:'flex', flexWrap:'wrap'}}>
                {movies.map(movie=>{
                    <Card key={movie.id}
                    movie={movie}/>
                })}
            </figure>
        </div>
    )
}