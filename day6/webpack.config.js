//CommonJs规范
//引入模块 require() 导出模块 module.exports
let path = require("path");//path.resolve()根据当前的路径生成一个绝对路径
//console.log(path.resolve("./dist"));
module.exports = {
    entry:'./src/main.js', //打包入口文件
    output: {
        filename: "bundle.js", //打包后的文件名
        path:path.resolve("./dist") //必须写的是绝对路径
    }

}
