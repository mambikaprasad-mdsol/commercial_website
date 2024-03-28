// Get all elements with class="tab" and class="tab-pane"
var tabs = document.getElementsByClassName("tab");
var tabContents = document.getElementsByClassName("tab-pane");

// Function to open the tab content corresponding to the clicked tab
function openTab(tabIndex) {
  // Hide all tab content
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
    tabs[i].classList.remove("active");
  }

  // Show the selected tab content
  tabContents[tabIndex].classList.add("active");
  tabs[tabIndex].classList.add("active");
}

// By default, show the first tab
openTab(0);
