import { v4 as uuidv4 } from 'uuid';

let users = [
    {
        firstName : "Pramila",
        lastName : "Niroshan" ,
        age : 23
        }
]

export const getUser = ( req,res) => {
    ///console.log(users)
    res.send(users);
}

export const createUser = (req,res) =>{
    const user = req.body;
    const user_id = uuidv4();
    const UserWithId = { ...user,id : user_id};
    users.push(UserWithId);

    res.send(`User with the name ${UserWithId.firstName} added`);
}

export const updateUser =(req,res) => {
    const { id } = req.params;
    const {firstName,lastName,age} = req.body;
    
    const user = users.find(user => user.id == id);
    
    if(firstName){
        user.firstName = firstName;
    }
    
    if(lastName){
        user.lastName = lastName;
    }
    
    if(age){
        user.age = age;
    }
    res.send(`User with the name ${id} upadted`);
    };

export const deleteUser = (req,res) =>{
    const { id } = req.params;

    users = users.filter((user)=> user.id != id);
    res.send(`User with the name ${id} deleted`);

    
}

export const searchUser = (req,res) => {

    const {id} = req.params;

    const founduser = users.find((user) => user.id == id )
    res.send(founduser)
}