import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BuscaContato = () => {
    const [contato, setContato] = useState([])
    const [buscaContato, setBuscaContato] = useState("")

    useEffect(() => {
        carregaUsuarios()
    },[])

    const carregaUsuarios = () => {
        fetch("http://localhost:3000/contato")
            .then(response => response.json())
            .then(result =>{
                console.log(result)
                setContato(result)
            })
    }


    const handleDelete = (id) => {
        if(window.confirm('Deseja mesmo remover este contato?')){
            fetch(`http://localhost:3000/contato/${id}`, {
            method: 'DELETE',
            
            });
        
            window.location.reload(true);
        
        }
    }


    const handleSearch = async(e) => {
        e.preventDefault()
          fetch(`http://localhost:3000/contato?q=${buscaContato}`)
          .then(response => response.json())
          .then(result => {
            console.log(result)
            setBuscaContato("")
            setContato(result)
          })

    }


    return (
        <>
         <Link to="/cadastrar">
            <button className="link-cadastro">cadastre um contato</button>
         </Link>
         <form className='form-search-contact' onSubmit={handleSearch}>
           <input 
            type="text" 
            value={buscaContato} 
            onChange={(e)=>setBuscaContato(e.target.value)} 
            className="buscaContato" /> 
           <input 
            type="submit" 
            value="buscar" 
            className="btnBuscar"/>
         </form>
         <table className='my-table' width="100%" border="2px">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Operacao</th>
                </tr>
            </thead>   
            <tbody>
                {contato && contato.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>{item.email}</td>
                        <td>{item.telefone}</td>
                    
                        <td className='botoes-acao'>
                            <Link to={`/atualizar/${item.id}`}><button className='btnAtualizar'>atualizar</button></Link>
                            <buttonimport { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BuscaContato = () => {
    const [contato, setContato] = useState([])
    const [buscaContato, setBuscaContato] = useState("")

    useEffect(() => {
        carregaUsuarios()
    },[])

    const carregaUsuarios = () => {
        fetch("http://localhost:3000/contato")
            .then(response => response.json())
            .then(result =>{
                console.log(result)
                setContato(result)
            })
    }


    const handleDelete = (id) => {
        if(window.confirm('Deseja mesmo remover este contato?')){
            fetch(`http://localhost:3000/contato/${id}`, {
            method: 'DELETE',
            
            });
        
            window.location.reload(true);
        
        }
    }


    const handleSearch = async(e) => {
        e.preventDefault()
          fetch(`http://localhost:3000/contato?q=${buscaContato}`)
          .then(response => response.json())
          .then(result => {
            console.log(result)
            setBuscaContato("")
            setContato(result)
          })

    }


    return (
        <>
         <Link to="/cadastrar">
            <button className="link-cadastro">cadastre um contato</button>
         </Link>
         <form className='form-search-contact' onSubmit={handleSearch}>
           <input 
            type="text" 
            value={buscaContato} 
            onChange={(e)=>setBuscaContato(e.target.value)} 
            className="buscaContato" /> 
           <input 
            type="submit" 
            value="buscar" 
            className="btnBuscar"/>
         </form>
         <table className='my-table' width="100%" border="2px">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Operacao</th>
                </tr>
            </thead>   
            <tbody>
                {contato && contato.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>{item.email}</td>
                        <td>{item.telefone}</td>
                    
                        <td className='botoes-acao'>
                            <Link to={`/atualizar/${item.id}`}><button className='btnAtualizar'>atualizar</button></Link>
                            <button className='btnRemover' onClick={()=>handleDelete(item.id)}>remover</button>
                        </td>
                    </tr>
                ))}
            </tbody>
         </table>
        </>
        
    )

}

export default BuscaContato