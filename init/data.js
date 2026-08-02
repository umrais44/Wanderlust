const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 28000,
    location: "Malibu",
    country: "United States",
    category: ["beach", "trending"],
  },

  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 22000,
    location: "New York City",
    country: "United States",
    category: ["rooms", "iconic-cities"],
  },

  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin surrounded by nature. Perfect for hiking and relaxing.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 18000,
    location: "Aspen",
    country: "United States",
    category: ["mountains", "camping"],
  },

  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa surrounded by vineyards and rolling hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 45000,
    location: "Florence",
    country: "Italy",
    category: ["iconic-cities", "trending"],
  },

  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this eco-friendly treehouse surrounded by lush forests and wildlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 15000,
    location: "Portland",
    country: "United States",
    category: ["camping", "farms"],
  },

  {
    title: "Beachfront Paradise",
    description:
      "Wake up to breathtaking ocean views in this luxury beachfront condo with direct beach access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 36000,
    location: "Cancun",
    country: "Mexico",
    category: ["beach", "pools"],
  },

  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your vacation fishing, kayaking, and enjoying peaceful evenings beside a beautiful lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 17000,
    location: "Lake Tahoe",
    country: "United States",
    category: ["lakefront", "camping"],
  },

  {
    title: "Luxury Penthouse with City Views",
    description:
      "Experience luxury living with panoramic skyline views, premium interiors, and world-class amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 65000,
    location: "Los Angeles",
    country: "United States",
    category: ["rooms", "iconic-cities"],
  },

  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes directly from your doorstep in this luxurious chalet located in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 58000,
    location: "Verbier",
    country: "Switzerland",
    category: ["mountains", "trending"],
  },

  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Enjoy unforgettable wildlife safaris while staying in a luxurious lodge overlooking the Serengeti.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 72000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: ["camping", "trending"],
  },

    {
    title: "Historic Canal House",
    description:
      "Stay in a beautifully preserved canal house in Amsterdam with classic Dutch architecture and modern comforts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 32000,
    location: "Amsterdam",
    country: "Netherlands",
    category: ["iconic-cities"],
  },

  {
    title: "Private Island Retreat",
    description:
      "Enjoy complete privacy on your own tropical island with crystal-clear waters and luxurious accommodation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 180000,
    location: "Fiji",
    country: "Fiji",
    category: ["beach", "trending"],
  },

  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the peaceful English countryside in this charming thatched-roof cottage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 23000,
    location: "Cotswolds",
    country: "United Kingdom",
    category: ["farms", "trending"],
  },

  {
    title: "Historic Brownstone in Boston",
    description:
      "Stay in a beautifully restored brownstone featuring elegant interiors in historic Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 34000,
    location: "Boston",
    country: "United States",
    category: ["iconic-cities"],
  },

  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax in a beachfront bungalow with a private pool and stunning sunset views over the ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 33000,
    location: "Bali",
    country: "Indonesia",
    category: ["beach", "pools"],
  },

  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain scenery and peaceful surroundings in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 27000,
    location: "Banff",
    country: "Canada",
    category: ["mountains", "camping"],
  },

  {
    title: "Art Deco Apartment in Miami",
    description:
      "Stay in a stylish Art Deco apartment just minutes from the famous South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 29000,
    location: "Miami",
    country: "United States",
    category: ["iconic-cities", "beach"],
  },

  {
    title: "Tropical Villa in Phuket",
    description:
      "Luxury tropical villa with an infinity pool surrounded by lush greenery and ocean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 55000,
    location: "Phuket",
    country: "Thailand",
    category: ["beach", "pools"],
  },

  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in a centuries-old castle surrounded by breathtaking Scottish landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 82000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: ["castles", "mountains"],
  },

  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience unmatched luxury in a private desert resort with a pool, spa, and breathtaking desert scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 95000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: ["pools", "iconic-cities"],
  },

    {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and reconnect with nature in this cozy log cabin surrounded by forests, mountains, and wildlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 20000,
    location: "Montana",
    country: "United States",
    category: ["mountains", "camping"],
  },

  {
    title: "Beachfront Villa in Greece",
    description:
      "Relax in a luxurious beachfront villa overlooking the crystal-clear waters of the Mediterranean Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 45000,
    location: "Mykonos",
    country: "Greece",
    category: ["beach", "pools"],
  },

  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled deep in the rainforest with beautiful natural surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 17000,
    location: "Costa Rica",
    country: "Costa Rica",
    category: ["camping", "farms"],
  },

  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience Southern charm in this beautifully restored historic cottage with a peaceful private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 26000,
    location: "Charleston",
    country: "United States",
    category: ["iconic-cities"],
  },

  {
    title: "Modern Apartment in Tokyo",
    description:
      "Stay in a stylish apartment in central Tokyo with quick access to shopping, dining, and public transport.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 35000,
    location: "Tokyo",
    country: "Japan",
    category: ["rooms", "iconic-cities"],
  },

  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend peaceful days beside the lake while enjoying kayaking, fishing, and scenic mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 23000,
    location: "New Hampshire",
    country: "United States",
    category: ["lakefront", "camping"],
  },

  {
    title: "Luxury Villa in the Maldives",
    description:
      "Experience ultimate luxury in an overwater villa with direct access to turquoise lagoons and private decks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 120000,
    location: "Maldives",
    country: "Maldives",
    category: ["beach", "pools", "trending"],
  },

  {
    title: "Ski Chalet in Aspen",
    description:
      "Enjoy world-class skiing and luxury accommodation in one of Aspen's finest mountain chalets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 70000,
    location: "Aspen",
    country: "United States",
    category: ["mountains", "trending"],
  },

  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a peaceful beach house surrounded by tropical forests and the Pacific Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 32000,
    location: "Costa Rica",
    country: "Costa Rica",
    category: ["beach", "trending"],
  },

  {
    title: "Luxury Yacht in Monaco",
    description:
      "Cruise the Mediterranean aboard a luxury yacht featuring premium cabins, fine dining, and breathtaking sea views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=60",
    },
    price: 180000,
    location: "Monaco",
    country: "Monaco",
    category: ["boats", "trending"],
  },

    {
    title: "Glass Igloo in Lapland",
    description:
      "Watch the Northern Lights from the comfort of your heated glass igloo in the heart of the Arctic wilderness.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517821099601-2b7f7d0f8b5d?auto=format&fit=crop&w=800&q=60",
    },
    price: 85000,
    location: "Rovaniemi",
    country: "Finland",
    category: ["artic", "trending"],
  },

  {
    title: "Countryside Farm Stay",
    description:
      "Experience peaceful village life with fresh organic food, farm animals, and beautiful countryside scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    },
    price: 12000,
    location: "Lancaster",
    country: "United States",
    category: ["farms"],
  },

  {
    title: "Floating Houseboat on Dal Lake",
    description:
      "Stay in a beautifully decorated wooden houseboat and enjoy breathtaking lake views with traditional hospitality.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 24000,
    location: "Srinagar",
    country: "India",
    category: ["boats", "lakefront"],
  },

  {
    title: "Modern Studio in Seoul",
    description:
      "A stylish studio apartment in the heart of Seoul with easy access to shopping districts, restaurants, and public transport.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    },
    price: 27000,
    location: "Seoul",
    country: "South Korea",
    category: ["rooms", "iconic-cities"],
  },

  {
    title: "Infinity Pool Villa in Santorini",
    description:
      "Relax in a luxury cliffside villa featuring a private infinity pool overlooking the stunning Aegean Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=800&q=60",
    },
    price: 95000,
    location: "Santorini",
    country: "Greece",
    category: ["pools", "beach", "trending"],
  },

  {
    title: "Medieval Castle in Germany",
    description:
      "Spend the night in an authentic medieval castle featuring royal suites, historic halls, and breathtaking countryside views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?auto=format&fit=crop&w=800&q=60",
    },
    price: 78000,
    location: "Bavaria",
    country: "Germany",
    category: ["castles", "trending"],
  },

  {
    title: "Lakeside Camping Retreat",
    description:
      "Enjoy camping beside a crystal-clear lake with hiking trails, fishing spots, and unforgettable campfire nights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    },
    price: 9000,
    location: "Lake Louise",
    country: "Canada",
    category: ["camping", "lakefront"],
  },
];

module.exports = { data: sampleListings };