const config ={
    local:{
        DB:{
            HOST : "172.10.1.3",
            PORT  : "27017",
            DATABASE : "akashvarma",
            MONGOOSE : {
                useUnifiedTopology : true,
                useNewUrlParser : true,
            },
            userName : "akashvarma",
            Password : "akashvarma98",
        },
        email:{
      username: "akashvvarma@gmail.com",
      password: "aegdlsttlxfospfg",
      host: "smtp.gmail.com",
      port: 465,
        },
        PORTNO:8080,        
        }
    }
export const get = function get(env){
    return config[env]
}
