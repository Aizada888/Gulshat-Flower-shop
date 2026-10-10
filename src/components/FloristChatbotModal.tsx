import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles, Languages, RotateCcw, Copy, Check, Heart, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpenCart?: () => void;
}

export const FloristChatbotModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onOpenCart,
}) => {
  const { lang: siteLang } = useLanguage();
  const [language, setLanguage] = useState<'ru' | 'ky' | 'en'>(siteLang);
  
  // Sync with site language when modal opens
  useEffect(() => {
    if (isOpen) {
      setLanguage(siteLang);
    }
  }, [isOpen, siteLang]);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      role: 'assistant',
      content:
        'Здравствуйте! Я виртуальный флорист-консультант бутика Gülshat Atelier в Бишкеке. 🌸\n\nМогу помочь вам выбрать букет, подсказать условия доставки по Бишкеку или составить красивый текст для открытки.\n\nСаламатсызбы! Мен кыргызча дагы эркин сүйлөйм. Welcome! I also speak English.',
      timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isLoading]);

  // Quick suggestion chips based on active language
  const suggestions = language === 'ky'
    ? [
        '🌸 Кандай букет сунуштайсыз?',
        '💌 Туулган күнгө открыткага текст',
        '🚚 Бишкек боюнча жеткирүү баасы',
        '💳 MBank аркылуу төлөө',
      ]
    : language === 'en'
    ? [
        '🌸 Which bouquet do you recommend?',
        '💌 Help write a greeting card note',
        '🚚 Bishkek delivery terms & fee',
        '💳 Online payment with MBank or Card',
      ]
    : [
        '🌸 Какой букет посоветуете?',
        '💌 Помоги написать текст в открытку',
        '🚚 Доставка по Бишкеку и время',
        '💳 Как оплатить через MBank QR?',
      ];

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({ role: m.role, content: m.content })),
          language,
        }),
      });

      if (!response.ok) {
        throw new Error('Network error');
      }

      const data = await response.json();
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: data.reply || (language === 'ky' ? 'Кечиресиз, сурооңузду кайра жазып көрүңүзчү.' : 'Извините, попробуйте повторить вопрос.'),
        timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      // Local graceful fallback if server fetch is interrupted
      const fallbackText = language === 'ky'
        ? 'Саламатсызбы! Биздин бутик Бишкектеги Эркиндик бульвары 35 дарегинде жайгашкан. Букеттерге акысыз каллиграфиялык открытка жана Chrysal азыгы кошулат. MBank QR аркылуу төлөсө болот!'
        : language === 'en'
        ? 'Hello! Our boutique is located at 35 Erkindik Blvd, Bishkek. Every bouquet includes a complimentary handwritten card and Chrysal flower food. Free center delivery from 3,000 KGS!'
        : 'Здравствуйте! Наш бутик находится в Бишкеке на бул. Эркиндик 35. К каждому букету прилагается бесплатная каллиграфическая открытка. Доставка по Бишкеку от 60 минут!';

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content: fallbackText,
          timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleResetChat = () => {
    const greeting = language === 'ky'
      ? 'Саламатсызбы! Gülshat Atelier гүл бутигине кош келиңиз! Бүгүн сизге кандай букет тандоого жардам берейин?'
      : language === 'en'
      ? 'Hello! Welcome to Gülshat Atelier. How can I help you choose flowers or arrange delivery in Bishkek today?'
      : 'Здравствуйте! Я онлайн-флорист Gülshat Atelier. Рад помочь с выбором цветов и доставкой по Бишкеку!';

    setMessages([
      {
        id: `init-${Date.now()}`,
        role: 'assistant',
        content: greeting,
        timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const handleLanguageChange = (newLang: 'ru' | 'ky' | 'en') => {
    setLanguage(newLang);
    const msg = newLang === 'ky'
      ? 'Эми мен сиз менен кыргыз тилинде баарлашам! 🌸 Букеттер, баалар же Бишкек боюнча жеткирүү тууралуу сурасаңыз болот.'
      : newLang === 'en'
      ? 'I am now assisting you in English! 🌸 Feel free to ask about bouquets, Bishkek delivery rates, or greeting cards.'
      : 'Теперь мы общаемся на русском языке! 🌸 Рад помочь с выбором букетов и доставкой по Бишкеку.';

    setMessages((prev) => [
      ...prev,
      {
        id: `lang-${Date.now()}`,
        role: 'assistant',
        content: msg,
        timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-900/50 backdrop-blur-xs flex items-end sm:items-center justify-center sm:p-4">
      <div
        className="relative bg-white w-full max-w-lg h-[92vh] sm:h-[620px] rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col border border-stone-200 overflow-hidden animate-in slide-in-from-bottom sm:zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Chatbot Header */}
        <div className="p-4 bg-[#2C3E2D] text-white flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#A3B899] ring-2 ring-white/20">
                <Bot className="w-5 h-5" />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-[#2C3E2D]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-serif font-semibold text-base">Gülshat Florist AI</h3>
                <span className="text-[10px] bg-white/15 px-2 py-0.5 rounded-full font-sans text-stone-200">
                  Online
                </span>
              </div>
              <p className="text-[11px] text-stone-300">
                {language === 'ky' ? 'Кыргызча & Орусча флорист' : language === 'en' ? 'Bilingual Concierge in Bishkek' : 'Консультант на русском и кыргызском'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="bg-white/10 p-0.5 rounded-lg flex items-center text-xs">
              <button
                type="button"
                onClick={() => handleLanguageChange('ru')}
                className={`px-2 py-1 rounded-md text-[11px] font-medium transition-all ${
                  language === 'ru'
                    ? 'bg-white text-stone-900 shadow-2xs font-bold'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                RU
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange('ky')}
                className={`px-2 py-1 rounded-md text-[11px] font-medium transition-all ${
                  language === 'ky'
                    ? 'bg-white text-stone-900 shadow-2xs font-bold'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                KG
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange('en')}
                className={`px-2 py-1 rounded-md text-[11px] font-medium transition-all ${
                  language === 'en'
                    ? 'bg-white text-stone-900 shadow-2xs font-bold'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={handleResetChat}
              title="Начать заново"
              className="p-1.5 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Language Notification Pill */}
        <div className="bg-[#FAF8F5] px-4 py-2 border-b border-stone-200/80 flex items-center justify-between text-[11px] text-stone-600">
          <div className="flex items-center gap-1.5">
            <Languages className="w-3.5 h-3.5 text-[#2C3E2D]" />
            <span>
              {language === 'ky'
                ? 'Кыргыз тилинде кеңеш берилет 🇰🇬'
                : language === 'en'
                ? 'Available in Kyrgyz, Russian & English 🇰🇬 🇷🇺 🇬🇧'
                : 'Консультация на русском и кыргызском 🇷🇺 🇰🇬'}
            </span>
          </div>
          <span className="text-stone-400">Бишкек</span>
        </div>

        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#F9F7F4]">
          {messages.map((m) => {
            const isUser = m.role === 'user';
            return (
              <div
                key={m.id}
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} animate-in fade-in duration-150`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed shadow-2xs relative group ${
                    isUser
                      ? 'bg-[#2C3E2D] text-white rounded-br-xs'
                      : 'bg-white text-stone-800 rounded-bl-xs border border-stone-200/90'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.content}</p>

                  {!isUser && (
                    <button
                      onClick={() => handleCopy(m.id, m.content)}
                      className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 bg-white border border-stone-200 p-1 rounded-full text-stone-500 hover:text-stone-900 shadow-2xs transition-all"
                      title="Скопировать ответ"
                    >
                      {copiedId === m.id ? (
                        <Check className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>
                  )}
                </div>

                <span className="text-[10px] text-stone-400 mt-1 px-1">
                  {m.timestamp}
                </span>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-start gap-2 text-xs text-stone-500">
              <div className="bg-white p-3 rounded-2xl rounded-bl-xs border border-stone-200 flex items-center gap-1.5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#2C3E2D] animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-[#2C3E2D] animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-[#2C3E2D] animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1 text-[11px] text-stone-500">
                  {language === 'ky' ? 'Жооп жазылууда...' : 'Флорист печатает...'}
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestions Chips */}
        <div className="p-2.5 bg-white border-t border-stone-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          {suggestions.map((s, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSend(s.replace(/^[^\s]+\s/, ''))}
              className="px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-[11px] whitespace-nowrap transition-colors border border-stone-200/60"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Chat Input Area */}
        <div className="p-3 bg-white border-t border-stone-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={
                language === 'ky'
                  ? 'Сурооңузду кыргызча же орусча жазыңыз...'
                  : language === 'en'
                  ? 'Ask about flowers, delivery in Bishkek or cards...'
                  : 'Спросите о цветах, доставке или поздравлении...'
              }
              className="flex-1 py-2.5 px-4 bg-stone-50 border border-stone-300 rounded-full text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2C3E2D]/20 focus:bg-white"
            />

            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="w-9 h-9 rounded-full bg-[#2C3E2D] text-white flex items-center justify-center hover:bg-[#1E2B1F] disabled:opacity-40 disabled:cursor-not-allowed transition-all shrink-0 shadow-xs"
            >
              <Send className="w-4 h-4 text-[#A3B899]" />
            </button>
          </form>

          <p className="text-[10px] text-center text-stone-400 mt-1.5">
            {language === 'ky'
              ? 'Gülshat Florist AI · Кыргыз, орус & англис тилинде кеңеш · Бутик Эркиндик 35'
              : language === 'en'
              ? 'Gülshat Florist AI · Kyrgyz, Russian & English florist concierge · 35 Erkindik Blvd'
              : 'Gülshat Florist AI · Кыргыз, орус & англис тилдеринде кеңеш · Бутик бул. Эркиндик 35'}
          </p>
        </div>
      </div>
    </div>
  );
};
