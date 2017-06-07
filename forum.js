function mySend(){
         if(document.getElementById('text').value == '') 
         {      
        alert("Please Provide Query!");
              document.getElementById('text').focus();
        return false;       
        }
         else
        {
		var myWindow = window.open("", "MsgWindow", "width=500,height=500");
		myWindow.document.write("<p>Your Query has been stored in our database.</p>");
		return true;
		}
	}