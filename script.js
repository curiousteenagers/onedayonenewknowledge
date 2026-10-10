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

// Simple comment storage using localStorage
function initializeComments() {
  const commentForm = document.querySelector('.comment-form');
  if (!commentForm) return;
  if (commentForm.dataset.commentsInitialized === 'true') return;
  commentForm.dataset.commentsInitialized = 'true';
  
  const ideaId = commentForm.dataset.ideaId;
  const commentsContainer = document.querySelector('.comments-list');
  
  if (ideaId && commentsContainer) {
    loadComments(ideaId, commentsContainer);
    
    const textInput = commentForm.querySelector('textarea[name="comment"]');
    if (textInput) textInput.required = true;

    commentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!commentForm.reportValidity()) return;

      const nameInput = commentForm.querySelector('input[name="name"]');
      const emailInput = commentForm.querySelector('input[name="email"]');
      const commentText = textInput.value.trim();
      if (!nameInput.value.trim() || !commentText) return;

      addComment(ideaId, {
        name: nameInput.value.trim(),
        email: emailInput?.value.trim() || '',
        text: commentText,
        date: new Date().toLocaleDateString()
      });

      commentForm.reset();
      loadComments(ideaId, commentsContainer);
    });
  }
}

// Load comments from localStorage
function loadComments(ideaId, container) {
  const comments = JSON.parse(localStorage.getItem(`comments-${ideaId}`) || '[]');
  container.innerHTML = '';
  
  if (comments.length === 0) {
    container.innerHTML = '<p style="color: var(--gray-text);">No comments yet. Be the first to share your thoughts!</p>';
    return;
  }
  
  comments.forEach(comment => {
    const commentEl = document.createElement('div');
    commentEl.style.cssText = `
      padding: var(--spacing-md);
      background-color: var(--white);
      border-radius: 4px;
      margin-bottom: var(--spacing-md);
      border-left: 3px solid var(--primary-accent);
    `;
    
    commentEl.innerHTML = `
      <strong style="color: var(--dark-text);">${escapeHtml(comment.name)}</strong>
      <small style="color: var(--gray-text); display: block; margin-bottom: var(--spacing-xs);">${comment.date}</small>
      <p style="margin: 0; color: var(--gray-text);">${escapeHtml(comment.text)}</p>
    `;
    
    container.appendChild(commentEl);
  });
}

// Add comment to localStorage
function addComment(ideaId, comment) {
  const comments = JSON.parse(localStorage.getItem(`comments-${ideaId}`) || '[]');
  comments.push(comment);
  localStorage.setItem(`comments-${ideaId}`, JSON.stringify(comments));
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
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
