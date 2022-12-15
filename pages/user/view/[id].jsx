import React, { useEffect, useState} from "react";
import { useRouter } from 'next/router'
import axios from "axios";

function ViewUser(){
    var [user, setuser] = useState();
    const router = useRouter();
    useEffect(()=>{
        const { id } = router.query;
        axios.get(`http://localhost:3000/api/user/view/${id}`)
        .then((response)=>{
            console.log(response)
            setuser(response.data)
        })
        .catch(err=>console.log(err));
    }, [])
    

    return(
        <div className="viewUser">
            <h1>User Details</h1>
            <h5>Id: {user.id}</h5>
            <h5>Name: {user.name}</h5>
        </div>
    )
}
export default ViewUser;