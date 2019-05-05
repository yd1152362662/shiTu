
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

    this.selectUser = function (info, call) {
        var userGetSql = "SELECT * FROM users WHERE " + info[0] + " = '" + info[1] + "'";
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };

    this.insertUser = function (info, call) {
        var userAddSql = "INSERT INTO users(u_name,u_pwd,name,sex,home,address,birthday) values(?,?,?,?,?,?,?)";
        var userAddSql_params = [];
        for (var index in info) {
            userAddSql_params.push(info[index]);
        }
        this.connection.query(userAddSql, userAddSql_params, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };

    this.checkCollect = (info,call)=>{
        var userAddSql = "SELECT * FROM focus WHERE u_id='" + info[0] + "' and m_id= '" + info[1] + "';";
        this.connection.query(userAddSql, info, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
    this.selectCollectByUserId = (info,call)=>{
        var userAddSql = "SELECT * FROM focus WHERE " + info[0] + " = '" + info[1] + "';";
        this.connection.query(userAddSql, info, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
    this.selectCollectMenu = (u_id,call)=>{
        var userAddSql = "SELECT * FROM focus f,menu m WHERE f.m_id=m.m_id and f.u_id="+u_id+";";
        this.connection.query(userAddSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
    this.selectReleaseMenu= (u_id,call)=>{
        var userAddSql = "SELECT * FROM menu WHERE creater_id="+u_id+";";
        this.connection.query(userAddSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    }
    this.selectInfo = (info,call)=>{
        var userGetSql = "SELECT name,sex,address FROM users WHERE " + info[0] + " = '" + info[1] + "'";
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    }
    this.insertCollect = (info,call)=>{
        var userAddSql = "INSERT INTO focus(u_id,m_id) values(?,?)";
        this.connection.query(userAddSql, info, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    };
    this.deleteCollectById = (f_id,call)=>{
        var userAddSql = "DELETE FROM focus WHERE f_id='"+f_id+"';";
        this.connection.query(userAddSql, function (err, result) {
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
