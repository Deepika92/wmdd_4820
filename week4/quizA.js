//1.a
var i = 1;
while (i < 10)
  if (i % 2 == 0)
  document.write ( i + "<br />" );


//nothing

//1.b
var i = 1;
while (i < 10)
  if (i % 2 == 0)
    document.write ( i++ + "<br />" );

//nothing


//2.a
var balance = 49;
while (true) {
  if (balance < 9)
    break;
  balance = balance - 9;
} 
document.write ( "Balance is " + balance );


//out balance is 4

//2.b
var balance = 49;
while (true) {
  if (balance < 9)
    continue;
  balance = balance - 9;
} 
document.write ( "Balance is " + balance );

//will not terminate


//3.a
var i = 0;
while (i < 4){
  for (var j = i; j > 1; j--)
    document.write ( j );
  document.write ( "****" + "<br />" );
  i++;
}

****
****
2 ****
3 2 ****


//3.b
var i = 4;
while (i >= 1) {
  var num = 1;
  for (var j = 1; j <= i; j++) {
       document.write ( num + "xxx" );
       num *= 2;
  }
  document.write ( "<br />" );
  i--;
}

1xxx2xxx4xxx8xxx
1xxx2xxx4xxx
1xxx2xxx
1xxx

