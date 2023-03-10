import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CadastraContato = () => {
const navigate = useNavigate();

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")

    const data = {
        nome: nome,
        email: email,
        telefone: telefone
    }

    const handleSubmit = () => {
        fetch(`http://localhost:3000/contato/`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(
                data
            )
        });
    
    navigate("/")
    }


    const handleCancel = () => {

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
              onClick={handleSubmit} />
            <input
              type="submit"
              value="Cancel"
              onClick={handleCancel}
              className="btnAction2"/>      
                
         </form>
        </div>
    )

}

export default CadastraContato                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CadastraContato = () => {
const navigate = useNavigate();

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")

    const data = {
        nome: nome,
        email: email,
        telefone: telefone
    }

    const handleSubmit = () => {
        fetch(`http://localhost:3000/contato/`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(
                data
            )
        });
    
    navigate("/")
    }


    const handleCancel = () => {

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
              onClick={handleSubmit} />
            <input
              type="submit"
              value="Cancel"
              onClick={handleCancel}
              className="btnAction2"/>      
                
         </form>
        </div>
    )

}

export default CadastraContato