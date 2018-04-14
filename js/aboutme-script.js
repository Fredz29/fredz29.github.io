/**
 * function downloadresume , downloads resume
 * @author Ftangpos
 * */
function downloadresume(){
	window.location="docs/Frederick_Tangpos_resume.docx"
	changeElementTextByID("downloadresume-btn","YOU HAVE MY RESUME!");
}

/**
 * function changeElementTextByID , change html tag content using its id
 * @param {string} IDName html element id attribute
 * @param {string} newText text or message to display as the replacement
 * @author Ftangpos
 * */
function changeElementTextByID(IDName,newText){
	
	var element;

	if(IDName && IDName != ""){
		element = document.getElementById(IDName);
		element.innerHTML = newText;
	}else {
		console.log("IDName "+IDName+" not found.");
		return false;
	}	

}