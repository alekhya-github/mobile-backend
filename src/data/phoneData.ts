import { Phone } from "../models/Phone";

// Common accessories for all phones
const commonAccessories = [
  {
    id: "acc-1",
    name: "20W USB-C Fast Charger",
    brand: "Belkin",
    price: "$19.00",
    image: "/images/accessories/usb-c-fast-charger-belkin.png",
  },
  {
    id: "acc-2",
    name: "20W USB-C Fast Charger",
    brand: "Anker",
    price: "$14.95",
    image: "/images/accessories/usb-c-fast-charger-anker.png",
  },
  {
    id: "acc-3",
    name: "6ft Braided USB-C to USB-C Charge Cable",
    brand: "Belkin",
    price: "$24.95",
    image: "/images/accessories/usb-c-cable-braided.png",
  },
  {
    id: "acc-4",
    name: "3ft USB-C to USB-C Charge & Sync Cable",
    brand: "Belkin",
    price: "$24.95",
    image: "/images/accessories/usb-c-cable-3ft.png",
  },
];

// Mock phone data matching Xfinity Mobile screens
export const phoneData: Phone[] = [
  {
    id: "google-pixel-10-pro",
    brand: "GOOGLE",
    model: "Pixel 10 Pro",
    tagline: "New lower price",
    images: {
      main: "/images/phones/pixel-10-pro-moonstone.png",
      gallery: [
        "/images/phones/pixel-10-pro-moonstone-front.png",
        "/images/phones/pixel-10-pro-moonstone-back.png",
        "/images/phones/pixel-10-pro-moonstone-side.png",
      ],
    },
    colors: [
      {
        name: "Moonstone",
        hexCode: "#4A6FA5",
        image: "/images/phones/pixel-10-pro-moonstone.png",
      },
      {
        name: "Obsidian",
        hexCode: "#1C1C1C",
        image: "/images/phones/pixel-10-pro-obsidian.png",
      },
      {
        name: "Porcelain",
        hexCode: "#E8E4DE",
        image: "/images/phones/pixel-10-pro-porcelain.png",
      },
    ],
    selectedColor: "Moonstone",
    storageOptions: [
      {
        capacity: "128 GB",
        price: "$699.99",
        monthlyPrice: "$10.75/mo",
      },
      {
        capacity: "256 GB",
        price: "$799.99",
        monthlyPrice: "$13.86/mo",
      },
    ],
    selectedStorage: "128 GB",
    pricing: {
      fullPrice: "$799.99",
      monthlyPrice: "$11.11",
      originalMonthlyPrice: "$22.22",
      financingText:
        "For 36 months, 0% APR when paying over 36 months and finance/lease is selected",
      promoText: "Save up to $650 with trade-in",
    },
    availability: {
      status: "Backorder",
      estimatedShipDate: "Jan 19, 2026",
    },
    purchaseOptions: {
      addNewLine: true,
      upgradeExistingLine: true,
      tradeInAvailable: true,
      tradeInOptions: [
        { condition: "Yes", savings: "Save up to $650" },
        { condition: "No", savings: "Save $400" },
      ],
    },
    features: {
      keyFeatures: [
        {
          title: "Google Tensor G5 Chip",
          description:
            "The new Google Tensor G5 chip is Pixel's biggest performance leap yet. It's custom designed for advanced AI with a CPU that's up to 25% more powerful and a CPU that's up to 22% more powerful with Google's most advanced AI.",
        },
        {
          title: "Powerhouse Performance",
          description:
            "Do more at once with Pixel 10 Pro. It delivers Pixel's smoothest, fastest, most responsive experience yet. Open apps and with Gemini Nano, Google's most advanced AI model on a mobile device. The Pixel 10 Pro comes with 16 GB of RAM for pro-level performance.",
        },
        {
          title: "Display",
          description:
            "The Pixel 10 Pro's 6.3-inch Super Actua display features 3,000-nit peak brightness for excellent visibility even in direct sunlight. And it has a refresh rate of up to 120Hz for a natural feel scrolling and switching between apps.",
        },
        {
          title: "Battery & Charging",
          description:
            "Pixel 10 Pro lasts over 24 hours, and up to 100 hours with Extreme Battery Saver. The 4K/5000mAh battery charges to 70% in 30 minutes with fast charging. Supports magnetic technology (Qi 2) for effortless wireless charging that snaps into place.",
        },
        {
          title: "Cameras",
          description:
            "The Pixel 10 Pro camera system makes everything look amazing by default, even in low light. Capture more of the scene with an ultrawide lens and incredible details with up to 30x zoom (50MP/8MP/48MP). And record videos in 8K with Video Boost.",
        },
        {
          title: "Selfie Camera",
          description:
            "The 42MP front camera with autofocus features a 103° field of view. Pixel's videos (even selfie videos) are so crisp and the colors so accurate, they come to life. Take a gorgeous video or video; even in dimly lit settings the processing the video beautifully and smoothly.",
        },
        {
          title: "Conversational Editing",
          description:
            "With Ask Photos, you can make changes to photos simply by asking for them. Adjust the composition? Remove an object? Just describe what you want and your Pixel 10 Pro makes it happen.",
        },
        {
          title: "Gemini Live Audio",
          description:
            "Instead of typing, use Gemini Live to have a natural, free-flowing conversation. Brainstorm ideas, practice an interview, talk to YouTube video for a short in-depth conversation.",
        },
      ],
      specs: {
        chip: "Google Tensor G5 with Titan security chip",
        display: "6.3-inch Super Actua LTPO OLED, 2850 x 1280, 1-120Hz",
        camera: "50MP wide + 48MP ultrawide + 50MP telephoto (5x optical zoom)",
        battery: "5000mAh, 45W wired charging, wireless Qi2 compatible",
        connectivity: "Wi-Fi 7, Bluetooth 5.4, UWB, NFC, Dual SIM (nano+eSIM)",
        dimensions: "6.02 x 2.83 x 0.34 in",
        weight: "199g",
        network: "5G Sub-6/mmWave, LTE, GSM/EDGE",
        sensors:
          "Under-display fingerprint, Face unlock, Accelerometer, Gyroscope, Magnetometer, Barometer",
        security: "Titan M2 chip, 7 years of OS and security updates",
        accessibility:
          "Hearing Aid Compatible, Real-Time Text (RTT) and TTY supported, CTIA Compliant",
      },
    },
    accessories: commonAccessories,
    badges: ["5G", "New Lower Price"],
    is5G: true,
    freeShipping: true,
  },
  {
    id: "samsung-galaxy-s25-ultra",
    brand: "SAMSUNG",
    model: "Galaxy S25 Ultra",
    tagline: "Unleash Galaxy AI",
    images: {
      main: "/images/phones/galaxy-s25-ultra-titanium-silverblue.png",
      gallery: [
        "/images/phones/galaxy-s25-ultra-titanium-silverblue-front.png",
        "/images/phones/galaxy-s25-ultra-titanium-silverblue-back.png",
        "/images/phones/galaxy-s25-ultra-titanium-silverblue-side.png",
      ],
    },
    colors: [
      {
        name: "Titanium Silverblue",
        hexCode: "#A8B5C4",
        image: "/images/phones/galaxy-s25-ultra-titanium-silverblue.png",
      },
      {
        name: "Titanium Black",
        hexCode: "#1C1C1C",
        image: "/images/phones/galaxy-s25-ultra-titanium-black.png",
      },
      {
        name: "Titanium Gray",
        hexCode: "#6B7280",
        image: "/images/phones/galaxy-s25-ultra-titanium-gray.png",
      },
    ],
    selectedColor: "Titanium Silverblue",
    storageOptions: [
      {
        capacity: "256 GB",
        price: "$1,299.99",
        monthlyPrice: "$25.00/mo",
      },
      {
        capacity: "512 GB",
        price: "$1,499.99",
        monthlyPrice: "$38.33/mo",
      },
    ],
    selectedStorage: "256 GB",
    pricing: {
      fullPrice: "$1,299.99",
      monthlyPrice: "$25.00",
      originalMonthlyPrice: "$36.11",
      financingText:
        "For 36 months, 0% APR when paying over 36 months and finance/lease is selected",
      promoText: "Save up to $830 with trade-in",
    },
    availability: {
      status: "In Stock",
    },
    purchaseOptions: {
      addNewLine: true,
      upgradeExistingLine: true,
      tradeInAvailable: true,
      tradeInOptions: [
        { condition: "Yes", savings: "Save up to $830" },
        { condition: "No", savings: "Save $400" },
      ],
    },
    features: {
      keyFeatures: [
        {
          title: "Cross App Action",
          description:
            "Discover a new world of convenience with a personal assistant that can do more. Circle to Search with Google has expanded so you'll effortlessly search whatever is on screen. Ask to find your favorite team's games, schedule and pull it into your calendar. Keep on top time and date for your schedule.",
        },
        {
          title: "Now Brief",
          description:
            "Stay one step ahead with a phone that gets you the info you need before you even know you need it. Now Brief generates a personalized brief on your schedule. For example, if it's going to rain, your phone will remind you to grab an umbrella before heading out.",
        },
        {
          title: "Night Video with Audio Eraser",
          description:
            "Audio Eraser makes it easy to minimize unwanted voices in your videos on any Galaxy phone. Record beautiful Night Video with double 4-zone light sensors capture optimal colors in low light and minimize unwanted noise to let you relive your favorite moments with fewer distractions.",
        },
        {
          title: "Portrait Selfie",
          description:
            "Effortlessly elevate your selfie game on Galaxy S25 Ultra. Galaxy AI recognizes faces in group photos and creates accurate skin tones and textures to each person in photos and then creates sharp object and subject separation without extra editing.",
        },
        {
          title: "Next Gen Processor",
          description:
            "Designed to perform with Galaxy S25 Ultra. Featuring Snapdragon 8 Elite. Effortlessly translate your calls, chow faster videos, edit your photos without dropping a beat. Say goodbye to lag and hello to quick gaming performance.",
        },
        {
          title: "Display",
          description:
            "Immerse yourself in lifelike gameplay with the large 6.9-inch Dynamic AMOLED 2X display on Galaxy S25 Ultra. Your images feel lifelike thanks to a remarkable ProVisual Engine. Enjoy sharper visuals and responsive touch on a smooth refresh rate up to 120Hz. Adaptive refresh rate with WQHD+ for sharper images.",
        },
        {
          title: "Now Bar",
          description:
            "Stay in the know on the go with Now Bar on your Galaxy S25 series phone. See important updates at a glance like live sports scores and music controls. Check the status of your Galaxy S25 Ultra's battery life on the lock screen. Now Bar is seamlessly connected with all new Note Assist so you can quickly flip through your day.",
        },
        {
          title: "Battery Optimization",
          description:
            "Run your day without running out of power. Take advantage of a 5,000mAh battery and up to 45 watts wired fast charging. Get hours of usage from just minutes of charging with remarkable power efficiency. Galaxy S25 Ultra builds on smart battery features without having to worry.",
        },
        {
          title: "High Resolution UltraWide-Angle Shots",
          description:
            "Our Galaxy S25 Ultra now has a larger resolution UltraWide lens yet (50MP) allowing you to photograph ultra-wide angles with more detail than ever before. Snap a group of six or more at once in the bar, and no one gets cut out without needing to take a step back, or cutting out a single person.",
        },
        {
          title: "Cameras",
          description:
            "200MP Wide + 50MP Ultrawide, 10MP Telephoto 3X, 50MP Periscope 5X. Nightography and Astrophoto Mode. Galaxy AI enhances camera. Space Zoom up to 100x, OIS with Space Award.",
        },
        {
          title: "AI Select",
          description:
            "With AI Select on Galaxy S25 Ultra, write or get your way to curated results that help you do more with just about anything you see on your screen. Your Samsung Keyboard learns your patterns on apps you like, like your customized just like a Galaxy. Your phone lets AI analyze your selections and share them in a variety of formats you can share to make that photo or content more familiar.",
        },
      ],
      specs: {
        chip: "Snapdragon 8 Elite for Galaxy",
        display: "6.9-inch Dynamic AMOLED 2X, 3120 x 1440 (WQHD+), 1-120Hz",
        camera:
          "200MP wide + 50MP ultrawide + 10MP 3x telephoto + 50MP 5x periscope",
        battery:
          "5000mAh, 45W wired charging, 15W wireless, 4.5W reverse wireless",
        connectivity:
          "Wi-Fi 7, Bluetooth 5.4, UWB, NFC, S Pen, Dual SIM (nano+eSIM)",
        dimensions: "6.44 x 3.07 x 0.35 in",
        weight: "218g",
        network: "5G Sub-6/mmWave, LTE, GSM/EDGE, CDMA",
        sensors:
          "Ultrasonic Fingerprint, Accelerometer, Gyroscope, Barometer, Geomagnetic, Hall Sensor, Proximity",
        security:
          "Samsung Knox, Knox Vault, 7 years of OS and security updates",
        accessibility:
          "Hearing Aid Compatible, Real-Time Text (RTT) and TTY supported, CTIA Compliant",
      },
    },
    accessories: commonAccessories,
    badges: ["5G", "Galaxy AI"],
    is5G: true,
    freeShipping: true,
  },
  {
    id: "apple-iphone-17",
    brand: "APPLE",
    model: "iPhone 17",
    tagline: "A new era",
    images: {
      main: "/images/phones/iphone-17-lavender.png",
      gallery: [
        "/images/phones/iphone-17-lavender-front.png",
        "/images/phones/iphone-17-lavender-back.png",
        "/images/phones/iphone-17-lavender-side.png",
      ],
    },
    colors: [
      {
        name: "Lavender",
        hexCode: "#B8A9C9",
        image: "/images/phones/iphone-17-lavender.png",
      },
      {
        name: "Midnight",
        hexCode: "#1D1D1F",
        image: "/images/phones/iphone-17-midnight.png",
      },
      {
        name: "Starlight",
        hexCode: "#F5F5F0",
        image: "/images/phones/iphone-17-starlight.png",
      },
      {
        name: "Green",
        hexCode: "#4A524A",
        image: "/images/phones/iphone-17-green.png",
      },
    ],
    selectedColor: "Lavender",
    storageOptions: [
      {
        capacity: "256 GB",
        price: "$429.99",
        monthlyPrice: "$11.94/mo",
      },
      {
        capacity: "512 GB",
        price: "$629.99",
        monthlyPrice: "$17.50/mo",
      },
    ],
    selectedStorage: "256 GB",
    pricing: {
      fullPrice: "$429.99",
      monthlyPrice: "$11.94",
      originalMonthlyPrice: "$23.05",
      financingText:
        "For 36 months, 0% APR when paying over 36 months and finance/lease is selected",
      promoText: "Save up to $830 with trade-in",
    },
    availability: {
      status: "In Stock",
    },
    purchaseOptions: {
      addNewLine: true,
      upgradeExistingLine: true,
      tradeInAvailable: true,
      tradeInOptions: [
        { condition: "Yes", savings: "Save up to $830" },
        { condition: "No", savings: "Save $400" },
      ],
    },
    features: {
      keyFeatures: [
        {
          title: "Design",
          description:
            "iPhone 17 comes in five gorgeous colors, and introduces a fusion titanium and a new Ceramic Shield 2 front that's 2x more scratch-resistant.",
        },
        {
          title: "Display",
          description:
            "6.1-inch all-screen OLED Super Retina XDR display. ProMotion technology with adaptive refresh rates up to 120Hz better outdoor visibility with up to 2,000-nit HDR peak brightness. 2622 by 1206 pixel resolution at 460 ppi and Ceramic Shield front with next-generation ceramic crystals for anti-reflective coating.",
        },
        {
          title: "Rear Cameras",
          description:
            "Capture super high-resolution shots by the new 48MP camera system: 48MP Fusion camera system, 2x optical quality Telephoto enables 4x optical-quality zoom camera. Digital zoom up to 10x. True Sapphire crystal lens cover. New Hero-level HDR 5. Next generation photonic engine with Lumino-tonal mapping. Low-light HDR effects.",
        },
        {
          title: "Front Camera",
          description:
            "The 12MP camera features fusion 4K Dolby Vision recording at 24 fps, 25 fps, or 30 fps. 4K60fps Slo-mo, video recording at 25, 30, or 60 fps, 720p HD video recording at 30 fps. Cinematic mode up to 4K Dolby Vision at 30 fps. Action mode up to 2.8K 60fps. Time-lapse at 4K60 fps. No video support for 1080p at 25 fps, 30 fps, or 60fps. Quick take video. Apple Log and ACES up to 4K Dolby Vision at 30 fps. Time-lapse video with stabilization. Night mode. Time-lapse. Slo-Motion HDR selfie video recording for videos.",
        },
        {
          title: "Video Recording",
          description:
            "4K Dolby Vision recording at 24 fps, 25 fps, or 30 fps. 4K60fps ProRes, video recording at 25, 30, or 60 fps. 720p HD video recording at 30 fps. Cinematic mode up to 4K Dolby Vision at 30 fps. Action mode up to 2.8K 60fps. Time-lapse at 4K60 fps. No video support for 1080p at 25 fps, 30 fps, or 60fps.",
        },
        {
          title: "Chip",
          description:
            "The A19 Chip is a power player and energy saver. While it runs 60% the dedicated neural engines have power. Apple Intelligence for AAA games. 3-core GPU with 3x performance and 4x efficiency.",
        },
        {
          title: "Power and Battery",
          description:
            "Up to 20 hours of video playback, up to 12 hours of video streaming (streamed). Built-in rechargeable lithium-ion battery. MagSafe wireless charging up to 25W. Qi2 wireless charging up to 15W. All-day battery life. Recharges up to 50% in around 30 minutes with 30W adapter or higher (available separately). Charge rapidly with MagSafe Charger (all available separately).",
        },
        {
          title: "Apple Intelligence",
          description:
            "Built into your iPhone. Apple Intelligence is designed to protect your privacy and helps you write, express yourself, and get things done in ways you never could. Mind to know what an access your data never leaves Apple.",
        },
        {
          title: "Charging and Expansion",
          description:
            "USB-C connector with support for Charging, DisplayPort, USB 3, 480Mb/s.",
        },
      ],
      specs: {
        chip: "A19 chip, 6-core CPU (2 performance + 4 efficiency), 5-core GPU, 16-core Neural Engine",
        display:
          "6.1-inch Super Retina XDR OLED, 2622 x 1206, ProMotion 1-120Hz, HDR, True Tone",
        camera:
          "48MP Fusion + 12MP Ultrawide, Photonic Engine, 4x optical-quality zoom",
        battery:
          "All-day battery, 25W MagSafe, 15W Qi2 wireless, 50% charge in 30 min",
        connectivity:
          "Wi-Fi 7, Bluetooth 5.4, NFC, Thread, UWB (2nd gen), Dual SIM (nano+eSIM)",
        dimensions: "5.81 x 2.73 in",
        weight: "170g",
        network: "5G Sub-6/mmWave, LTE, GSM/CDMA",
        sensors:
          "Face ID, Barometer, High dynamic range gyro, High-g accelerometer, Proximity sensor, Dual ambient light sensors",
        security: "Face ID, Emergency SOS, Crash Detection, Find My",
        accessibility:
          "Hearing Aid Compatible, RTT and TTY supported, VoiceOver, Zoom, Magnifier, Switch Control, Voice Control",
      },
    },
    accessories: [
      ...commonAccessories,
      {
        id: "acc-5",
        name: "MagSafe Charger",
        brand: "Apple",
        price: "$39.00",
        image: "/images/accessories/magsafe-charger.png",
      },
    ],
    badges: ["5G", "Apple Intelligence"],
    is5G: true,
    freeShipping: true,
  },
];
