const { use } = require("react");

 const user = {
    username: "dasmat",
    price: 4566,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
    
 }
 user.welcomeMessage()
 user.username = "sunny"
 user.welcomeMessage()

 console.log(this);
 