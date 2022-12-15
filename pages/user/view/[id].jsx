import React from "react";
import { useRouter } from 'next/router'

function ViewUser(){
    const router = useRouter();
    const { id } = router.query;

    return(
        <div className="viewUser">
            <h1>User Details</h1>
            <h5>Id: {id}</h5>
        </div>
    )
}
export default ViewUser;