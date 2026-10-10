// Main JavaScript functionality for One Day, One New Knowledge

document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  initializeFilters();
  initializeArchiveSearch();
  initializeComments();
});

// Initialize navigation highlighting
function initializeNavigation() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.style.color = 'var(--primary-accent)';
    }
  });
}

// Initialize filter buttons
function initializeFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      applyArchiveFilters();
    });
  });
}

// Initialize archive search input
function initializeArchiveSearch() {
  const searchInput = document.getElementById('idea-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', applyArchiveFilters);
}

function applyArchiveFilters() {
  const category = document.querySelector('.filter-btn.active')?.dataset.category || 'all';
  const searchQuery = document.getElementById('idea-search')?.value || '';
  filterIdeas(category, searchQuery);
}

// Filter ideas grid based on category and title search
function filterIdeas(category, searchQuery = '') {
  const ideaCards = document.querySelectorAll('[data-idea-category]');
  const query = (searchQuery || '').trim().toLowerCase();
  let visibleCount = 0;
  
  ideaCards.forEach(card => {
    const matchesCategory = category === 'all' || card.dataset.ideaCategory === category;
    const searchableText = (card.dataset.ideaSearch || card.textContent).toLowerCase();
    const matchesSearch = !query || searchableText.includes(query);
    const shouldShow = matchesCategory && matchesSearch;

    card.style.display = shouldShow ? 'block' : 'none';
    if (shouldShow) {
      card.style.opacity = '1';
      visibleCount++;
    } else {
      card.style.opacity = '0';
    }
  });

  const noResults = document.getElementById('no-results');
  if (noResults) {
    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  }
}

// Replace the browser-only comment form with a shared Giscus discussion.
function initializeComments() {
  document.querySelectorAll('.comment-form').forEach(commentForm => {
    const ideaId = commentForm.dataset.ideaId;
    const discussion = commentForm.closest('.discussion-section');
    const commentsContainer = discussion?.querySelector('.comments-list');
    if (!ideaId || !commentsContainer) return;

    commentForm.remove();
    commentsContainer.replaceChildren();

    const widget = document.createElement('div');
    widget.className = 'giscus';
    commentsContainer.appendChild(widget);

    const giscusScript = document.createElement('script');
    giscusScript.src = 'https://giscus.app/client.js';
    giscusScript.async = true;
    giscusScript.crossOrigin = 'anonymous';
    giscusScript.dataset.repo = 'curiousteenagers/onedayonenewknowledge';
    giscusScript.dataset.repoId = 'R_kgDOSMvXwg';
    giscusScript.dataset.category = 'Announcements';
    giscusScript.dataset.categoryId = 'DIC_kwDOSMvXws4DHdhx';
    giscusScript.dataset.mapping = 'specific';
    giscusScript.dataset.term = `idea-${ideaId}`;
    giscusScript.dataset.strict = '1';
    giscusScript.dataset.reactionsEnabled = '1';
    giscusScript.dataset.inputPosition = 'bottom';
    giscusScript.dataset.theme = 'preferred_color_scheme';
    giscusScript.dataset.lang = 'es';
    giscusScript.onerror = () => {
      commentsContainer.textContent = 'No se pudieron cargar los comentarios. Comprueba tu conexión e inténtalo de nuevo.';
    };
    widget.appendChild(giscusScript);
  });
}

// Navigate to idea
function navigateToIdea(ideaId) {
  window.location.href = `idea-${ideaId}.html`;
}

// Navigate to category
function navigateToCategory(categoryId) {
  window.location.href = `category-${categoryId}.html`;
}

// Smooth scroll to section
function scrollToSection(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
