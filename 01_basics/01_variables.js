const accountId = 422231
let accountEmail = "hannath@google.com"
var accountPassword="12345" 

/*  "var" is not used now , since it has problem in block of scope and functional scope.*/

accountCity="Jaipur"

 // this is also a type of declariang variable which is not that good to use.

let accountState; //here we have not stored any value, so when u run , u get undefined.
//accountID = 2 // not allowed, we cannot change accountId since is it declared as const

accountEmail="h@hc.com"
accountPassword= "24240541"
accountCity="Bengaluru"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])