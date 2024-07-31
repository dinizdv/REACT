import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'

export default function SignUp(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signUp, loadingAuth } = useContext(AuthContext)
    console.log(signUp)

    async function handleSubmit(e){
        e.preventDefault()

        if(name !== '' && email !== '' && password != ''){
            await signUp(email, password, name) // set to AuthContext
        }
    }

    return(
        <div className="container-center">
        <div className="login">
          <form onSubmit={handleSubmit}>
            <h1>Registrar conta<i class="fa-solid fa-address-card"></i></h1>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
  
            <input
              type="text"
              placeholder="seu_nome@gmail.com"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
  
            <input
              type="password"
              placeholder="Senha com 6 ou mais caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
  
            <button type="submit" className="btnAccess">
              {loadingAuth ? 'Loading...' : 'Registrar'}
            </button>
          </form>
  
          <Link to="/" className="createAccount">
            Já possui uma conta?
          </Link>
        </div>
      </div>
    )
}