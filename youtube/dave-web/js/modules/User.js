export default class User{
    constructor(id,name)
    {
        this.id = id;
        this.name = name;
    }

    getName(){
        return this.name;
    }
    setName(name)
    {
        this.name = name;
    }
    getId(){
        return this.id;
    }
    setId(id)
    {
        this.id = id;
    }

    userDetails(){
        return `userId : ${this.id} , userName : ${this.name}`;
    }
}
