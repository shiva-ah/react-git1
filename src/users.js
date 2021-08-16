
// React------------------------------------------------------------
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {withRouter} from "react-router-dom";

const Users = (props) => {
    const [users,setUsers]=useState([]);
    const [pages,setPages]=useState([]);
    const queryString=props.location.search;
    const searchParams=new URLSearchParams(queryString);
    const pageQueryString=searchParams.get("page") || "1";
    useEffect(()=>{
        axios.get(`https://gorest.co.in/public/v1/users?page=${pageQueryString}`).then(res=>{
            setUsers(res.data.data);
            var pagesArray=[];
            for (var i = 1; i <= res.data.meta.pagination.pages; i++) {
                pagesArray.push(i);
             }
            setPages(pagesArray);
        })
    },[pageQueryString])
    return ( 
        <div>
            {users? 
            <>
            {users.map(user =>
                <div>
                    { user.id } 
                    { user.name }
                    { user.email }
                </div>
            )}
            {pages.map(page =>
                // Need define Router in App!!!!!
                <Link to={`./users?page=${page}`}>
                    {page}
                </Link>
            )}
            </>
            :
            <div>Loading...</div>}
        </div>
     );
}
export default withRouter(Users);

