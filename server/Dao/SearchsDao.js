
module.exports = function () {
    this.init = function () {
        //1,引入MySQL模块
        var mysql = require('mysql');  //调用MySQL模块

        //2，创建一个connection
        this.connection = mysql.createConnection({
            host: 'localhost',       //主机 ip
            user: 'root',            //MySQL认证用户名
            password: '123456',                //MySQL认证用户密码
            port: '3306',                 //端口号
            database: 'shitu'          //数据库里面的数据
        });
        //3，连接
        this.connection.connect();
    };

    this.selectSearch = (u_search,call)=>{
        var userGetSql = "SELECT * FROM menu WHERE m_name LIKE '%"+u_search+"%';";
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            
            call(result);
        });
    };


    this.closeConnecte = function(){
        //3,连接结束
        this.connection.end();
    }
}