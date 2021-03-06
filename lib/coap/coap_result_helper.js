var ER     = require('../error_message');

function resultReturn() {
    'use strict';
}

resultReturn.statusOfPost = function (result, res) {
    'use strict';
    res.code = '2.05';
    res.end(JSON.stringify({
        success: "post"
    }));
};

resultReturn.statusOfDelete = function (result, res) {
    'use strict';
    res.code = '2.05';
    res.end(JSON.stringify({
        success: "delete"
    }));
};

resultReturn.statusOfGet = function (result, res, req) {
    'use strict';
    if (result !== undefined) {
        if (result.length === 2) {
            res.code = '4.04';
            res.end(JSON.stringify(ER.ID_NOT_FOUND));
        } else {
            res.code = '2.05';
            res.end(result);
        }
    } else {
        res.code = '4.04';
        var URL_NOT_FOUND = {
            error: "Require URL is :" + req.url + ", URL Error"
        };
        res.end(JSON.stringify(URL_NOT_FOUND));
    }

};

module.exports = resultReturn;