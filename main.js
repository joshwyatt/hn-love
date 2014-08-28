require('shellscript').globalize();

// var hrPublicFacingIp = '173.247.199.46';
var hrPublicFacingIp = '199.87.82.66';
var publicIp = $('curl icanhazip.com -s');
var commandLineArguments = process.argv;
var hackerNewsLink = commandLineArguments[2];

publicIp = publicIp.split('');
publicIp.pop();
publicIp = publicIp.join('');

if( publicIp === hrPublicFacingIp ){
  console.log('you are at hack reactor');
}else{
  console.log('you are not at hack reactor');
}





// shell('open ' + hackerNewsLink);