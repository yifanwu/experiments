function verifyEmail(email) {
  return ( /(.+)@berkeley.edu/.test(email));
}

window.onload = function(e){
  let btn = document.getElementById("emailBtn")
  btn.onclick = function(){
    let email = document.getElementById("email").value;
    if (verifyEmail(email)) {
      window.open(`https://www.gpaas.xyz/gpaas/experiment/chroniclesv2/chroniclesv2/?workerId=${email}&assignmentId=testassignmentid&turkSubmitTo=sandbox&hitId=testhitid`);
    } else {
      let warning = document.getElementById("warning");
      warning.style.display = "block";
    }
  };
}