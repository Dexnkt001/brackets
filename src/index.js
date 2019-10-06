module.exports = function check(str, bracketsConfig) {
    var arr = str.split('');
    if (arr.length % 2 != 0) {
        return false;
    }
    var b = true;
    for (var i = 0; i < bracketsConfig.length; i++, b=true) {
        for (var j = 1; j < arr.length; j++) {
            if (arr[j] == bracketsConfig[i][1]) {
                if (arr[j - 1] == bracketsConfig[i][0]) {
                    arr.splice(j, 1);
                    arr.splice(j - 1, 1);
                     j = 0;
                     b = false;
                    }
                    if (arr.length == 0) {
                        return true;
                    }
                }
            } 
            if(b == false) i = -1;
        }
    if (arr.length != 0) {
        return false;
    } else return true;

}






