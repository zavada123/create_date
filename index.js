const fs = require('fs');

const now = new Date();

console.log(`Запуск: ${now}`);

fs.appendFile('./date/launch.logs', `Запуск: ${now}\n`, function(error) {
    if (error) throw error;
});