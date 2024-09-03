import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import Usuario from "../../models/Usuario"
import { useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Cadastro() {
  
  
  
  //redireciona, exemplo: fez cadastro e redireciona para o login
  const navigate = useNavigate();
  
  //imagenzinha da senha carregando
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //confirmando senha
  const [confirmarSenha, setConfirmaSenha] = useState<string>("");
  
  //guarda os dados do usuario
  const[usuario, setUsuario] = useState<Usuario>({
    id:0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });
  
  //ativa a navigate para redirecionar (verificando se o id mudou de 0)
  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  //formula para redirecionar para pagina login
  function retornar() {
    navigate('/login')
  }

//atualiza o estado com o valor digitado pelo usuario
function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
  setUsuario({
    ...usuario,
    [e.target.name] : e.target.value
  })
}


function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
  setConfirmaSenha(e.target.value)
}

async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
    setIsLoading(true)
    try{
      await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
      ToastAlerta('Usuário cadastrado com sucesso!','sucesso');
    } catch(error){
      ToastAlerta('Erro ao cadastrar usuário!','erro')
    }
  } else {
    ToastAlerta("Dados estão inconsistentes! Verifique os dados do usuário.",'info');
    setUsuario({ ...usuario, senha: ''});
    setConfirmaSenha('');
  }
  setIsLoading(false)
}

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <div className="fundoCadastro hidden lg:block"></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3'
          onSubmit={cadastrarNovoUsuario}
        >
          <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-slate-700 rounded p-2"
              value = {usuario.nome}
              onChange = {(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
             />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"
              value = {usuario.usuario}
              onChange = {(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 border-slate-700 rounded p-2"
              value = {usuario.foto}
              onChange = {(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              value = {usuario.senha}
              onChange = {(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-slate-700 rounded p-2"
              value = {confirmarSenha}
              onChange = {(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button className='rounded text-white bg-red-400 
                  hover:bg-red-700 w-1/2 py-2'
              onClick={retornar}
            >
              Cancelar
            </button>
            <button
              type='submit'
              className='rounded text-white bg-indigo-400 
                           hover:bg-indigo-900 w-1/2 py-2
                           flex justify-center'
            >
              {isLoading ? <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
                <span>Cadastrar</span>
              }
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro

