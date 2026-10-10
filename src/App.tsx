import React, { useState, useEffect } from 'react';
import { FLOWER_PRODUCTS, COMPLIMENTARY_ADDONS, PAID_ADDONS } from './data/catalog';
import { FlowerProduct, FlowerSizeVariant, CartItem, AddonItem, DeliveryDetails, OrderRecord, PaymentMethod, CategoryType, OccasionType } from './types/flower';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CatalogFilters } from './components/CatalogFilters';
import { FlowerCard } from './components/FlowerCard';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { PaymentStep } from './components/PaymentStep';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { OrderTrackerModal } from './components/OrderTrackerModal';
import { FlowerCareModal } from './components/FlowerCareModal';
import { DeliveryInfoSection } from './components/DeliveryInfoSection';
import { Footer } from './components/Footer';
import { FloristChatbotModal } from './components/FloristChatbotModal';
import { ChatFloatingButton } from './components/ChatFloatingButton';
import { useLanguage } from './i18n/LanguageContext';

export default function App() {
  const { t } = useLanguage();

  // State: Cart
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('gulshat_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedAddons, setSelectedAddons] = useState<AddonItem[]>(() => {
    // Default complimentary card & chrysal
    return [COMPLIMENTARY_ADDONS[0], COMPLIMENTARY_ADDONS[1]];
  });

  // State: Orders history
  const [orders, setOrders] = useState<OrderRecord[]>(() => {
    try {
      const saved = localStorage.getItem('gulshat_orders');
      if (saved) return JSON.parse(saved);
      // Demo order so tracker is immediately interactive
      return [
        {
          orderId: 'KG-2684',
          createdAt: new Date().toISOString(),
          items: [
            {
              title: 'Нежность Ала-Тоо',
              sizeLabel: 'Стандартный (M)',
              quantity: 1,
              price: 4900,
              flowerType: 'peony',
            },
          ],
          addons: [COMPLIMENTARY_ADDONS[0], COMPLIMENTARY_ADDONS[1]],
          delivery: {
            recipientType: 'other',
            recipientName: 'Айпери',
            recipientPhone: '+996 700 123 456',
            senderName: 'Темирлан',
            senderPhone: '+996 555 987 654',
            district: 'Центр (Золотой квадрат)',
            address: 'ул. Киевская 114, кв. 18',
            askAddressFromRecipient: false,
            isAnonymous: false,
            deliveryDate: new Date().toISOString().split('T')[0],
            deliveryTimeSlot: '15:00 — 18:00 (После полудня)',
            deliveryCost: 0,
            cardText: 'С днем рождения, дорогая! Пусть каждый день цветет улыбками.',
            requestPhotoBeforeDelivery: true,
          },
          paymentMethod: 'mbank_qr',
          subtotal: 4900,
          deliveryCost: 0,
          totalAmount: 4900,
          status: 'assembling',
          paymentStatus: 'paid',
        },
      ];
    } catch {
      return [];
    }
  });

  // Save cart & orders to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('gulshat_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('gulshat_orders', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  // State: Filters
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedOccasion, setSelectedOccasion] = useState<OccasionType>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'popular' | 'price_asc' | 'price_desc'>('popular');

  // Modals state
  const [quickViewProduct, setQuickViewProduct] = useState<FlowerProduct | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState<boolean>(false);
  const [currentDeliveryDetails, setCurrentDeliveryDetails] = useState<DeliveryDetails | null>(null);
  const [lastPlacedOrder, setLastPlacedOrder] = useState<OrderRecord | null>(null);
  const [isTrackerOpen, setIsTrackerOpen] = useState<boolean>(false);
  const [trackerActiveOrderId, setTrackerActiveOrderId] = useState<string>('');
  const [isCareOpen, setIsCareOpen] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  // Cart operations
  const handleAddToCart = (product: FlowerProduct, sizeVariant: FlowerSizeVariant) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize.size === sizeVariant.size
      );

      if (existingIdx >= 0) {
        const copy = [...prev];
        copy[existingIdx].quantity += 1;
        return copy;
      } else {
        const newItem: CartItem = {
          cartItemId: `${product.id}-${sizeVariant.size}-${Date.now()}`,
          product,
          selectedSize: sizeVariant,
          quantity: 1,
        };
        return [...prev, newItem];
      }
    });
  };

  const handleUpdateQuantity = (cartItemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
  };

  const handleToggleAddon = (addon: AddonItem) => {
    setSelectedAddons((prev) => {
      const exists = prev.some((a) => a.id === addon.id);
      if (exists) {
        return prev.filter((a) => a.id !== addon.id);
      } else {
        return [...prev, addon];
      }
    });
  };

  // Checkout flow
  const handleProceedToPayment = (details: DeliveryDetails) => {
    setCurrentDeliveryDetails(details);
    setIsCheckoutOpen(false);
    setIsPaymentOpen(true);
  };

  const handlePaymentSuccess = (paymentMethod: PaymentMethod, orderId: string) => {
    if (!currentDeliveryDetails) return;

    const itemsSubtotal = cartItems.reduce(
      (s, i) => s + i.selectedSize.price * i.quantity,
      0
    );
    const addonsSubtotal = selectedAddons.reduce((s, a) => s + a.price, 0);
    const totalAmount = itemsSubtotal + addonsSubtotal + currentDeliveryDetails.deliveryCost;

    const newOrder: OrderRecord = {
      orderId,
      createdAt: new Date().toISOString(),
      items: cartItems.map((item) => ({
        title: item.product.title,
        sizeLabel: item.selectedSize.label,
        quantity: item.quantity,
        price: item.selectedSize.price,
        flowerType: item.product.flowerType,
      })),
      addons: [...selectedAddons],
      delivery: currentDeliveryDetails,
      paymentMethod,
      subtotal: itemsSubtotal + addonsSubtotal,
      deliveryCost: currentDeliveryDetails.deliveryCost,
      totalAmount,
      status: 'assembling',
      paymentStatus: paymentMethod === 'cash_on_delivery' ? 'pending' : 'paid',
    };

    setOrders((prev) => [newOrder, ...prev]);
    setLastPlacedOrder(newOrder);
    setCartItems([]);
    setIsPaymentOpen(false);
  };

  // Filter Catalog
  const filteredProducts = FLOWER_PRODUCTS.filter((product) => {
    // Category match
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    // Occasion match
    if (selectedOccasion !== 'all' && !product.occasion.includes(selectedOccasion)) {
      return false;
    }
    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = product.title.toLowerCase().includes(q);
      const matchSub = product.subtitle.toLowerCase().includes(q);
      const matchComp = product.composition.some((c) => c.toLowerCase().includes(q));
      if (!matchTitle && !matchSub && !matchComp) return false;
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price_asc') return a.price - b.price;
    if (sortBy === 'price_desc') return b.price - a.price;
    // popular
    return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
  });

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col antialiased">
      {/* 1. Header (Top Bar Contract: 3 Zones) */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenTracker={() => {
          setTrackerActiveOrderId(orders[0]?.orderId || '');
          setIsTrackerOpen(true);
        }}
        onOpenCare={() => setIsCareOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
        onSelectCategory={(cat) => setSelectedCategory(cat as any)}
        activeCategory={selectedCategory}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreCatalog={() => {
            document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectOccasion={(occ) => {
            setSelectedOccasion(occ as any);
            document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Catalog Section */}
        <section id="catalog-section" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          
          {/* Section Header */}
          <div className="space-y-1 mb-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#2C3E2D] font-medium">
              <span>{t.filters.catalogKicker}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900">
              {t.filters.catalogTitle}
            </h2>
          </div>

          {/* Filter Bar */}
          <CatalogFilters
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedOccasion={selectedOccasion}
            onSelectOccasion={setSelectedOccasion}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            totalFound={filteredProducts.length}
          />

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <FlowerCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setQuickViewProduct(p)}
                  onAddToCart={(p, size) => handleAddToCart(p, size)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200/80 p-8 space-y-3">
              <p className="font-serif text-xl font-semibold text-stone-800">
                {t.filters.noResults}
              </p>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                {t.filters.noResultsSub}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedOccasion('all');
                  setSearchQuery('');
                }}
                className="mt-2 px-5 py-2 rounded-full bg-[#2C3E2D] text-white text-xs font-medium hover:bg-[#1E2B1F]"
              >
                {t.filters.resetFilters}
              </button>
            </div>
          )}

        </section>

        {/* 4. Bishkek Delivery & Studio Information */}
        <DeliveryInfoSection />
      </main>

      {/* 5. Footer */}
      <Footer
        onOpenCare={() => setIsCareOpen(true)}
        onOpenTracker={() => {
          setTrackerActiveOrderId(orders[0]?.orderId || '');
          setIsTrackerOpen(true);
        }}
      />

      {/* --- Interactive Modals & Drawers --- */}

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, size) => handleAddToCart(p, size)}
      />

      {/* Slide-out Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        addons={selectedAddons}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onToggleAddon={handleToggleAddon}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Step 1: Checkout Modal (Delivery Date & Time Picker + Address) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        addons={selectedAddons}
        onProceedToPayment={handleProceedToPayment}
      />

      {/* Step 2: Payment Modal (MBank QR, Push, Card 3DS, Cash on Delivery) */}
      {currentDeliveryDetails && (
        <PaymentStep
          isOpen={isPaymentOpen}
          onBack={() => {
            setIsPaymentOpen(false);
            setIsCheckoutOpen(true);
          }}
          onClose={() => setIsPaymentOpen(false)}
          deliveryDetails={currentDeliveryDetails}
          cartItems={cartItems}
          addons={selectedAddons}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}

      {/* Order Confirmed / Success Modal */}
      <OrderSuccessModal
        order={lastPlacedOrder}
        onClose={() => setLastPlacedOrder(null)}
        onOpenTracker={(id) => {
          setLastPlacedOrder(null);
          setTrackerActiveOrderId(id);
          setIsTrackerOpen(true);
        }}
      />

      {/* Order Tracker Modal */}
      <OrderTrackerModal
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
        orders={orders}
        initialOrderId={trackerActiveOrderId}
      />

      {/* Flower Care Modal */}
      <FlowerCareModal
        isOpen={isCareOpen}
        onClose={() => setIsCareOpen(false)}
      />

      {/* Floating Chat Trigger Button */}
      <ChatFloatingButton
        onClick={() => setIsChatOpen(true)}
        isOpen={isChatOpen}
      />

      {/* Bilingual AI Florist Chatbot Modal (KG / RU) */}
      <FloristChatbotModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </div>
  );
}
