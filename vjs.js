/*
vjs.js v1.0.0
Available via the MIT or new BSD license.
see: http://github.com/jianghai/vjs for details
*/

(function () {
    

    /**
     * Key step, convert template string to html by data you passed
     */
    var vjs = function(str, data) {
        str = "var out = '" + str.replace(/\s*\n\s*/g, '') + "'";
        str = str.replace(/<%\s([\s\S]+?)%>/g, "';$1out+='");
        str = str.replace(/<%-\s([\s\S]+?)%>/g, "'+$1+'");
        str += ";return out;";
        return (new Function(template.global, str))(data);
    };


    /**
     * Global variable name in template
     */
    vjs.global = 'data';


    /**
     * Environment check
     */
    if (typeof module !== 'undefined' && module.exports) {
        // Nodejs
        module.exports = vjs;
    } else if (typeof define === 'function' && define.amd) {
        // AMD module
        define(function() {
            return vjs;
        });
    } else {
        this.vjs = vjs;
    }
    

}).call(this);