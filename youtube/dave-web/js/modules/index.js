import play from "./module.js";
import User from "./User.js";

console.log(play());
var user = new User(1,"pd");
console.log(user.userDetails());