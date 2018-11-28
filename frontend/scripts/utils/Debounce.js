/**
 * Debounce helper util
 * @param  {Function} fn   callback to execute
 * @param  {Number}   time time delay before executing cb
 * @return {Function}
 */
export default (fn, time) => {

    let timeout;

    return function() {

        const functionCall = () => fn.apply(this, arguments);

        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);

    }

}
