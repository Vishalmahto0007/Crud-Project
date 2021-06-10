import User from '../model/user-schema.js';


export const getUsers = async (request, response)=>{

    try{
        let user = await User.find({});
        return response.json(user);
    }catch(error){
        response.json({message: error.message});
    }
  
    response.status(200).json("Hi from Vishal");
}

export const addUser = async (request, response) =>{
    const user = request.body;
    const newUser = new User(user);

    try{
         await newUser.save();
         response.json(newUser);
    }catch(error){
        response.json({message: error.message});
    }
}

export const deleteUser = async (request, response) => {
    try {
        await User.deleteOne({_id: request.params.id});
        response.json("User Deleted Successfully");
    }catch(error){

        response.json({message: error.message});


    }
}