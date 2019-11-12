const path = require('path')

// 在内存中，根据指定的模板页面，生成一份内存中的页面，同时自动把打包好的bundle注入到页面底部
// 如果需要配置插件，需要在导出的对象中，挂载一个plugins节点
const htmlwebpackplugin = require('html-webpack-plugin')

// vue-loader配置插件  然后再下面 plugins 中 new 一个实例 否则会一直出错
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 运行webpack命令  如果不给参数就会执行下面获得入口和出口 会自动生成文件
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist/'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlwebpackplugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
            // 设置生成的内存页面的名称
        }),
        new VueLoaderPlugin()
        //vue-loader的插件 

    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            {
                test: /\.(png|jpg|jpeg|bmp|gif)$/, use: 'url-loader?limit=16820&name=[hash:8].[name].[ext]'
                // {
                //     loader:'url-loader',
                //     options:{
                //         limit:22055,

                //         // 设置图片字节的大小传参
                //         // 编码格式
                //         // 如果我们给定得到limit值小于图片字节的大小则不会被转为base64
                //           name=[name].[ext]   表示将引用原图片的名字和扩展名
                // [hash:8] 如果两个文件的图片名字一样会显示最后编译的而图片会覆盖之前的
                // 所以要在前面加上hsah值区分
                //     }
                // }
            },
            // 处理图片的loader
            { test: /\.(ttf|woff2|woff|eot|svg)$/, use: 'url-loader' },
            //处理字体文件

            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            //配置Babel来 转换高级的ES语法
            { test: /\.vue$/, use: 'vue-loader' }
            // 处理.vue 文件的loader
        ]
    },
    resolve: {
        alias: {
            // 修改Vue被导入时候的包的路径
            // 'vue$':'vue/dist/vue.js'
        }
    }

}

// 项目每次更新都要输入webpack,所以要安装webpack-dev-server自动编译 安装完之后在package,json中加入脚本
// 项目启动后会在"/"目录下生成一个内存中虚拟的bundle.js一样的文件,并不是以前的dist目录下的bundle.js文件，所以要把<script src="../dist/bundle.js"></script> 改成
// <script src="/bundle.js"></script>

// 如果要想不加入<script src="/bundle.js"></script>,可以安装html-webpack-plugin -D 
