import React, { useEffect, useState } from 'react';
import {Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Button} from "@material-ui/core";
import { getUsers, deleteUser } from "../Service/api";


const useStyle = makeStyles({
    table:{
        width: "90%",
        margin: "50px 0 0 50px"

    },
    thead:{
        '& > *':{
            background: 'black',
            color: 'white',
            fontSize: 20
        },
        row:{
            '&> *':{
                fontSize: 20
            }
        }
    }
})

const AllUsers=()=>{

    const [users, setUsers] = useState([]);
    const classes = useStyle();

    useEffect(()=>{
        getAllUsers();

    },[])

    const getAllUsers = async ()=> {
        const response = await getUsers();
        console.log(response.data);

        setUsers(response.data);

    }

    const deleteUserData = async(id)=>{
        await deleteUser(id);
        getAllUsers();
    }
     return(
        <div>

            <div style={{textDecoration:"underline"}}><h4>  All Users</h4></div>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>ID</TableCell>
                        <TableCell>NAME</TableCell> 
                        <TableCell>EMAIL</TableCell>
                        <TableCell>D.O.B.</TableCell>
                        <TableCell>GENDER</TableCell>
                        <TableCell>ADDRESS</TableCell>
                        <TableCell> </TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((user,idx) =>(
                            <TableRow className={classes.row}>
                                <TableCell>
                                    {idx+1}
                                </TableCell>
                                <TableCell>
                                    {user.name}
                                </TableCell>
                                <TableCell>
                                    {user.email}
                                </TableCell>
                                <TableCell>
                                    {user.dob}
                                </TableCell>
                                <TableCell>
                                    {user.gender}
                                </TableCell>
                                <TableCell>
                                    {user.address}
                                </TableCell>
                                
                                <TableCell>
                                    <Button variant="contained" color="secondary"onClick={() => deleteUserData(user._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
           
        </div>
    )
}

export default AllUsers;