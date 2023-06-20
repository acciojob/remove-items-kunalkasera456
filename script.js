//your JS code here. If required.
 let colorChoose = document.getElementByid("colorSelect");
 let removeColor = document.getElementsByTagName("input")[0];

removeColor.eventListner("click", function () {
	// Get the index of the selected option
  const selectedIndex = colorSelect.selectedIndex;

  // Remove the selected option from the dropdown
  colorSelect.remove(selectedIndex);
	
})
