const index = new FlexSearch.Document({
  encode: function (str) {
    const cjkItems = str.replace(/[\x00-\x7F]/g, "").split("");
    const asciiItems = str.toLowerCase().split(/\W+/);
    return cjkItems.concat(asciiItems);
  },
  document: {
    id: "id_str",
    index: ["full_text"],
    store: true,
  },
});

let results;
let processed = false;
let browseDocuments = searchDocuments.sort(function (a, b) {
  return new Date(b.created_at) - new Date(a.created_at);
});

// MAIN PAGE LOAD FUNCTION
document.addEventListener("DOMContentLoaded", function () {
  // Set tab from initial URL
  const url = new URL(window.location.href);
  url.searchParams.get("tab") == "search" ? searchTab() : browseTab();
  // Setup search listener
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", onSearchChange);
})

window.addEventListener("load", function () {
  // Run search if initial 
  const searchInput = document.getElementById("search-input");
  if (searchInput.value) onSearchChange({ target: searchInput });
})


function searchTab() {
  if (!processed) processData(searchDocuments);
  const clickedTab = document.getElementById("search-tab");
  clickedTab.classList.add("active");
  const otherTab = document.getElementById("browse-tab");
  otherTab.classList.remove("active");
  document.getElementById("browse").hidden = true;
  document.getElementById("search").hidden = false;
  // Add "tab=search" param to URL
  const url = new URL(window.location.href);
  if (url.searchParams.get("tab") !== "search") {
    url.searchParams.set("tab", "search");
    history.replaceState(history.state, "", url.href);
  }
}

function browseTab() {
  const clickedTab = document.getElementById("browse-tab");
  clickedTab.classList.add("active");
  const otherTab = document.getElementById("search-tab");
  otherTab.classList.remove("active");
  document.getElementById("search").hidden = true;
  document.getElementById("browse").hidden = false;
  // Add "tab=browse" param to URL
  const url = new URL(window.location.href);
  if (url.searchParams.get("tab") !== "browse") {
    url.searchParams.set("tab", "browse");
    history.replaceState(history.state, "", url.href);
  }
}


function processData(data) {
  document.getElementById("loading").hidden = false;
  for (doc of data) {
    index.add({
      id_str: doc.id_str,
      created_at: doc.created_at,
      full_text: doc.full_text,
      favorite_count: doc.favorite_count,
      retweet_count: doc.retweet_count,
    });
  }
  document.getElementById("loading").hidden = true;
  document.getElementById("search").hidden = false;
  processed = true;
}

function sortResults(criterion) {
  const buttons = document.querySelectorAll(".sort-button");
  buttons.forEach(el => el.classList.remove("active"));
  document.querySelector(".sort-button." + criterion).classList.add("active");

  if (criterion === "newest-first") {
    results = results.sort(function (a, b) {
      return new Date(b.created_at) - new Date(a.created_at);
    });
    renderResults();
  }
  if (criterion === "oldest-first") {
    results = results.sort(function (a, b) {
      return new Date(a.created_at) - new Date(b.created_at);
    });
    renderResults();
  }
  if (criterion === "most-relevant") {
    results = results.sort(function (a, b) {
      return a.index - b.index;
    });
    renderResults();
  }
  if (criterion === "most-popular") {
    results = results.sort(function (a, b) {
      return (
        +b.favorite_count +
        +b.retweet_count -
        (+a.favorite_count + +a.retweet_count)
      );
    });
    renderResults();
  }
  if (criterion === "newest-first-browse") {
    browseDocuments = browseDocuments.sort(function (a, b) {
      return new Date(b.created_at) - new Date(a.created_at);
    });
    renderBrowse();
  }
  if (criterion === "oldest-first-browse") {
    browseDocuments = browseDocuments.sort(function (a, b) {
      return new Date(a.created_at) - new Date(b.created_at);
    });
    renderBrowse();
  }
  if (criterion === "most-popular-browse") {
    browseDocuments = browseDocuments.sort(function (a, b) {
      return (
        +b.favorite_count +
        +b.retweet_count -
        (+a.favorite_count + +a.retweet_count)
      );
    });
    renderBrowse();
  }
}

function renderResults() {
  const output = results.map(renderTweet);
  document.getElementById("output").innerHTML = output.join("");
  if (results.length > 0) {
    document.getElementById("output").innerHTML +=
      '<a href="#tabs">top &uarr;</a>';
  }
}

function onSearchChange({ target: { value } }) {
  results = index.search(value, { enrich: true });
  if (results.length > 0) {
    // limit search results to the top 100 by relevance
    results = results.slice(0, 100);
    // preserve original search result order in the 'index' variable since that is ordered by relevance
    results = results[0].result.map((item, index) => {
      let result = item.doc;
      result.index = index;
      return result;
    });
  }
  renderResults();
}

const pageSize = 50;
const pageMax = Math.floor(browseDocuments.length / pageSize) + 1;
let page = 1;
let browseIndex = (page - 1) * pageSize;

function onPageNumChange(e) {
  page = e.target.value;
  browseIndex = (page - 1) * pageSize;
  renderBrowse();
}

document.getElementById("page-total").innerText = pageMax;
document.getElementById("page-num").addEventListener("input", onPageNumChange);
document.getElementById("page-num").value = +page;
document.getElementById("page-num").max = pageMax;
document.getElementById("page-num").min = 1;

function renderBrowse() {
  const output = browseDocuments
    .slice(browseIndex, browseIndex + pageSize)
    .map(renderTweet);
  document.getElementById("browse-output").innerHTML = output.join("");
  document.getElementById("browse-output").innerHTML +=
    '<a href="#tabs">top &uarr;</a>';
}

function renderTweet(item) {
  return `<div class="search-item">
        <p class="search-text">${item.full_text}</p>
        <a class="search-time" href="lengthypooch/status/${item.id_str}">
          ${new Date(item.created_at).toLocaleString()}</a>
      </div>
      <hr class="search-divider"/>`
    .replace(
      /\.\.\/\.\.\/tweets_media\//g,
      "lengthypooch/tweets_media/"
    )
}

renderBrowse();
