require('shellscript').globalize();

var publicIp = $('curl icanhazip.com -s');

var commandLineArguments = process.argv;

var hackerNewsLink = commandLineArguments[2];

console.log(hackerNewsLink);