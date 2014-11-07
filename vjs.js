/*
vjs.js v1.0.0
Available via the MIT or new BSD license.
see: http://github.com/jianghai/vjs for details
*/

(function() {


    /**
     * Convert template string to javascript code, return a function which
     * has a parameter data and return html string.
     */

    var vjs = function(str) {
        if (!str) return;
        str = "var out = '" + str.replace(/\s*\n\s*/g, '') + "'";
        str = str.replace(getReg.statement(), "';$1out+='");
        str = str.replace(getReg.express(), "'+($1)+'");
        str += ";return out;";
        return new Function(vjs.global, str);
    };

    var regRules = {
        statement: '\\s([\\s\\S]+?)', // Inertia match
        express: '-\\s([\\s\\S]+?)'
    };

    var getReg = {};

    for (var i in regRules) {
        (function(i) {
            getReg[i] = function() {
                var _reg = new RegExp(vjs.leftTag + regRules[i] + vjs.rightTag, 'g');
                getReg[i] = function() {
                    return _reg;
                }
                return _reg;
            }
        })(i);
    }

    /**
     * Global variable name in template
     */
    vjs.global = 'data';


    vjs.leftTag = '<%';
    vjs.rightTag = '%>';


    /**
     * Environment check
     */
    if (typeof module !== 'undefined' && module.exports) {

        // Nodejs
        module.exports = vjs;

    } else if (typeof define === 'function' && define.amd) {

        // AMD module
        define('vjs', [], function() {
            return vjs;
        });

    }

    this.vjs = vjs;

}).call(this);