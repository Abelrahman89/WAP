let users = [{ id: 1,username: "abdo", password: "123456",token:{createdDate:"04-17-2022",tokentext:"123456789"}}
];
let cnt = 1;
module.exports = class User {
    constructor(id, username,password,token ) {
        this.id = id;
        this.username = username;
        this.token= token;
 
           }
  

    update() {
       
        let index = users.findIndex(b => b.username == this.username);
       /* users[index].token.createdDate="18-04-2022";
        users[index].token.tokentext="18-04-2022 new";
        */
      // console.log(index);
        if (index > -1) {
            users.splice(index, 1, this);
         // users.push(this);
            return this;
        }
        else {
            throw console.error("Not Found");
        }
    }
    static getByUserName(userName) {
     //   console.log('userName'+userName);
        let index = users.findIndex(b => b.username == userName);
        if (index > -1) {
            return users[index];
        }
        else {
            throw console.error("Not Found");
        }
    }
   /* static getByName(userName) 
    {
        return users.filter(s => s.title.includes(userName)); 
     }
     */
   
}