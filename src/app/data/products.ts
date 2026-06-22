export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'floral' | 'gourmand' | 'limited' | 'signature';
  categoryLabel: string;
  image: string;
  description: string;
  scentProfile: {
    top: string;
    heart: string;
    base: string;
  };
  details: {
    burnTime: string;
    weight: string;
    waxType: string;
    dimensions: string;
  };
  mood: string;
  occasion: string;
  inspiration: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'flower-bloom',
    name: 'Flower Bloom Candle',
    price: 350,
    category: 'floral',
    categoryLabel: 'Floral Series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTAdG9MoGJ-Ru_okP7HTw8u4Fyq2L-mwGQyBd1_bLwaScdoBtHxOXqxSQwHZir0foqpYhYPcwkhDZ-t646d8Ho2A2kuW7tAEZ7rshqyPne9o9q1UbNNjOAd2MVT9uqNdckjRG8lxiZMUmlCcaG_MZK5wSOvvzFgyaDD0y-FqHI5-ANzaMRZGEHp6VMNLWrdEiGeAbogCEIiLl6T_8e4sR4i0qcZjQzTeFHW0bTUA7lel_tQBWmew-5UqFqY-C4AGbsYGbEXDcyFofl',
    description: 'A beautifully sculpted flower shape cast in natural soy wax, releasing a fresh, blooming scent throw that fills your home with serenity.',
    scentProfile: {
      top: 'Green Leaves, Lily of the Valley',
      heart: 'White Jasmine, Petals',
      base: 'Soft Musk'
    },
    details: {
      burnTime: '35 Hours',
      weight: '180g',
      waxType: '100% Soy Wax',
      dimensions: '8cm x 8cm'
    },
    mood: 'Fresh, uplifting, and meditative.',
    occasion: 'Perfect for a morning ritual or reading nook.',
    inspiration: 'Inspired by the first blossoms of a Cairo spring garden.'
  },
  {
    id: 'rose-garden',
    name: 'Rose Garden Candle',
    price: 420,
    category: 'signature',
    categoryLabel: 'Signature / Heritage',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4DCB0_2GT-JVwTDrrRy8JgJyALite5lRs-sOypk4xK7k5aPihGn5MKDNm6pc6y9r2acbwptnQC7Mr5WDoGRRKXksEOv8zFTW37uLoFumzj_ZFMLe2Wk1TYp1t-3g7-XKVNxZdBxuVbS02983rW8VbFO2vfoposklBprhkQfto83W1VAUpRjZWWxd1C3U14gPCu3jQpVwZeOS6XSEgoV3Vsj4EFgHkAa43Gq93fn8gTbcXYQ9iOzC3M9vbq9g3wv69ffGzW-jOkgAi',
    description: 'A realistic, hand-carved wax rose rests on top of this classic jar candle. As it melts, it releases a rich symphony of old-world heritage roses.',
    scentProfile: {
      top: 'Morning Dew, Bergamot',
      heart: 'Heritage Rose, Peony',
      base: 'Light Amber, Sandalwood'
    },
    details: {
      burnTime: '50 Hours',
      weight: '250g',
      waxType: 'Soy Wax & Essential Oils',
      dimensions: '9cm x 10cm'
    },
    mood: 'Romantic, grounding, and deeply comforting.',
    occasion: 'Intimate dinners or a calming bath ritual.',
    inspiration: 'A tribute to royal French rose gardens at sunrise.'
  },
  {
    id: 'luxury-peony',
    name: 'Luxury Peony Candle',
    price: 450,
    category: 'limited',
    categoryLabel: 'Limited Edition',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjkFgtXYhC4nnwy9oa0Ytlb3VwlcisN3NLEws-To7hhen-ooyJnBvXylUeVa0_CuIafCUL0yif8KsYkbrbG3ttZKmm6Y3s7CvrHzYSAGLgpGU7uOJo8FlcRfLriGN9SeMWOPPM0O8YyydKnvsfJhXh40q7fJpvvVV_0ERTJlJo1rPs4x7tuuaLMSVHqO3qOnSnNrid-hEMOLN6eeAXCQIze_B636r3A6BKetahd5N_9w5mZxnYUyQTS9u3Y94gYWMk0NzEL2UZHS9R',
    description: 'Crafted in limited quantities, this Peony candle features a stunning, intricate wax design that looks like a freshly cut peony flower.',
    scentProfile: {
      top: 'Red Apple, Plum',
      heart: 'Blushing Peony, Jasmine, Carnation',
      base: 'Soft Suede, Warm Amber'
    },
    details: {
      burnTime: '45 Hours',
      weight: '220g',
      waxType: 'Premium Botanical Blend',
      dimensions: '8.5cm x 9cm'
    },
    mood: 'Sophisticated, opulent, and warm.',
    occasion: 'Special occasions, gifting, or living room statements.',
    inspiration: 'The delicate and voluptuous nature of peony blooms.'
  },
  {
    id: 'vanilla-dream',
    name: 'Vanilla Dream Candle',
    price: 380,
    category: 'signature',
    categoryLabel: 'Signature Series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0TqqbXGnue16dRTT3o3osLsKUlhKVRzZCTDJpVH9AzldmpAE6fl5obigf6Fc864QWkFFMGhyX-jth4QjkhdugqACwsEmY7CxiCWnkBwmMm-X71yRY69RykEUdkjKWJ16Jz9jefqK3KuAAYMN4fBnnpbk1h7eTLZTUwfmjwpSxST-SYqLgF8Iy0qleuzzCT6ukSSaCOdiFMWG0n8PWNS3KNw3MwEbqR2B10Uq4EDQbf_Zao_ShsjhAEN13eBpS-xMhWur1HpXAkegN',
    description: 'A cozy, enveloping aroma of creamy vanilla pods combined with warm spices, poured into a premium frosted container.',
    scentProfile: {
      top: 'Sweet Cream, Sugar Cane',
      heart: 'Madagascar Vanilla Bean',
      base: 'Smoked Amber, Tonka Bean'
    },
    details: {
      burnTime: '55 Hours',
      weight: '240g',
      waxType: 'Organic Soy & Vanilla Extracts',
      dimensions: '8.5cm x 10cm'
    },
    mood: 'Warm, cozy, soothing, and sweet.',
    occasion: 'Relaxing winter nights and bedside comfort.',
    inspiration: 'Inspired by memories of slow, golden afternoons.'
  },
  {
    id: 'berry-cloud',
    name: 'Berry Cloud Candle',
    price: 490,
    category: 'gourmand',
    categoryLabel: 'Gourmand Blends',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCShEloAecOmPL5HPJkQDglwX8UWgf8o24vVoElnO7r_ywoWvpe0WryGzJ4GejxdjICPArHyxhExzpb9y4mbJBJ5fpf6yUk1Sb0b6JFJg5ayOaRB7punVoVJk4-zH9vSeaNcR_9C4EkM7-iUT2rBYQBJWeQYc99jmGHxTsYhK-qouoFDmlEOgQayvrCcseJgijRzrrBWpgP49La-kDXfOvHcIlNVJXJsMNFzJObGS1jqb31m3ECS8v8AIzpgElQ9yxnooLh1w0R-QnS',
    description: 'A whimsical and delicious creation featuring realistic wax strawberries resting on whipped white wax cream, smelling of rich desserts.',
    scentProfile: {
      top: 'Fresh Strawberry, Ripe Raspberry',
      heart: 'Sweet Whipped Cream, Sugar Custard',
      base: 'Vanilla Pod, Soft Biscuit'
    },
    details: {
      burnTime: '40 Hours',
      weight: '200g',
      waxType: 'Soy & Coconut Wax Blend',
      dimensions: '8cm x 11cm'
    },
    mood: 'Playful, sweet, and comforting.',
    occasion: 'Perfect for dessert tables and cozy afternoons.',
    inspiration: 'A tribute to artisanal French patisseries.'
  },
  {
    id: 'lunar-blossom',
    name: 'Lunar Blossom Frame',
    price: 320,
    category: 'limited',
    categoryLabel: 'Limited Edition',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDN5cRkekc0RPbzL_9td7Cp2-DQAE17yM3oPNJQkY2yYe7MuR3yVH4YwaDwd2RGrUs6anix43Q_UOxFi9SUHAhcYpcYF70OQxcMyrEBz_YoSczNx4PLVmO1niZv09Kroh40qu7C-xs_6gtCf8rsX4fQyfFD1HMsDFYD5ntlnWDGHPwo6Ma1xneFjZvjWl8Fl8PVsJtiEvM1jcs11cyarpvEzshxj_wgd8R7cuRiWzih8KyYfXiPceeb3ZmvQhtaf9Lu5bvFu5niouZP',
    description: 'A beautiful wax frame shaped like a crescent moon, embedded with delicate dried white blossoms and wrapped in organic twine ribbon.',
    scentProfile: {
      top: 'Bergamot, Clary Sage',
      heart: 'Chamomile, White Lotus',
      base: 'Smoked Wood, Cedar'
    },
    details: {
      burnTime: 'Decorative (Meltable)',
      weight: '120g',
      waxType: 'Hardened Soy & Beeswax',
      dimensions: '12cm x 12cm'
    },
    mood: 'Mystical, calming, and highly aesthetic.',
    occasion: 'Decorative centerpiece or hanging fragrance sachet.',
    inspiration: 'Inspired by the serenity of late-night moonlit gardens.'
  },
  {
    id: 'azure-bloom',
    name: 'Azure Bloom Bouquet',
    price: 430,
    category: 'floral',
    categoryLabel: 'Floral Series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4cD8DHK2vhkwk4S1n1ZDovqW8sQyGkktEkqC2ab3Dtki34F9xN1M1wamXqXK8_JTqHIRoDz4rt6ML91Rou9QeLCIwrvhmPx3Z3C_q633MmoujtdcNs5FP7a3ZRrbpF44uy12HVDtNbWswiPCYCl9h_EGWzpLop5pyst-lmq3QpUb8Yjf7G7b9GBBJCLMNyIoy2ScDJiOIvj9tF-zq8gC-zgg_a94zuvsEg_eCFfsulStpRJMHwUWJP4aQx_grJDapit9AlX_4GvvY',
    description: 'A custom glass jar filled with detailed wax flowers in varying shades of soft blue and white, creating an elegant permanent bouquet.',
    scentProfile: {
      top: 'Sea Breeze, Ozone',
      heart: 'Blue Hydrangea, White Gardenia',
      base: 'Vetiver, Driftwood'
    },
    details: {
      burnTime: '45 Hours',
      weight: '210g',
      waxType: 'Soy Wax',
      dimensions: '8.5cm x 9.5cm'
    },
    mood: 'Cooling, clean, and elegant.',
    occasion: 'Perfect for living spaces and clean bedroom vibes.',
    inspiration: 'Inspired by the coastal air and wild blue hydrangeas.'
  },
  {
    id: 'blush-peony',
    name: 'Blush Peony Bowl',
    price: 460,
    category: 'floral',
    categoryLabel: 'Floral Series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiE6RIaOT_fiACqqbD0BQIX3W3htoouNKnmQwqefOxrQZHNBdb3aOyuh2HQMVeFedtLtTNeaLeXSk_fGSpUfwFlObn7ID_bZCB3Q7-iNDRDwVW4hLWy60um-pUwOqnKu1UxJHpaEVm1kG2P2u1zoJzTGEHbl7XuDdFp0zfxb2TPsahgCu2aZLIQjA6UpMlUw9vGN-d2QVWnh1NMeMlOEoE8dDAGvAuk9G8zNj40fJ8xNwDyvxF4vXjTX3h29Cf1Suc86l1OOU65tnj',
    description: 'An elegant glass vessel carrying a handcrafted bouquet of wax roses and peony heads, nesting on linen for a luxurious aesthetic.',
    scentProfile: {
      top: 'Scented Geranium, Pear',
      heart: 'Pink Peony, Velvet Rose',
      base: 'White Musk, Patchouli'
    },
    details: {
      burnTime: '48 Hours',
      weight: '230g',
      waxType: 'Eco Soy Wax Blend',
      dimensions: '9cm x 9cm'
    },
    mood: 'Romantic, luxurious, and soft.',
    occasion: 'Special styling centerpiece or a thoughtful luxury gift.',
    inspiration: 'The rich abundance of English countryside peony bowers.'
  },
  {
    id: 'garden-set',
    name: 'The Garden Set',
    price: 890,
    category: 'limited',
    categoryLabel: 'Limited Edition Set',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhjV9hzZRrLiA-p5OU0hAgjRc-6Ix972T8O8jBR-rqsU1ozTt5ZpI-X_cgYBQd9tIJDm9kMxXlsG1Es_rO4qCWiyn2wPrQgb57H68ccMqjykrYVW9oNqns9Vbg5cPdWbSJvPKBM-EKepq3MY6oLFay3H80iePlH0F86Onn8boOaT7vBjRhAhKoHh9KXmXZfIllCG_hnbJwnQdZB__Ua1ZItHgSjg2UIqyA5Pzjqcamy3TPW7Y9N7qI_JKPhWFMchfNVnex_WR_ghQU',
    description: 'A curated collection of four clear glass jars, each topped with a different sculpted wax flower: sunflower, red rose, pink rose, and yellow daisy.',
    scentProfile: {
      top: 'Green Leaf, Orange Zest',
      heart: 'Rose Petals, Sunflower Petals, Daisy',
      base: 'Earth, Light Honey, Cedarwood'
    },
    details: {
      burnTime: '20 Hours each (80 Total)',
      weight: '4 x 80g',
      waxType: 'Soy Wax & Botanicals',
      dimensions: '4 x (5cm x 6.5cm)'
    },
    mood: 'Joyful, botanical, and celebratory.',
    occasion: 'Ideal gift set or for spreading distinct scents in multiple rooms.',
    inspiration: 'Inspired by a stroll through a wildflower meadow.'
  },
  {
    id: 'terracotta-swirl',
    name: 'Terracotta Swirl Vessel',
    price: 520,
    category: 'limited',
    categoryLabel: 'Limited Edition Concrete',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7d7QpCCPhz3YTeUWwR1i20Z8nYwhxBm3UBoStZYlDVS4DM4XWA9CcJRQ7l9960Vm6jYytfilhyEmoY8fpg-igwdnxgwzH90qnGcCav2CZTdL5CdeoDUX-QXf4VaiaMbC2l6lcCyswWHiQ5I7ErMQjr0O4-zQwnAMZacAkhZaLkuI12Ig5UDMK05KwzMOaRwNZu3MbuxQtgMZsoeIPc_yihExXeCLaAGilYW6kLEUbYLnNcOImhdifNevnuMMEC2Q_uoXv1MVHRc9K',
    description: 'Hand-poured concrete vessels featuring an organic reddish-brown and ivory marble pattern. Once burnt, the container is a reusable plant pot.',
    scentProfile: {
      top: 'Smoked Cinnamon, Cardamom',
      heart: 'Cacao, Sandalwood, Dry Earth',
      base: 'Amber, Leather, Patchouli'
    },
    details: {
      burnTime: '60 Hours',
      weight: '300g',
      waxType: 'Premium Soy & Beeswax Blend',
      dimensions: '10cm x 10cm'
    },
    mood: 'Rustic, warm, earthy, and sophisticated.',
    occasion: 'Study table, workspace, or cozy evening reading.',
    inspiration: 'Inspired by traditional Egyptian pottery and warm desert sand.'
  },
  {
    id: 'silk-berry',
    name: 'Silk & Berry Votive',
    price: 360,
    category: 'gourmand',
    categoryLabel: 'Gourmand Blends',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdrNh-0L3nQugr4HqwEzNhsBBwJ5ApcdIM6Wrh7YGC7BIHG19Oor1DmCOx40YWCOjMQr6AxesemNWlEJwZaFxOLfvqABx1ObJ9ai-ogx_CuvE1oyovbHYGwIzItKgrMV7lcXcTa22QaJkZc5OznSrQs42dW9-iM2lzVIdqFBb3e6FMTBwIW45oF6D-riuLdOAeXKPqdU2kUcnDkw_UJq_mQZa06aVswpTAlaDxuf_RelMgpsJ7jyMw4YBCpn2yxAiZpeEo3C4CWSbw',
    description: 'A elegant glass votive with creamy soy wax, adorned with five tiny realistic wax strawberries, resting on pink silk drapery.',
    scentProfile: {
      top: 'Wild Strawberries, Red Currant',
      heart: 'Pink Silk Blossom, Sugar Cubes',
      base: 'White Musk, Creamy Sandalwood'
    },
    details: {
      burnTime: '30 Hours',
      weight: '140g',
      waxType: 'Soy & Coconut Wax',
      dimensions: '7.5cm x 8cm'
    },
    mood: 'Soft, sensory, romantic, and dreamy.',
    occasion: 'Bedside vanity decor or soft relaxing afternoons.',
    inspiration: 'Inspired by the combination of luxury textiles and sweet summer berries.'
  }
];
