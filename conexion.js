const mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'bypk9qu8hlkdcita5eqo-mysql.services.clever-cloud.com',        
    database: 'bypk9qu8hlkdcita5eqo',  
    user: 'u7xwscir386tepvr',
    password: 'Ih0XIMonkWusC4n6dSGU',
    port: '3306'        
});
    
conexion.connect(function(error) {
    if(error){
        console.log(error);
    }else{
        console.log("Conexión exitosa");
    }
});    

module.exports = conexion;