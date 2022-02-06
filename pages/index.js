//импорт React нам тут не понадобится поскольку в next можно обойтись без него
import Link from "next/link" //данный компонент отключает дейтвие браузера по умолчанию т.е. в данный момент он нам нужен 
//чтобы не было перезагрузки страницы при переходе по ссылке
import Head from "next/head"
import A from "../components/A";
import MainContainer from '../components/MainContainer'


const Index = () => {
    return (
        <MainContainer>
            {/* <Head>
                <meta keywords="ulbi tv, nextjs"></meta>
                <title>Главная страница</title>
            </Head>
            <div>
                <div className="navbar">
                    <A href={"/"} text="Главная" />
                    <A href="/users" text="Пользователи" /> */}
                    {/* <Link href="/">
                    <a className="link">Главная</a>
                </Link>
                <Link href="/users">
                    <a className="link">Пользователи</a>
                </Link> */}
                {/* </div> */}
                <h1>Главная страница</h1>
                {/* <style jsx>
                {`
                  h1 {
                      color: red;
                    } 
                `}
            </style> */}
                {/* <style jsx>
                    {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                  
                `}
                </style> */}
            {/* </div> */}
        </MainContainer>
    );
};

export default Index