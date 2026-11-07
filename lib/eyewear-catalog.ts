export interface EyewearProduct {
  id: string;
  name: string;
  sku: string;
  category: 'Optical' | 'Sunglasses' | 'Blue-Cut' | 'Titanium' | 'Acetate';
  material: string;
  priceInr: number;
  lensWidthMm: number;
  bridgeWidthMm: number;
  templeLengthMm: number;
  weightGrams: number;
  colorway: string;
  imageUrl: string;
  imageAlt: string;
  tagline: string;
  inStockCount: number;
}

export interface LensTechOption {
  id: 'blue-cut' | 'photochromic' | 'anti-glare' | 'ultra-thin';
  name: string;
  code: string;
  subtitle: string;
  uvProtectionPercent: number;
  blueLightBlockPercent: number;
  lightTransmissionPercent: number;
  scratchResistanceRating: string;
  addonPriceInr: number;
  tintHex: string;
  description: string;
}

export interface EyeTestBookingInput {
  patientName: string;
  phone: string;
  preferredDate: string;
  timeSlot: string;
  testType: '20-Step Precision Eye Exam' | 'Contact Lens Fitting' | 'Pediatric Vision Check';
  branch: 'Jessore Road (Nagerbazar)' | 'Dum Dum Station Road' | 'Gorabazar Optical Lab';
}

export interface EyeTestBookingValidation {
  valid: boolean;
  errors: Partial<Record<keyof EyeTestBookingInput, string>>;
  confirmationCode?: string;
}

export interface CartItem {
  product: EyewearProduct;
  quantity: number;
  lensTechId?: LensTechOption['id'];
}

export interface CartSummary {
  subtotalInr: number;
  bogoDiscountInr: number;
  gstAmountInr: number;
  finalTotalInr: number;
  totalItems: number;
}

export const MANIFEST_LINKS = [
  { label: 'Minimalist and Flat Design', path: '/one', theme: 'Clinical Flat Grid' },
  { label: 'Glassmorphism', path: '/two', theme: 'Nova Optical Tech' },
  { label: 'Bento Grids', path: '/three', theme: 'Modular Clinic & Specs' },
  { label: 'Editorial', path: '/four', theme: 'Autumn Acetate Lookbook' },
  { label: 'Hand-Drawn Styles', path: '/five', theme: 'Jessore Road Craftsmanship' },
  { label: 'Neobrutalism', path: '/six', theme: 'Streetwear Opticals' },
] as const;

export const EYEWEAR_PRODUCTS: EyewearProduct[] = [
  {
    id: 'dd-opt-01',
    name: 'Nagerbazar Pure Titanium 01',
    sku: 'DD-TI-4919',
    category: 'Titanium',
    material: 'Japanese Beta-Titanium',
    priceInr: 3400,
    lensWidthMm: 49,
    bridgeWidthMm: 19,
    templeLengthMm: 142,
    weightGrams: 11.4,
    colorway: 'Raw Brushed Silver',
    imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Clear eyeglasses resting on a clean white surface',
    tagline: 'Zero-hinge clinical minimalism engineered for 14-hour wear.',
    inStockCount: 8,
  },
  {
    id: 'dd-opt-02',
    name: 'Cantonment Crystal Acetate',
    sku: 'DD-AC-5218',
    category: 'Optical',
    material: 'Mazzucchelli Cellulose Acetate',
    priceInr: 2650,
    lensWidthMm: 52,
    bridgeWidthMm: 18,
    templeLengthMm: 145,
    weightGrams: 18.2,
    colorway: 'Translucent Quartz',
    imageUrl: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Minimalist translucent optical frames on neutral surface',
    tagline: 'Diamond-polished edges cut at our Dum Dum optical laboratory.',
    inStockCount: 12,
  },
  {
    id: 'dd-opt-03',
    name: 'Jessore Arch Tortoise',
    sku: 'DD-AC-5020',
    category: 'Acetate',
    material: 'Cured Havana Bio-Acetate',
    priceInr: 3900,
    lensWidthMm: 50,
    bridgeWidthMm: 20,
    templeLengthMm: 145,
    weightGrams: 21.0,
    colorway: 'Warm Amber Tortoise',
    imageUrl: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Person wearing stylish tortoise shell glasses outdoors',
    tagline: 'Keyhole bridge balanced for humid Kolkata afternoons.',
    inStockCount: 5,
  },
  {
    id: 'dd-opt-04',
    name: 'Shyambazar Atelier Oversized',
    sku: 'DD-ED-5417',
    category: 'Acetate',
    material: '8mm Heavy Italian Acetate',
    priceInr: 4800,
    lensWidthMm: 54,
    bridgeWidthMm: 17,
    templeLengthMm: 148,
    weightGrams: 26.5,
    colorway: 'Espresso & Brushed Gold',
    imageUrl: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Fashion editorial shot of woman wearing oversized optical frames',
    tagline: 'Sculptural silhouette from the Vol. 1 North Kolkata Lookbook.',
    inStockCount: 4,
  },
  {
    id: 'dd-opt-05',
    name: 'Gorabazar Scholar Wireframe',
    sku: 'DD-TI-4721',
    category: 'Optical',
    material: 'Hand-Bent Phosphor Bronze',
    priceInr: 2200,
    lensWidthMm: 47,
    bridgeWidthMm: 21,
    templeLengthMm: 140,
    weightGrams: 13.8,
    colorway: 'Antique Brass',
    imageUrl: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Close up of wireframe glasses on an open book',
    tagline: 'Panto round profile for readers, writers, and tea-stall thinkers.',
    inStockCount: 9,
  },
  {
    id: 'dd-opt-06',
    name: 'Metro Line Chunky 06',
    sku: 'DD-NB-5519',
    category: 'Blue-Cut',
    material: 'High-Impact Reinforced Acetate',
    priceInr: 2990,
    lensWidthMm: 55,
    bridgeWidthMm: 19,
    templeLengthMm: 150,
    weightGrams: 29.0,
    colorway: 'Matte Obsidian Black',
    imageUrl: 'https://images.unsplash.com/photo-1589718539308-16982e057375?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Person in streetwear wearing thick black optical frames',
    tagline: 'Five-barrel steel hinges built for late-night coding and street transit.',
    inStockCount: 15,
  },
  {
    id: 'dd-opt-07',
    name: 'Belgachia Sun Polarized',
    sku: 'DD-SG-5318',
    category: 'Sunglasses',
    material: 'Stainless Steel & CR-39 Polarized',
    priceInr: 3250,
    lensWidthMm: 53,
    bridgeWidthMm: 18,
    templeLengthMm: 145,
    weightGrams: 19.4,
    colorway: 'Graphite Smoke',
    imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Precision sunglasses frame on minimalist pedestal',
    tagline: 'UV400 road-glare elimination calibrated for tropical sunlight.',
    inStockCount: 7,
  },
  {
    id: 'dd-opt-08',
    name: 'Lake Town Rimless Air',
    sku: 'DD-TI-5118',
    category: 'Titanium',
    material: 'Compression-Mounted Pure Titanium',
    priceInr: 4100,
    lensWidthMm: 51,
    bridgeWidthMm: 18,
    templeLengthMm: 144,
    weightGrams: 9.2,
    colorway: 'Gunmetal Matte',
    imageUrl: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Featherlight rimless optical eyewear',
    tagline: 'Sub-10-gram chassis with polycarbonate impact-resistant lenses.',
    inStockCount: 6,
  },
];

export const LENS_TECH_OPTIONS: LensTechOption[] = [
  {
    id: 'blue-cut',
    name: 'Nova Blue-Cut Digital HD',
    code: 'NV-BC-420',
    subtitle: 'Filters 415nm–455nm high-energy visible blue light from LED screens.',
    uvProtectionPercent: 100,
    blueLightBlockPercent: 92,
    lightTransmissionPercent: 96,
    scratchResistanceRating: '8H Dual Hard-Coat',
    addonPriceInr: 900,
    tintHex: 'rgba(56, 189, 248, 0.22)',
    description:
      'Engineered for software engineers, students, and gamers spending 8+ hours on digital monitors without yellow color distortion.',
  },
  {
    id: 'photochromic',
    name: 'Nova SunSync Photochromic',
    code: 'NV-PH-800',
    subtitle: 'Transitions from crystal clear indoors to 82% smoke tint outdoors in 18 seconds.',
    uvProtectionPercent: 100,
    blueLightBlockPercent: 78,
    lightTransmissionPercent: 88,
    scratchResistanceRating: '9H Nano-Ceramic',
    addonPriceInr: 1650,
    tintHex: 'rgba(139, 92, 246, 0.28)',
    description:
      'Reactive silver-halide molecules adapt seamlessly from Dum Dum Metro platforms to bright midday sun on Jessore Road.',
  },
  {
    id: 'anti-glare',
    name: 'HydroShield Night Drive AR',
    code: 'NV-AR-310',
    subtitle: 'Eliminates oncoming headlight haloes and monsoon raindrop smudges.',
    uvProtectionPercent: 99,
    blueLightBlockPercent: 64,
    lightTransmissionPercent: 99,
    scratchResistanceRating: '9H Super-Hydrophobic',
    addonPriceInr: 1200,
    tintHex: 'rgba(20, 184, 166, 0.20)',
    description:
      '14-layer vacuum-deposited anti-reflective coating with a 115-degree water contact angle that repels humidity and fog.',
  },
  {
    id: 'ultra-thin',
    name: 'Aspheric 1.74 High-Index',
    code: 'NV-HI-174',
    subtitle: '42% thinner and flatter profile for high-power prescriptions (±4.00D and above).',
    uvProtectionPercent: 100,
    blueLightBlockPercent: 85,
    lightTransmissionPercent: 98,
    scratchResistanceRating: '9H Diamond Quartz',
    addonPriceInr: 2400,
    tintHex: 'rgba(244, 114, 182, 0.18)',
    description:
      'Eliminates "soda-bottle" edge thickness and eye magnification while reducing overall lens weight by 35%.',
  },
];

export function filterProductsByCategory(
  products: EyewearProduct[],
  category: string,
  searchQuery = ''
): EyewearProduct[] {
  const normalizedCategory = category.trim().toLowerCase();
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return products.filter((item) => {
    const matchesCategory =
      !normalizedCategory ||
      normalizedCategory === 'all' ||
      item.category.toLowerCase() === normalizedCategory;

    const matchesQuery =
      !normalizedQuery ||
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.material.toLowerCase().includes(normalizedQuery) ||
      item.sku.toLowerCase().includes(normalizedQuery) ||
      item.colorway.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });
}

export function calculateLensPackagePrice(
  baseFramePriceInr: number,
  lensTechId: LensTechOption['id'],
  highIndexUpgrade = false
): number {
  if (baseFramePriceInr < 0) {
    throw new Error('Base frame price cannot be negative');
  }
  const tech = LENS_TECH_OPTIONS.find((t) => t.id === lensTechId);
  const techAddon = tech ? tech.addonPriceInr : 0;
  const indexAddon = highIndexUpgrade && lensTechId !== 'ultra-thin' ? 850 : 0;
  return baseFramePriceInr + techAddon + indexAddon;
}

export function calculateCartSummary(
  items: CartItem[],
  applyGoldBogo = false
): CartSummary {
  let subtotalInr = 0;
  let totalItems = 0;
  const unitPrices: number[] = [];

  for (const item of items) {
    if (item.quantity <= 0) continue;
    const unitPrice = item.lensTechId
      ? calculateLensPackagePrice(item.product.priceInr, item.lensTechId, false)
      : item.product.priceInr;

    subtotalInr += unitPrice * item.quantity;
    totalItems += item.quantity;

    for (let i = 0; i < item.quantity; i++) {
      unitPrices.push(unitPrice);
    }
  }

  unitPrices.sort((a, b) => a - b);

  let bogoDiscountInr = 0;
  if (applyGoldBogo && unitPrices.length >= 2) {
    const freePairsCount = Math.floor(unitPrices.length / 2);
    for (let i = 0; i < freePairsCount; i++) {
      bogoDiscountInr += unitPrices[i];
    }
  }

  const discountedSubtotal = Math.max(0, subtotalInr - bogoDiscountInr);
  const gstAmountInr = Math.round(discountedSubtotal * 0.12);
  const finalTotalInr = discountedSubtotal + gstAmountInr;

  return {
    subtotalInr,
    bogoDiscountInr,
    gstAmountInr,
    finalTotalInr,
    totalItems,
  };
}

export function validateEyeTestBooking(
  input: EyeTestBookingInput
): EyeTestBookingValidation {
  const errors: Partial<Record<keyof EyeTestBookingInput, string>> = {};

  const trimmedName = input.patientName.trim();
  if (trimmedName.length < 2) {
    errors.patientName = 'Please enter the patient full name (at least 2 characters).';
  }

  const digitsOnlyPhone = input.phone.replace(/\D/g, '');
  if (!/^[6-9]\d{9}$/.test(digitsOnlyPhone)) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number starting with 6–9.';
  }

  if (!input.preferredDate.trim()) {
    errors.preferredDate = 'Please select a preferred appointment date.';
  }

  if (!input.timeSlot.trim()) {
    errors.timeSlot = 'Please choose an available clinic time slot.';
  }

  const valid = Object.keys(errors).length === 0;
  const confirmationCode = valid
    ? `DD-${digitsOnlyPhone.slice(-4)}-${trimmedName.slice(0, 2).toUpperCase()}`
    : undefined;

  return {
    valid,
    errors,
    confirmationCode,
  };
}

export function recommendFrameSizeByPupillaryDistance(pdMm: number): {
  sizeLabel: 'Narrow Fit' | 'Medium Standard Fit' | 'Wide Street Fit';
  recommendedLensWidthMm: string;
  recommendedBridgeMm: string;
  matchingSkus: string[];
} {
  const clampedPd = Math.max(50, Math.min(76, Math.round(pdMm)));
  if (clampedPd <= 58) {
    return {
      sizeLabel: 'Narrow Fit',
      recommendedLensWidthMm: '47mm – 50mm',
      recommendedBridgeMm: '18mm – 21mm',
      matchingSkus: ['DD-TI-4721', 'DD-TI-4919', 'DD-AC-5020'],
    };
  }
  if (clampedPd <= 65) {
    return {
      sizeLabel: 'Medium Standard Fit',
      recommendedLensWidthMm: '50mm – 53mm',
      recommendedBridgeMm: '18mm – 20mm',
      matchingSkus: ['DD-AC-5218', 'DD-TI-5118', 'DD-SG-5318'],
    };
  }
  return {
    sizeLabel: 'Wide Street Fit',
    recommendedLensWidthMm: '54mm – 56mm',
    recommendedBridgeMm: '17mm – 19mm',
    matchingSkus: ['DD-ED-5417', 'DD-NB-5519'],
  };
}
