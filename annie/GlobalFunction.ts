/**
 * @class 全局类和方法
 */
/**
 * <h4><font color="red">小游戏不支持 小程序不支持</font></h4>
 * 往控制台打印调试信息
 * @method trace
 * @param {Object} arg 任何个数,任意类型的参数
 * @since 1.0.0
 * @public
 * @static
 * @example
 *      trace(1);
 *      trace(1,"hello");
 */
let trace = function (...arg:any[]) {
    for (let i in arguments) {
        console.log(arguments[i]);
    }
};
annie.Stage["addUpdateObj"](annie.Tween);
annie.Stage["addUpdateObj"](annie.Timer);
annie.Stage["flushAll"]();
