import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();

app.use(express.json());

const SYSTEM_INSTRUCTION = `You are the virtual florist consultant for "Gülshat Atelier" flower boutique in Bishkek (35 Erkindik Blvd).
Сен — "Gülshat Atelier" гүл бутигинин виртуалдуу флорист-кеңешчисисиң (Бишкек ш., Эркиндик бульвары 35).
Вы — виртуальный флорист-консультант премиум-бутика цветов "Gülshat Atelier" в Бишкеке.

Тил эрежеси / Правило языка / Language policy:
- Эгер колдонуучу кыргызча жазса же кыргыз тили тандалса — сылык, жылуу жана сабаттуу кыргыз тилинде жооп бер.
- Если пользователь пишет по-русски — отвечай вежливо, вдохновляюще и заботливо на русском языке.
- If the user writes in English — respond politely, warmly, and helpfully in fluent English.
- You speak Kyrgyz, Russian, and English fluently. Can suggest card messages and bouquets in all 3 languages.

Бутик жана каталог маалыматы / Boutique and Catalog:
1. Букеттер / Bouquets (in KGS - сом):
   • "Нежность Ала-Тоо" (4 900 с.) — Сара Бернар пиондору, Капучино розалары, эустома, эвкалипт.
   • "Парижский Рассвет" (5 800 с.) — Дэвид Остин Juliet бакча розалары, бал жана жемиш жыттуу.
   • "Лазурный Иссык-Куль" (4 200 с.) — Ысык-Көлдүн суусундай көгүлтүр колумбиялык гортензиялар.
   • "Весенний Эркиндик" (3 600 с.) — шляпа кутучасындагы кооз голландиялык пион сымал тюльпандар.
   • "Винтажный Бордо" (5 200 с.) — эквадордук баркыт Red Naomi розалары, 70 см.
   • "Караван Шёлка" (4 600 с.) — ранункулюстар, карамель гвоздикалары, жылуу терракота өңдөрү.
   • "Белоснежная Эустома" (3 800 с.) — чыдамкай ак япон эустомасы (14-18 күн жаңы бойдон турат).
   • "Пудровый Зефир" (4 400 с.) — назик розалар + 6 даана француз макарун таттуусу.
   • "Солнечный Бишкек" (3 300 с.) — күн карамалар жана талаа ромашкалары.
2. Өлчөмдөр / Sizes: S, M, L, Deluxe.
3. Акысыз белектер / Free gifts: Free handwritten calligraphy postcard, Chrysal flower food, and water aqua-box with each bouquet. Photo preview sent before delivery via WhatsApp.
4. Доставка по Бишкеку / Delivery across Bishkek:
   • Золотой Квадрат (Центр) — Бесплатно от 3 000 сом (иначе 200 сом).
   • Южные микрорайоны (3-12 мкр, Асанбай) — 250 сом.
   • Джал — 250 сом.
   • Тунгуч, Восток-5, Кок-Жар — 280 сом.
   • Экспресс-доставка от 60 минут.
5. Онлайн-оплата / Payment: MBank QR, MBank Push, Elsom, O!Dengi, Visa, MasterCard, Cash on delivery.
6. Дарек / Address: бул. Эркиндик 35 (угол Боконбаева). Шоурум ежедневно 08:30 — 22:00.

Жоопту кыска, жылуу, смайликтер менен кооздоп бер.`;

// Local multilingual fallback when API key is pending or network is restricted
function getLocalBilingualResponse(text: string, lang: 'ru' | 'ky' | 'en'): string {
  const lower = text.toLowerCase();

  // English queries
  if (lang === 'en' || lower.includes('hello') || lower.includes('bouquet') || lower.includes('delivery') || lower.includes('flower') || lower.includes('price')) {
    if (lower.includes('hello') || lower.includes('hi')) {
      return `Hello and welcome to Gülshat Atelier! 🌸\n\nI am your personal flower concierge in Bishkek. I can help you choose the freshest seasonal flowers (peonies, David Austin garden roses, hydrangeas), write a heartwarming postcard note, or arrange delivery across Bishkek. How can I help you today?`;
    }
    if (lower.includes('card') || lower.includes('note') || lower.includes('message') || lower.includes('birthday')) {
      return `Here are lovely wishes for our complimentary handwritten greeting card: 💌\n\n1. Birthday: "Wishing you a life as blossoming, radiant, and fragrant as these blossoms! Happy Birthday!"\n2. Romantic: "Every petal represents how much you mean to me. Thinking of you always."\n3. Celebration: "May joy, elegance, and beauty fill every single day ahead!"\n\nOur calligrapher will hand-write your chosen words with dipping pen and ink! ✍️`;
    }
    if (lower.includes('delivery') || lower.includes('shipping') || lower.includes('courier')) {
      return `Delivery across Bishkek: 🚗\n\n• City Center (Golden Square) — Free for orders over 3,000 KGS (otherwise 200 KGS).\n• South Microdistricts (Asanbay, 3–12 mkr) — 250 KGS.\n• Jal district — 250 KGS.\n• Tunguch, Vostok-5 — 280 KGS.\n• Express delivery ready within 60–75 minutes.\n\nEvery bouquet travels in a hydration aqua-box, with photo confirmation sent via WhatsApp before courier departure! 📸`;
    }
    if (lower.includes('pay') || lower.includes('card') || lower.includes('mbank')) {
      return `We accept seamless online and in-person payments: 💳\n\n• Instant MBank QR code\n• MBank Push notification to your Kyrgyz phone number\n• Visa, MasterCard & Elkart credit/debit cards\n• Cash or terminal upon courier arrival.\n\nYou will receive a receipt right after checkout!`;
    }
    return `At our boutique on 35 Erkindik Blvd, our top favorites today are "Ala-Too Tenderness" (4,900 KGS with Sarah Bernhardt peonies) and "Parisian Dawn" (5,800 KGS with David Austin roses). Complimentary card and hydration pack included! 🌿`;
  }

  // Kyrgyz queries
  if (lang === 'ky' || lower.includes('кандай') || lower.includes('саламат') || lower.includes('гүл') || lower.includes('канча') || lower.includes('жеткирүү')) {
    if (lower.includes('салам') || lower.includes('кандай')) {
      return `Саламатсызбы! Gülshat Atelier гүл бутигине кош келиңиз! 🌸\n\nБүгүн кандай өзгөчө күнгө букет издеп жатасыз? Туулган күнгө, сүйүктүүңүзгө же майрамга карата жаңы келген пиондор, Дэвид Остин розалары жана гортензиялар бар. Мен сизге букет тандоого жардам берейинби?`;
    }
    if (lower.includes('туулган') || lower.includes('куттуктоо') || lower.includes('открытка') || lower.includes('текст')) {
      return `Туулган күнгө открытка үчүн эң сонун каалоолор: 💌\n\n1. «Туулган күнүң менен чын жүрөктөн куттуктайм! Жашооң ушул гүлдөрдөй дайыма жайнап, жүзүңдөн жылмаюу кетпесин!»\n2. «Өмүрүңүз узун, ден соолугуңуз бекем болсун! Ар бир күнүңүз кубанычка, бакытка толсун!»\n3. Сүйүктүүңүзгө: «Сен менин жашоомдогу эң кооз гүлсүң. Туулган күнүң менен, алтыным!»\n\nБиздин флористтер бул сөздөрдү каллиграфия менен акысыз открыткага жазып беришет! ✍️`;
    }
    if (lower.includes('жеткирүү') || lower.includes('канча') || lower.includes('жеткире') || lower.includes('баа')) {
      return `Бишкек боюнча жеткирүү шарттары: 🚚\n\n• Борбор (Алтын квадрат) — 3 000 сомдон жогору БЕКЕР (болбосо 200 сом).\n• Түштүк кичи райондору (Асанбай, 3-12 к/р) — 250 сом.\n• Жал кичи району — 250 сом.\n• Туңгуч, Чыгыш-5, Көк-Жар — 280 сом.\n• Экспресс жеткирүү 60-75 мүнөттө даяр болот!\n\nОшондой эле Эркиндик бульвары 35 дарегинен өзүңүз алып кетсеңиз да болот.`;
    }
    if (lower.includes('төлөм') || lower.includes('мбанк') || lower.includes('mbank') || lower.includes('акча')) {
      return `Төлөмдү сизге ыңгайлуу жол менен жүргүзсөңүз болот: 💳\n\n• MBank QR аркылуу заматта төлөө\n• MBank Push (номериңизге эсеп чыгаруу)\n• Элкарт, Visa, MasterCard\n• Курьерден алганда накталай же терминал менен.\n\nБуйрутма бергенден кийин сизге дароо электрондук квитанция берилет.`;
    }
    return `Gülshat Atelier бутигинде бүгүн эң жаңы голландиялык пиондор ("Нежность Ала-Тоо" 4 900 с.), француз розалары ("Парижский Рассвет" 5 800 с.) жана шляпа кутучасындагы тюльпандар бар. Кандай букетти карап көрөлү? Жеткирүү Бишкек боюнча 60 мүнөттөн башталат! 🌿`;
  }

  // Russian queries
  if (lower.includes('привет') || lower.includes('здравствуй') || lower.includes('добрый день')) {
    return `Здравствуйте! Добро пожаловать в Gülshat Atelier! 🌸\n\nЯ с радостью помогу вам подобрать идеальный букет свежих цветов в Бишкеке, оформить доставку или составить душевный текст для открытки. Какой повод празднуем? День рождения, романтическое свидание или подарок для мамы?`;
  }
  if (lower.includes('открытк') || lower.includes('текст') || lower.includes('поздравлен') || lower.includes('пожелани')) {
    return `Вот несколько красивых вариантов текста для нашей бесплатной каллиграфической открытки: 💌\n\n1. На День Рождения: «Пусть твоя жизнь будет такой же яркой, нежной и ароматной, как эти цветы! С праздником!»\n2. Для любимой: «Каждый лепесток здесь — напоминание о том, как сильно я тебя люблю. Улыбнись!»\n3. Вариант на кыргызском: «Туулган күнүңүз менен! Жашооңуз дайыма гүлдөй ачылып турсун!»\n\nКакой вариант вам ближе? Мы подпишем открытку вручную пером и чернилами! ✍️`;
  }
  if (lower.includes('доставк') || lower.includes('район') || lower.includes('курьер') || lower.includes('время')) {
    return `Доставка букетов по Бишкеку: 🚗\n\n• Центр (Золотой квадрат) — Бесплатно при заказе от 3 000 сом (иначе 200 сом).\n• Южные микрорайоны (3–12 мкр, Асанбай) — 250 сом.\n• Джал, Джал-Артис — 250 сом.\n• Тунгуч, Восток-5, Кок-Жар — 280 сом.\n• Экспресс-доставка за 60-75 минут прямо до двери.\n\nКаждый букет доставляется в специальном аквабоксе со свежей водой, а перед отправкой мы пришлем вам фотоотчет в WhatsApp! 📸`;
  }
  if (lower.includes('оплат') || lower.includes('мбанк') || lower.includes('mbank') || lower.includes('картой')) {
    return `Мы поддерживаем все популярные способы онлайн-оплаты в Кыргызстане: 💳\n\n• MBank QR (мгновенное сканирование)\n• MBank Push по номеру телефона\n• Банковские карты (Visa, MasterCard, Элкарт)\n• Наличными или картой курьеру при получении.\n\nПосле оформления заказа вы получите официальный электронный чек.`;
  }

  return `В нашем бутике на бул. Эркиндик 35 сейчас в наличии роскошные пионы («Нежность Ала-Тоо», 4 900 с.), королевские розы Остина («Парижский Рассвет», 5 800 с.) и гортензии. Бесплатная открытка с каллиграфией и подкормка Chrysal прилагаются к каждому заказу! 🌿 Подсказать детали по доставке в Бишкеке?`;
}

// Chat API Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, language = 'ru' } = req.body;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const lastUserMessage = messages[messages.length - 1].content;

    // Server-side Gemini API call if key is available
    if (process.env.GEMINI_API_KEY) {
      try {
        const ai = new GoogleGenAI({
          apiKey: process.env.GEMINI_API_KEY,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            },
          },
        });

        // Format history
        const formattedContents = messages.map((m: any) => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }],
        }));

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: formattedContents,
          config: {
            systemInstruction:
              SYSTEM_INSTRUCTION +
              `\nUser Language: ${language === 'ky' ? 'KYRGYZ (Жоопту кыргызча бер)' : language === 'en' ? 'ENGLISH (Respond in English)' : 'RUSSIAN (Отвечай по-русски)'}.`,
            temperature: 0.7,
          },
        });

        if (response.text) {
          return res.json({ reply: response.text });
        }
      } catch (geminiError) {
        console.warn('Gemini server call failed, using bilingual florist engine:', geminiError);
      }
    }

    // High quality bilingual fallback
    const localReply = getLocalBilingualResponse(lastUserMessage, language);
    return res.json({ reply: localReply });
  } catch (error: any) {
    console.error('Chat endpoint error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default app;
