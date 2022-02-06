import { useEffect, useState } from 'react'
import Link from "next/link" //данный компонент отключает дейтвие браузера по умолчанию т.е. в данный момент он нам нужен 
                            //чтобы не было перезагрузки страницы при переходе по ссылке
import MainContainer from  "../components/MainContainer";

const Users = ({users}) => {

    // const [users, setUsers] = useState([
    //     { id: 1, name: "Petya" },
    //     { id: 2, name: "Vasya" }
    // ])

    // useEffect(async ()=>{
    //     const response=await fetch('https://jsonplaceholder.typicode.com/users')
    //     console.log("response: ", response)
    //     const data=await response.json()
    //     console.log("data: ", data)
    //     setUsers(data)
    // }, [])


    return (
        <MainContainer>
            <h1>Список пользователей</h1>
            <ul>
                {
                    users.map(user =>
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                <a>{user.name}</a>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </MainContainer>
    );
};

export default Users;


export async function getStaticProps(context) {

  
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        
        const users=await response.json()
       

    return {
      props: {users} // will be passed to the page component as props
    }
}


