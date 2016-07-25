/**
 * Created by GRiMe2D on 7/25/16.
 *
 */

/**
 * ObjInterval constructor
 * @param func - the function which you want execute
 * @param delay - is the number of milliseconds (thousandths of a second) that the setInterval() function should wait before each call to func.
 * @constructor
 */
function ObjInterval (func, delay) {
	this.intervalID = setInterval(func, delay);
}

/**
 * Destroys the object
 */
ObjInterval.prototype.destroy = function () {
	clearInterval(this.intervalID);
};
