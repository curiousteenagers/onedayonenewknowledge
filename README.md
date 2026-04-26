# One Day, One New Knowledge

A clean, modern educational website exploring one new idea every day from different disciplines.

## 🎯 Project Overview

**Website Title:** One Day, One New Knowledge  
**Tagline:** "A passion project for those who don't have a passion — at least not yet."

This website helps people learn, think, and discover new interests by presenting carefully researched ideas from nine different disciplines:

- Neuroscience
- Psychology
- Math
- Physics
- Geography
- Economics
- Biology
- History
- Philosophy

## 📁 Project Structure

```
one day, one new knowledge/
├── index.html                    # Home page
├── categories.html               # Browse by discipline
├── daily-idea.html              # Today's featured idea
├── archive.html                 # All ideas searchable & filterable
├── about.html                   # Project information
├── donate.html                  # Support the project
├── idea-1.html to idea-10.html  # Individual idea pages
├── category-*.html              # Discipline pages
├── css/
│   └── style.css               # Complete modern design system
├── js/
│   ├── data.js                 # Ideas and categories database
│   └── script.js               # Functionality & interactions
└── README.md                   # This file
```

## 🎨 Design System

### Color Palette
- **Primary Accent:** Dark Blue (`#1f3a70`)
- **Secondary Accent:** Forest Green (`#2d5016`)
- **Light Background:** Off-white (`#fafaf8`)
- **Text:** Dark gray/black with good contrast

### Typography
- Modern sans-serif (system fonts): -apple-system, BlinkMacSystemFont, Segoe UI, Roboto
- Clear hierarchy with semantic heading sizes
- Excellent readability with generous line-height

### Key Features
- ✨ Clean, minimal aesthetic with lots of white space
- 📱 Fully responsive design (desktop, tablet, mobile)
- ♿ Semantic HTML for accessibility
- 🎯 Smooth interactions and transitions
- 💬 Comment system with localStorage for persistence

## 📄 Pages & Navigation

### Main Navigation (visible on all pages)
- Home
- Categories
- Daily Idea
- Archive
- About
- Donate

### Page Descriptions

#### Home (`index.html`)
- Hero section with tagline
- Call-to-action button to today's idea
- 9-category grid for easy exploration
- Recent ideas preview

#### Categories (`categories.html`)
- Grid of all 9 disciplines
- Each discipline has icon and description
- Links to dedicated category pages

#### Daily Idea (`daily-idea.html`)
- Uses JavaScript to show today's featured idea
- Dynamically loads idea content
- Comment section for community engagement

#### Archive (`archive.html`)
- Grid of all 10 ideas
- Filter buttons by discipline
- Quick preview cards with read links

#### Discipline Pages (`category-*.html`)
- Focused view of ideas in one discipline
- Featured ideas section
- All ideas in category grid

#### Idea Pages (`idea-*.html`)
- Complete idea content including:
  - Key concepts (bullet points)
  - Advanced vocabulary (5 words with definitions)
  - Big question for reflection
  - Discussion & comments section
  - Navigation to previous/next ideas

#### About (`about.html`)
- Project mission and philosophy
- Explanation of approach
- Why the project exists

#### Donate (`donate.html`)
- Support message
- Call-to-action button (placeholder)
- Alternative ways to support

## 🔧 Technical Details

### JavaScript Features
- **Dynamic Content Loading:** Ideas load from `data.js`
- **Comment System:** Uses browser's localStorage to persist user comments
- **Filter Functionality:** Archive page allows filtering by category
- **Smooth Navigation:** Highlight current page in navigation
- **Responsive Design:** Mobile-first approach with media queries

### Data Structure (`js/data.js`)
Each idea contains:
```javascript
{
  id: 1,
  title: "Why do we dream?",
  category: "neuroscience",
  preview: "Short preview text",
  intro: "Longer introduction",
  keyConcepts: ["Concept 1", "Concept 2", ...],
  vocabulary: [{word: "", definition: ""}, ...],
  bigQuestion: "Reflective question",
  questionsToExplore: ["Question 1", ...]
}
```

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- JavaScript ES6 compatible

## 🚀 How to Use

### Opening the Website
1. Open `index.html` in your web browser
2. Or serve using any local server (e.g., `python -m http.server`)

### Exploring Ideas
1. From Home, click "Explore Today's Idea" for the daily featured idea
2. Or click any category card to view ideas by discipline
3. Use Archive to see all ideas and filter by category
4. Click "Read" on any idea card to open the full idea page

### Engaging with Ideas
1. Read key concepts and vocabulary
2. Reflect on the big question
3. Share thoughts in the comments section
4. Comments are automatically saved to your browser

### Sharing & Supporting
1. Share the website with friends
2. Engage in comments to build community
3. Visit the About page to understand the project
4. Support the project on the Donate page

## 📚 Content Database

The website includes 10 curated ideas across 9 disciplines:

1. **Why do we dream?** (Neuroscience)
2. **The Placebo Effect** (Psychology)
3. **The Golden Ratio in Nature** (Math)
4. **Quantum Entanglement** (Physics)
5. **The Story of Pangaea** (Geography)
6. **Behavioral Economics and Irrationality** (Economics)
7. **CRISPR and Gene Editing** (Biology)
8. **The Library of Alexandria** (History)
9. **Kant's Categorical Imperative** (Philosophy)
10. **The Power of Microbiomes** (Biology)

## ✨ Features

- **Responsive Design:** Works perfectly on all screen sizes
- **Modern Aesthetics:** Clean, minimal design with academic feel
- **Accessible Navigation:** Clear menu structure with breadcrumbs
- **Comment System:** Community engagement through localStorage
- **Filter/Search:** Find ideas by discipline
- **Smooth Interactions:** Hover effects and transitions
- **Daily Feature:** Automatically rotates today's idea
- **Interconnected Pages:** Multiple paths to discover content

## 🎓 Educational Approach

Each idea includes:
- Clear, accessible explanations
- Key concepts distilled to essentials
- Advanced vocabulary to expand knowledge
- Thought-provoking questions
- Community discussion space

## 📝 Customization

### Adding New Ideas
1. Add to the `ideas` array in `js/data.js`
2. Create new `idea-*.html` page
3. Update category pages to include new idea
4. Archive automatically includes new ideas

### Modifying Styling
- Edit `style.css` to adjust colors, spacing, typography
- CSS variables at the top make it easy to change the design system
- Responsive breakpoints at the bottom handle different screen sizes

### Updating Categories
- Modify the `categories` array in `js/data.js`
- Create corresponding `category-*.html` pages
- Update home page category grid

## 🌐 Hosting

This is a static website—no backend required. Can be hosted on:
- GitHub Pages
- Netlify
- Vercel
- Any static file hosting service

## 📄 License

This is a personal educational project. Feel free to fork and adapt for your own learning purposes.

## 🙏 Credits

A passion project dedicated to curiosity, learning, and the joy of discovering new ideas every day.

---

**Visit the website:** Open `index.html` in your browser to start exploring!
