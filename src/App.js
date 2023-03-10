import { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuscaContato from "./Acao/buscaContato";
import AtualizaContato from "./Acao/atualizaContato";
import CadastraContato from "./Acao/cadastraContato";

function App() {
  return (
   <>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<BuscaContato />} />
         <Route path="/atualizar/:id" element={<AtualizaContato />} /> 
         <Route path="/cadastrar" element={<CadastraContato />} />
       </Routes>
      </BrowserRouter>
   </> 
  );
}

export default App;


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         import { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuscaContato from "./Acao/buscaContato";
import AtualizaContato from "./Acao/atualizaContato";
import CadastraContato from "./Acao/cadastraContato";

function App() {
  return (
   <>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<BuscaContato />} />
         <Route path="/atualizar/:id" element={<AtualizaContato />} /> 
         <Route path="/cadastrar" element={<CadastraContato />} />
       </Routes>
      </BrowserRouter>
   </> 
  );
}

export default App;


