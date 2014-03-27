// JavaScript Document

function validate()
{
	var name = document.getElementById("name");
	var mail = document.getElementById("mail");
	var content = document.getElementById("content");
	
	if (!name.value)
	{
		name.style.borderColor="red";
	}
	
	if (!mail.value)
	{
		mail.style.borderColor="red";
	}
	
	if (!content.value)
	{
		content.style.borderColor="red";
	}
}