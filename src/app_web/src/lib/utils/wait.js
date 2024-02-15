/**
 * 
 * @param {number} ms 
 * @param {() => void | undefined} callback 
 * @returns 
 */
export const promiseDelayed = (ms, callback) => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve();
            if (typeof callback === 'function') {
                callback();
            }
        }, ms);
    });
}
