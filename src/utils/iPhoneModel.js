const iPhoneData = [
  // iPhone 15 Pro Max
  {
    id: 1,
    name: "iPhone 15 Pro Max (256GB) - Natural Titanium",
    price: 1199,
    description: "The ultimate iPhone with the A17 Pro chip, a powerful Pro camera system, and a strong, lightweight titanium design.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+15+Pro+Max"
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max (512GB) - Blue Titanium",
    price: 1399,
    description: "Experience Pro performance with the A17 Pro chip, advanced camera features, and a durable titanium frame.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+15+Pro+Max"
  },
  {
    id: 3,
    name: "iPhone 15 Pro Max (1TB) - White Titanium",
    price: 1599,
    description: "Maximum storage for the pro user. Features the A17 Pro chip and the most advanced camera system in an iPhone.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+15+Pro+Max"
  },
  {
    id: 4,
    name: "iPhone 15 Pro Max (256GB) - Black Titanium",
    price: 1199,
    description: "A sleek, professional design with the power of the A17 Pro chip and a versatile Pro camera setup.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+15+Pro+Max"
  },
  {
    id: 5,
    name: "iPhone 15 Pro Max (512GB) - Natural Titanium",
    price: 1399,
    description: "Get more space for your pro workflows. Features a stunning display and industry-leading performance.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+15+Pro+Max"
  },

  // iPhone 15 Pro
  {
    id: 6,
    name: "iPhone 15 Pro (128GB) - Natural Titanium",
    price: 999,
    description: "A total powerhouse in a more compact size. A17 Pro chip, Pro camera system, and a beautiful Super Retina XDR display.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+15+Pro"
  },
  {
    id: 7,
    name: "iPhone 15 Pro (256GB) - Blue Titanium",
    price: 1099,
    description: "The perfect balance of size and performance. Features a pro-grade camera and the lightning-fast A17 Pro chip.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+15+Pro"
  },
  {
    id: 8,
    name: "iPhone 15 Pro (512GB) - White Titanium",
    price: 1299,
    description: "Capture stunning photos and videos with the advanced Pro camera system. All powered by the A17 Pro chip.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+15+Pro"
  },
  {
    id: 9,
    name: "iPhone 15 Pro (1TB) - Black Titanium",
    price: 1499,
    description: "Maximum storage in a compact Pro form factor. Ideal for creators and power users on the go.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+15+Pro"
  },
  {
    id: 10,
    name: "iPhone 15 Pro (256GB) - Black Titanium",
    price: 1099,
    description: "Pro performance meets sleek design. A durable titanium build with the powerful A17 Pro chip inside.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+15+Pro"
  },

  // iPhone 15
  {
    id: 11,
    name: "iPhone 15 (128GB) - Pink",
    price: 799,
    description: "Dynamic Island, a 48MP Main camera, and USB-C, all in a durable color-infused glass and aluminum design.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+15"
  },
  {
    id: 12,
    name: "iPhone 15 (256GB) - Blue",
    price: 899,
    description: "A huge leap forward with the A16 Bionic chip, an advanced dual-camera system, and a vibrant Super Retina XDR display.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+15"
  },
  {
    id: 13,
    name: "iPhone 15 (512GB) - Green",
    price: 1099,
    description: "All the storage you need for your photos and 4K videos. Features the innovative Dynamic Island and A16 Bionic chip.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+15"
  },
  {
    id: 14,
    name: "iPhone 15 (128GB) - Yellow",
    price: 799,
    description: "A magical new way to interact with your iPhone. Packed with incredible new features and a powerful A16 Bionic chip.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+15"
  },
  {
    id: 15,
    name: "iPhone 15 (256GB) - Black",
    price: 899,
    description: "Serious power and serious features. The A16 Bionic chip powers an advanced dual-camera system and all-day battery life.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+15"
  },

  // iPhone 14 Pro
  {
    id: 16,
    name: "iPhone 14 Pro (128GB) - Deep Purple",
    price: 899,
    description: "Introducing Dynamic Island. A 48MP Main camera for up to 4x the resolution. Powered by the A16 Bionic chip.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+14+Pro"
  },
  {
    id: 17,
    name: "iPhone 14 Pro (256GB) - Gold",
    price: 999,
    description: "A magical new way to interact with iPhone. Groundbreaking safety features. An innovative 48MP camera.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+14+Pro"
  },
  {
    id: 18,
    name: "iPhone 14 Pro (512GB) - Silver",
    price: 1199,
    description: "The ultimate pro iPhone with the A16 Bionic chip, the fastest chip ever in a smartphone.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+14+Pro"
  },
  {
    id: 19,
    name: "iPhone 14 Pro (1TB) - Space Black",
    price: 1399,
    description: "Pro power. Pro camera. Pro performance. With an Always-On display and the revolutionary Dynamic Island.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+14+Pro"
  },
  {
    id: 20,
    name: "iPhone 14 Pro (256GB) - Deep Purple",
    price: 999,
    description: "Experience the A16 Bionic chip, an incredible 48MP camera, and all-day battery life in a stunning design.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+14+Pro"
  },
  
  // iPhone 14
  {
    id: 21,
    name: "iPhone 14 (128GB) - Blue",
    price: 699,
    description: "A wonderful dual-camera system, A15 Bionic chip, and essential safety features like Crash Detection.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+14"
  },
  {
    id: 22,
    name: "iPhone 14 (256GB) - Purple",
    price: 799,
    description: "Our most advanced dual-camera system ever. A huge leap in low-light photos. Powered by the A15 Bionic chip.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+14"
  },
  {
    id: 23,
    name: "iPhone 14 (512GB) - Midnight",
    price: 999,
    description: "Incredible performance and efficiency with the A15 Bionic chip. All-day battery life and a vibrant display.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+14"
  },
  {
    id: 24,
    name: "iPhone 14 (128GB) - Starlight",
    price: 699,
    description: "Packed with great features. A beautiful Super Retina XDR display and a durable Ceramic Shield front.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+14"
  },
  {
    id: 25,
    name: "iPhone 14 (256GB) - (PRODUCT)RED",
    price: 799,
    description: "Your purchase of (PRODUCT)RED contributes directly to the Global Fund to combat AIDS. Features A15 Bionic.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+14"
  },
  
  // iPhone 13
  {
    id: 26,
    name: "iPhone 13 (128GB) - Green",
    price: 599,
    description: "A15 Bionic chip for lightning-fast performance. A more advanced dual-camera system. And a brighter Super Retina XDR display.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+13"
  },
  {
    id: 27,
    name: "iPhone 13 (256GB) - Pink",
    price: 699,
    description: "Shoot incredible videos with Cinematic mode. A huge leap in battery life. And a durable design with Ceramic Shield.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+13"
  },
  {
    id: 28,
    name: "iPhone 13 (512GB) - Blue",
    price: 899,
    description: "A super-powerful chip. A huge leap in battery life. A superstar camera. All in a durable design.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+13"
  },
  {
    id: 29,
    name: "iPhone 13 (128GB) - Midnight",
    price: 599,
    description: "The A15 Bionic chip makes everything faster and smoother. Great battery life and a fantastic dual-camera system.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+13"
  },
  {
    id: 30,
    name: "iPhone 13 (256GB) - Starlight",
    price: 699,
    description: "Bright, colorful, and sharp Super Retina XDR display. Advanced dual-camera system with Photographic Styles.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+13"
  },

  // iPhone 13 Mini
  {
    id: 31,
    name: "iPhone 13 mini (128GB) - (PRODUCT)RED",
    price: 549,
    description: "All the power of the iPhone 13 in a smaller, easy-to-hold size. A15 Bionic chip and advanced dual-camera system.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+13+mini"
  },
  {
    id: 32,
    name: "iPhone 13 mini (256GB) - Green",
    price: 649,
    description: "A compact powerhouse. Features Cinematic mode, a huge leap in battery life, and a bright Super Retina XDR display.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+13+mini"
  },
  {
    id: 33,
    name: "iPhone 13 mini (512GB) - Starlight",
    price: 849,
    description: "Maximum storage in a mini form factor. Perfect for those who want power and portability without compromise.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+13+mini"
  },
  {
    id: 34,
    name: "iPhone 13 mini (128GB) - Blue",
    price: 549,
    description: "The most advanced dual-camera system ever on an iPhone, in a compact and durable design.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+13+mini"
  },
  {
    id: 35,
    name: "iPhone 13 mini (256GB) - Midnight",
    price: 649,
    description: "Small in size, big on features. A15 Bionic chip, Ceramic Shield, and industry-leading water resistance.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+13+mini"
  },
  
  // iPhone SE (3rd Gen)
  {
    id: 36,
    name: "iPhone SE (64GB) - Midnight",
    price: 429,
    description: "Serious power with the A15 Bionic chip in a pocket-friendly size. A great camera and the iconic Home button.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+SE"
  },
  {
    id: 37,
    name: "iPhone SE (128GB) - Starlight",
    price: 479,
    description: "Fast-track your everything. A15 Bionic chip, 5G, better battery life, and a durable design.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+SE"
  },
  {
    id: 38,
    name: "iPhone SE (256GB) - (PRODUCT)RED",
    price: 579,
    description: "A powerful smartphone in a beloved design. With the performance of A15 Bionic and a stellar camera.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+SE"
  },
  {
    id: 39,
    name: "iPhone SE (64GB) - Starlight",
    price: 429,
    description: "A leap in performance with the A15 Bionic chip. Touch ID, a 4.7-inch Retina HD display, and a great price.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+SE"
  },
  {
    id: 40,
    name: "iPhone SE (128GB) - Midnight",
    price: 479,
    description: "Incredible value. Features the same powerful A15 Bionic chip as the iPhone 13.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+SE"
  },

  // iPhone 12
  {
    id: 41,
    name: "iPhone 12 (64GB) - Black",
    price: 499,
    description: "A beautiful leap forward. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+12"
  },
  {
    id: 42,
    name: "iPhone 12 (128GB) - White",
    price: 549,
    description: "Blast past fast with the A14 Bionic chip. Ceramic Shield with 4x better drop performance.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+12"
  },
  {
    id: 43,
    name: "iPhone 12 (256GB) - Green",
    price: 649,
    description: "Super Retina XDR display. Advanced dual-camera system with Night mode on all cameras.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+12"
  },
  {
    id: 44,
    name: "iPhone 12 (64GB) - Blue",
    price: 499,
    description: "Beyond fast. A14 Bionic chip, an advanced dual-camera system, and a stunning OLED display.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+12"
  },
  {
    id: 45,
    name: "iPhone 12 (128GB) - Purple",
    price: 549,
    description: "A beautifully bright and compact design, packed with the powerful A14 Bionic chip and 5G speed.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+12"
  },
  
  // iPhone 11 (Bonus older models)
  {
    id: 46,
    name: "iPhone 11 (64GB) - Black",
    price: 399,
    description: "Dual-camera system with Ultra Wide. Night mode and stunning video quality. Water and dust resistance.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+11"
  },
  {
    id: 47,
    name: "iPhone 11 (128GB) - White",
    price: 449,
    description: "Powered by the A13 Bionic chip for incredible performance in games, photography, and augmented reality.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+11"
  },
  {
    id: 48,
    name: "iPhone XR (64GB) - Coral",
    price: 299,
    description: "Brilliant in every way. 6.1-inch Liquid Retina display. A12 Bionic chip. Advanced Face ID.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+XR"
  },
  {
    id: 49,
    name: "iPhone XR (128GB) - Blue",
    price: 349,
    description: "An exceptional camera and all-day battery life in a beautiful design with six stunning finishes.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+XR"
  },
  {
    id: 50,
    name: "iPhone 8 (64GB) - Space Gray",
    price: 199,
    description: "A classic design with a glass back, a 4.7-inch Retina HD display, and the A11 Bionic chip.",
    image: "https://via.placeholder.com/400x400.png?text=iPhone+8"
  }
];

export default  iPhoneData