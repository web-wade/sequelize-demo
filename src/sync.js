
const seq = require("./seq");


require('./model')


seq.authenticate().then(()=>{
    console.log('ok')
})

seq.sync({force: true}).then(()=>{
    console.log('sync ok')

    process.exit()
})