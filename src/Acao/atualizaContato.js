import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AtualizaContato = () => {
    const navigate = useNavigate();

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")


    const { id } = useParams()

        useEffect(()=>{
            fetch(`http://localhost:3000/contato/${id}`)
            .then(response => response.json())
            .then(result =>{
                console.log(result)
                setNome(result.nome)
                setEmail(result.email)
                setTelefone(result.telefone)
            })
        },[])


    const data={
        nome: nome,
        email: email,
        telefone: telefone
    }    


    const handleSubmit=()=>{
        fetch(`http://localhost:3000/contato/${id}`, {
           method: "PUT",
           headers: {
            "Content-Type" : "application/json"
           }, 
           body: JSON.stringify(data) 
        });

        navigate("/")
    }


    const handleCancel=()=>{

    }
    return(
        <div className="contact-form">
            <form>
                <input className="input-form"
                    value={nome} 
                    setNome={setNome} 
                    onChange={(e)=>setNome(e.target.value)} 
                    placeholder = "Digite o nome do contato" />
                    <br></br>
                <input className="input-form"
                    value={email} 
                    setNome={setEmail} 
                    onChange={(e)=>setEmail(e.target.value)} 
                    placeholder = "Digite o email do contato" />
                    <br></br>
                <input className="input-form"
                    value={telefone} 
                    setNome={setTelefone} 
                    onChange={(e)=>setTelefone(e.target.value)} 
                    placeholder = "Digite o telefone do contato" />
                    <br></br>

                <input 
                    type="submit" 
                    className="btnAction" 
                    onClick={handleSubmit}/>
                <input 
                    type="submit" 
                    value="cancel" 
                    onClick={handleCancel} 
                    className="btnAction2"/>
            </form>
        </div>
    )
}

export default AtualizaContato
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AtualizaContato = () => {
    const navigate = useNavigate();

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")


    const { id } = useParams()

        useEffect(()=>{
            fetch(`http://localhost:3000/contato/${id}`)
            .then(response => response.json())
            .then(result =>{
                console.log(result)
                setNome(result.nome)
                setEmail(result.email)
                setTelefone(result.telefone)
            })
        },[])


    const data={
        nome: nome,
        email: email,
        telefone: telefone
    }    


    const handleSubmit=()=>{
        fetch(`http://localhost:3000/contato/${id}`, {
           method: "PUT",
           headers: {
            "Content-Type" : "application/json"
           }, 
           body: JSON.stringify(data) 
        });

        navigate("/")
    }


    const handleCancel=()=>{

    }
    return(
        <div className="contact-form">
            <form>
                <input className="input-form"
                    value={nome} 
                    setNome={setNome} 
                    onChange={(e)=>setNome(e.target.value)} 
                    placeholder = "Digite o nome do contato" />
                    <br></br>
                <input className="input-form"
                    value={email} 
                    setNome={setEmail} 
                    onChange={(e)=>setEmail(e.target.value)} 
                    placeholder = "Digite o email do contato" />
                    <br></br>
                <input className="input-form"
                    value={telefone} 
                    setNome={setTelefone} 
                    onChange={(e)=>setTelefone(e.target.value)} 
                    placeholder = "Digite o telefone do contato" />
                    <br></br>

                <input 
                    type="submit" 
                    className="btnAction" 
                    onClick={handleSubmit}/>
                <input 
                    type="submit" 
                    value="cancel" 
                    onClick={handleCancel} 
                    className="btnAction2"/>
            </form>
        </div>
    )
}

export default AtualizaContato
