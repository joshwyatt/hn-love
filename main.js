require('shellscript').globalize();

var publicIp = $('curl icanhazip.com -s').slice(0, -1);
console.log(publicIp);
var offLimitIps = ['173.247.199.46', '199.87.82.66'];

var canVote = true;
for(var i = 0; i < offLimitIps.length; i++){
  var offLimitIp = offLimitIps[i];
  if( offLimitIp === publicIp ){
    canVote = false;
    break;
  }
}

if( !canVote ){
  console.log('You cannot vote');
}else{
  console.log('You can vote');
}







// shell('open ' + hackerNewsLink);