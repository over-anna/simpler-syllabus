const searchBox = document.getElementById("searchBox");
const pageGrid = document.getElementById("pageGrid");

let pageData;

fetch("./assets/data/page-data.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load");
    }
    return response.json();

  })
  .then(data => {

    pageData = data;
    console.log('page Data', pageData)

    renderObjectResults(pageData.pages);

  });


function renderObjectResults(items) {
  pageGrid.innerHTML = "";

  items.forEach(page => {
    const col = document.createElement("div");
    col.className = "col-lg-3 col-md-4 col-sm-12";

    col.innerHTML = `
            <div class="card h-100 shadow-sm">
              <a href="${page.url}" target="_blank">
                <img
                  src="${page.cover}" 
                  class="card" 
                  alt="${page.title}">
              </a>

              <div class="card-body p-3">
                <h6 class="card-title mb-1">
                  ${page.title}
                </h6>

                <p class="card-text small text-muted mb-2">
                  ${page.description}
                </p>
              </div>
              </div>
            </div>
          `;

    pageGrid.appendChild(col);
  });

}

function handleGlobalObjectSearch() {
  const query = searchBox.value.trim().toLowerCase();
  if (!query) {
    renderObjectResults(pageData.pages);
    return pageData.pages;
  }

  const results = pageData.pages.filter(item => {
    const values = Object.values(item);
    return values.some(value => String(value).toLowerCase().includes(query));
  });
  renderObjectResults(results);
  return results;
}

searchBox.addEventListener("input", handleGlobalObjectSearch
);
