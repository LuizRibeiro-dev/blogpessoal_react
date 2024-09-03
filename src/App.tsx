import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Cadastro from "./pages/cadastro/Cadastro"
import { AuthProvider } from "./contexts/AuthContext"
import Login from "./pages/login/Login"
import ListaTemas from "./components/temas/listaTemas/ListaTemas"
import FormularioTema from "./components/temas/formularioTema/FormularioTema"
import DeletarTema from "./components/temas/deletarTema/DeletarTema"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"
import ListaPostagens from "./components/postagem/listapostagens/ListaPostagens"
import FormPostagem from "./components/postagem/formpostagem/FormPostagem"
import DeletarPostagem from "./components/postagem/deletarpostagem/DeletarPostagem"
import Perfil from "./pages/perfil/Perfil"


function App() {
  // Código TypeScript

  return (
    // Código TSX => HTML + CSS
    <>
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Login />} />
            {<Route path="/login" element={<Login />} />}
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastrarTema" element={<FormularioTema />} />
            <Route path="/editarTema/:id" element={<FormularioTema />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            <Route path="/postagens" element={<ListaPostagens />} />
            <Route path="/cadastroPostagem" element={<FormPostagem />} />
            <Route path="/editarPostagem/:id" element={<FormPostagem />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App