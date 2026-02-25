// Inline fallback data so the comic works when opening index.html directly (file://)
const INLINE_COMIC_DATA = {
  chapters: [
    {
      id: "chapter-1",
      title: "Chapter 1",
      folder: "assets/comic/chapter-1",
      pages: [
        "assets/comic/chapter-1/page-01.jpg",
        "assets/comic/chapter-1/page-02.jpg",
        "assets/comic/chapter-1/page-03.jpg",
        "assets/comic/chapter-1/page-04.jpg",
        "assets/comic/chapter-1/page-05.jpg",
        "assets/comic/chapter-1/page-06.jpg",
        "assets/comic/chapter-1/page-07.jpg",
        "assets/comic/chapter-1/page-08.jpg",
        "assets/comic/chapter-1/page-09.jpg",
        "assets/comic/chapter-1/page-10.jpg",
        "assets/comic/chapter-1/page-11.jpg",
        "assets/comic/chapter-1/page-12.jpg",
        "assets/comic/chapter-1/page-13.jpg",
        "assets/comic/chapter-1/page-14.jpg",
        "assets/comic/chapter-1/page-15.jpg",
        "assets/comic/chapter-1/page-16.jpg",
        "assets/comic/chapter-1/page-17.jpg",
        "assets/comic/chapter-1/page-18.jpg",
        "assets/comic/chapter-1/page-19.jpg",
        "assets/comic/chapter-1/page-20.jpg",
        "assets/comic/chapter-1/page-21.jpg",
        "assets/comic/chapter-1/page-22.jpg",
        "assets/comic/chapter-1/page-23.jpg",
        "assets/comic/chapter-1/page-24.jpg",
        "assets/comic/chapter-1/page-25.jpg",
        "assets/comic/chapter-1/page-26.jpg",
        "assets/comic/chapter-1/page-27.jpg",
        "assets/comic/chapter-1/page-28.jpg",
        "assets/comic/chapter-1/page-29.jpg",
        "assets/comic/chapter-1/page-30.jpg",
        "assets/comic/chapter-1/page-31.jpg"
      ]
    },
    {
      id: "chapter-2",
      title: "Chapter 2",
      folder: "assets/comic/chapter-2",
      pages: [
        "assets/comic/chapter-2/page-01.jpg",
        "assets/comic/chapter-2/page-02.jpg",
        "assets/comic/chapter-2/page-03.jpg",
        "assets/comic/chapter-2/page-04.jpg",
        "assets/comic/chapter-2/page-05.jpg",
        "assets/comic/chapter-2/page-06.jpg",
        "assets/comic/chapter-2/page-07.jpg",
        "assets/comic/chapter-2/page-08.jpg",
        "assets/comic/chapter-2/page-09.jpg",
        "assets/comic/chapter-2/page-10.jpg",
        "assets/comic/chapter-2/page-11.jpg",
        "assets/comic/chapter-2/page-12.jpg",
        "assets/comic/chapter-2/page-13.jpg",
        "assets/comic/chapter-2/page-14.jpg",
        "assets/comic/chapter-2/page-15.jpg",
        "assets/comic/chapter-2/page-16.jpg",
        "assets/comic/chapter-2/page-17.jpg",
        "assets/comic/chapter-2/page-18.jpg",
        "assets/comic/chapter-2/page-19.jpg",
        "assets/comic/chapter-2/page-20.jpg",
        "assets/comic/chapter-2/page-21.jpg",
        "assets/comic/chapter-2/page-22.jpg",
        "assets/comic/chapter-2/page-23.jpg",
        "assets/comic/chapter-2/page-24.jpg",
        "assets/comic/chapter-2/page-25.jpg",
        "assets/comic/chapter-2/page-26.jpg",
        "assets/comic/chapter-2/page-27.jpg",
        "assets/comic/chapter-2/page-28.jpg",
        "assets/comic/chapter-2/page-29.jpg"
      ]
    },
    {
      id: "chapter-3",
      title: "Chapter 3",
      folder: "assets/comic/chapter-3",
      pages: [
        "assets/comic/chapter-3/page-01.jpg",
        "assets/comic/chapter-3/page-02.jpg",
        "assets/comic/chapter-3/page-03.jpg",
        "assets/comic/chapter-3/page-04.jpg",
        "assets/comic/chapter-3/page-05.jpg",
        "assets/comic/chapter-3/page-06.jpg",
        "assets/comic/chapter-3/page-07.jpg",
        "assets/comic/chapter-3/page-08.jpg",
        "assets/comic/chapter-3/page-09.jpg",
        "assets/comic/chapter-3/page-10.jpg",
        "assets/comic/chapter-3/page-11.jpg",
        "assets/comic/chapter-3/page-12.jpg",
        "assets/comic/chapter-3/page-13.jpg",
        "assets/comic/chapter-3/page-14.jpg",
        "assets/comic/chapter-3/page-15.jpg",
        "assets/comic/chapter-3/page-16.jpg",
        "assets/comic/chapter-3/page-17.jpg",
        "assets/comic/chapter-3/page-18.jpg",
        "assets/comic/chapter-3/page-19.jpg",
        "assets/comic/chapter-3/page-20.jpg",
        "assets/comic/chapter-3/page-21.jpg",
        "assets/comic/chapter-3/page-22.jpg",
        "assets/comic/chapter-3/page-23.jpg",
        "assets/comic/chapter-3/page-24.jpg",
        "assets/comic/chapter-3/page-25.jpg",
        "assets/comic/chapter-3/page-26.jpg",
        "assets/comic/chapter-3/page-27.jpg",
        "assets/comic/chapter-3/page-28.jpg"
      ]
    }
  ]
};

let comicData = { chapters: [] };
let currentChapterIndex = 0;
let currentPageIndex = 0;

const SECTION_IDS = ["home", "archive", "about", "cast"];

function $(selector) {
  return document.querySelector(selector);
}

function showMessage(text) {
  const el = $("#reader-message");
  if (!el) return;
  if (!text) {
    el.textContent = "";
    el.classList.remove("reader__message--visible");
    return;
  }
  el.textContent = text;
  el.classList.add("reader__message--visible");
}

async function loadComicData() {
  // When opened directly from your computer (file://), use inline data.
  if (window.location.protocol === "file:") {
    comicData = INLINE_COMIC_DATA;
    return;
  }

  try {
    const response = await fetch("comic-data.json", { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const json = await response.json();
    if (!json || !Array.isArray(json.chapters)) {
      throw new Error("Invalid comic-data format");
    }
    comicData = json;
  } catch (err) {
    console.error("Failed to load comic-data.json", err);
    showMessage(
      "The comic data file could not be loaded yet. Once pages are added and the data file is generated, the reader will be available."
    );
    comicData = { chapters: [] };
  }
}

function initNavigation() {
  const navButtons = document.querySelectorAll(".nav-link");
  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.section;
      if (!target) return;
      setActiveSection(target);
      window.location.hash = `#${target}`;
    });
  });

  // Clicking the logo always returns to Home
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.style.cursor = "pointer";
    logo.addEventListener("click", () => {
      setActiveSection("home");
      window.location.hash = "#home";
    });
  }

  // Load section based on hash (e.g. #archive)
  const hash = window.location.hash.replace("#", "");
  if (SECTION_IDS.includes(hash)) {
    setActiveSection(hash);
  } else {
    setActiveSection("home");
  }
}

function setActiveSection(id) {
  SECTION_IDS.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.toggle("section--active", sectionId === id);
    }
  });

  const navButtons = document.querySelectorAll(".nav-link");
  navButtons.forEach((btn) => {
    btn.classList.toggle("nav-link--active", btn.dataset.section === id);
  });
}

function initFooterYear() {
  const yearEl = $("#footer-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function getCurrentChapter() {
  return comicData.chapters[currentChapterIndex] || null;
}

function getCurrentPageUrl() {
  const chapter = getCurrentChapter();
  if (!chapter || !Array.isArray(chapter.pages)) return null;
  return chapter.pages[currentPageIndex] || null;
}

function updateReaderUI() {
  const chapter = getCurrentChapter();
  const imageEl = $("#reader-image");
  const firstBtn = $("#first-page");
  const prevBtn = $("#prev-page");
  const nextBtn = $("#next-page");
  const lastBtn = $("#last-page");

  if (!chapter || !chapter.pages || chapter.pages.length === 0) {
    if (imageEl) {
      imageEl.src = "";
      imageEl.alt = "No page loaded yet";
    }
    if (firstBtn) firstBtn.disabled = true;
    if (prevBtn) prevBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = true;
    if (lastBtn) lastBtn.disabled = true;
    return;
  }

  const totalPages = chapter.pages.length;
  const currentPageNumber = currentPageIndex + 1;

  const url = getCurrentPageUrl();
  if (imageEl && url) {
    imageEl.src = url;
    imageEl.alt = `The Dissonant – ${chapter.title || "chapter"} – page ${currentPageNumber}`;
  }

  const onFirstPage = currentPageIndex === 0;
  const onLastPage = currentPageIndex >= totalPages - 1;

  if (firstBtn) firstBtn.disabled = onFirstPage;
  if (prevBtn) prevBtn.disabled = onFirstPage;
  if (nextBtn) nextBtn.disabled = onLastPage;
  if (lastBtn) lastBtn.disabled = onLastPage;
}

function setChapter(index) {
  if (!comicData.chapters || comicData.chapters.length === 0) {
    showMessage(
      "No chapters are available yet. Once you add pages and generate the comic data, the reader will appear here."
    );
    return;
  }

  const safeIndex = Math.min(Math.max(index, 0), comicData.chapters.length - 1);
  currentChapterIndex = safeIndex;
  currentPageIndex = 0;

  const select = $("#chapter-select");
  if (select) {
    select.value = comicData.chapters[safeIndex].id;
  }

  showMessage("");
  updateReaderUI();
}

function setPage(pageIndex) {
  const chapter = getCurrentChapter();
  if (!chapter || !chapter.pages || chapter.pages.length === 0) return;

  const safeIndex = Math.min(Math.max(pageIndex, 0), chapter.pages.length - 1);
  if (safeIndex === currentPageIndex) return;
  currentPageIndex = safeIndex;
  updateReaderUI();
}

function goToNextPage() {
  const chapter = getCurrentChapter();
  if (!chapter || !chapter.pages || chapter.pages.length === 0) return;
  if (currentPageIndex >= chapter.pages.length - 1) return;
  setPage(currentPageIndex + 1);
}

function goToPrevPage() {
  if (currentPageIndex <= 0) return;
  setPage(currentPageIndex - 1);
}

function goToFirstPage() {
  setPage(0);
}

function goToLastPage() {
  const chapter = getCurrentChapter();
  if (!chapter || !chapter.pages || chapter.pages.length === 0) return;
  setPage(chapter.pages.length - 1);
}

function initReaderInteractions() {
  const firstBtn = $("#first-page");
  const prevBtn = $("#prev-page");
  const nextBtn = $("#next-page");
  const lastBtn = $("#last-page");
  const leftZone = $("#reader-click-left");
  const rightZone = $("#reader-click-right");
  const chapterSelect = $("#chapter-select");

  if (firstBtn) firstBtn.addEventListener("click", goToFirstPage);
  if (prevBtn) prevBtn.addEventListener("click", goToPrevPage);
  if (nextBtn) nextBtn.addEventListener("click", goToNextPage);
  if (lastBtn) lastBtn.addEventListener("click", goToLastPage);
  if (leftZone) leftZone.addEventListener("click", goToPrevPage);
  if (rightZone) rightZone.addEventListener("click", goToNextPage);

  if (chapterSelect) {
    chapterSelect.addEventListener("change", (event) => {
      const id = event.target.value;
      const index = comicData.chapters.findIndex((ch) => ch.id === id);
      if (index >= 0) {
        setChapter(index);
      }
    });
  }

  // Optional: keyboard arrows for navigation
  document.addEventListener("keydown", (event) => {
    const activeSection = document.querySelector(".section.section--active");
    if (!activeSection || activeSection.id !== "home") return;
    if (event.key === "ArrowRight") {
      goToNextPage();
    } else if (event.key === "ArrowLeft") {
      goToPrevPage();
    }
  });
}

function populateChapterSelect() {
  const select = $("#chapter-select");
  if (!select) return;

  select.innerHTML = "";

  if (!comicData.chapters || comicData.chapters.length === 0) {
    const emptyOption = document.createElement("option");
    emptyOption.textContent = "No chapters yet";
    emptyOption.value = "";
    select.appendChild(emptyOption);
    select.disabled = true;
    return;
  }

  select.disabled = false;

  comicData.chapters.forEach((chapter, index) => {
    const option = document.createElement("option");
    option.value = chapter.id;
    const title = chapter.title || chapter.id || `Chapter ${index + 1}`;
    const pagesCount = chapter.pages ? chapter.pages.length : 0;
    option.textContent =
      pagesCount > 0 ? `${title} (${pagesCount} pages)` : title;
    select.appendChild(option);
  });
}

function initArchive() {
  const container = $("#archive-list");
  if (!container) return;

  container.innerHTML = "";

  if (!comicData.chapters || comicData.chapters.length === 0) {
    const msg = document.createElement("p");
    msg.className = "section__intro";
    msg.textContent =
      "No chapters are in the archive yet. Once pages are added, you will see them listed here.";
    container.appendChild(msg);
    return;
  }

  comicData.chapters.forEach((chapter, index) => {
    const card = document.createElement("article");
    card.className = "archive-card";

    const title = document.createElement("h3");
    title.className = "archive-card__title";
    title.textContent = chapter.title || chapter.id || `Chapter ${index + 1}`;

    const meta = document.createElement("p");
    meta.className = "archive-card__meta";
    const pagesCount = chapter.pages ? chapter.pages.length : 0;
    meta.textContent =
      pagesCount > 0
        ? `${pagesCount} page${pagesCount === 1 ? "" : "s"}`
        : "No pages yet";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "archive-card__button";
    button.textContent = "Read";
    button.addEventListener("click", () => {
      setChapter(index);
      setActiveSection("home");
      window.location.hash = "#home";
    });

    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(button);

    container.appendChild(card);
  });
}

async function initApp() {
  initNavigation();
  initFooterYear();
  await loadComicData();

  populateChapterSelect();
  initArchive();
  initReaderInteractions();

  if (comicData.chapters && comicData.chapters.length > 0) {
    setChapter(0);
  } else {
    showMessage(
      "Welcome to The Dissonant. Once your chapter images are added and the data file is generated, you will be able to read the comic here."
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

