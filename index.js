require('shellscript').globalize();

var offLimitIps = ['173.247.199.46', '199.87.82.66', '50.250.208.114'];


var checkIfICanVote = function(){
  
  var hackerNewsLink = 'https://news.ycombinator.com/';

  var publicIp = $('curl icanhazip.com -s').slice(0, -1);

  if( publicIp.length === 0 ){
    console.log('no internet');
    return;
  }


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
    offLimitIps.push(publicIp);
    shell('open ' + hackerNewsLink);
  }

};

module.exports = function(){
  setInterval(checkIfICanVote, 1000);
}();