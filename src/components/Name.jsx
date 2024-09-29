import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Name=()=>{
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    const [name, setName] = useState('');

    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    },[user,navigate])

    useEffect(() => {
        if (user) {
            setName(`${user.nombre1} ${user.apellido1}`);
        }
    }, [user]);

    return(
        <div>
            {name}
        </div>
    )
}
export default Name