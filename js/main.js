var a=prompt("Enter the password");
document.write("Password is :&nbsp;"+a+"<br>");
var b=[];
for(i=0;i<a.length;i++)
{
	if(a[i]==" ")
	{
		document.write(alert("Password did not accept space"));
	}
	// else{
		// document.write("The password is correct");
	// }
}
 