import { Entity, PrimaryColumn } from 'typeorm';


@Entity("users")
class User {

    @PrimaryColumn()
    id:String;

    name:String;

    email:String;

    created_at:String;

}

export default User;