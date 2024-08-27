import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext"


function Navbar() {
  const navigate = useNavigate()
  const {handleLogout} = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('O usuário foi desconectado com sucesso!')
    navigate('/')
  }
  return (
    <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                
                <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>

                    <div className='flex gap-4'>
                    <Link to='/home' className='hover:underline'>Home</Link>
                    <Link to='/login' className='hover:underline'>Login</Link>
                    <Link to='/cadastro' className='hover:underline'>Cadastrar</Link>
                    <div className='hover:underline'>Perfil</div>
                    <div className='hover:underline'>Postagens</div>
                    <div className='hover:underline'>Temas</div>
                    <div className='hover:underline'>Cadastrar tema</div>
                    <div className='hover:underline'>Sair</div>
                  </div>
                </div>
            </div>
        </>
    )
}

export default Navbar