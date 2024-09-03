import { ReactNode, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"


function Navbar() {
  const navigate = useNavigate()
  const {usuario, handleLogout} = useContext(AuthContext)

  function logout() {
    handleLogout()
    ToastAlerta('O usuário foi desconectado com sucesso!','sucesso')
    navigate('/')
  }
  
  let component: ReactNode;

  
    if (usuario.token !== "") {

        component = (
            <div className='flex justify-center bg-indigo-900 py-4 w-full text-white'>

                <div className="flex justify-between text-lg container">
                    <Link to="/home" className="font-bold text-2xl">Blog Pessoal</Link>

                    <div className='flex gap-4'>
                        <Link to='/postagens' className='hover:underline'>Postagens</Link>
                        <Link to='/temas' className='hover:underline'>Temas</Link>
                        <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                        <Link to='/perfil' className='hover:underline'>Perfil</Link>

                        {/* 
                        Envolvemos o texto Sair com o Componente Link e adicionamos 
                        o evento onClick para executar a função logout(). 
                        Também adicionamos a classe hover:underline do Tailwind, para 
                        criar o efeito underline ao passar o mouse sobre o texto Sair. 
                    */}
                        <Link to="" onClick={logout} className="hover:underline">Sair</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            { component }
        </>
    )
}


export default Navbar