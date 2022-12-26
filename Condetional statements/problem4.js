let credential_username = "Priyansh";
let credential_password = "12345678";
let stored_username = "Priyansh";
let stored_password = "12345678";

if(credential_username == stored_username){
  if(credential_password == stored_password){
    console.log("User can login");
  }
  else{
    console.log("User name or password invalid!")  
  }
}
else{
  console.log("You cant't login")
}