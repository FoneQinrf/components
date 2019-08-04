/*
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-02 18:12:33
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-08-03 23:22:40
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { routerConfigString } = require('./router.js')
const { configName } = require('./config.js')
const gulp = require('gulp')
const configPath = path.join(__dirname + '/..')


function entries() {
    const pages = path.resolve(configPath + '/src/', 'views')
    const vuePage = glob.sync(pages + '/mobile/**/index.vue', { nodir: false })
    let mobile = []
    vuePage.forEach(element => {
        const name = element.match(/\/mobile\/(\S*)\/index.vue/)[1]
        const str = `{path: "${name}",name: "mobile-${name}", meta: {title: "${configName}-${name}"},component: () => import("@${element.match(/src(\S*)/)[1]}")}`
        mobile.push(str)
    });
    const mdPage = glob.sync(pages + '/main/**/index.md', { nodir: false })
    let main = []
    mdPage.forEach(element => {
        const name = element.match(/\/main\/(\S*)\/index.md/)[1]
        const str = `{path: '${name}',name: 'main-${name}', meta: {title: '${configName}-${name}'},component: () => import('@${element.match(/src(\S*)/)[1]}')}`
        main.push(str)
    });
    const string = routerConfigString(main, mobile)
    const writePath = `${configPath}/src/router/index.js`;
    fs.writeFileSync(writePath, string);
}

console.log('执行1')

gulp.task('router', gulp.series(function () {
    // 源码有改动就进行压缩以及热刷新
    gulp.watch('src/*.vue', ['router'])
}))


gulp.task('default', gulp.series(['router'], function () {
    //console.log('执行2')
}))