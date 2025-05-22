'use client';

import Economia from "@/component/economia";
import React, { useState } from "react";

const topics = ["Noticia", "Politica", "Economia", "Esportes", "Tecnologia", "Negócios", "Saúde", "Entretenimento"];





const weatherMock = {
  city: "São Paulo",
  temperature: "24°C",
  condition: "Ensolarado"
};

const stockMock = {
  ibovespa: "+1.3%",
  dolar: "R$ 5,02",
  nasdaq: "+0.8%"
};

export default function NewsPortal() {
const [selectedTopic, setSelectedTopic] = useState("noticias")

  return (
    <div className="min-h-screen  bg-[#23272f] text-gray-400">

      <header className="bg-[#111418] text-red-800 p-4 text-center text-2xl font-bold">
        Portal de Notícias
      </header>

      <main className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2 bg-[#23272f]">
        {/* Sidebar Esquerda - Tópicos */}
        <aside className="md:col-span-1 bg-[#23272f]  p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Temas</h2>
          <ul className="space-y-1">
            {topics.map((topic) => (
              <li key={topic}  onClick={() => setSelectedTopic(topic)}  className="hover:underline cursor-pointer  ">{topic}</li>
            ))}
          </ul>
        </aside>


        {/* Conteúdo Central - Notícias */}
        <section className="md:col-span-2 space-y-4 flex flex-1 overflow-hidden">
          <Economia tema={selectedTopic}/>          
        </section>


        {/* Sidebar Direita - Clima e Bolsa */}
        <aside className="md:col-span-1 space-y-4">
          <div className="bg-background p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Previsão do Tempo</h2>
            <p><strong>{weatherMock.city}</strong></p>
            <p>{weatherMock.temperature} - {weatherMock.condition}</p>
          </div>

          <div className="color p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Mercado Financeiro</h2>
            <p>Ibovespa: {stockMock.ibovespa}</p>
            <p>Dólar: {stockMock.dolar}</p>
            <p>Nasdaq: {stockMock.nasdaq}</p>
          </div>
        </aside>
      </main>

      <footer className="text-center text-sm p-4 text-gray-500">
        &copy; 2025 Portal de Notícias - Criado com React + Tailwind CSS
      </footer>
    </div>
  );
}
