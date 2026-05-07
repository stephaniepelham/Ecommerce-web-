import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly products: Product[] = [
    {
      id: '1',
      name: 'Echo Show 10 (3rd Gen)',
      description: '10.1" HD smart display with motion, premium speakers, and Alexa voice assistant for hands-free control.',
      category: 'Electronics',
      price: 249.99,
      inventory: 42,
      image: 'https://tse1.mm.bing.net/th?q=Echo+Show+10+3rd+Gen+product&w=640&h=640&c=7'
    },
    {
      id: '2',
      name: 'Apple AirPods Pro 2',
      description: 'Active noise cancellation, adaptive transparency, and personalized spatial audio with dynamic head tracking.',
      category: 'Audio',
      price: 249.00,
      inventory: 78,
      image: 'https://tse1.mm.bing.net/th?q=Apple+AirPods+Pro+2+product&w=640&h=640&c=7'
    },
    {
      id: '3',
      name: 'Nintendo Switch OLED Model',
      description: 'Portable gaming system with 7" OLED screen, enhanced audio, and a wide adjustable stand for tabletop play.',
      category: 'Gaming',
      price: 349.99,
      inventory: 36,
      image: 'https://tse1.mm.bing.net/th?q=Nintendo+Switch+OLED+Model+product&w=640&h=640&c=7'
    },
    {
      id: '4',
      name: 'Samsung 65" QLED 4K Smart TV',
      description: '4K QLED display with Quantum HDR, built-in voice assistant, and a slim bezel design for immersive viewing.',
      category: 'TV & Video',
      price: 899.99,
      inventory: 20,
      image: 'https://tse1.mm.bing.net/th?q=Samsung+65+QLED+4K+Smart+TV+product&w=640&h=640&c=7'
    },
    {
      id: '5',
      name: 'Kindle Paperwhite Signature Edition',
      description: 'Waterproof e-reader with adjustable warm light, wireless charging, and 32 GB storage for thousands of books.',
      category: 'Books',
      price: 189.99,
      inventory: 63,
      image: 'https://tse1.mm.bing.net/th?q=Kindle+Paperwhite+Signature+Edition+product&w=640&h=640&c=7'
    },
    {
      id: '6',
      name: 'Instant Pot Duo 7-in-1',
      description: 'Multi-use pressure cooker with 7 cooking modes for pressure cooking, slow cooking, rice cooking, steaming, sautéing, yogurt, and warming.',
      category: 'Kitchen',
      price: 89.99,
      inventory: 95,
      image: 'https://tse1.mm.bing.net/th?q=Instant+Pot+Duo+7+in+1+product&w=640&h=640&c=7'
    },
    {
      id: '7',
      name: 'Ninja Air Fryer XL',
      description: '4-quart air fryer with advanced cyclonic technology for crispy, flavorful results using little to no oil.',
      category: 'Kitchen',
      price: 129.99,
      inventory: 52,
      image: 'https://tse1.mm.bing.net/th?q=Ninja+Air+Fryer+XL+product&w=640&h=640&c=7'
    },
    {
      id: '8',
      name: 'Roku Streaming Stick 4K',
      description: 'Ultra HD streaming device with voice remote, Dolby Vision support, and access to thousands of channels.',
      category: 'Electronics',
      price: 49.99,
      inventory: 112,
      image: 'https://tse1.mm.bing.net/th?q=Roku+Streaming+Stick+4K+product&w=640&h=640&c=7'
    },
    {
      id: '9',
      name: 'Bose QuietComfort 45',
      description: 'Noise cancelling headphones with high-fidelity audio, up to 24 hours of battery life, and comfortable over-ear fit.',
      category: 'Audio',
      price: 329.00,
      inventory: 18,
      image: 'https://tse1.mm.bing.net/th?q=Bose+QuietComfort+45+product&w=640&h=640&c=7'
    },
    {
      id: '10',
      name: 'Apple Watch Series 9',
      description: 'GPS smartwatch with blood oxygen, ECG app, and all-day activity tracking in a sleek aluminum case.',
      category: 'Wearables',
      price: 399.00,
      inventory: 34,
      image: 'https://tse1.mm.bing.net/th?q=Apple+Watch+Series+9+product&w=640&h=640&c=7'
    },
    {
      id: '11',
      name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
      description: 'Industry-leading noise cancellation with premium sound, touch controls, and up to 30 hours of battery life.',
      category: 'Audio',
      price: 348.00,
      inventory: 28,
      image: 'https://tse1.mm.bing.net/th?q=Sony+WH-1000XM5+Wireless+Noise+Cancelling+Headphones+product&w=640&h=640&c=7'
    },
    {
      id: '12',
      name: 'Oculus Quest 2',
      description: 'All-in-one VR headset with immersive gaming, 128 GB storage, and wireless freedom.',
      category: 'Gaming',
      price: 299.99,
      inventory: 46,
      image: 'https://tse1.mm.bing.net/th?q=Oculus+Quest+2+product&w=640&h=640&c=7'
    },
    {
      id: '13',
      name: 'Beats Studio3 Wireless Headphones',
      description: 'Acoustic noise cancelling over-ear headphones with fine-tuned clarity and premium comfort.',
      category: 'Audio',
      price: 249.99,
      inventory: 55,
      image: 'https://tse1.mm.bing.net/th?q=Beats+Studio3+Wireless+Headphones+product&w=640&h=640&c=7'
    },
    {
      id: '14',
      name: 'Apple MacBook Air M2',
      description: '13-inch laptop with Apple M2 chip, vivid Retina display, long battery life, and silent fanless design.',
      category: 'Computers',
      price: 1199.00,
      inventory: 14,
      image: 'https://tse1.mm.bing.net/th?q=Apple+MacBook+Air+M2+product&w=640&h=640&c=7'
    },
    {
      id: '15',
      name: 'Dell XPS 13',
      description: 'Compact 13-inch laptop with InfinityEdge display, Intel Core i7 processor, and premium aluminum finish.',
      category: 'Computers',
      price: 1049.99,
      inventory: 23,
      image: 'https://tse1.mm.bing.net/th?q=Dell+XPS+13+product&w=640&h=640&c=7'
    },
    {
      id: '16',
      name: 'Anker 65W USB-C Charger',
      description: 'Compact GaN charger with two USB-C and one USB-A port for fast charging laptops, phones, and tablets.',
      category: 'Electronics',
      price: 39.99,
      inventory: 135,
      image: 'https://tse1.mm.bing.net/th?q=Anker+65W+USB-C+Charger+product&w=640&h=640&c=7'
    },
    {
      id: '17',
      name: 'Logitech MX Master 3S Wireless Mouse',
      description: 'Advanced wireless mouse with ergonomic design, precision scrolling, and customizable controls.',
      category: 'Computers',
      price: 99.99,
      inventory: 65,
      image: 'https://tse1.mm.bing.net/th?q=Logitech+MX+Master+3S+Wireless+Mouse+product&w=640&h=640&c=7'
    },
    {
      id: '18',
      name: 'HP Envy 6055e All-in-One Printer',
      description: 'Wireless printer with seamless mobile printing, automatic two-sided printing, and easy setup.',
      category: 'Office',
      price: 129.99,
      inventory: 49,
      image: 'https://tse1.mm.bing.net/th?q=HP+Envy+6055e+All-in-One+Printer+product&w=640&h=640&c=7'
    },
    {
      id: '19',
      name: 'Kindle Oasis 10th Generation',
      description: 'Premium e-reader with ergonomic design, adjustable warm light, and waterproofing for reading anywhere.',
      category: 'Books',
      price: 249.99,
      inventory: 31,
      image: 'https://tse1.mm.bing.net/th?q=Kindle+Oasis+10th+Generation+product&w=640&h=640&c=7'
    },
    {
      id: '20',
      name: 'Fujifilm Instax Mini 11 Camera',
      description: 'Instant film camera with automatic exposure, selfie mode, and fun pastel color options.',
      category: 'Photography',
      price: 69.99,
      inventory: 88,
      image: 'https://tse1.mm.bing.net/th?q=Fujifilm+Instax+Mini+11+Camera+product&w=640&h=640&c=7'
    },
    {
      id: '21',
      name: 'Breville Barista Express Espresso Machine',
      description: 'Semi-automatic espresso machine with built-in grinder and digital temperature control for café-quality drinks.',
      category: 'Kitchen',
      price: 699.95,
      inventory: 19,
      image: 'https://tse1.mm.bing.net/th?q=Breville+Barista+Express+Espresso+Machine+product&w=640&h=640&c=7'
    },
    {
      id: '22',
      name: 'Dyson V11 Torque Drive Cordless Vacuum',
      description: 'High-performance cordless vacuum with intelligent suction modes and up to 60 minutes run time.',
      category: 'Home',
      price: 599.99,
      inventory: 27,
      image: 'https://tse1.mm.bing.net/th?q=Dyson+V11+Torque+Drive+Cordless+Vacuum+product&w=640&h=640&c=7'
    },
    {
      id: '23',
      name: 'iRobot Roomba 694 Robot Vacuum',
      description: 'Wi-Fi connected robot vacuum with personalized cleaning recommendations and 3-stage cleaning system.',
      category: 'Home',
      price: 274.99,
      inventory: 41,
      image: 'https://tse1.mm.bing.net/th?q=iRobot+Roomba+694+Robot+Vacuum+product&w=640&h=640&c=7'
    },
    {
      id: '24',
      name: 'Philips Hue White and Color Ambiance Starter Kit',
      description: 'Smart bulbs with millions of colors, app control, and voice compatibility with Alexa, Google Assistant, and Siri.',
      category: 'Smart Home',
      price: 179.99,
      inventory: 60,
      image: 'https://tse1.mm.bing.net/th?q=Philips+Hue+White+and+Color+Ambiance+Starter+Kit+product&w=640&h=640&c=7'
    },
    {
      id: '25',
      name: 'Ring Video Doorbell 4',
      description: 'Battery-powered HD video doorbell with color pre-roll and quick replies to help protect your home.',
      category: 'Smart Home',
      price: 199.99,
      inventory: 48,
      image: 'https://tse1.mm.bing.net/th?q=Ring+Video+Doorbell+4+product&w=640&h=640&c=7'
    },
    {
      id: '26',
      name: 'Fitbit Charge 6',
      description: 'Fitness tracker with ECG app, sleep tracking, built-in GPS, and up to 7 days battery life.',
      category: 'Wearables',
      price: 179.95,
      inventory: 71,
      image: 'https://tse1.mm.bing.net/th?q=Fitbit+Charge+6+product&w=640&h=640&c=7'
    },
    {
      id: '27',
      name: 'Theragun Prime Percussive Therapy Device',
      description: 'Deep muscle treatment device with pressure sensor and 4-speed options for post-workout recovery.',
      category: 'Health',
      price: 299.00,
      inventory: 33,
      image: 'https://tse1.mm.bing.net/th?q=Theragun+Prime+Percussive+Therapy+Device+product&w=640&h=640&c=7'
    },
    {
      id: '28',
      name: 'Hydro Flask 32oz Wide Mouth Water Bottle',
      description: 'Insulated stainless steel bottle that keeps drinks cold up to 24 hours and hot up to 12 hours.',
      category: 'Outdoors',
      price: 44.95,
      inventory: 105,
      image: 'https://tse1.mm.bing.net/th?q=Hydro+Flask+32oz+Wide+Mouth+Water+Bottle+product&w=640&h=640&c=7'
    },
    {
      id: '29',
      name: 'Coleman Sundome 4-Person Tent',
      description: 'Easy-set tent with WeatherTec system, roomy interior, and ground vent for reliable camping comfort.',
      category: 'Outdoors',
      price: 129.99,
      inventory: 39,
      image: 'https://tse1.mm.bing.net/th?q=Coleman+Sundome+4-Person+Tent+product&w=640&h=640&c=7'
    },
    {
      id: '30',
      name: 'Ninja Professional 72oz Blender',
      description: 'Powerful blender with Total Crushing Technology for smoothies, frozen drinks, and puree-ready recipes.',
      category: 'Kitchen',
      price: 99.99,
      inventory: 47,
      image: 'https://tse1.mm.bing.net/th?q=Ninja+Professional+72oz+Blender+product&w=640&h=640&c=7'
    },
    {
      id: '31',
      name: 'Le Creuset Signature Enameled Cast Iron Dutch Oven',
      description: 'Classic 5.5-quart Dutch oven with durable enamel finish for slow-simmered soups and roasts.',
      category: 'Kitchen',
      price: 329.95,
      inventory: 16,
      image: 'https://tse1.mm.bing.net/th?q=Le+Creuset+Signature+Enameled+Cast+Iron+Dutch+Oven+product&w=640&h=640&c=7'
    },
    {
      id: '32',
      name: 'Keurig K-Elite Coffee Maker',
      description: 'Single serve coffee maker with iced setting, hot water on demand, and multiple cup sizes.',
      category: 'Kitchen',
      price: 129.99,
      inventory: 77,
      image: 'https://tse1.mm.bing.net/th?q=Keurig+K-Elite+Coffee+Maker+product&w=640&h=640&c=7'
    },
    {
      id: '33',
      name: 'All-new Echo Dot (5th Gen)',
      description: 'Compact smart speaker with crisp vocals, deep bass, and Alexa for everyday help at home.',
      category: 'Electronics',
      price: 49.99,
      inventory: 134,
      image: 'https://tse1.mm.bing.net/th?q=Echo+Dot+5th+Gen+product&w=640&h=640&c=7'
    },
    {
      id: '34',
      name: 'Bose SoundLink Revolve+',
      description: 'Portable Bluetooth speaker with 360-degree sound and up to 16 hours of battery life.',
      category: 'Audio',
      price: 299.00,
      inventory: 24,
      image: 'https://tse1.mm.bing.net/th?q=Bose+SoundLink+Revolve+Plus+product&w=640&h=640&c=7'
    },
    {
      id: '35',
      name: 'Panasonic Lumix ZS70 Travel Camera',
      description: 'Bridge camera with 4K video, 30x optical zoom, and flip touchscreen for travel photography.',
      category: 'Photography',
      price: 449.99,
      inventory: 13,
      image: 'https://tse1.mm.bing.net/th?q=Panasonic+Lumix+ZS70+Travel+Camera+product&w=640&h=640&c=7'
    },
    {
      id: '36',
      name: 'Garmin Forerunner 55 GPS Running Watch',
      description: 'Easy-to-use watch with daily suggested workouts, hydration reminders, and heart rate tracking.',
      category: 'Wearables',
      price: 199.99,
      inventory: 40,
      image: 'https://tse1.mm.bing.net/th?q=Garmin+Forerunner+55+GPS+Running+Watch+product&w=640&h=640&c=7'
    },
    {
      id: '37',
      name: 'Samsung Galaxy S23',
      description: 'Flagship smartphone with 50MP camera, 120Hz display, and sleek metal/glass design.',
      category: 'Cell Phones',
      price: 799.99,
      inventory: 29,
      image: 'https://tse1.mm.bing.net/th?q=Samsung+Galaxy+S23+product&w=640&h=640&c=7'
    },
    {
      id: '38',
      name: 'Anker Soundcore Liberty Air 2 Pro',
      description: 'True wireless earbuds with noise cancellation, transparency mode, and 26-hour total playback.',
      category: 'Audio',
      price: 129.99,
      inventory: 49,
      image: 'https://tse1.mm.bing.net/th?q=Anker+Soundcore+Liberty+Air+2+Pro+product&w=640&h=640&c=7'
    },
    {
      id: '39',
      name: 'Roomba i3+ (3550) Robot Vacuum with Automatic Dirt Disposal',
      description: 'Smart robot vacuum that empties itself and works with Alexa and Google Assistant.',
      category: 'Home',
      price: 549.99,
      inventory: 14,
      image: 'https://tse1.mm.bing.net/th?q=Roomba+i3+3550+Robot+Vacuum+Automatic+Dirt+Disposal+product&w=640&h=640&c=7'
    },
    {
      id: '40',
      name: 'Bissell CrossWave Floor and Carpet Cleaner',
      description: 'Wet-dry vacuum that cleans floors and area rugs simultaneously for multi-surface cleaning.',
      category: 'Home',
      price: 229.99,
      inventory: 38,
      image: 'https://tse1.mm.bing.net/th?q=Bissell+CrossWave+Floor+and+Carpet+Cleaner+product&w=640&h=640&c=7'
    },
    {
      id: '41',
      name: 'Echo Dot Kids Edition',
      description: 'Kid-friendly smart speaker with parental controls, fun content, and a protective case.',
      category: 'Electronics',
      price: 59.99,
      inventory: 90,
      image: 'https://tse1.mm.bing.net/th?q=Echo+Dot+Kids+Edition+product&w=640&h=640&c=7'
    },
    {
      id: '42',
      name: 'TP-Link Archer AX50 Wi-Fi 6 Router',
      description: 'Dual-band router with gigabit speeds, OFDMA, and easy setup via the Tether app.',
      category: 'Networking',
      price: 129.99,
      inventory: 58,
      image: 'https://tse1.mm.bing.net/th?q=TP-Link+Archer+AX50+Wi-Fi+6+Router+product&w=640&h=640&c=7'
    },
    {
      id: '43',
      name: 'Lenovo IdeaPad 3 15-inch Laptop',
      description: 'Affordable laptop with AMD Ryzen processor, full HD display, and lightweight design.',
      category: 'Computers',
      price: 449.99,
      inventory: 34,
      image: 'https://tse1.mm.bing.net/th?q=Lenovo+IdeaPad+3+15-inch+Laptop+product&w=640&h=640&c=7'
    },
    {
      id: '44',
      name: 'Samsung T7 Portable SSD 1TB',
      description: 'Fast USB 3.2 external SSD with robust metal casing and AES 256-bit encryption.',
      category: 'Computers',
      price: 139.99,
      inventory: 76,
      image: 'https://tse1.mm.bing.net/th?q=Samsung+T7+Portable+SSD+1TB+product&w=640&h=640&c=7'
    },
    {
      id: '45',
      name: 'Eufy Smart Lock Touch',
      description: 'Fingerprint door lock with touch-to-open access and app-based control.',
      category: 'Smart Home',
      price: 199.99,
      inventory: 26,
      image: 'https://tse1.mm.bing.net/th?q=Eufy+Smart+Lock+Touch+product&w=640&h=640&c=7'
    },
    {
      id: '46',
      name: 'Nespresso VertuoPlus Coffee and Espresso Machine',
      description: 'Automatic coffee machine with centering flow, flexible brew sizes, and fast heat-up.',
      category: 'Kitchen',
      price: 159.00,
      inventory: 29,
      image: 'https://tse1.mm.bing.net/th?q=Nespresso+VertuoPlus+Coffee+and+Espresso+Machine+product&w=640&h=640&c=7'
    },
    {
      id: '47',
      name: 'Google Pixel 8',
      description: 'Smartphone with advanced camera system, Google AI features, and clean Android experience.',
      category: 'Cell Phones',
      price: 699.00,
      inventory: 22,
      image: 'https://tse1.mm.bing.net/th?q=Google+Pixel+8+product&w=640&h=640&c=7'
    },
    {
      id: '48',
      name: 'JBL Flip 6 Portable Bluetooth Speaker',
      description: 'Waterproof speaker with high-output audio, USB-C charging, and up to 12 hours of playback.',
      category: 'Audio',
      price: 129.95,
      inventory: 81,
      image: 'https://tse1.mm.bing.net/th?q=JBL+Flip+6+Portable+Bluetooth+Speaker+product&w=640&h=640&c=7'
    },
    {
      id: '49',
      name: 'Moleskine Classic Hardcover Notebook',
      description: 'Premium ruled notebook with ivory paper, elastic closure, and ribbon bookmark for work or school.',
      category: 'Office',
      price: 19.95,
      inventory: 172,
      image: 'https://tse1.mm.bing.net/th?q=Moleskine+Classic+Hardcover+Notebook+product&w=640&h=640&c=7'
    },
    {
      id: '50',
      name: 'Ugg Classic Mini II Boots',
      description: 'Comfortable shearling-lined boots with durable waterproof leather for everyday cold-weather wear.',
      category: 'Apparel',
      price: 149.95,
      inventory: 39,
      image: 'https://tse1.mm.bing.net/th?q=Ugg+Classic+Mini+II+Boots+product&w=640&h=640&c=7'
    },
    {
      id: '51',
      name: 'Sony PlayStation 5 Console',
      description: 'Next-gen gaming console with stunning ray-traced graphics, fast loading times, and immersive haptic feedback.',
      category: 'Gaming',
      price: 499.99,
      inventory: 12,
      image: 'https://tse1.mm.bing.net/th?q=Sony+PlayStation+5+Console+product&w=640&h=640&c=7'
    },
    {
      id: '52',
      name: 'Dyson Airwrap Multi-Styler Complete',
      description: 'All-in-one hair styler with intelligent heat control and multiple attachments for blow-drying, curling, and smoothing.',
      category: 'Beauty',
      price: 549.99,
      inventory: 17,
      image: 'https://tse1.mm.bing.net/th?q=Dyson+Airwrap+Multi-Styler+Complete+product&w=640&h=640&c=7'
    }
  ];

  getProducts(): Product[] {
    return this.products.map((product) => ({ ...product }));
  }

  getProductById(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  searchProducts(query: string): Product[] {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return this.getProducts();
    }

    return this.products.filter((product) =>
      product.name.toLowerCase().includes(normalized) ||
      product.category.toLowerCase().includes(normalized) ||
      product.description.toLowerCase().includes(normalized)
    );
  }
}