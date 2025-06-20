
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchBar");
    const productCards = document.querySelectorAll(".product-card");
    const checkboxes = document.querySelectorAll(".filter-sidebar input[type='checkbox']");
  
    // Helper: Convert NodeList to Array
    const toArray = (nodeList) => Array.prototype.slice.call(nodeList);
  
    // Filter logic based on search & checkboxes
    function filterProducts() {
      const searchQuery = searchInput.value.trim().toLowerCase();
      const selectedFilters = {
        occasion: [],
        color: [],
        arrival: [],
      };
  
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          const groupTitle = checkbox.closest(".filter-group").querySelector("h2").textContent.toLowerCase();
          if (groupTitle.includes("occasion")) selectedFilters.occasion.push(checkbox.nextSibling.textContent.trim().toLowerCase());
          else if (groupTitle.includes("color")) selectedFilters.color.push(checkbox.nextSibling.textContent.trim().toLowerCase());
          else if (groupTitle.includes("arrival")) selectedFilters.arrival.push(checkbox.nextSibling.textContent.trim().toLowerCase());
        }
      });
  
      productCards.forEach((card) => {
        const title = card.getAttribute("data-title")?.toLowerCase() || "";
        const occasion = card.getAttribute("data-occasion") || "";
        const color = card.getAttribute("data-color") || "";
        const arrival = card.getAttribute("data-arrival") || "";
  
        const matchesSearch = !searchQuery || title.includes(searchQuery);
        const matchesOccasion = selectedFilters.occasion.length === 0 || selectedFilters.occasion.includes(occasion);
        const matchesColor = selectedFilters.color.length === 0 || selectedFilters.color.includes(color);
        const matchesArrival = selectedFilters.arrival.length === 0 || selectedFilters.arrival.includes(arrival);
  
        if (matchesSearch && matchesOccasion && matchesColor && matchesArrival) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }
  
    // Trigger search on pressing Enter
    searchInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        filterProducts();
      }
    });
  
    // Trigger filter on any checkbox change
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", filterProducts);
    });
  });
  