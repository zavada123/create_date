const fs = require('fs');
const os = require('os');

const now = new Date().toISOString().replace(/[Z]/,'').replace(/[T]/,'_').replace(/:/ig, '-').slice(0,19)

let user = os.userInfo();
user = JSON.stringify(user);

fs.appendFile(`./logs/log-${now}.log`, user, function(err) {
    if (err) throw err;
});