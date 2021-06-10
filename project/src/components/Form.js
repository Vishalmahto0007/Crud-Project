import React, { useState, useEffect } from "react";
import { addUser } from '../Service/api';



const initialValue = {
    name: '',
    email:'',
    dob:'',
    gender:'',
    address:''
}


const Form = () => {

    const [user, setUser]= useState(initialValue);
    const {name, email, dob, gender, address} = user;
    const [flag,setFlag] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            setFlag(null)
        },3000)
    },[flag])
  

    const onValueChange =(e)=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user);
    }
  
    const addUserDetails = async ()=>{
        if(user.name==="") return alert('Please fill name');
        if(user.email==="") return alert('Please fill email');
        if(user.dob==="") return alert('Please fill D.O.B.');
        if(user.address==="") return alert('Please fill Address');
        await addUser(user);
        setUser(initialValue);

       setFlag(true)
    }
    function myfun(){

        var a = document.getElementsByName("gender");
        var newvar = 0;
        var count;
        for(count=0; count<a.length; count++){
            if(a[count].checked==true){
                newvar=newvar+1;
            }
        }
        if(newvar>=2){
            document.getElementById('notvalid').innerHTML="**Please select only One";
            alert("Please Select Only One Checkbox")
          return false;
        
        }
        return false;

    }
  
   
    return (
        <div>
         <form name="forms" >
            <div style={{paddingTop:"20px", textDecoration:"underline"}}><h3>Add User</h3></div>
                <div class="mb-3 container" style={{ width: "50%", marginTop: "50px", border: "1px solid grey" }}>
                    <label for="exampleFormControlInput1" class="form-label"><h5>Name</h5></label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" value={user.name} placeholder="Enter Your Name" name="name" onChange={(e) => onValueChange(e)} />

                    <label for="exampleFormControlInput2" class="form-label"><h5>Email address</h5></label>
                    <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com" name="email" onChange={(e) => onValueChange(e)} value={user.email}/>

                    <label for="exampleFormControlInput3" class="form-label"><h5>D.O.B.</h5></label>
                    <input type="date" class="form-control" id="exampleFormControlInput3" name="dob"onChange={(e) => onValueChange(e)} value={user.dob} />

                    <div class="form-check" >
                        <div><h5>Gender</h5></div>
                        <input class="form-check-input" type="radio" id="flexCheckDefault" name="gender" onChange={(e) => onValueChange(e)} value="Male" onClick={myfun}/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Male
                                 </label>
                       </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="Female" id="flexCheckChecked" name="gender" onChange={(e) => onValueChange(e)} onClick={myfun}/>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Female
                                   </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" value="other" id="flexCheckChecked" name="gender" onChange={(e) => onValueChange(e)} onClick={myfun}/>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Other
                                   </label>
                                   <div>
                                   <span id="notvalid" style={{color:"red"}}></span>
                                   </div>
                          </div>

                    <label for="inputAddress" style={{marginTop:"10px"}} ><h5>Address</h5></label>
                     <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(e) => onValueChange(e)} name="address" value={user.address}/>

                    
                          
                          <div style={{marginTop:"15px", marginBottom:"15px"}}>
                          <button type="button" class="btn btn-primary" onClick={addUserDetails}> Submit</button>
                          </div>

                          
                        </div>
            </form>
            {flag && <div>
                <h5 style={{color:"#AADD00"}}>User Added successfully!!!</h5></div>}




                </div>
    )

}

export default Form;