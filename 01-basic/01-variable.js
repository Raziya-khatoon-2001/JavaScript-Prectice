 const accountId = 144553;
 let accountEmail = "raziya@gmail.com"
 var accountPassword = "12345"
 accountCity = "katihar"
 let accountState;

 //accountId = 2 // not allowed

 console.log(accountId);

 accountEmail = "raziya12@gmail.com"
 accountPassword = "34879"
 accountCity = "bangluru"


 console.table({accountId, accountEmail, accountPassword, accountCity, accountState});

 /*
  prefer not to use var
  because of issue in block scope and functional scope
*/