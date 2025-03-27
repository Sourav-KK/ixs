window.onload = function () {
  const navTabs = document.querySelectorAll(".navTabs");

  // Add event listener to each navigation item with class "navTabs"
  navTabs.forEach(function (tab) {
    tab.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      // Get the target section from the data-bs-target attribute
      const targetId = tab.getAttribute("data-bs-target");
      const targetSection = document.getElementById(targetId);

      // If the section exists, scroll to it smoothly
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
};
