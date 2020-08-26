const Sequelize = require('sequelize')


const seq = new Sequelize('name','root','password',{
    host:'localhost',
    dialect:'mysql'

})

module.exports = seq 


// seq.authenticate().then(()=>{
//     console.log('ok')
// })