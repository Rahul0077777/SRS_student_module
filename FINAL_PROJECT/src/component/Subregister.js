import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import './Forget.css'
export default function Subregister() {
const [users, setUsers] = useState([]);
// const { id } = useParams();
useEffect(() => {
loadUsers();
}, []);
const loadUsers = async () => {
const result = await
axios.get("http://localhost:8085/users");
setUsers(result.data);
};
console.log(users);
return (
<>
<center>
<center style={{backgroundColor: "blue"}}><h2>Subject 
Registration</h2></center>
{users.map((user)=>(
<div class="card" id="card-wrapper">
<div class="card-header" style={{backgroundColor: 
"yellow"}}>
Basket Number-{user.basket}
</div>
<div class="card-body"style={{backgroundColor: 
"DarkSeaGreen"}} >
<h5 class="card-title">{user.subname}</h5>
<p class="card-text">Subject Credit-{user.credit}</p>
<p class="card-text">Subject Code-{user.subjectcode}</p>
<p class="card-text">BASKET-{user.basket}</p>
<Link to="/reg" class="btn btn-primary">Apply</Link>
</div>
</div>
))}
</center>
</>
)
}