import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly products: Product[] = [
    {
      id: '1',
      name: 'Echo Show 10 (3rd Gen)',
      description: '10.1\" HD smart display with motion, premium speakers, and Alexa voice assistant for hands-free control.',
      category: 'Electronics',
      price: 249.99,
      inventory: 42,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '2',
      name: 'Apple AirPods Pro 2',
      description: 'Active noise cancellation, adaptive transparency, and personalized spatial audio with dynamic head tracking.',
      category: 'Audio',
      price: 249.00,
      inventory: 78,
      image: 'https://images.unsplash.com/photo-1512499617640-c2f99956c29d?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '3',
      name: 'Nintendo Switch OLED Model',
      description: 'Portable gaming system with 7\" OLED screen, enhanced audio, and a wide adjustable stand for tabletop play.',
      category: 'Gaming',
      price: 349.99,
      inventory: 36,
      image: 'https://images.unsplash.com/photo-1606813909125-4d606b23d6b7?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '4',
      name: 'Samsung 65\" QLED 4K Smart TV',
      description: '4K QLED display with Quantum HDR, built-in voice assistant, and a slim bezel design for immersive viewing.',
      category: 'TV & Video',
      price: 899.99,
      inventory: 20,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '5',
      name: 'Kindle Paperwhite Signature Edition',
      description: 'Waterproof e-reader with adjustable warm light, wireless charging, and 32 GB storage for thousands of books.',
      category: 'Books',
      price: 189.99,
      inventory: 63,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '6',
      name: 'Instant Pot Duo 7-in-1',
      description: 'Multi-use pressure cooker with 7 cooking modes for pressure cooking, slow cooking, rice cooking, steaming, sautéing, yogurt, and warming.',
      category: 'Kitchen',
      price: 89.99,
      inventory: 95,
      image: 'https://images.unsplash.com/photo-1511689660979-5be60c809e20?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '7',
      name: 'Ninja Air Fryer XL',
      description: '4-quart air fryer with advanced cyclonic technology for crispy, flavorful results using little to no oil.',
      category: 'Kitchen',
      price: 129.99,
      inventory: 52,
      image: 'https://images.unsplash.com/photo-1511689660979-5be60c809e20?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '8',
      name: 'Roku Streaming Stick 4K',
      description: 'Ultra HD streaming device with voice remote, Dolby Vision support, and access to thousands of channels.',
      category: 'Electronics',
      price: 49.99,
      inventory: 112,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '9',
      name: 'Bose QuietComfort 45',
      description: 'Noise cancelling headphones with high-fidelity audio, up to 24 hours of battery life, and comfortable over-ear fit.',
      category: 'Audio',
      price: 329.00,
      inventory: 18,
      image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '10',
      name: 'Apple Watch Series 9',
      description: 'GPS smartwatch with blood oxygen, ECG app, and all-day activity tracking in a sleek aluminum case.',
      category: 'Wearables',
      price: 399.00,
      inventory: 34,
      image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '11',
      name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
      description: 'Industry-leading noise cancellation with premium sound, touch controls, and up to 30 hours of battery life.',
      category: 'Audio',
      price: 348.00,
      inventory: 28,
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '12',
      name: 'Oculus Quest 2',
      description: 'All-in-one VR headset with immersive gaming, 128 GB storage, and wireless freedom.',
      category: 'Gaming',
      price: 299.99,
      inventory: 46,
      image: 'https://images.unsplash.com/photo-1512446733611-9099a758e1a4?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '13',
      name: 'Beats Studio3 Wireless Headphones',
      description: 'Acoustic noise cancelling over-ear headphones with fine-tuned clarity and premium comfort.',
      category: 'Audio',
      price: 249.99,
      inventory: 55,
      image: 'https://images.unsplash.com/photo-1512499617640-c2f99956c29d?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '14',
      name: 'Apple MacBook Air M2',
      description: '13-inch laptop with Apple M2 chip, vivid Retina display, long battery life, and silent fanless design.',
      category: 'Computers',
      price: 1199.00,
      inventory: 14,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '15',
      name: 'Dell XPS 13',
      description: 'Compact 13-inch laptop with InfinityEdge display, Intel Core i7 processor, and premium aluminum finish.',
      category: 'Computers',
      price: 1049.99,
      inventory: 23,
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b418af?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '16',
      name: 'Anker 65W USB-C Charger',
      description: 'Compact GaN charger with two USB-C and one USB-A port for fast charging laptops, phones, and tablets.',
      category: 'Electronics',
      price: 39.99,
      inventory: 135,
      image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '17',
      name: 'Logitech MX Master 3S Wireless Mouse',
      description: 'Advanced wireless mouse with ergonomic design, precision scrolling, and customizable controls.',
      category: 'Computers',
      price: 99.99,
      inventory: 65,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '18',
      name: 'HP Envy 6055e All-in-One Printer',
      description: 'Wireless printer with seamless mobile printing, automatic two-sided printing, and easy setup.',
      category: 'Office',
      price: 129.99,
      inventory: 49,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '19',
      name: 'Kindle Oasis 10th Generation',
      description: 'Premium e-reader with ergonomic design, adjustable warm light, and waterproofing for reading anywhere.',
      category: 'Books',
      price: 249.99,
      inventory: 31,
      image: 'https://images.unsplash.com/photo-1473755504818-b72b6dfdc7cc?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '20',
      name: 'Fujifilm Instax Mini 11 Camera',
      description: 'Instant film camera with automatic exposure, selfie mode, and fun pastel color options.',
      category: 'Photography',
      price: 69.99,
      inventory: 88,
      image: 'https://images.unsplash.com/photo-1519183071298-a2962f4bda50?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '21',
      name: 'Breville Barista Express Espresso Machine',
      description: 'Semi-automatic espresso machine with built-in grinder and digital temperature control for café-quality drinks.',
      category: 'Kitchen',
      price: 699.95,
      inventory: 19,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '22',
      name: 'Dyson V11 Torque Drive Cordless Vacuum',
      description: 'High-performance cordless vacuum with intelligent suction modes and up to 60 minutes run time.',
      category: 'Home',
      price: 599.99,
      inventory: 27,
      image: 'https://images.unsplash.com/photo-1587825140708-5d75f0f8e7b4?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '23',
      name: 'iRobot Roomba 694 Robot Vacuum',
      description: 'Wi-Fi connected robot vacuum with personalized cleaning recommendations and 3-stage cleaning system.',
      category: 'Home',
      price: 274.99,
      inventory: 41,
      image: 'https://images.unsplash.com/photo-1598300050699-3f2377e5da52?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '24',
      name: 'Philips Hue White and Color Ambiance Starter Kit',
      description: 'Smart bulbs with millions of colors, app control, and voice compatibility with Alexa, Google Assistant, and Siri.',
      category: 'Smart Home',
      price: 179.99,
      inventory: 60,
      image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '25',
      name: 'Ring Video Doorbell 4',
      description: 'Battery-powered HD video doorbell with color pre-roll and quick replies to help protect your home.',
      category: 'Smart Home',
      price: 199.99,
      inventory: 48,
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '26',
      name: 'Fitbit Charge 6',
      description: 'Fitness tracker with ECG app, sleep tracking, built-in GPS, and up to 7 days battery life.',
      category: 'Wearables',
      price: 179.95,
      inventory: 71,
      image: 'https://images.unsplash.com/photo-1518441615474-45da0a35d8be?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '27',
      name: 'Theragun Prime Percussive Therapy Device',
      description: 'Deep muscle treatment device with pressure sensor and 4-speed options for post-workout recovery.',
      category: 'Health',
      price: 299.00,
      inventory: 33,
      image: 'https://images.unsplash.com/photo-1584466977774-1716f47f073f?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '28',
      name: 'Hydro Flask 32oz Wide Mouth Water Bottle',
      description: 'Insulated stainless steel bottle that keeps drinks cold up to 24 hours and hot up to 12 hours.',
      category: 'Outdoors',
      price: 44.95,
      inventory: 105,
      image: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '29',
      name: 'Coleman Sundome 4-Person Tent',
      description: 'Easy-set tent with WeatherTec system, roomy interior, and ground vent for reliable camping comfort.',
      category: 'Outdoors',
      price: 129.99,
      inventory: 39,
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '30',
      name: 'Ninja Professional 72oz Blender',
      description: 'Powerful blender with Total Crushing Technology for smoothies, frozen drinks, and puree-ready recipes.',
      category: 'Kitchen',
      price: 99.99,
      inventory: 47,
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '31',
      name: 'Le Creuset Signature Enameled Cast Iron Dutch Oven',
      description: 'Classic 5.5-quart Dutch oven with durable enamel finish for slow-simmered soups and roasts.',
      category: 'Kitchen',
      price: 329.95,
      inventory: 16,
      image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '32',
      name: 'Keurig K-Elite Coffee Maker',
      description: 'Single serve coffee maker with iced setting, hot water on demand, and multiple cup sizes.',
      category: 'Kitchen',
      price: 129.99,
      inventory: 77,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '33',
      name: 'All-new Echo Dot (5th Gen)',
      description: 'Compact smart speaker with crisp vocals, deep bass, and Alexa for everyday help at home.',
      category: 'Electronics',
      price: 49.99,
      inventory: 134,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '34',
      name: 'Bose SoundLink Revolve+',
      description: 'Portable Bluetooth speaker with 360-degree sound and up to 16 hours of battery life.',
      category: 'Audio',
      price: 299.00,
      inventory: 24,
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '35',
      name: 'Panasonic Lumix ZS70 Travel Camera',
      description: 'Bridge camera with 4K video, 30x optical zoom, and flip touchscreen for travel photography.',
      category: 'Photography',
      price: 449.99,
      inventory: 13,
      image: 'https://images.unsplash.com/photo-1519183071298-a2962f4bda50?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '36',
      name: 'Garmin Forerunner 55 GPS Running Watch',
      description: 'Easy-to-use watch with daily suggested workouts, hydration reminders, and heart rate tracking.',
      category: 'Wearables',
      price: 199.99,
      inventory: 40,
      image: 'https://images.unsplash.com/photo-1518441615474-45da0a35d8be?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '37',
      name: 'Samsung Galaxy S23',
      description: 'Flagship smartphone with 50MP camera, 120Hz display, and sleek metal/glass design.',
      category: 'Cell Phones',
      price: 799.99,
      inventory: 29,
      image: 'https://images.unsplash.com/photo-1512499617640-c2f99956c29d?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '38',
      name: 'Anker Soundcore Liberty Air 2 Pro',
      description: 'True wireless earbuds with noise cancellation, transparency mode, and 26-hour total playback.',
      category: 'Audio',
      price: 129.99,
      inventory: 49,
      image: 'https://images.unsplash.com/photo-1512499617640-c2f99956c29d?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '39',
      name: 'Roomba i3+ (3550) Robot Vacuum with Automatic Dirt Disposal',
      description: 'Smart robot vacuum that empties itself and works with Alexa and Google Assistant.',
      category: 'Home',
      price: 549.99,
      inventory: 14,
      image: 'https://images.unsplash.com/photo-1598300050699-3f2377e5da52?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '40',
      name: 'Bissell CrossWave Floor and Carpet Cleaner',
      description: 'Wet-dry vacuum that cleans floors and area rugs simultaneously for multi-surface cleaning.',
      category: 'Home',
      price: 229.99,
      inventory: 38,
      image: 'https://images.unsplash.com/photo-1587825140708-5d75f0f8e7b4?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '41',
      name: 'Echo Dot Kids Edition',
      description: 'Kid-friendly smart speaker with parental controls, fun content, and a protective case.',
      category: 'Electronics',
      price: 59.99,
      inventory: 90,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '42',
      name: 'TP-Link Archer AX50 Wi-Fi 6 Router',
      description: 'Dual-band router with gigabit speeds, OFDMA, and easy setup via the Tether app.',
      category: 'Networking',
      price: 129.99,
      inventory: 58,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '43',
      name: 'Lenovo IdeaPad 3 15-inch Laptop',
      description: 'Affordable laptop with AMD Ryzen processor, full HD display, and lightweight design.',
      category: 'Computers',
      price: 449.99,
      inventory: 34,
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b418af?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '44',
      name: 'Samsung T7 Portable SSD 1TB',
      description: 'Fast USB 3.2 external SSD with robust metal casing and AES 256-bit encryption.',
      category: 'Computers',
      price: 139.99,
      inventory: 76,
      image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '45',
      name: 'Eufy Smart Lock Touch',
      description: 'Fingerprint door lock with touch-to-open access and app-based control.',
      category: 'Smart Home',
      price: 199.99,
      inventory: 26,
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '46',
      name: 'Nespresso VertuoPlus Coffee and Espresso Machine',
      description: 'Automatic coffee machine with centering flow, flexible brew sizes, and fast heat-up.',
      category: 'Kitchen',
      price: 159.00,
      inventory: 29,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '47',
      name: 'Google Pixel 8',
      description: 'Smartphone with advanced camera system, Google AI features, and clean Android experience.',
      category: 'Cell Phones',
      price: 699.00,
      inventory: 22,
      image: 'https://images.unsplash.com/photo-1512499617640-c2f99956c29d?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '48',
      name: 'JBL Flip 6 Portable Bluetooth Speaker',
      description: 'Waterproof speaker with high-output audio, USB-C charging, and up to 12 hours of playback.',
      category: 'Audio',
      price: 129.95,
      inventory: 81,
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '49',
      name: 'Moleskine Classic Hardcover Notebook',
      description: 'Premium ruled notebook with ivory paper, elastic closure, and ribbon bookmark for work or school.',
      category: 'Office',
      price: 19.95,
      inventory: 172,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '50',
      name: 'Ugg Classic Mini II Boots',
      description: 'Comfortable shearling-lined boots with durable waterproof leather for everyday cold-weather wear.',
      category: 'Apparel',
      price: 149.95,
      inventory: 39,
      image: 'https://images.unsplash.com/photo-1517341725137-c6c48ef1b2f1?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '51',
      name: 'Sony PlayStation 5 Console',
      description: 'Next-gen gaming console with stunning ray-traced graphics, fast loading times, and immersive haptic feedback.',
      category: 'Gaming',
      price: 499.99,
      inventory: 12,
      image: 'https://images.unsplash.com/photo-1606813909125-4d606b23d6b7?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '52',
      name: 'Dyson Airwrap Multi-Styler Complete',
      description: 'All-in-one hair styler with intelligent heat control and multiple attachments for blow-drying, curling, and smoothing.',
      category: 'Beauty',
      price: 549.99,
      inventory: 17,
      image: 'https://images.unsplash.com/photo-1516199422444-07c14ebc88bc?auto=format&fit=crop&w=400&q=80'
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
  private apiUrl = 'api/products';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  searchProducts(query: string): Observable<Product[]> {
    const params = new HttpParams().set('q', query);
    return this.http.get<Product[]>(`${this.apiUrl}/search`, { params });
  }

  filterByCategory(category: string): Observable<Product[]> {
    const params = new HttpParams().set('category', category);
    return this.http.get<Product[]>(`${this.apiUrl}/category`, { params });
  }

  filterByPrice(minPrice: number, maxPrice: number): Observable<Product[]> {
    const params = new HttpParams()
      .set('minPrice', minPrice.toString())
      .set('maxPrice', maxPrice.toString());
    return this.http.get<Product[]>(`${this.apiUrl}/price-range`, { params });
  }
}
