


const vehicle ={
    wheels : 4,
    engine : function(){
        return "vroommm";
    }
}

const car = Object.create(vehicle);
car.doors = 2;

console.log(car.engine)

//destructering objects

const obj1 = {
    id:1,
    name:"pd"
}

const obj2 = {
    id:1,
    name:"ap"
}

const {id : objId} = obj1;
console.log(objId)



