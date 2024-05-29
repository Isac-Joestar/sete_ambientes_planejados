import Comentarios from "./components/Comentarios/index.tsx"
import ComoFunciona from "./components/ComoFunciona/index.tsx"
import Header from "./components/Header/index.tsx"
import MainHome from "./components/MainHome/index.tsx"
import Perguntas from "./components/Perguntas/index.tsx"
import Projetos from "./components/Projetos/index.tsx"
import Sobre from "./components/Sobre/index.tsx"
import Footer from "./components/footer/index.tsx"

function Home(){
    return(
        <>
            <Header/>
            <MainHome/>
            <Projetos/>
            <Sobre/>
            <Comentarios/>
            <Perguntas/>
            <ComoFunciona/>
            <Footer/>
        </>
    )
}

export default Home