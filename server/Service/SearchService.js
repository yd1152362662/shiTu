module.exports = function () {
    this.init = function () {
        //1,引入首页数据处理模块
        var SearchsDao = require('../Dao/SearchsDao');
        //2，创建对象
        this.searchDao = new SearchsDao();
        //3,初始化
        this.searchDao.init();
    };
    this.SearchInfo = function (u_search,call) {
        
            //搜索菜谱
                let _this = this;
                _this.searchDao.selectSearch(u_search,result=>{
                   
                    let data = result;
                    call(data);
                });
        };
    this.end = function () {
        this.searchDao.closeConnecte();
    };
};