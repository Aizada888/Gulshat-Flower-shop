export type CategoryType = 'all' | 'peonies' | 'roses' | 'hydrangeas' | 'mix' | 'boxes' | 'mono' | 'gifts';

export type OccasionType = 'all' | 'birthday' | 'love' | 'anniversary' | 'march8' | 'apology' | 'wedding' | 'gratitude';

export interface FlowerSizeVariant {
  size: 'S' | 'M' | 'L' | 'Deluxe';
  label: string;
  price: number;
  stemsCount: string;
  diameter: string;
}

export interface FlowerProduct {
  id: string;
  title: string;
  subtitle: string;
  category: CategoryType;
  occasion: OccasionType[];
  price: number;
  oldPrice?: number;
  stemsCount: string;
  composition: string[];
  palette: string;
  badge?: string;
  isPopular?: boolean;
  isSeasonal?: boolean;
  scentIntensity: 'Деликатный' | 'Умеренный' | 'Насыщенный';
  durabilityDays: string;
  description: string;
  imageUrl?: string;
  gallery?: string[];
  flowerType: 'peony' | 'rose' | 'hydrangea' | 'tulip' | 'mix' | 'box' | 'eustoma' | 'gift';
  gradientBg: string;
  accentColor: string;
  variants: FlowerSizeVariant[];
  translations?: {
    ky?: {
      title: string;
      subtitle: string;
      composition: string[];
      description: string;
      badge?: string;
      palette?: string;
      durabilityDays?: string;
    };
    en?: {
      title: string;
      subtitle: string;
      composition: string[];
      description: string;
      badge?: string;
      palette?: string;
      durabilityDays?: string;
    };
  };
}

export interface AddonItem {
  id: string;
  title: string;
  price: number;
  category: 'card' | 'sweets' | 'vase' | 'topper' | 'care';
  description: string;
  isComplimentary?: boolean;
  translations?: {
    ky?: {
      title: string;
      description: string;
    };
    en?: {
      title: string;
      description: string;
    };
  };
}

export interface CartItem {
  cartItemId: string;
  product: FlowerProduct;
  selectedSize: FlowerSizeVariant;
  quantity: number;
}

export interface DeliveryDetails {
  recipientType: 'myself' | 'other';
  recipientName: string;
  recipientPhone: string;
  senderName: string;
  senderPhone: string;
  district: string;
  address: string;
  apartment?: string;
  askAddressFromRecipient: boolean;
  isAnonymous: boolean;
  deliveryDate: string; // YYYY-MM-DD
  deliveryTimeSlot: string; // e.g. "12:00 - 15:00"
  deliveryCost: number;
  orderComment?: string;
  cardText?: string;
  cardFont?: 'calligraphy' | 'minimal' | 'romantic';
  requestPhotoBeforeDelivery: boolean;
}

export type PaymentMethod = 'mbank_qr' | 'mbank_push' | 'elqr' | 'card' | 'cash_on_delivery';

export interface OrderRecord {
  orderId: string;
  createdAt: string;
  items: {
    title: string;
    sizeLabel: string;
    quantity: number;
    price: number;
    flowerType: string;
  }[];
  addons: AddonItem[];
  delivery: DeliveryDetails;
  paymentMethod: PaymentMethod;
  subtotal: number;
  deliveryCost: number;
  totalAmount: number;
  status: 'confirmed' | 'assembling' | 'photo_ready' | 'in_transit' | 'delivered';
  paymentStatus: 'paid' | 'pending';
}
