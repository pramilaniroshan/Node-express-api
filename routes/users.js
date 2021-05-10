import express from 'express';
import { createUser,getUser,updateUser,deleteUser,searchUser} from '../controllers/users.js'


const router = express.Router();



router.get('/',getUser);

router.post('/',createUser);

router.get('/:id',searchUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;