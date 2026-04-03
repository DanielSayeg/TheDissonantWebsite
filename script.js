// Inline fallback data so the comic works when opening index.html directly (file://)
const INLINE_COMIC_DATA = {
  chapters: [
    {
      id: "chapter-1",
      title: "Chapter 1",
      folder: "assets/comic/chapter-1",
      pages: [
        "assets/comic/chapter-1/page-00.jpg",
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
        "assets/comic/chapter-2/page-00.jpg",
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
        "assets/comic/chapter-3/page-00.jpg",
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
    },
    {
      id: "chapter-4",
      title: "Chapter 4",
      folder: "assets/comic/chapter-4",
      pages: [
        "assets/comic/chapter-4/page-01.jpg",
        "assets/comic/chapter-4/page-02.jpg",
        "assets/comic/chapter-4/page-03.jpg",
        "assets/comic/chapter-4/page-04.jpg",
        "assets/comic/chapter-4/page-05.jpg",
        "assets/comic/chapter-4/page-06.jpg",
        "assets/comic/chapter-4/page-07.jpg",
        "assets/comic/chapter-4/page-08.jpg"
      ]
    }
  ]
};

let comicData = { chapters: [] };
let currentChapterIndex = 0;
let currentPageIndex = 0;

const SECTION_IDS = ["home", "archive", "about", "cast", "support"];
const READER_POSITION_KEY = "dissonant-reader-position";

function saveReaderPosition() {
  try {
    localStorage.setItem(
      READER_POSITION_KEY,
      JSON.stringify({
        chapterIndex: currentChapterIndex,
        pageIndex: currentPageIndex
      })
    );
  } catch (e) {
    /* ignore quota or private browsing */
  }
}

function loadReaderPosition() {
  try {
    const raw = localStorage.getItem(READER_POSITION_KEY);
    if (!raw) return null;
    const { chapterIndex, pageIndex } = JSON.parse(raw);
    if (typeof chapterIndex !== "number" || typeof pageIndex !== "number") return null;
    if (!comicData.chapters || comicData.chapters.length === 0) return null;
    if (chapterIndex < 0 || chapterIndex >= comicData.chapters.length) return null;
    const ch = comicData.chapters[chapterIndex];
    if (!ch || !ch.pages || pageIndex < 0 || pageIndex >= ch.pages.length) return null;
    return { chapterIndex, pageIndex };
  } catch (e) {
    return null;
  }
}

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
    const response = await fetch("comic-data.json?v=2", { cache: "no-store" });
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
      // Only scroll "down a bit" via the #home anchor when going to the reader.
      // For other tabs, scroll to the very top of the page.
      if (target === "home") {
        window.location.hash = "#home";
      } else {
        window.location.hash = "#";
      }
    });
  });

   const rssButton = document.getElementById("rss-button");
   if (rssButton) {
     rssButton.addEventListener("click", (event) => {
       event.preventDefault();
       if (typeof gtag === "function") {
         gtag("event", "rss-subsriber"); // track RSS clicks in GA4
       }
       window.location.href = "/rss.xml";
     });
   }

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
  const pageJumpSelect = $("#page-jump");

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
  const onLastPageOfChapter = currentPageIndex >= totalPages - 1;
  const noChapters = !comicData.chapters || comicData.chapters.length === 0;
  const isFirstChapter = noChapters ? true : currentChapterIndex === 0;
  const isLastChapter = noChapters
    ? true
    : currentChapterIndex >= comicData.chapters.length - 1;
  const onFirstPageOfFirstChapter = isFirstChapter && onFirstPage;
  const onLastPageOfLastChapter = isLastChapter && onLastPageOfChapter;

  // Disable first/prev only on very first page of the very first chapter
  if (firstBtn) firstBtn.disabled = onFirstPageOfFirstChapter;
  if (prevBtn) prevBtn.disabled = onFirstPageOfFirstChapter;

  // Only disable next/last when we are truly at the end of the final chapter
  if (nextBtn) nextBtn.disabled = onLastPageOfLastChapter;
  if (lastBtn) lastBtn.disabled = onLastPageOfLastChapter;

  // Keep the page-jump dropdown in sync with the current page
  if (pageJumpSelect && !noChapters) {
    const value = `${currentChapterIndex}:${currentPageIndex}`;
    if (pageJumpSelect.value !== value) {
      pageJumpSelect.value = value;
    }
  }
}

function sendPageTurnEvent() {
  const chapter = getCurrentChapter();
  if (!chapter || typeof gtag !== "function") return;
  gtag("event", "page_turn", {
    chapter_index: currentChapterIndex,
    chapter_title: chapter.title || chapter.id,
    page_index: currentPageIndex,
    page_number: currentPageIndex + 1
  });
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
  saveReaderPosition();
  sendPageTurnEvent();

  // Ensure the reader is visible whenever we change chapters
  const homeSection = document.getElementById("home");
  if (homeSection) {
    homeSection.scrollIntoView({ behavior: "auto", block: "start" });
  }
}

function setPage(pageIndex) {
  const chapter = getCurrentChapter();
  if (!chapter || !chapter.pages || chapter.pages.length === 0) return;

  const safeIndex = Math.min(Math.max(pageIndex, 0), chapter.pages.length - 1);
  if (safeIndex === currentPageIndex) return;
  currentPageIndex = safeIndex;
  updateReaderUI();
  saveReaderPosition();
  sendPageTurnEvent();

  // Keep the reader in view when changing pages
  const homeSection = document.getElementById("home");
  if (homeSection) {
    homeSection.scrollIntoView({ behavior: "auto", block: "start" });
  }
}

function goToNextPage() {
  const chapter = getCurrentChapter();
  if (!chapter || !chapter.pages || chapter.pages.length === 0) return;
  const lastPageIndex = chapter.pages.length - 1;

  // If we are not yet at the last page of this chapter, go to next page
  if (currentPageIndex < lastPageIndex) {
    setPage(currentPageIndex + 1);
    return;
  }

  // We are at the last page of this chapter – try to go to the first page of the next chapter
  if (comicData.chapters && currentChapterIndex < comicData.chapters.length - 1) {
    setChapter(currentChapterIndex + 1); // setChapter always goes to page index 0 (page-00)
  }
}

function goToPrevPage() {
  const chapter = getCurrentChapter();
  if (!chapter || !chapter.pages || chapter.pages.length === 0) return;

  // If we're not on the first page of this chapter, just go back one page
  if (currentPageIndex > 0) {
    setPage(currentPageIndex - 1);
    return;
  }

  // We are on the first page of this chapter – try to go to the last page of the previous chapter
  if (comicData.chapters && currentChapterIndex > 0) {
    const prevChapterIndex = currentChapterIndex - 1;
    const prevChapter = comicData.chapters[prevChapterIndex];
    if (prevChapter && prevChapter.pages && prevChapter.pages.length > 0) {
      // Jump to previous chapter, last page
      setChapter(prevChapterIndex);
      setPage(prevChapter.pages.length - 1);
    }
  }
}

function goToFirstPage() {
  if (!comicData.chapters || comicData.chapters.length === 0) return;
  // Jump to very first chapter, very first page
  setChapter(0);
}

function goToLastPage() {
  if (!comicData.chapters || comicData.chapters.length === 0) return;
  // Jump to very last chapter, very last page that exists
  const lastChapterIndex = comicData.chapters.length - 1;
  const lastChapter = comicData.chapters[lastChapterIndex];
  if (!lastChapter || !lastChapter.pages || lastChapter.pages.length === 0) return;
  setChapter(lastChapterIndex);
  setPage(lastChapter.pages.length - 1);
}

function initReaderInteractions() {
  const firstBtn = $("#first-page");
  const prevBtn = $("#prev-page");
  const nextBtn = $("#next-page");
  const lastBtn = $("#last-page");
  const leftZone = $("#reader-click-left");
  const rightZone = $("#reader-click-right");
  const chapterSelect = $("#chapter-select");
  const pageJumpSelect = $("#page-jump");

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

  if (pageJumpSelect) {
    pageJumpSelect.addEventListener("change", (event) => {
      const value = event.target.value;
      if (!value) return;
      const parts = value.split(":");
      if (parts.length !== 2) return;
      const chapterIndex = parseInt(parts[0], 10);
      const pageIndex = parseInt(parts[1], 10);
      if (Number.isNaN(chapterIndex) || Number.isNaN(pageIndex)) return;
      setChapter(chapterIndex);
      setPage(pageIndex);
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
    option.textContent = title;
    select.appendChild(option);
  });
}

function populatePageJumpSelect() {
  const select = $("#page-jump");
  if (!select) return;

  select.innerHTML = "";

  if (!comicData.chapters || comicData.chapters.length === 0) {
    const emptyOption = document.createElement("option");
    emptyOption.textContent = "No pages yet";
    emptyOption.value = "";
    emptyOption.disabled = true;
    emptyOption.selected = true;
    select.appendChild(emptyOption);
    select.disabled = true;
    return;
  }

  select.disabled = false;

  comicData.chapters.forEach((chapter, chapterIndex) => {
    const chapterTitle = chapter.title || chapter.id || `Chapter ${chapterIndex + 1}`;
    if (!chapter.pages || chapter.pages.length === 0) return;

    chapter.pages.forEach((_, pageIndex) => {
      const option = document.createElement("option");
      option.value = `${chapterIndex}:${pageIndex}`;
      const pageNumber = pageIndex + 1;
      option.textContent = `${chapterTitle}, page ${pageNumber}`;
      select.appendChild(option);
    });
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

  const chaptersForArchive = comicData.chapters.filter((ch) => ch.id !== "chapter-4");

  chaptersForArchive.forEach((chapter, index) => {
    const dataIndex = comicData.chapters.indexOf(chapter);
    const card = document.createElement("article");
    card.className = "archive-card";

    const firstPageUrl =
      chapter.pages && chapter.pages.length > 0 ? chapter.pages[0] : null;

    if (firstPageUrl) {
      const thumb = document.createElement("img");
      thumb.className = "archive-card__thumb";
      thumb.src = firstPageUrl;
      thumb.alt = (chapter.title || chapter.id || `Chapter ${dataIndex + 1}`) + " cover";
      thumb.addEventListener("click", () => {
        setChapter(dataIndex);
        setActiveSection("home");
        window.location.hash = "#home";
      });
      card.appendChild(thumb);
    }

    const title = document.createElement("h3");
    title.className = "archive-card__title";
    title.textContent = chapter.title || chapter.id || `Chapter ${dataIndex + 1}`;

    card.appendChild(title);

    container.appendChild(card);
  });
}

async function initApp() {
  initNavigation();
  initFooterYear();
  await loadComicData();

  populateChapterSelect();
  populatePageJumpSelect();
  initArchive();
  initReaderInteractions();

  if (comicData.chapters && comicData.chapters.length > 0) {
    const saved = loadReaderPosition();
    if (saved) {
      setChapter(saved.chapterIndex);
      setPage(saved.pageIndex);
    } else {
      setChapter(0);
    }
  } else {
    showMessage(
      "Welcome to The Dissonant. Once your chapter images are added and the data file is generated, you will be able to read the comic here."
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

