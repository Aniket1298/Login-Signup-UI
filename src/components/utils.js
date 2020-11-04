const jwt = require('jsonwebtoken')
var User = null
try{
    
    User =  jwt.verify(localStorage.getItem('token'),'ABC123').user
    console.log('HELL')
}
catch(err){
    User=null
}
export default User