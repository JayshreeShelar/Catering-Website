/* ==========================================================================
   SITE CONFIG  -  Samadhan Catering Service
   --------------------------------------------------------------------------
   All business details live here. Image files live in /assets/images.
   ========================================================================== */
window.SITE = {

  /* ---------- 1. BUSINESS INFORMATION ---------- */
  business: {
    name: 'Samadhan',                              // Short name shown in the header / logo
    fullName: 'Samadhan Catering Service',         // Full business name
    descriptor: 'Catering Service',                // small line under the logo name
    tagline: 'Serving Happiness Through Food',     // main tagline (home hero headline)
    heroEyebrow: 'Samadhan Catering Service',
    script: 'Every Celebration, A Memorable One',  // handwritten accent line
    intro: 'Delicious vegetarian and non-vegetarian dishes, traditional favourites and customised menus for weddings, family functions, corporate events and every special occasion.',
    logo: 'assets/images/logo.png',                // Business logo (PNG / SVG)
    areasServed: ['Airoli', 'Navi Mumbai']         // Location tags shown on the Contact page
  },

  /* ---------- 2. CONTACT DETAILS ---------- */
  contact: {
    phone: '+91 97697 96804',            // shown on the site
    phoneRaw: '+919769796804',           // used for the Call Now button (no spaces)
    whatsapp: '919769796804',            // WhatsApp number: country code + number, digits only. ALL enquiries go here.
    email: 'samadhancatering2015@gmail.com',
    address: 'Shop No. 6, Siddhesh Apartment, Sector 20-B, Airoli, Navi Mumbai',
    mapQuery: 'Shop No 6, Siddhesh Apartment, Sector 20-B, Airoli, Navi Mumbai',   // text used by the embedded Google Map
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Shop+No+6%2C+Siddhesh+Apartment%2C+Sector+20-B%2C+Airoli%2C+Navi+Mumbai', // "Open in Google Maps" link - replace with the exact Google Maps share link when available
    hours: [                             // Business working hours
      { day: 'Morning', time: '9:30 AM – 1:30 PM' },
      { day: 'Evening', time: '5:30 PM – 8:30 PM' }
    ],
    bookingNote: ''
  },

  /* ---------- 3. SOCIAL MEDIA (remove a line to hide it) ---------- */
  social: [],   // no social media accounts yet - add { name, icon, url } entries here when available

  /* ---------- 4. WHATSAPP MESSAGE ---------- */
  whatsappMessages: {
    general: 'Hello! I would like to know more about your catering services.',   // floating / "WhatsApp Us" buttons
    enquiryTitle: 'New Catering Enquiry'                                          // heading of the form message
  },

  /* ---------- 5. HOME PAGE ---------- */
  home: {
    welcomeTitle: 'Welcome to',
    welcomeText: 'Looking for a catering service that makes your special occasions even more memorable with delicious food and exceptional care? Samadhan Catering Service is here to make every celebration a delightful experience. We believe that good food brings people together and creates memories that last a lifetime.',
    badge: ['Taste', 'Quality', 'Authenticity'],
    highlights: [
      { icon: 'utensils', title: 'Veg & Non-Veg',       text: 'A variety of delicious dishes.' },
      { icon: 'sparkle',  title: 'Customised Menus',    text: 'Made to suit your taste.' },
      { icon: 'heart',    title: 'Customer Satisfaction', text: 'Our name is our promise.' }
    ],
    stats: [],
    showcaseTitle: 'A Taste of Our Kitchen',
    showcaseText: 'A few favourites from our kitchen.'
  },

  /* ---------- 6. ABOUT PAGE ---------- */
  about: {
    heading: 'More Than Just Food',
    subheading: 'It’s a Feeling',
    story: [
      'We believe that good food brings people together and creates memories that last a lifetime. Whether it’s a wedding, family gathering, birthday celebration, corporate event, or any special occasion, we offer a variety of delicious vegetarian and non-vegetarian dishes to suit your tastes and preferences.',
      'From traditional favourites to customised menus, we strive to bring the perfect blend of taste, quality, and authenticity to your table. Every occasion is special to us, and we put our heart into serving food that makes your guests feel welcome and satisfied.',
      'At Samadhan, our name reflects our promise — customer satisfaction through great food and dedicated service. With passion, care, and commitment in everything we do, we aim to make every gathering more joyful and every meal more memorable.'
    ],
    features: [
      { icon: 'utensils',title: 'Veg & Non-Veg Dishes',   text: 'A variety of delicious dishes for every taste.' },
      { icon: 'sparkle', title: 'Customised Menus',       text: 'Traditional favourites or a menu made just for you.' },
      { icon: 'heart',   title: 'Customer Satisfaction',  text: 'Great food and dedicated service, every time.' }
    ],
    journeyTitle: 'We Cater For',
    journey: [
      { year: '01', title: 'Weddings & Engagements',      text: 'Delicious food to make your big day truly special.' },
      { year: '02', title: 'Griha Pravesh & Apartment Pooja', text: 'Pure, wholesome meals for housewarmings and poojas.' },
      { year: '03', title: 'Baby Shower & Naming Ceremony', text: 'Joyful menus for your family’s happiest moments.' },
      { year: '04', title: 'Corporate Events',            text: 'Well-prepared food for meetings, events and celebrations.' },
      { year: '05', title: 'Small In-House Functions',    text: 'Homely catering for intimate gatherings.' }
    ],
    mission: 'Our mission is to serve delicious, high-quality food with passion, care, and dedication. We strive to bring people together through exceptional catering services, authentic flavours, and customized menus that suit every occasion. Customer satisfaction is at the heart of everything we do, and we aim to make every celebration memorable through great food and reliable service.',
    vision: 'Our vision is to become a trusted and preferred catering service known for exceptional taste, quality, and customer satisfaction. We aspire to create lasting relationships with our customers, continuously improve our services, and bring happiness to every occasion we serve. We aim to make Samadhan a name people remember whenever they think of good food and memorable celebrations.',
    whyTitle: 'Why Choose Us',
    why: [
      { icon: 'utensils', title: 'Veg & Non-Veg Variety',  text: 'Delicious vegetarian and non-vegetarian dishes to suit your tastes and preferences.' },
      { icon: 'leaf',     title: 'Taste & Authenticity',   text: 'From traditional favourites, the perfect blend of taste, quality and authenticity.' },
      { icon: 'sparkle',  title: 'Customised Menus',       text: 'Menus planned around your occasion, your guests and your preferences.' },
      { icon: 'heart',    title: 'Made With Care',         text: 'Passion, care and commitment in everything we do.' },
      { icon: 'users',    title: 'Every Occasion',         text: 'Weddings, poojas, baby showers, corporate events and small in-house functions.' },
      { icon: 'shield',   title: 'Customer Satisfaction',  text: 'Our name is our promise — satisfaction through great food and dedicated service.' }
    ],
    // Team section is hidden (no team details provided yet). Add { name, role, photo } entries to show it.
    teamTitle: 'Meet the People Behind the Food',
    team: []
  },

  /* ---------- 7. SERVICES ---------- */
  services: [
    {
      id: 'wedding', icon: 'utensils', title: 'Weddings & Engagements', image: 'assets/images/service-wedding.jpg',
      short: 'Delicious veg and non-veg catering to make your big day memorable.',
      text: 'From traditional favourites to customised menus, we serve food that makes your wedding or engagement guests feel welcome and satisfied.',
      points: ['Vegetarian and non-vegetarian dishes', 'Traditional favourites', 'Customised menus', 'Dedicated service']
    },
    {
      id: 'griha-pravesh', icon: 'leaf', title: 'Griha Pravesh & Apartment Pooja', image: 'assets/images/service-griha-pravesh.jpg',
      short: 'Wholesome meals for housewarmings and apartment poojas.',
      text: 'Celebrate your new home or pooja with delicious food and exceptional care, planned around your family’s preferences.',
      points: ['Traditional menus', 'Vegetarian and non-vegetarian options', 'Customised to your guest count', 'Dedicated service']
    },
    {
      id: 'baby-shower', icon: 'heart', title: 'Baby Shower & Naming Ceremony', image: 'assets/images/service-baby-shower.jpg',
      short: 'Joyful catering for your family’s happiest moments.',
      text: 'We put our heart into serving food that makes your guests feel welcome and satisfied at baby showers and naming ceremonies.',
      points: ['Vegetarian and non-vegetarian dishes', 'Customised menus', 'Warm, careful service', 'Suited to family gatherings']
    },
    {
      id: 'corporate', icon: 'briefcase', title: 'Corporate Events', image: 'assets/images/service-corporate.jpg',
      short: 'Well-prepared food and reliable service for corporate events.',
      text: 'Great food and dependable service for your team, clients and guests, with menus customised to the occasion.',
      points: ['Vegetarian and non-vegetarian dishes', 'Customised menus', 'Reliable service', 'Quality and taste']
    },
    {
      id: 'in-house', icon: 'chef', title: 'Small In-House Functions', image: 'assets/images/service-inhouse.jpg',
      short: 'Homely catering for birthdays, family gatherings and intimate functions.',
      text: 'Birthday celebrations and small family functions deserve the same care. We bring the perfect blend of taste, quality and authenticity to your table.',
      points: ['Birthdays and family gatherings', 'Vegetarian and non-vegetarian dishes', 'Customised menus', 'Dedicated service']
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
  showPrices: false,   // prices are not provided yet - the site shows "Request a Quote"
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
  testimonials: [],   // no real reviews yet - the section is hidden until you add some
  sampleNotice: '',

  /* ---------- 11. GALLERY ----------
     category must match one of the names in galleryCategories.
     Add / remove items freely. `ratio` controls the tile shape. */
  galleryCategories: ['Buffet Setup', 'Live Service', 'Meal Boxes', 'Events & Venues'],
  gallery: [
    { src: 'assets/images/gallery-01.jpg', cat: 'Live Service', alt: 'Guests being served at the buffet' },
    { src: 'assets/images/gallery-02.jpg', cat: 'Buffet Setup', alt: 'Buffet with chafing dishes and flowers' },
    { src: 'assets/images/gallery-03.jpg', cat: 'Meal Boxes', alt: 'Freshly packed meal boxes' },
    { src: 'assets/images/gallery-04.jpg', cat: 'Buffet Setup', alt: 'Buffet counter with chafing dishes' },
    { src: 'assets/images/gallery-05.jpg', cat: 'Live Service', alt: 'Outdoor event serving' },
    { src: 'assets/images/gallery-06.jpg', cat: 'Events & Venues', alt: 'Samadhan Catering welcome board' },
    { src: 'assets/images/gallery-07.jpg', cat: 'Buffet Setup', alt: 'Decorated buffet hall' },
    { src: 'assets/images/gallery-08.jpg', cat: 'Meal Boxes', alt: 'Thali-style meal box' },
    { src: 'assets/images/gallery-09.jpg', cat: 'Live Service', alt: 'Buffet service in progress' },
    { src: 'assets/images/gallery-10.jpg', cat: 'Events & Venues', alt: 'Banquet hall with round tables' },
    { src: 'assets/images/gallery-11.jpg', cat: 'Buffet Setup', alt: 'Dishes on wooden stands with white drape' },
    { src: 'assets/images/gallery-12.jpg', cat: 'Buffet Setup', alt: 'Welcome table with menu board and crockery' },
    { src: 'assets/images/gallery-13.jpg', cat: 'Buffet Setup', alt: 'Outdoor buffet under a festive canopy' },
    { src: 'assets/images/gallery-14.jpg', cat: 'Buffet Setup', alt: 'Evening buffet with chafing dishes' },
    { src: 'assets/images/gallery-15.jpg', cat: 'Buffet Setup', alt: 'Chafing dish with floral decor' },
    { src: 'assets/images/gallery-16.jpg', cat: 'Buffet Setup', alt: 'Buffet counter with food labels' },
    { src: 'assets/images/gallery-17.jpg', cat: 'Live Service', alt: 'Serving at the buffet counter' },
    { src: 'assets/images/gallery-18.jpg', cat: 'Events & Venues', alt: 'Hall set up for guests' },
    { src: 'assets/images/gallery-19.jpg', cat: 'Buffet Setup', alt: 'Our chafing dishes and serving equipment' }
  ],

  /* ---------- 15. HOME HERO CARDS (glass carousel on the right) ---------- */
  heroCards: [
    { title: 'Weddings & Engagements',     sub: 'Make your big day memorable', image: 'assets/images/service-wedding.jpg',        href: 'services.html#wedding' },
    { title: 'Griha Pravesh & Pooja',      sub: 'Wholesome, traditional meals', image: 'assets/images/service-griha-pravesh.jpg', href: 'services.html#griha-pravesh' },
    { title: 'Baby Shower & Naming',       sub: 'Joyful family celebrations',   image: 'assets/images/service-baby-shower.jpg',   href: 'services.html#baby-shower' },
    { title: 'Corporate Events',           sub: 'Reliable, quality catering',   image: 'assets/images/service-corporate.jpg',     href: 'services.html#corporate' },
    { title: 'Small In-House Functions',   sub: 'Homely catering',              image: 'assets/images/service-inhouse.jpg',       href: 'services.html#in-house' }
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
  eventTypes: ['Weddings & Engagements', 'Griha Pravesh & Apartment Pooja', 'Baby Shower & Naming Ceremony', 'Corporate Events', 'Small In-House Function', 'Other'],
  foodPreferences: ['Veg', 'Non-Veg', 'Both']
};
