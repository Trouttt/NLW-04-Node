import { getRepository } from 'typeorm';

import User from '../models/User';
import usersRouter from '../routes/users.routes';
interface Request{
    name:string;
    email:string;
}

class CreateUserService {
    public async execute({name, email}:Request):Promise<User>{
        const usersRepository = getRepository(User);
        
        const checkEmailExists = usersRepository.findOne({
            where: email
        });

        if(checkEmailExists){
            throw new Error ('Email address already exists');
        }

        const user = usersRepository.create({
            name:name,
            email:email
        });

        await usersRepository.save(user);
        return user;
    }
}
export default CreateUserService;