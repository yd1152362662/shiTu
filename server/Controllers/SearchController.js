module.exports = {
    searchFun: function (req, res) {
        //1, 解析数据
        var u_search = req.query.u_search;
        console.log(u_search)
        //2,向业务层要数据
        //(1),引入SearchService模块
        var SearchService = require('../Service/SearchService');
        //(2),创建searchService对象并初始化
        var searchService = new SearchService();
        searchService.init();
        //(3),用户查询业务
        searchService.SearchInfo(u_search, function (result) {
            res.end(JSON.stringify(result));    
            });
    }
};