/*
Once base case is reached n==1 recursion starts n=1.
n=3 'chirp' + chirp(2) => 'chirp chirp chirp'
n=2 'chirp' + chirp(1) => 'chirp chirp'
n=1 'chirp' => 'chirp'
*/

function chirp(n){
  // FIX ME
  if(n === 1) {
    return 'chirp';
  }


   return 'chirp ' + chirp(--n);

};

$(document).ready(function(){
  $("#result").html(chirp(3));
});