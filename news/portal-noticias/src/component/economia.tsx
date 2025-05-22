'use client';

import { useEffect, useState } from "react";
import axios from "axios";

type Economia = {
    title: string;
    link: string;
    summary: string;
    source: string;
  };

  interface props{
    tema:string;
  }

  export default function Economia({tema}: props){

    

    const [news, setNews] = useState<Economia[]>([])
    
    const [erro, setErro] = useState<string | null>()


    useEffect(() => {
        axios.get<Economia[]>('/api/noticias')
        .then((response) => {
            const all = response.data;           
            console.log(all)
            const filtere = all.filter((news) => 
              news.link.toLowerCase().includes(tema.toLowerCase())
            );

            console.log(tema)

            setNews(filtere)
        }).catch((erro) => {
            console.error('Erro ao buscar notícias:', erro);
            setErro('Erro ao carregar notícias');
        });
    },[tema])
    
    return (
        <div className="text-white  p-8 space-y-6">
          <h1 className="text-3xl font-semibold">Notícias de Economia</h1>
    
          {erro && <p className="text-red-500">{erro}</p>}

         
        
            {news.length ===0 && ! erro ? "":
            (<div>
              {
                news.map((noticia, index) =>(
                
                <ul className="mb-6" key={index}><li key={index}>

                  <div className="bg-[#1e1e1e] text-white h-[170px] shadow-sm p-4 flex items-center gap-4">
                  {/* Ícone ou imagem representando a categoria */}
                     <div className="bg-[#2a2a2a] p-3 rounded-full">
                     {/* Aqui você pode colocar um ícone dinâmico */}
                        <span className="text-xl">📰</span>
                    </div>
        

                   <div>
                     <h3 className="text-lg font-medium">
                        <a href={noticia.link} target="_blank" className="text-blue-400 hover:underline text-sm"> {noticia.title}</a>
                     </h3>
                      <p className="text-sm text-gray-300 mt-2 line-clamp-3">{noticia.summary}</p>

                     <p className="text-sm text-gray-400">Fonte: {noticia.source}</p>
                     
                   </div>
                </div></li></ul>))
              }
            </div>
            )} 
          
        </div>
      );

  }