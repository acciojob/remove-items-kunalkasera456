//your JS code here. If required.
 let colorChoose = document.getElementByid("colorSelect");
 let removeColor = document.getElementsByTagName("input")[0];

removeColor.eventListner("click", function () {
	// Get the index of the selected option
  const selectedIndex = colorChoose.selectedIndex;

  // Remove the selected option from the dropdown
  colorChoose.remove(selectedIndex);
	
})
