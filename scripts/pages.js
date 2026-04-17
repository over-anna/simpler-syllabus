function loadPageContent() {
  fetch("../assets/data/page-data.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load page data");
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const grid = document.getElementById("pageGrid");

      data.pages.forEach(page => {
        const col = document.createElement("div");
        col.className = "col-lg-3 col-md-4 col-sm-12";

        grid.appendChild(col);
      });
    })
    .catch(error => {
      console.error(error);
      document.getElementById("pageGrid").innerHTML =
        "<p class='text-danger'>Unable to load pages.</p>";
    });
}


function unloadPageContent() {
  document.getElementById("pageGrid").textContent = '';

} 
