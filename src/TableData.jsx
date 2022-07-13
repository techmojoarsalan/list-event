import React,{useState} from "react";
import users from "./users.json";

export default function TableData() {
  const [filteredUsers, setFilteredUsers] = useState([...users]);
  const sortName = () => {
    setFilteredUsers(
      [...users].sort((a, b) => {
        if (a.name.firstname < b.name.firstname) {
          return -1;
        }
        if (a.name.firstname > b.name.firstname) {
          return 1;
        }
        return 0;
      })
    );
  }
  const sortEmail = () => {
    setFilteredUsers(
      [...users].sort((a, b) => {
        if (a.email < b.email) {
          return -1;
        }
        if (a.email > b.email) {
          return 1;
        }
        return 0;
      })
    );
  }
 const sortAccending = () => {
   setFilteredUsers([...users].sort((a, b) => a.id - b.id));
    }
    const sortDecending = () => {
      setFilteredUsers([...users].sort((a, b) => b.id - a.id));
       
    }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr no.<button onClick={sortAccending}>↓</button>
      <button onClick={sortDecending}>↑</button></th>
            <th> name  
      <button onClick={sortName}>name</button>
               </th>
            <th> email 
      <button onClick={sortEmail}>Email</button>

            </th>
            <th> address</th>
          </tr>
        </thead>
        {filteredUsers.map((item, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td> {item.id}</td>
                <td> {item?.name.firstname + " " + item.name.lastname}</td>
                <td> {item.email}</td>
                <td>{item.address.number + " " + item.address.street} </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      {/* <button onClick={sortName}>name</button> */}

      
      
    </div>
  );
}
