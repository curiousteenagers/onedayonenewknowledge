// Data structure for One Day, One New Knowledge

const categories = [
  { id: 'neuroscience', name: 'Neuroscience', image: 'neurociencia.png' },
  { id: 'psychology', name: 'Psychology', image: 'psicologia.png' },
  { id: 'math', name: 'Math', image: 'images/math.png' },
  { id: 'physics', name: 'Physics', image: 'images/physics.png' },
  { id: 'geography', name: 'Geography', image: 'images/geography.png' },
  { id: 'economics', name: 'Economics', image: 'images/economics.png' },
  { id: 'biology', name: 'Biology', image: 'images/biology.png' },
  { id: 'history', name: 'History', image: 'images/history.png' },
  { id: 'philosophy', name: 'Philosophy', image: 'images/philosophy.png' }
];

const ideas = [
  {
    id: 1,
    title: 'Why do we dream?',
    category: 'neuroscience',
    preview: 'Exploring the mysterious purpose of dreams and what they reveal about our brains.',
    intro: 'Dreams have fascinated humanity for centuries. Science now shows they play crucial roles in memory consolidation, emotional processing, and creative problem-solving.',
    keyConcepts: [
      'REM sleep is when most vivid dreams occur',
      'Dreams help consolidate memories from the day',
      'The brain processes emotions during dreams',
      'Dreams may enhance creative thinking and problem-solving'
    ],
    vocabulary: [
      { word: 'REM Sleep', definition: 'Rapid Eye Movement sleep stage where dreams are most vivid and the eyes move rapidly beneath closed eyelids.' },
      { word: 'Consolidation', definition: 'The process of stabilizing memories and integrating new information into existing knowledge networks.' },
      { word: 'Neurotransmitter', definition: 'Chemical messenger molecules that transmit signals between neurons in the brain.' },
      { word: 'Hippocampus', definition: 'A brain region crucial for memory formation and spatial navigation.' },
      { word: 'Circadian Rhythm', definition: 'The natural 24-hour cycle that regulates sleep-wake patterns and other biological processes.' }
    ],
    bigQuestion: 'If dreams help us process emotions and consolidate memories, what might we be losing when we don\'t get enough sleep?',
    questionsToExplore: [
      'Why do some people remember their dreams while others don\'t?',
      'Can lucid dreaming be trained?',
      'Do all mammals dream?'
    ]
  },
  {
    id: 2,
    title: 'The Placebo Effect',
    category: 'psychology',
    preview: 'How our beliefs can physically change our bodies and why the mind-body connection is so powerful.',
    intro: 'The placebo effect is a genuine biological phenomenon where inactive treatments produce real therapeutic effects. It reveals the extraordinary power of expectation and belief.',
    keyConcepts: [
      'Placebos activate real neurological pathways',
      'Expectation can trigger dopamine release',
      'The effect works even when people know it\'s a placebo',
      'Placebo affects pain, anxiety, and some physical symptoms'
    ],
    vocabulary: [
      { word: 'Placebo', definition: 'An inert substance or treatment that appears identical to real medication but contains no active therapeutic agent.' },
      { word: 'Nocebo', definition: 'The opposite of placebo; negative expectations that can worsen symptoms or produce adverse effects.' },
      { word: 'Neuroplasticity', definition: 'The brain\'s ability to form new neural connections and reorganize itself throughout life.' },
      { word: 'Dopamine', definition: 'A neurotransmitter involved in motivation, reward, and pleasure sensations.' },
      { word: 'Psychosomatic', definition: 'Relating to physical symptoms triggered or influenced by psychological factors like stress or belief.' }
    ],
    bigQuestion: 'If the placebo effect is real, where is the line between the power of belief and actual medical treatment?',
    questionsToExplore: [
      'How much of medicine\'s effectiveness is due to placebo effects?',
      'Can we harness the placebo effect more ethically in treatments?',
      'Why do some people respond to placebos better than others?'
    ]
  },
  {
    id: 3,
    title: 'The Golden Ratio in Nature',
    category: 'math',
    preview: 'Discovering the mysterious mathematical pattern that appears throughout the universe.',
    intro: 'The golden ratio (φ ≈ 1.618) appears repeatedly in nature, art, and architecture. This mathematical constant seems to be nature\'s favorite proportion.',
    keyConcepts: [
      'Golden ratio is approximately 1.618',
      'Appears in spirals, flowers, and shells',
      'Related to the Fibonacci sequence',
      'Found in human facial proportions and body measurements'
    ],
    vocabulary: [
      { word: 'Golden Ratio', definition: 'An irrational mathematical constant (≈1.618) found in proportions throughout nature and art.' },
      { word: 'Fibonacci Sequence', definition: 'A series of numbers where each number is the sum of the two preceding ones (1, 1, 2, 3, 5, 8, 13...).' },
      { word: 'Phi (φ)', definition: 'The mathematical symbol representing the golden ratio.' },
      { word: 'Proportion', definition: 'The relationship between the relative sizes of different parts.' },
      { word: 'Symmetry', definition: 'Exact correspondence in size and shape of parts on opposite sides of a line or plane.' }
    ],
    bigQuestion: 'Is the golden ratio a fundamental principle of nature, or do we simply recognize and remember patterns because of our cognitive biases?',
    questionsToExplore: [
      'Why does evolution favor the golden ratio?',
      'Does using the golden ratio in design actually make things more beautiful?',
      'Can we find the golden ratio in other dimensions or universes?'
    ]
  },
  {
    id: 4,
    title: 'Quantum Entanglement',
    category: 'physics',
    preview: 'Understanding the spooky phenomenon where particles remain mysteriously connected across any distance.',
    intro: 'Quantum entanglement is one of the most fascinating and counterintuitive phenomena in physics. Two entangled particles can instantaneously influence each other, regardless of distance.',
    keyConcepts: [
      'Entangled particles are mysteriously correlated',
      'Changes to one instantly affect the other',
      'Einstein called this "spooky action at a distance"',
      'Forms the basis for quantum computing and cryptography'
    ],
    vocabulary: [
      { word: 'Quantum Entanglement', definition: 'A quantum phenomenon where two or more particles become correlated so that the state of one instantaneously influences the other.' },
      { word: 'Superposition', definition: 'The quantum principle that a particle can exist in multiple states simultaneously until measured.' },
      { word: 'Wave Function', definition: 'A mathematical description of the state of a quantum particle.' },
      { word: 'Photon', definition: 'The elementary particle of light and electromagnetic radiation.' },
      { word: 'Quantum Decoherence', definition: 'The loss of quantum properties when a quantum system interacts with its environment.' }
    ],
    bigQuestion: 'Does quantum entanglement violate our understanding of causality, or is information transfer impossible even though correlation exists?',
    questionsToExplore: [
      'Could quantum entanglement be used for faster-than-light communication?',
      'How does consciousness relate to quantum measurement?',
      'What would a quantum internet look like?'
    ]
  },
  {
    id: 5,
    title: 'The Story of Pangaea',
    category: 'geography',
    preview: 'Exploring the ancient supercontinent that unified all landmass 300 million years ago.',
    intro: 'Pangaea was an enormous supercontinent that existed roughly 300 million years ago, bringing together all of Earth\'s continents. Its breakup shaped the world we know today.',
    keyConcepts: [
      'Pangaea formed around 300 million years ago',
      'It began breaking apart 200 million years ago',
      'Continental drift continues to reshape Earth today',
      'The theory changed our understanding of geology'
    ],
    vocabulary: [
      { word: 'Pangaea', definition: 'A supercontinent that existed approximately 300 million years ago, containing nearly all of Earth\'s land.' },
      { word: 'Continental Drift', definition: 'The slow movement of continents across the Earth\'s surface over millions of years.' },
      { word: 'Plate Tectonics', definition: 'The scientific theory describing the structure of Earth\'s lithosphere and its dynamic movement.' },
      { word: 'Gondwana', definition: 'A large supercontinent that was part of Pangaea, located in the Southern Hemisphere.' },
      { word: 'Laurasia', definition: 'A northern supercontinent that was part of Pangaea, containing North America and Eurasia.' }
    ],
    bigQuestion: 'If continents are constantly moving, how should this change the way we think about national borders and human geography?',
    questionsToExplore: [
      'What caused Pangaea to break apart?',
      'Will the continents ever reunite into a new supercontinent?',
      'How did life adapt when Pangaea existed?'
    ]
  },
  {
    id: 6,
    title: 'Behavioral Economics and Irrationality',
    category: 'economics',
    preview: 'Discovering why humans make seemingly illogical financial decisions.',
    intro: 'Traditional economics assumes humans are rational actors. Behavioral economics reveals we\'re driven by cognitive biases, emotions, and heuristics that lead to predictably irrational choices.',
    keyConcepts: [
      'Loss aversion: we fear losses more than gaining equivalents',
      'Anchoring: we rely too heavily on first information given',
      'Confirmation bias: we seek information confirming existing beliefs',
      'Mental accounting: we compartmentalize finances illogically'
    ],
    vocabulary: [
      { word: 'Behavioral Economics', definition: 'A field studying how psychological factors influence economic decision-making.' },
      { word: 'Heuristic', definition: 'A mental shortcut or rule of thumb used to make quick decisions with incomplete information.' },
      { word: 'Cognitive Bias', definition: 'Systematic patterns in how humans deviate from rational decision-making.' },
      { word: 'Utility', definition: 'The satisfaction or benefit derived from consuming a good or service.' },
      { word: 'Rational Choice Theory', definition: 'The traditional economic theory that individuals make decisions based on maximizing utility.' }
    ],
    bigQuestion: 'If our irrationality is predictable and systematic, can markets ever be truly efficient?',
    questionsToExplore: [
      'How can governments use behavioral economics to improve public policy?',
      'Can artificial intelligence make more rational financial decisions than humans?',
      'How does culture affect economic irrationality?'
    ]
  },
  {
    id: 7,
    title: 'CRISPR and Gene Editing',
    category: 'biology',
    preview: 'The revolutionary technology enabling us to edit DNA and potentially cure genetic diseases.',
    intro: 'CRISPR-Cas9 is a groundbreaking gene-editing tool that allows scientists to precisely alter DNA. It promises to revolutionize medicine but raises profound ethical questions.',
    keyConcepts: [
      'CRISPR acts like molecular scissors for DNA',
      'Can target and edit specific genetic sequences',
      'Much cheaper and more precise than previous methods',
      'Applications range from medicine to agriculture'
    ],
    vocabulary: [
      { word: 'CRISPR', definition: 'Clustered Regularly Interspaced Short Palindromic Repeats - a gene-editing technology derived from bacterial defense systems.' },
      { word: 'Cas9', definition: 'A protein that acts as molecular scissors to cut DNA at targeted locations.' },
      { word: 'Gene', definition: 'A segment of DNA that codes for a specific protein or trait.' },
      { word: 'Mutation', definition: 'A change or alteration in the DNA sequence of an organism.' },
      { word: 'Genome', definition: 'The complete set of genetic instructions in an organism.' }
    ],
    bigQuestion: 'As CRISPR technology advances, where should we draw the line between treating diseases and enhancing human traits?',
    questionsToExplore: [
      'Should we edit germline (heritable) genes?',
      'How do we ensure equitable access to gene editing?',
      'What are the long-term ecological impacts of CRISPR?'
    ]
  },
  {
    id: 8,
    title: 'The Library of Alexandria',
    category: 'history',
    preview: 'Uncovering the legendary center of knowledge that may have changed everything.',
    intro: 'The Library of Alexandria was the ancient world\'s greatest repository of knowledge. Its destruction represented an immeasurable loss of human intellectual heritage.',
    keyConcepts: [
      'Founded around 300 BCE in Alexandria, Egypt',
      'Contained hundreds of thousands of manuscripts',
      'Scholars traveled from across the known world',
      'Likely destroyed gradually through various events'
    ],
    vocabulary: [
      { word: 'Manuscript', definition: 'A handwritten document, especially a literary work.' },
      { word: 'Hellenistic', definition: 'Relating to the period of Greek civilization after Alexander the Great.' },
      { word: 'Scrolls', definition: 'Ancient documents rolled around a cylinder, the format of most texts before books.' },
      { word: 'Archivum', definition: 'An organized collection or repository of documents and records.' },
      { word: 'Scholarship', definition: 'Academic study and learning, especially at advanced levels.' }
    ],
    bigQuestion: 'How different might human civilization be if the Library of Alexandria had survived intact?',
    questionsToExplore: [
      'What knowledge was permanently lost with the library?',
      'How do we preserve knowledge today to prevent such losses?',
      'What other ancient libraries or knowledge centers existed?'
    ]
  },
  {
    id: 9,
    title: 'Kant\'s Categorical Imperative',
    category: 'philosophy',
    preview: 'Exploring the ethical framework asking: "What if everyone did what I\'m about to do?"',
    intro: 'Immanuel Kant\'s Categorical Imperative is a foundational principle in ethics. It proposes that moral actions are those we\'d will to become universal laws.',
    keyConcepts: [
      'Act only according to rules you\'d universalize',
      'Respect people as ends, not merely means',
      'Duty-based rather than consequence-based ethics',
      'Forms the foundation of deontological ethics'
    ],
    vocabulary: [
      { word: 'Categorical Imperative', definition: 'Kant\'s fundamental principle of morality: act only according to a maxim you\'d universalize.' },
      { word: 'Deontology', definition: 'Ethical theory based on duty and rules rather than consequences.' },
      { word: 'Maxim', definition: 'The principle or rule upon which a person acts.' },
      { word: 'Universalize', definition: 'To make applicable or acceptable as a general principle for everyone.' },
      { word: 'Autonomy', definition: 'The capacity and right of individuals to make their own choices and govern themselves.' }
    ],
    bigQuestion: 'Can a purely duty-based ethical system adequately handle situations where following the rules produces bad consequences?',
    questionsToExplore: [
      'Is the categorical imperative too rigid for real-world moral dilemmas?',
      'How does it compare to consequentialist ethics?',
      'Can artificial intelligence be programmed with a Kantian moral framework?'
    ]
  },
  {
    id: 10,
    title: 'The Power of Microbiomes',
    category: 'biology',
    preview: 'How trillions of microorganisms in our bodies shape our health and behavior.',
    intro: 'Your body hosts trillions of microorganisms that influence everything from digestion to mental health. The microbiome is an emerging frontier in understanding human biology.',
    keyConcepts: [
      'Microbiome contains trillions of bacteria, viruses, fungi',
      'Affects digestion, immunity, and mental health',
      'Gut-brain axis influences mood and cognition',
      'Diet significantly impacts microbiome diversity'
    ],
    vocabulary: [
      { word: 'Microbiome', definition: 'The complete set of microorganisms and their genetic material that inhabit the human body.' },
      { word: 'Dysbiosis', definition: 'An imbalance in the composition or function of the microbial community.' },
      { word: 'Probiotic', definition: 'Live beneficial microorganisms that support health when consumed or applied.' },
      { word: 'Prebiotic', definition: 'Indigestible food components that selectively stimulate the growth of beneficial microorganisms.' },
      { word: 'Commensal', definition: 'An organism that lives with another, benefiting without harming it.' }
    ],
    bigQuestion: 'To what extent are we individuals, and to what extent are we ecosystems of microorganisms?',
    questionsToExplore: [
      'Can modifying the microbiome treat mental health disorders?',
      'How do antibiotics permanently change our microbiomes?',
      'Should microbiome analysis personalize medical treatment?'
    ]
  }
];

// Function to get ideas by category
function getIdeasByCategory(categoryId) {
  return ideas.filter(idea => idea.category === categoryId);
}

// Function to get a specific idea
function getIdea(id) {
  return ideas.find(idea => idea.id === parseInt(id));
}

// Function to get category details
function getCategory(categoryId) {
  return categories.find(cat => cat.id === categoryId);
}

// Get today's idea (uses current date to ensure consistency)
function getTodayIdea() {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  return ideas[dayOfYear % ideas.length];
}

// Function to get next idea
function getNextIdea(currentId) {
  const currentIndex = ideas.findIndex(idea => idea.id === currentId);
  if (currentIndex === -1) return null;
  return ideas[(currentIndex + 1) % ideas.length];
}

// Function to get previous idea
function getPreviousIdea(currentId) {
  const currentIndex = ideas.findIndex(idea => idea.id === currentId);
  if (currentIndex === -1) return null;
  return ideas[(currentIndex - 1 + ideas.length) % ideas.length];
}
