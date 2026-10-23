/* ==========================================================================
   SITE CONFIG  -  THE ONLY FILE YOU NEED TO EDIT FOR CLIENT DETAILS
   --------------------------------------------------------------------------
   Everything below is PLACEHOLDER content. Replace it with the client's real
   information (see the "Required from Client" items in the requirement doc).
   Image files live in /assets/images - replace a file and keep its name, or
   change the path here / in the HTML.
   ========================================================================== */
window.SITE = {

  /* ---------- 1. BUSINESS INFORMATION ---------- */
  business: {
    name: 'The Olive Table',                       // Catering business name
    descriptor: 'Catering Services',               // small line under the logo name
    tagline: 'Fresh Food, Served With Care', // main tagline (home hero headline)
    heroEyebrow: 'Premium catering services',
    script: 'Good Food Creates Great Moments',     // handwritten accent line
    intro: 'From daily meals to large bulk orders, we prepare fresh, hygienic and flavourful food for every kind of catering need.',
    owner: 'Aarav Kulkarni',                       // Owner's name
    ownerRole: 'Founder & Head Chef',
    established: 2012,                             // Year of establishment (years of experience is calculated)
    logo: 'assets/images/logo.svg',                // Business logo (PNG / SVG)
    areasServed: ['Nashik', 'Pune', 'Mumbai', 'Shirdi', 'Surrounding Areas']   // Cities / areas served
  },

  /* ---------- 2. CONTACT DETAILS ---------- */
  contact: {
    phone: '+91 88305 32500',            // shown on the site
    phoneRaw: '+918830532500',           // used for the Call Now button (no spaces)
    whatsapp: '918830532500',            // WhatsApp number: country code + number, digits only. ALL enquiries go here.
    email: 'hello@theolivetable.example',
    address: 'Shop No. 12, Sunrise Plaza, College Road, Nashik, Maharashtra 422005',
    mapQuery: 'Nashik, Maharashtra',     // text used by the embedded Google Map (use the full address once known)
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Nashik%2C+Maharashtra', // "Open in Google Maps" link
    hours: [                             // Business working hours
      { day: 'Monday – Saturday', time: '9:00 AM – 8:00 PM' },
      { day: 'Sunday', time: '10:00 AM – 5:00 PM' }
    ],
    bookingNote: 'Please book at least 7 days in advance for large orders.'
  },

  /* ---------- 3. SOCIAL MEDIA (remove a line to hide it) ---------- */
  social: [
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/' },
    { name: 'Facebook',  icon: 'facebook',  url: 'https://www.facebook.com/' },
    { name: 'YouTube',   icon: 'youtube',   url: 'https://www.youtube.com/' }
  ],

  /* ---------- 4. WHATSAPP MESSAGE ---------- */
  whatsappMessages: {
    general: 'Hello! I would like to know more about your catering services.',   // floating / "WhatsApp Us" buttons
    enquiryTitle: 'New Catering Enquiry'                                          // heading of the form message
  },

  /* ---------- 5. HOME PAGE ---------- */
  home: {
    welcomeTitle: 'Welcome to',
    welcomeText: 'We believe good food brings people together. Our catering services are built around fresh ingredients, honest flavours, neat presentation and dependable, on-time delivery for orders of every size.',
    badge: ['Fresh', 'Seasonal', 'Local'],
    highlights: [
      { icon: 'leaf',    title: 'Premium Ingredients', text: 'Fresh, carefully sourced produce.' },
      { icon: 'chef',    title: 'Expert Chefs',        text: 'Skilled, experienced kitchen team.' },
      { icon: 'clock',   title: 'On-Time Service',     text: 'Punctual set-up and service.' }
    ],
    // Home stats strip (placeholder numbers - replace or delete the array to hide)
    stats: [
      { value: 500, suffix: '+', label: 'Orders Served' },
      { value: 50000, suffix: '+', label: 'Plates Served' },
      { value: 'YEARS', suffix: '+', label: 'Years of Experience' },
      { value: 5, suffix: '', label: 'Cities Served' }
    ],
    showcaseTitle: 'A Taste of Our Kitchen',
    showcaseText: 'A few favourites from our kitchen.'
  },

  /* ---------- 6. ABOUT PAGE ---------- */
  about: {
    heading: 'More Than Just Food',
    subheading: 'It’s a Feeling',
    story: [
      'The Olive Table was born from a simple belief — that great food has the power to bring people together. What began as a small family kitchen has grown into a trusted catering name for bulk meals, buffets and office lunches.',
      'With years of experience in the catering industry, we specialise in fresh, hygienic and generously portioned food — from a small family meal order to a large buffet for hundreds.'
    ],
    features: [
      { icon: 'leaf',    title: 'Fresh & Premium Ingredients', text: 'Only the best for your table.' },
      { icon: 'utensils',title: 'Creative Menus',              text: 'Tailored to your taste and preferences.' },
      { icon: 'users',   title: 'Experienced Team',            text: 'Skilled chefs, professional staff, seamless service.' }
    ],
    journeyTitle: 'Our Journey',
    journey: [
      { year: '2012', title: 'The First Kitchen', text: 'Started catering small family functions from a home kitchen.' },
      { year: '2016', title: 'Growing Together',  text: 'Expanded to buffet and bulk-quantity catering with a dedicated team.' },
      { year: '2020', title: 'Office Catering',   text: 'Began serving daily and weekly lunches to offices and companies.' },
      { year: 'Today', title: 'A Trusted Name',   text: 'Hundreds of orders served across multiple cities.' }
    ],
    mission: 'To serve delicious, hygienic and beautifully presented food that makes every meal feel special — on time, every time.',
    vision: 'To be the most loved catering partner in the region, known for honest flavours, warm hospitality and flawless service.',
    whyTitle: 'Why Choose Us',
    why: [
      { icon: 'leaf',   title: 'Fresh Ingredients',     text: 'Daily-sourced produce and quality ingredients in every dish.' },
      { icon: 'chef',   title: 'Experienced Chefs',     text: 'A skilled kitchen team trained in regional and continental cuisines.' },
      { icon: 'sparkle',title: 'Customised Menus',      text: 'Menus designed around your people, budget and taste.' },
      { icon: 'shield', title: 'Hygiene First',         text: 'Clean kitchens, trained staff and food-safe handling.' },
      { icon: 'clock',  title: 'Punctual Service',      text: 'On-time delivery, setup and service at your venue.' },
      { icon: 'heart',  title: 'Personal Attention',    text: 'We treat every order as if it were for our own family.' }
    ],
    // Team / owner photos are OPTIONAL. Delete the whole array (team: []) to hide the section.
    teamTitle: 'Meet the People Behind the Food',
    team: [
      { name: 'Aarav Kulkarni', role: 'Founder & Head Chef', photo: 'assets/images/about-owner.jpg' },
      { name: 'Team Member Name', role: 'Operations Manager',      photo: 'assets/images/team-1.jpg' },
      { name: 'Team Member Name', role: 'Executive Chef',     photo: 'assets/images/team-2.jpg' },
      { name: 'Team Member Name', role: 'Service Head',       photo: 'assets/images/team-3.jpg' }
    ]
  },

  /* ---------- 7. SERVICES ---------- */
  services: [
    {
      id: 'buffet', icon: 'utensils', title: 'Buffet Catering', image: 'assets/images/service-wedding.jpg',
      short: 'Elegant multi-cuisine buffets with chafing-dish setup and uniformed service staff.',
      text: 'Freshly cooked starters, mains, breads and desserts served hot in a neat buffet setup — designed for large gatherings of any size, with a team that keeps the counters full and service smooth.',
      points: ['Veg, non-veg and Jain options', 'Chafing-dish buffet setup', 'Uniformed service staff', 'Menu tasting before booking']
    },
    {
      id: 'thali', icon: 'leaf', title: 'Thali & Meal Boxes', image: 'assets/images/service-party.jpg',
      short: 'Wholesome regional thalis and neatly packed meal boxes, delivered on time.',
      text: 'Maharashtrian, Gujarati, Punjabi and South Indian thalis prepared fresh every day — served on plates or packed in hygienic meal boxes for homes, shops and sites.',
      points: ['Regional thali menus', 'Hygienic sealed meal boxes', 'Bulk order discounts', 'Home and site delivery']
    },
    {
      id: 'corporate', icon: 'briefcase', title: 'Corporate & Office Lunch', image: 'assets/images/service-corporate.jpg',
      short: 'Reliable, hygienic daily and weekly lunch plans for offices and teams.',
      text: 'We serve working lunches, snack boxes and tea-time catering with punctual delivery, neat packaging and flexible menus for teams of any size.',
      points: ['Daily and weekly lunch plans', 'Snack and sandwich boxes', 'Tea / coffee and snack services', 'GST invoices on request']
    },
    {
      id: 'counters', icon: 'chef', title: 'Live Counters & Desserts', image: 'assets/images/service-engagement.jpg',
      short: 'Live dosa, chaat and pasta counters, plus sweet and dessert stations.',
      text: 'Add freshly made live counters and dessert stations to any catering order — prepared in front of your guests by our experienced chefs.',
      points: ['Chaat, dosa and pasta counters', 'Tandoor grill station', 'Traditional sweets and desserts', 'Beverage and mocktail bar']
    }
  ],

  /* ---------- 8. MENU DETAILS (Veg / Non-Veg / Special) ---------- */
  menuTitle: 'Menu Options',
  menuIntro: 'A sample of what we serve. Every menu can be customised to your guests and budget.',
  menu: [
    {
      id: 'veg', label: 'Veg', dot: 'bg-green-600',
      sections: [
        { name: 'Starters',    items: ['Paneer Tikka', 'Hara Bhara Kebab', 'Crispy Corn', 'Veg Spring Rolls'] },
        { name: 'Main Course', items: ['Dal Makhani', 'Paneer Butter Masala', 'Veg Biryani', 'Mix Veg Kolhapuri'] },
        { name: 'Breads & Rice', items: ['Butter Naan', 'Tandoori Roti', 'Jeera Rice', 'Masala Papad'] },
        { name: 'Desserts',    items: ['Gulab Jamun', 'Rasmalai', 'Chocolate Mousse', 'Fresh Fruit Platter'] }
      ]
    },
    {
      id: 'nonveg', label: 'Non-Veg', dot: 'bg-red-700',
      sections: [
        { name: 'Starters',    items: ['Chicken Tikka', 'Fish Amritsari', 'Tandoori Chicken', 'Chicken 65'] },
        { name: 'Main Course', items: ['Butter Chicken', 'Mutton Rogan Josh', 'Chicken Biryani', 'Goan Fish Curry'] },
        { name: 'Breads & Rice', items: ['Garlic Naan', 'Lachha Paratha', 'Steamed Rice', 'Egg Fried Rice'] },
        { name: 'Desserts',    items: ['Shahi Tukda', 'Gajar Halwa', 'Ice-Cream Station', 'Brownie with Sauce'] }
      ]
    },
    {
      id: 'special', label: 'Special Menus', dot: 'bg-gold',
      sections: [
        { name: 'Jain & Satvik',  items: ['No onion / garlic menus', 'Pooja & fasting thali', 'Sabudana specialities'] },
        { name: 'Live Counters',  items: ['Chaat Counter', 'Pasta Station', 'Dosa & Uttapam Counter', 'Tandoor Grill'] },
        { name: 'Regional Thali', items: ['Maharashtrian Thali', 'Gujarati Thali', 'South Indian Meals', 'Punjabi Thali'] },
        { name: 'Beverages',      items: ['Fresh Lime Soda', 'Masala Chaas', 'Mocktail Bar', 'Tea & Coffee Station'] }
      ]
    }
  ],

  /* ---------- 9. PACKAGES & PRICING ----------
     Set showPrices:false to hide prices and show "Request a quote" instead. */
  showPrices: true,
  pricingNote: 'Sample pricing shown for layout only — final rates depend on menu, quantity and delivery location.',
  packages: [
    {
      name: 'Classic', price: '₹450', unit: 'per plate', featured: false,
      desc: 'Wholesome everyday menus for small and regular orders.',
      features: ['2 starters', '3 main-course dishes', 'Rice / bread selection', '1 dessert', 'Minimum 50 people']
    },
    {
      name: 'Signature', price: '₹750', unit: 'per plate', featured: true,
      desc: 'Our most popular choice for large buffets and office orders.',
      features: ['4 starters', '5 main-course dishes', '1 live counter', '2 desserts', 'Uniformed service staff', 'Minimum 100 people']
    },
    {
      name: 'Royal', price: '₹1,200', unit: 'per plate', featured: false,
      desc: 'A grand multi-cuisine spread for premium catering orders.',
      features: ['6 starters', '7 main-course dishes', '3 live counters', 'Dessert & beverage bar', 'Premium serving setup', 'Minimum 150 people']
    }
  ],
  customPackage: {
    title: 'Need Something Different?',
    text: 'Every order is unique. Tell us your quantity, preferences and budget and we will design a customised menu and package just for you.'
  },
  extras: ['Live Counters', 'Chafing-Dish Setup', 'Crockery & Cutlery', 'Service Staff', 'Disposable Plates & Cups', 'Beverage Bar', 'Home Delivery', 'Menu Tasting'],

  /* ---------- 10. TESTIMONIALS ----------
     SAMPLE TEXT ONLY. Replace with real customer reviews, then set sample:false
     on each one (or delete the list to hide the section). */
  testimonialsTitle: 'What Our Clients Say',
  testimonials: [
    { name: 'Sample Client One',   role: 'Bulk Order Client',   rating: 5, sample: true,
      text: 'Sample review text: the food was wonderful and the team was professional from start to finish.' },
    { name: 'Sample Client Two',   role: 'Corporate Client', rating: 5, sample: true,
      text: 'Sample review text: punctual delivery, great flavours and excellent presentation for our office lunch.' },
    { name: 'Sample Client Three', role: 'Family Order Client', rating: 5, sample: true,
      text: 'Sample review text: everyone loved the menu and the live counters. Everything was well organised.' }
  ],
  sampleNotice: 'Sample reviews shown for layout preview only.',   // shown while any testimonial has sample:true

  /* ---------- 11. GALLERY ----------
     category must match one of the names in galleryCategories.
     Add / remove items freely. `ratio` controls the tile shape. */
  galleryCategories: ['Food', 'Buffets', 'Live Counters', 'Thali & Meals', 'Desserts', 'Corporate'],
  gallery: [
    { src: 'assets/images/gallery-01.jpg', cat: 'Food',          alt: 'Mini sandwich platter' },
    { src: 'assets/images/gallery-02.jpg', cat: 'Food',          alt: 'Crispy golden samosas' },
    { src: 'assets/images/gallery-03.jpg', cat: 'Food',          alt: 'Indian curry bowls' },
    { src: 'assets/images/gallery-04.jpg', cat: 'Buffets',       alt: 'Grand buffet arrangement' },
    { src: 'assets/images/gallery-05.jpg', cat: 'Buffets',       alt: 'Fresh salad & fruit buffet' },
    { src: 'assets/images/gallery-06.jpg', cat: 'Live Counters', alt: 'Live dosa counter' },
    { src: 'assets/images/gallery-07.jpg', cat: 'Live Counters', alt: 'Self-service buffet counter' },
    { src: 'assets/images/gallery-08.jpg', cat: 'Thali & Meals', alt: 'South Indian banana-leaf meal' },
    { src: 'assets/images/gallery-09.jpg', cat: 'Thali & Meals', alt: 'Traditional regional meal' },
    { src: 'assets/images/gallery-10.jpg', cat: 'Desserts',      alt: 'Dessert display' },
    { src: 'assets/images/gallery-11.jpg', cat: 'Desserts',      alt: 'Assorted pastries' },
    { src: 'assets/images/gallery-12.jpg', cat: 'Corporate',     alt: 'Office lunch boxes' }
  ],

  /* ---------- 14. REAL PHOTOS ----------
     Real photographs (loaded from Unsplash) replace the placeholder files below.
     If a photo cannot load, the local placeholder in /assets/images is used.
     To use the client's own photos: put the file in /assets/images and delete its line here. */
  imageMap: {
    'assets/images/hero.jpg': 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=75&w=1400',
    'assets/images/hero-about.jpg': 'https://images.unsplash.com/photo-1728910156510-77488f19b152?auto=format&fit=crop&q=75&w=1400',
    'assets/images/hero-services.jpg': 'https://images.unsplash.com/photo-1672698977671-9eb551549dcb?auto=format&fit=crop&q=75&w=1400',
    'assets/images/hero-gallery.jpg': 'https://images.unsplash.com/photo-1740047602722-b4993b79e4b7?auto=format&fit=crop&q=75&w=1400',
    'assets/images/hero-contact.jpg': 'https://images.unsplash.com/photo-1636906227201-f3ec32645129?auto=format&fit=crop&q=75&w=1400',
    'assets/images/cta-bg.jpg': 'https://images.unsplash.com/photo-1576842546422-60562b9242ae?auto=format&fit=crop&q=75&w=1400',
    'assets/images/intro-1.jpg': 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=75&w=1400',
    'assets/images/intro-2.jpg': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=75&w=1400',
    'assets/images/about-owner.jpg': 'https://images.unsplash.com/photo-1763376360111-3597e5877517?auto=format&fit=crop&q=75&w=1400',
    'assets/images/team-1.jpg': 'https://images.unsplash.com/photo-1776142519748-2b897acaecd7?auto=format&fit=crop&q=75&w=1400',
    'assets/images/team-2.jpg': 'https://images.unsplash.com/photo-1592868859049-dfdcd6c07c29?auto=format&fit=crop&q=75&w=1400',
    'assets/images/team-3.jpg': 'https://images.unsplash.com/photo-1666951833461-71fc128b6810?auto=format&fit=crop&q=75&w=1400',
    'assets/images/about-journey.jpg': 'https://images.unsplash.com/photo-1660120447916-123439b05c40?auto=format&fit=crop&q=75&w=1400',
    'assets/images/service-wedding.jpg': 'https://images.unsplash.com/photo-1769638913559-c8c6984428fe?auto=format&fit=crop&q=75&w=1400',
    'assets/images/service-party.jpg': 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&q=75&w=1400',
    'assets/images/service-corporate.jpg': 'https://images.unsplash.com/photo-1672826979217-7156a305acf5?auto=format&fit=crop&q=75&w=1400',
    'assets/images/service-engagement.jpg': 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=75&w=1400',
    'assets/images/gallery-01.jpg': 'https://images.unsplash.com/photo-1633424411431-5eb8d0e96488?auto=format&fit=crop&q=75&w=1400',
    'assets/images/gallery-02.jpg': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=75&w=1400',
    'assets/images/gallery-03.jpg': 'https://images.unsplash.com/photo-1767114915989-c6ab3c8fc42e?auto=format&fit=crop&q=75&w=1400',
    'assets/images/gallery-04.jpg': 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=75&w=1400',
    'assets/images/gallery-05.jpg': 'https://images.unsplash.com/photo-1783949397986-87d4fbf2fbea?auto=format&fit=crop&q=75&w=1400',
    'assets/images/gallery-06.jpg': 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=75&w=1400',
    'assets/images/gallery-07.jpg': 'https://images.unsplash.com/photo-1773409414133-9c5d141cb4c5?auto=format&fit=crop&q=75&w=1400',
    'assets/images/gallery-08.jpg': 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&q=75&w=1400',
    'assets/images/gallery-09.jpg': 'https://images.unsplash.com/photo-1786227905994-235e1799292e?auto=format&fit=crop&q=75&w=1400',
    'assets/images/gallery-10.jpg': 'https://images.unsplash.com/photo-1675949873154-7496809f1c9b?auto=format&fit=crop&q=75&w=1400',
    'assets/images/gallery-11.jpg': 'https://images.unsplash.com/photo-1701086490750-c032a7fa65aa?auto=format&fit=crop&q=75&w=1400',
    'assets/images/gallery-12.jpg': 'https://images.unsplash.com/photo-1672826979217-7156a305acf5?auto=format&fit=crop&q=75&w=1400'
  },

  /* ---------- 15. HOME HERO CARDS (glass carousel on the right) ---------- */
  heroCards: [
    { title: 'Buffet Catering',    sub: 'Multi-cuisine spreads',   image: 'assets/images/service-wedding.jpg',    href: 'services.html#buffet' },
    { title: 'Thali & Meal Boxes', sub: 'Fresh regional meals',    image: 'assets/images/service-party.jpg',      href: 'services.html#thali' },
    { title: 'Office Lunch',       sub: 'Punctual & hygienic',     image: 'assets/images/service-corporate.jpg',  href: 'services.html#corporate' },
    { title: 'Live Counters',      sub: 'Cooked fresh on site',    image: 'assets/images/service-engagement.jpg', href: 'services.html#counters' },
    { title: 'Desserts & Sweets',  sub: 'Sweet endings',           image: 'assets/images/gallery-10.jpg',         href: 'gallery.html' }
  ],

  /* ---------- 12. NAVIGATION (do not rename files unless you update this) ---------- */
  nav: [
    { label: 'Home',     href: 'index.html',    page: 'home' },
    { label: 'About',    href: 'about.html',    page: 'about' },
    { label: 'Services', href: 'services.html', page: 'services' },
    { label: 'Gallery',  href: 'gallery.html',  page: 'gallery' },
    { label: 'Contact',  href: 'contact.html',  page: 'contact' }
  ],

  /* ---------- 13. FORM OPTIONS ---------- */
  eventTypes: ['Buffet Catering', 'Thali / Meal Boxes', 'Corporate / Office Lunch', 'Live Counters', 'Desserts & Sweets', 'Other'],
  foodPreferences: ['Veg', 'Non-Veg', 'Both', 'Special / Jain']
};
