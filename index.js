let friends = [
    {
        username: "soo",
        phone: "123123",
        email: "soo@gmail.com"
    },{
        username: "aidil",
        phone: "000000",
        email: "aidilazhar@gmail.com"
    },{
        username: "ayam",
        phone: "123456",
        email: "ayamgoreng@gmail.com"
    }
]

function login(username, email){
    console.log("someone try to login with", username, email)
    let matched = friends.find(Element => 
        //console.log(Element)
        Element.username == username
    )//finding element in the array
if(matched){
    if(matched.email == email){
        return matched
    }else{
        return "email not matched"
    }
}else{
    return "user not found"
}
}

//try to login
//login("soo","email")
//login("daus","email")

console.log( login("soo", "soo@gmail.com"))//<--found
console.log(login("ayam","ayamgoreng@gmail.com"))//<---not found sebab error