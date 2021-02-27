import { getRepository } from 'typeorm';

import User from '../models/User';
interface Request{
    name:string;
    email:string;
}

class CreateUserService {

    public async execute({name, email}:Request):Promise<User>{
        const usersRepository = getRepository(User);
        
        const checkEmailExists = await usersRepository.findOne({
            where: { email }
        });

        if(checkEmailExists){
            console.log(checkEmailExists);
            throw new Error ('Email address already exists');
        }

        const user = usersRepository.create({
            name,
            email
        });

        await usersRepository.save(user);
        return user;
    }
}
export default CreateUserService;