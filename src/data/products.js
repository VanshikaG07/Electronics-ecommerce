export const products = [
    {
        id: 1,
        name: "MacBook Pro 16",
        category: "laptops",
        price: 2499,
        rating: 4.8,
        reviews: 124,
        image: "https://th.bing.com/th/id/OIP.1ws4h-L1hP1QBuL1dvT6AQHaEo?w=292&h=182&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
        images: [
            "https://th.bing.com/th/id/OIP.1ws4h-L1hP1QBuL1dvT6AQHaEo?w=292&h=182&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
            "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://th.bing.com/th/id/OIP.K25E8dOfJ7yzpYXy7TA66gHaFu?w=232&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
        ],
        description: "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast.",
        features: [
            "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU, and machine learning performance",
            "Up to 21-hour battery life to go longer than ever",
            "16-inch Liquid Retina XDR display with extreme dynamic range and contrast ratio",
            "1080p FaceTime HD camera with advanced image signal processor for sharper video calls",
            "Six-speaker sound system with force-cancelling woofers"
        ],
        specs: {
            processor: "Apple M1 Pro",
            ram: "16GB Unified Memory",
            storage: "512GB SSD",
            display: "16-inch Liquid Retina XDR",
            ports: "3x Thunderbolt 4, HDMI, SDXC, MagSafe 3",
            weight: "4.7 lbs (2.1 kg)"
        },
        inBox: ["16-inch MacBook Pro", "140W USB-C Power Adapter", "USB-C to MagSafe 3 Cable (2m)"],
        isNew: true,
        isBestSeller: true
    },
    {
        id: 2,
        name: "iPhone 14 Pro",
        category: "phones",
        price: 999,
        rating: 4.9,
        reviews: 856,
        image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://th.bing.com/th/id/OIP.ejmrd9_kjvV5NMshgoAt5QHaHa?w=165&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative 48MP Main camera. And a display that’s up to 2x brighter in the sun. All powered by the ultimate smartphone chip.",
        features: [
            "Dynamic Island, a magical new way to interact with iPhone",
            "48MP Main camera for up to 4x greater resolution",
            "Cinematic mode now in 4K Dolby Vision up to 30 fps",
            "Action mode for smooth, steady, handheld videos",
            "Vital safety technology — Crash Detection calls for help when you can’t"
        ],
        specs: {
            processor: "A16 Bionic chip",
            ram: "6GB",
            storage: "128GB",
            display: "6.1-inch Super Retina XDR",
            camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
            battery: "Up to 23 hours video playback"
        },
        inBox: ["iPhone with iOS 16", "USB-C to Lightning Cable", "Documentation"],
        isNew: true,
        isBestSeller: true
    },
    {
        id: 3,
        name: "Sony WH-1000XM5",
        category: "audio",
        price: 348,
        rating: 4.7,
        reviews: 342,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://down-my.img.susercontent.com/file/my-11134207-7r98r-ll5vcyw7i8odc6",
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "The WH-1000XM5 headphones rewrite the rules for distraction-free listening. 2 processors control 8 microphones for unprecedented noise cancellation and exceptional call quality. With a newly developed driver, DSEE - Extreme and Hi-Res audio support the WH-1000XM5 headphones provide awe-inspiring audio quality.",
        features: [
            "Industry-leading noise cancellation optimized to you",
            "Magnificent Sound, engineered to perfection",
            "Crystal clear hands-free calling",
            "Up to 30-hour battery life with quick charging (3 min charge for 3 hours of playback)",
            "Ultra-comfortable, lightweight design with soft fit leather"
        ],
        specs: {
            type: "Over-ear",
            battery: "30 hours (NC On), 40 hours (NC Off)",
            connectivity: "Bluetooth 5.2",
            noiseCancelling: "Yes, Auto NC Optimizer",
            weight: "250g",
            driverUnit: "30mm"
        },
        inBox: ["Headphones", "Carrying Case", "Connection Cable", "USB Cable"],
        isNew: false,
        isBestSeller: true
    },
    {
        id: 4,
        name: "iPad Air 5",
        category: "tablets",
        price: 599,
        rating: 4.8,
        reviews: 215,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://th.bing.com/th/id/OIP.YBaeVLQSc_BslefqashhFQHaFn?w=235&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
        ],
        description: "Light. Bright. Full of might. Turbocharged by the Apple M1 chip. 12MP Ultra Wide front camera with Center Stage. Blazing-fast 5G. Available in five gorgeous colors.",
        features: [
            "10.9-inch Liquid Retina display with True Tone, P3 wide color, and an antireflective coating",
            "Apple M1 chip with Neural Engine",
            "12MP Wide camera",
            "12MP Ultra Wide front camera with Center Stage",
            "Touch ID for secure authentication and Apple Pay"
        ],
        specs: {
            processor: "Apple M1",
            ram: "8GB",
            storage: "64GB",
            display: "10.9-inch Liquid Retina",
            camera: "12MP Wide, 12MP Ultra Wide Front",
            connector: "USB-C"
        },
        inBox: ["iPad Air", "USB-C Charge Cable (1 meter)", "20W USB-C Power Adapter"],
        isNew: false,
        isBestSeller: false
    },
    {
        id: 5,
        name: "Dell XPS 13",
        category: "laptops",
        price: 1199,
        rating: 4.5,
        reviews: 89,
        image: "https://th.bing.com/th/id/OIP.F9w6Noj8MFo-H40Gxk17AwHaEK?w=319&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
        images: [
            "https://th.bing.com/th/id/OIP.F9w6Noj8MFo-H40Gxk17AwHaEK?w=319&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.Ubc2n1lxKBDJVVYs9kDrTwHaFj?w=290&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
            "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://i1.wp.com/laptopmedia.com/wp-content/uploads/2017/08/Dell-XPS-13-9343-4.jpeg?fit=1200,795&ssl=1"
        ],
        description: "The XPS 13 is thin and light, with a long battery life and a stunning display. It's the perfect laptop for students and professionals alike. Precision crafted from CNC machined aluminum and carbon fiber.",
        features: [
            "Stunning 4-sided InfinityEdge display",
            "11th Gen Intel Core processors",
            "Intel Iris Xe Graphics",
            "Killer Wi-Fi 6 AX1650 (2x2) and Bluetooth 5.1",
            "Fingerprint Reader integrated into power button"
        ],
        specs: {
            processor: "Intel Core i7-1185G7",
            ram: "16GB LPDDR4x",
            storage: "512GB M.2 PCIe NVMe SSD",
            display: "13.4-inch FHD+ (1920 x 1200) InfinityEdge",
            weight: "2.64 lbs (1.2 kg)",
            os: "Windows 11 Home"
        },
        inBox: ["Dell XPS 13 Laptop", "45W USB-C AC Adapter", "USB-C to USB-A 3.0 adapter"],
        isNew: false,
        isBestSeller: false
    },
    {
        id: 6,
        name: "Samsung Galaxy S23 Ultra",
        category: "phones",
        price: 1199,
        rating: 4.8,
        reviews: 450,
        image: "https://th.bing.com/th/id/OIP.HMyxEg0-6oanBDD27fPrzQHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
        images: [
            "https://th.bing.com/th/id/OIP.HMyxEg0-6oanBDD27fPrzQHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
            "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://th.bing.com/th/id/OIP.V1mm04B0UR_hqSaMmNPq5QHaGF?w=268&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.YVf86e5XRGAi-7vXrU8lLwHaFj?w=240&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
        ],
        description: "Galaxy S23 Ultra is the ultimate smartphone. With a 200MP camera, S Pen, and a massive battery, it's designed to help you do more. Nightography captures epic photos and videos even in the dark.",
        features: [
            "200MP Wide-angle Camera",
            "Embedded S Pen for note taking and drawing",
            "Snapdragon 8 Gen 2 Mobile Platform for Galaxy",
            "Long-lasting 5,000mAh battery",
            "Dynamic AMOLED 2X display with 120Hz refresh rate"
        ],
        specs: {
            processor: "Snapdragon 8 Gen 2",
            ram: "12GB",
            storage: "256GB",
            display: "6.8-inch Dynamic AMOLED 2X",
            camera: "200MP + 10MP + 10MP + 12MP",
            battery: "5000mAh"
        },
        inBox: ["Galaxy S23 Ultra", "Data Cable", "Ejection Pin"],
        isNew: true,
        isBestSeller: true
    },
    {
        id: 7,
        name: "Apple Watch Ultra",
        category: "accessories",
        price: 799,
        rating: 4.9,
        reviews: 156,
        image: "https://th.bing.com/th/id/OIP.jRtGNEhDtY5qLXD7V75bVQHaHa?w=185&h=185&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
        images: [
            "https://th.bing.com/th/id/OIP.jRtGNEhDtY5qLXD7V75bVQHaHa?w=185&h=185&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.kvNzdJFTvr7bbqS9EdWpYwHaE8?w=240&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.5o4o4jsEGg4fuf-TiZHN5QHaEK?w=281&h=182&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.OuKWRm5mu6FR3LGkPVCBTQHaHa?w=89&h=89&c=1&rs=1&qlt=70&r=0&o=7&dpr=1.4&pid=InlineBlock&rm=3"
        ],
        description: "The most rugged and capable Apple Watch ever, designed for exploration, adventure, and endurance. With a 49mm aerospace-grade titanium case, extra-long battery life, specialized apps that work with the advanced sensors, and a new customizable Action button.",
        features: [
            "49mm titanium case for ruggedness and corrosion resistance",
            "Largest, brightest Apple Watch display ever",
            "Up to 36 hours of battery life",
            "Precision dual-frequency GPS",
            "Water resistant 100m"
        ],
        specs: {
            processor: "S8 SiP with 64-bit dual-core processor",
            case: "Titanium",
            connectivity: "LTE and UMTS, Wi-Fi, Bluetooth 5.3",
            battery: "Up to 36 hours",
            display: "Always-On Retina display"
        },
        inBox: ["Apple Watch Ultra", "Alpine Loop", "Apple Watch Magnetic Fast Charger to USB-C Cable"],
        isNew: true,
        isBestSeller: true
    },
    {
        id: 8,
        name: "Samsung Galaxy Watch 6",
        category: "accessories",
        price: 299,
        rating: 4.6,
        reviews: 89,
        image: "https://th.bing.com/th/id/OIP.XWUPDvAVXhOVfRJh2vu8VwHaEK?w=329&h=185&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
        images: [
            "https://th.bing.com/th/id/OIP.XWUPDvAVXhOVfRJh2vu8VwHaEK?w=329&h=185&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.tOzo63Ce6pEfCnr4d9DkggHaEK?w=263&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.Q44eI_7-S56ci5227bMiMQHaEK?w=318&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.g9T5iar7GMiHeZM0L9aOngHaEK?w=263&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
        ],
        description: "Start your everyday wellness journey with Galaxy Watch6. It features a 20% larger display, a slimmer bezel and a new one-click band system. Keep track of your sleep and heart health with advanced sensors.",
        features: [
            "20% larger display and 30% slimmer bezel",
            "Advanced Sleep Coaching",
            "Personalized Heart Rate Zone",
            "Sapphire Crystal glass durability",
            "One-Click band system"
        ],
        specs: {
            processor: "Exynos W930",
            case: "Armor Aluminum",
            connectivity: "Bluetooth 5.3, Wi-Fi, NFC, GPS",
            battery: "Up to 40 hours",
            display: "Super AMOLED"
        },
        inBox: ["Galaxy Watch6", "Sport Band", "Fast Wireless Charger"],
        isNew: true,
        isBestSeller: false
    },
    {
        id: 9,
        name: "Canon EOS R5",
        category: "cameras",
        price: 3899,
        rating: 4.9,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1624823183483-365437cb4205?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1624823183483-365437cb4205?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://th.bing.com/th/id/OIP.xWjIf98VPG5HKx_kiiSp6AHaEK?w=329&h=185&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
            "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "The EOS R5 lets you be creative in ways you couldn’t before. Capture 45 megapixel photos at up to 20 frames per second, or cinematic 12 bit 8K RAW video using the entire width of the camera’s sensor. Advanced AF is programmed using deep-learning artificial intelligence.",
        features: [
            "45MP Full-Frame CMOS Sensor",
            "8K30 Raw and 4K120 10-Bit Internal Video",
            "Sensor-Shift 5-Axis Image Stabilization",
            "12 fps Mech. Shutter, 20 fps E. Shutter",
            "Dual Pixel CMOS AF II with 1053 Points"
        ],
        specs: {
            sensor: "45MP Full-Frame CMOS",
            video: "8K RAW, 4K 120p",
            stabilization: "In-body 5-axis",
            connectivity: "Wi-Fi & Bluetooth",
            iso: "100-51200 (Exp: 102400)"
        },
        inBox: ["EOS R5 Body", "Battery Pack LP-E6NH", "Battery Charger LC-E6", "Strap"],
        isNew: false,
        isBestSeller: false
    },
    {
        id: 10,
        name: "Sony A7 IV",
        category: "cameras",
        price: 2498,
        rating: 4.8,
        reviews: 112,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://th.bing.com/th/id/OIP.eKtTIKfAYIZ6D49WSmZJIAHaEK?w=307&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
            "https://images.unsplash.com/photo-1519638831568-d9897f54ed69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1500634245200-e5245c7574ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "An ideal hybrid, the Alpha 7 IV has the sensor resolution and AF performance that appeals to photographers along with robust 4K 60p video recording for filmmakers and content creators. Newly developed 33MP Exmor R CMOS sensor.",
        features: [
            "33MP Full-Frame Exmor R CMOS Sensor",
            "Up to 10 fps Shooting, ISO 100-51200",
            "4K 60p Video in 10-Bit, S-Cinetone",
            "3.68m-Dot EVF with 120 fps Refresh Rate",
            "Real-time Eye AF for humans, animals, birds"
        ],
        specs: {
            sensor: "33MP Full-Frame Exmor R CMOS",
            video: "4K 60p 10-Bit",
            stabilization: "In-body 5-axis",
            connectivity: "Wi-Fi & Bluetooth",
            iso: "100-51200"
        },
        inBox: ["Sony Alpha a7 IV Body", "Rechargeable Battery NP-FZ100", "AC Adapter", "Shoulder Strap"],
        isNew: true,
        isBestSeller: true
    },
    {
        id: 11,
        name: "ASUS ROG Zephyrus G14",
        category: "laptops",
        price: 1499,
        rating: 4.7,
        reviews: 230,
        image: "https://th.bing.com/th/id/OIP.y7xsZPHlolexfLFsG1xXYQHaHa?w=188&h=188&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
        images: [
            "https://th.bing.com/th/id/OIP.y7xsZPHlolexfLFsG1xXYQHaHa?w=188&h=188&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.ND7agCoEHFQt3BCrSCccCwHaGg?w=212&h=187&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.0oZqkLoPgyK4aNrX3qA4FQHaEg?w=303&h=185&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.-_12AXeMJ03hnOLdZuIVxwHaEK?w=298&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
        ],
        description: "Dynamic and ready to travel, the pioneering ROG Zephyrus G14 is the world's most powerful 14-inch Windows 10 Pro gaming laptop. Outclass the competition with up to an 8-core AMD Ryzen™ 9 4900HS CPU and potent GeForce RTX™ 2060 GPU that speed through everyday multitasking and gaming.",
        features: [
            "AMD Ryzen 9 4900HS Processor",
            "NVIDIA GeForce RTX 2060 Max-Q",
            "14-inch Full HD 120Hz IPS-level display",
            "Magnesium-alloy keyboard frame",
            "Quad speakers with Dolby Atmos technology"
        ],
        specs: {
            processor: "AMD Ryzen 9 4900HS",
            ram: "16GB DDR4",
            storage: "1TB M.2 NVMe PCIe 3.0 SSD",
            display: "14-inch FHD (1920 x 1080) 120Hz",
            graphics: "NVIDIA GeForce RTX 2060 Max-Q",
            weight: "3.53 lbs (1.60 kg)"
        },
        inBox: ["ROG Zephyrus G14", "AC Adapter", "User Documentation"],
        isNew: false,
        isBestSeller: true
    },
    {
        id: 12,
        name: "AirPods Pro 2",
        category: "audio",
        price: 249,
        rating: 4.8,
        reviews: 1250,
        image: "https://th.bing.com/th/id/OIP.jMQgwCqMdQV7XBfxyScmtwHaF7?w=208&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
        images: [
            "https://th.bing.com/th/id/OIP.jMQgwCqMdQV7XBfxyScmtwHaF7?w=208&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
            "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "AirPods Pro feature up to 2x more Active Noise Cancellation, plus Adaptive Transparency, and Personalized Spatial Audio with dynamic head tracking for immersive sound. Now with multiple ear tips (XS, S, M, L) and up to 6 hours of listening time.",
        features: [
            "Active Noise Cancellation reduces unwanted background noise",
            "Adaptive Transparency lets outside sounds in while reducing loud environmental noise",
            "Personalized Spatial Audio with dynamic head tracking",
            "Touch control lets you swipe to adjust volume",
            "MagSafe Charging Case with Speaker and Lanyard Loop"
        ],
        specs: {
            type: "In-ear",
            battery: "Up to 6 hours listening time",
            connectivity: "Bluetooth 5.3",
            chip: "H2 headphone chip",
            waterResistance: "IPX4 sweat and water resistant"
        },
        inBox: ["AirPods Pro", "MagSafe Charging Case", "Silicone ear tips (4 sizes)", "Lightning to USB-C Cable"],
        isNew: true,
        isBestSeller: true
    }
];

export const categories = [
    { id: 'laptops', name: 'Laptops', image: 'https://th.bing.com/th/id/OIP.1ws4h-L1hP1QBuL1dvT6AQHaEo?w=292&h=182&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3' },
    { id: 'phones', name: 'Smartphones', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'tablets', name: 'Tablets', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'accessories', name: 'Accessories', image: 'https://th.bing.com/th/id/OIP.aUo0PfevfU0vlCm5U_WtLAHaHa?w=182&h=182&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3' },
    { id: 'cameras', name: 'Cameras', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'audio', name: 'Audio', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
];
