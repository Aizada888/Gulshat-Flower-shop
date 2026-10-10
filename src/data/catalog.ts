import { FlowerProduct, AddonItem } from '../types/flower';
import { SupportedLanguage } from '../i18n/translations';

export const FLOWER_PRODUCTS: FlowerProduct[] = [
  {
    id: 'fl-01',
    title: 'Нежность Ала-Тоо',
    subtitle: 'Воздушный авторский букет в пудровой палитре',
    category: 'peonies',
    occasion: ['birthday', 'love', 'anniversary'],
    price: 4900,
    oldPrice: 5600,
    stemsCount: '17 стеблей',
    composition: ['Пионы Сара Бернар', 'Розы Капучино', 'Эустома белая', 'Эвкалипт цинерея'],
    palette: 'Кремово-пудровая с серебром',
    badge: 'Бестселлер',
    isPopular: true,
    scentIntensity: 'Умеренный',
    durabilityDays: '8-11 дней',
    description: 'Изысканная композиция, вдохновленная утренней дымкой над горами Ала-Тоо. Нежные голландские пионы гармонируют с редкими розами Капучино и шелковистыми бутонами эустомы.',
    imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1000&q=80'
    ],
    flowerType: 'peony',
    gradientBg: 'from-[#FDF2EC] via-[#F8E3D8] to-[#EFD0C2]',
    accentColor: '#C47768',
    variants: [
      { size: 'S', label: 'Компактный (S)', price: 3400, stemsCount: '11 стеблей', diameter: '28 см' },
      { size: 'M', label: 'Стандартный (M)', price: 4900, stemsCount: '17 стеблей', diameter: '38 см' },
      { size: 'L', label: 'Пышный (L)', price: 7200, stemsCount: '27 стеблей', diameter: '48 см' },
      { size: 'Deluxe', label: 'Премиум Гранд', price: 11900, stemsCount: '45 стеблей', diameter: '62 см' },
    ],
    translations: {
      ky: {
        title: 'Ала-Тоо Назиктиги',
        subtitle: 'Пудра өңүндөгү жеңил автордук букет',
        composition: ['Сара Бернар пиондору', 'Капучино розалары', 'Ак эустома', 'Эвкалипт цинерея'],
        description: 'Ала-Тоо тоолорунун үстүндөгү таңкы тумандан шыктанып жасалган композиция. Голландиянын пиондору жана Капучино розалары бири-бирине өзгөчө көрк кошот.',
        badge: 'Хит букет',
        palette: 'Каймак-пудра жана күмүш',
        durabilityDays: '8-11 күн',
      },
      en: {
        title: 'Ala-Too Tenderness',
        subtitle: 'Airy signature bouquet in powder blush palette',
        composition: ['Sarah Bernhardt Peonies', 'Cappuccino Garden Roses', 'White Lisianthus', 'Silver Eucalyptus'],
        description: 'An exquisite composition inspired by the morning mist over the Ala-Too mountains. Tender Dutch peonies blend harmoniously with rare Cappuccino roses and silky eustoma.',
        badge: 'Bestseller',
        palette: 'Creamy blush and silver',
        durabilityDays: '8-11 days',
      },
    },
  },
  {
    id: 'fl-02',
    title: 'Парижский Рассвет',
    subtitle: 'Королевские садовые пионовидные розы',
    category: 'roses',
    occasion: ['love', 'anniversary', 'wedding'],
    price: 5800,
    stemsCount: '19 роз',
    composition: ['Пионовидные розы Juliet David Austin', 'Французские розы O\'Hara', 'Веточки фисташки'],
    palette: 'Персиково-зефирная',
    badge: 'Сорт David Austin',
    isPopular: true,
    scentIntensity: 'Насыщенный',
    durabilityDays: '7-9 дней',
    description: 'Легендарные пионовидные розы Дэвида Остина с пьянящим фруктово-медовым ароматом. Каждый бутон раскрывается в чашевидное кружево из более чем 90 лепестков.',
    imageUrl: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80'
    ],
    flowerType: 'rose',
    gradientBg: 'from-[#FFF1E8] via-[#FCE3D2] to-[#F5CEB6]',
    accentColor: '#D27F5C',
    variants: [
      { size: 'S', label: 'Мини (S)', price: 3900, stemsCount: '11 роз', diameter: '30 см' },
      { size: 'M', label: 'Классик (M)', price: 5800, stemsCount: '19 роз', diameter: '42 см' },
      { size: 'L', label: 'Грандиозный (L)', price: 8900, stemsCount: '29 роз', diameter: '54 см' },
      { size: 'Deluxe', label: 'Королевский (Deluxe)', price: 14500, stemsCount: '51 роза', diameter: '70 см' },
    ],
    translations: {
      ky: {
        title: 'Париж Таңы',
        subtitle: 'Падышалык бакча пион сымал розалары',
        composition: ['Juliet David Austin розалары', 'O\'Hara француз розалары', 'Фисташка бутактары'],
        description: 'Дэвид Остиндин атактуу пион сымал розалары, бал жана жемиш жыттуу. Ар бир гүлдүн 90дон ашуун назик жалбыракчалары бар.',
        badge: 'Дэвид Остин сорту',
        palette: 'Шабдалы жана зефир',
        durabilityDays: '7-9 күн',
      },
      en: {
        title: 'Parisian Dawn',
        subtitle: 'Royal David Austin garden roses',
        composition: ['Juliet David Austin Roses', 'French O\'Hara Roses', 'Pistache Foliage'],
        description: 'Legendary English garden roses by David Austin with intoxicating honey-fruit fragrance. Each bloom unfurls into a cup of over 90 delicate ruffled petals.',
        badge: 'David Austin Variety',
        palette: 'Peach & marshmallow',
        durabilityDays: '7-9 days',
      },
    },
  },
  {
    id: 'fl-03',
    title: 'Лазурный Иссык-Куль',
    subtitle: 'Объемная небесная гортензия с акцентами',
    category: 'hydrangeas',
    occasion: ['gratitude', 'birthday', 'apology'],
    price: 4200,
    stemsCount: '3 шапки гортензий + микс',
    composition: ['Гортензия лазурная колумбийская', 'Белоснежная альстромерия', 'Оксипеталум', 'Лаванда'],
    palette: 'Небесно-голубая и серебристая',
    isPopular: true,
    scentIntensity: 'Деликатный',
    durabilityDays: '10-14 дней',
    description: 'Вдохновлен кристальной гладью священного озера Иссык-Куль. Крупные соцветия голубой гортензии создают ощущение невесомого облака.',
    imageUrl: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=80'
    ],
    flowerType: 'hydrangea',
    gradientBg: 'from-[#EAF3FA] via-[#DCEBFA] to-[#C8DEF4]',
    accentColor: '#4F84B8',
    variants: [
      { size: 'S', label: 'Соло облако (S)', price: 2800, stemsCount: '1 крупная гортензия + декор', diameter: '32 см' },
      { size: 'M', label: 'Трио (M)', price: 4200, stemsCount: '3 гортензии + микс', diameter: '44 см' },
      { size: 'L', label: 'Квинтет (L)', price: 6800, stemsCount: '5 гортензий + эустома', diameter: '55 см' },
      { size: 'Deluxe', label: 'Океан (Deluxe)', price: 10500, stemsCount: '9 гортензий в оформлении', diameter: '72 см' },
    ],
    translations: {
      ky: {
        title: 'Ысык-Көл Көгүлтүрү',
        subtitle: 'Асмандай тунук көк гортензиялар',
        composition: ['Колумбиялык көгүлтүр гортензия', 'Ак альстромерия', 'Оксипеталум', 'Лаванда'],
        description: 'Ыйык Ысык-Көлдүн тунук көгүлтүр суусунан шыктануу менен түзүлгөн. Көк гортензиянын чоң гүлдөрү жеңил булуттай сезилет.',
        palette: 'Асман көк жана күмүш',
        durabilityDays: '10-14 күн',
      },
      en: {
        title: 'Azure Issyk-Kul',
        subtitle: 'Voluminous sky-blue hydrangeas with delicate accents',
        composition: ['Colombian Azure Hydrangeas', 'Snow-white Alstroemeria', 'Oxypetalum', 'French Lavender'],
        description: 'Inspired by the pristine crystal waters of sacred Lake Issyk-Kul. Huge sky-blue hydrangea florets create the impression of a floating cloud.',
        palette: 'Sky blue & silver',
        durabilityDays: '10-14 days',
      },
    },
  },
  {
    id: 'fl-04',
    title: 'Весенний Эркиндик',
    subtitle: 'Коралловые голландские тюльпаны в шляпной коробке',
    category: 'boxes',
    occasion: ['march8', 'birthday', 'gratitude'],
    price: 3600,
    oldPrice: 4200,
    stemsCount: '25 тюльпанов',
    composition: ['Тюльпаны пионовидные Columbus', 'Фрезии белые', 'Оазис с питательным раствором', 'Шляпная коробка'],
    palette: 'Кораллово-малиновая',
    badge: 'Стойкость в оазисе',
    isSeasonal: true,
    scentIntensity: 'Деликатный',
    durabilityDays: '9-12 дней',
    description: 'Свежесрезанные пионовидные тюльпаны в премиальной бархатной шляпной коробке цвета слоновой кости. Цветы установлены в специальный флористический оазис и не требуют вазы.',
    imageUrl: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=80'
    ],
    flowerType: 'box',
    gradientBg: 'from-[#FCECEE] via-[#FADAE0] to-[#F5C2CB]',
    accentColor: '#C8576C',
    variants: [
      { size: 'S', label: 'Мини бокс (S)', price: 2600, stemsCount: '15 тюльпанов', diameter: '22 см' },
      { size: 'M', label: 'Медиум (M)', price: 3600, stemsCount: '25 тюльпанов', diameter: '30 см' },
      { size: 'L', label: 'Гранд бокс (L)', price: 5400, stemsCount: '41 тюльпан', diameter: '38 см' },
      { size: 'Deluxe', label: 'Люкс Бархат (Deluxe)', price: 8200, stemsCount: '65 тюльпанов', diameter: '48 см' },
    ],
    translations: {
      ky: {
        title: 'Жазгы Эркиндик',
        subtitle: 'Шляпа кутучасындагы кооз голландиялык тюльпандар',
        composition: ['Columbus пион сымал тюльпандары', 'Ак фрезиялар', 'Оазис губкасы', 'Шляпа кутучасы'],
        description: 'Пил сөөгү өңүндөгү баркыт шляпа кутучасына салынган жаңы тюльпандар. Флористикалык оазисте турат жана вазаны талап кылбайт.',
        badge: 'Оазисте чыдамкай',
        palette: 'Коралл жана малина',
        durabilityDays: '9-12 күн',
      },
      en: {
        title: 'Spring Erkindik',
        subtitle: 'Coral Dutch double peony tulips in a velvet hat box',
        composition: ['Double Peony Tulips Columbus', 'White Freesias', 'Floral Nutrient Oasis', 'Luxury Hat Box'],
        description: 'Freshly cut peony tulips arranged in an ivory velvet round hat box. Kept hydrated in special floral foam and requires no vase.',
        badge: 'Long-lasting Oasis',
        palette: 'Coral & raspberry',
        durabilityDays: '9-12 days',
      },
    },
  },
  {
    id: 'fl-05',
    title: 'Винтажный Бордо',
    subtitle: 'Эквадорские бархатные розы Red Naomi',
    category: 'roses',
    occasion: ['love', 'anniversary'],
    price: 5200,
    stemsCount: '21 роза (70 см)',
    composition: ['Розы Red Naomi (Эквадор 70см)', 'Атласная лента', 'Дизайнерский матовый крафт'],
    palette: 'Глубокий винный и бархатный черный',
    badge: 'Стебли 70 см',
    isPopular: true,
    scentIntensity: 'Насыщенный',
    durabilityDays: '10-14 дней',
    description: 'Классика высокой флористики. Отборные эквадорские розы с высоким бархатистым бутоном на длинных стеблях. Символ чистой страсти и бескомпромиссного вкуса.',
    imageUrl: '/images/vintage_bordeaux_red_roses.jpg',
    gallery: [
      '/images/vintage_bordeaux_red_roses.jpg',
      '/images/vintage_bordeaux_red_roses_2.jpg',
      '/images/vintage_bordeaux_red_roses_3.jpg',
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1000&q=80'
    ],
    flowerType: 'rose',
    gradientBg: 'from-[#F5E4E4] via-[#ECC9CB] to-[#DC9F9F]',
    accentColor: '#962A39',
    variants: [
      { size: 'S', label: '15 роз (S)', price: 3900, stemsCount: '15 роз (70см)', diameter: '32 см' },
      { size: 'M', label: '21 роза (M)', price: 5200, stemsCount: '21 роза (70см)', diameter: '42 см' },
      { size: 'L', label: '35 роз (L)', price: 8400, stemsCount: '35 роз (70см)', diameter: '55 см' },
      { size: 'Deluxe', label: '51 роза (Deluxe)', price: 12200, stemsCount: '51 роза (70см)', diameter: '68 см' },
    ],
    translations: {
      ky: {
        title: 'Винтаж Бордо',
        subtitle: 'Эквадордун Red Naomi баркыт розалары (70 см)',
        composition: ['Red Naomi розалары (Эквадор 70см)', 'Атлас тасмасы', 'Дизайнердик крафт кагазы'],
        description: 'Жогорку флористиканын классикасы. Узун сабактагы баркыттай чоң бутондуу эквадор розалары. Чыныгы сүйүүнүн жана сыйдын белгиси.',
        badge: '70 см узун сабак',
        palette: 'Терең кочкул кызыл жана кара',
        durabilityDays: '10-14 күн',
      },
      en: {
        title: 'Vintage Bordeaux',
        subtitle: 'Long-stem Ecuadorian velvet Red Naomi roses',
        composition: ['Red Naomi Roses (Ecuador 70cm)', 'Silk Satin Ribbon', 'Matte Designer Wrap'],
        description: 'High floristry classic. Selected Ecuadorian roses with rich velvet petals on majestic 70cm stems. A statement of pure passion and uncompromising taste.',
        badge: '70cm Long Stems',
        palette: 'Deep burgundy & noir',
        durabilityDays: '10-14 days',
      },
    },
  },
  {
    id: 'fl-06',
    title: 'Караван Шёлка',
    subtitle: 'Уникальные живые цветы драгоценных пряностей',
    category: 'mix',
    occasion: ['birthday', 'gratitude', 'wedding'],
    price: 4600,
    stemsCount: '21 стебель',
    composition: ['Цветы шафрана (Crocus sativus)', 'Цветущая нигелла калинджи', 'Цветы гвоздичного дерева', 'Шелковые травы и сухоцветы'],
    palette: 'Шафраново-фиолетовая и пряная охра',
    scentIntensity: 'Умеренный',
    durabilityDays: '9-12 дней',
    description: 'Уникальная ботаническая композиция из цветущих пряных растений: изысканные цветы шафрана с рубиновыми рыльцами, звездчатые лазурные цветы пряной нигеллы и бутоны цветущего гвоздичного дерева.',
    imageUrl: '/images/caravan_silk_spice_flowers.jpg',
    gallery: [
      '/images/caravan_silk_spice_flowers.jpg',
      '/images/caravan_silk_spice_flowers_2.jpg',
      '/images/caravan_silk_spice_flowers_3.jpg',
      '/images/caravan_silk_spice_flowers_4.jpg',
    ],
    flowerType: 'mix',
    gradientBg: 'from-[#FAF2E8] via-[#F5E3CF] to-[#ECD1B3]',
    accentColor: '#B66F3E',
    variants: [
      { size: 'S', label: 'S (15 стеблей)', price: 3300, stemsCount: '15 стеблей', diameter: '28 см' },
      { size: 'M', label: 'M (21 стебель)', price: 4600, stemsCount: '21 стебель', diameter: '38 см' },
      { size: 'L', label: 'L (33 стебля)', price: 6900, stemsCount: '33 стебля', diameter: '50 см' },
      { size: 'Deluxe', label: 'Deluxe (50 стеблей)', price: 10900, stemsCount: '50 стеблей', diameter: '65 см' },
    ],
    translations: {
      ky: {
        title: 'Жибек Кербени',
        subtitle: 'Жыпар жыттуу татымалдардын сейрек кездешүүчү жандуу гүлдөрү',
        composition: ['Шафран гүлдөрү (Crocus sativus)', 'Гүлдөгөн нигелла', 'Калампыр дарагынын гүлдөрү', 'Жибек чөптөр'],
        description: 'Улуу Жибек Жолунун татымал өсүмдүктөрүнүн гүлдөрүнөн түзүлгөн автордук букет: шафран гүлдөрү, көгүлтүр нигелла жана жыпар калампыр гүлдөрү.',
        palette: 'Шафран, кочкул кызыл жана охра',
        durabilityDays: '9-12 күн',
      },
      en: {
        title: 'Silk Caravan',
        subtitle: 'Rare blooming flowers of precious spice plants',
        composition: ['Saffron Blooms (Crocus sativus)', 'Blue Nigella Flowers', 'Clove Tree Blossoms', 'Silk Botanical Accents'],
        description: 'Rare botanical showcase celebrating the living flowers of spice plants: vivid saffron crocus blooms with scarlet stigmas, starry blue nigella flowers, and clove tree blossoms.',
        palette: 'Saffron violet, terracotta & warm amber',
        durabilityDays: '9-12 days',
      },
    },
  },
  {
    id: 'fl-07',
    title: 'Белоснежная Эустома',
    subtitle: 'Стойкий и невесомый монобукет японской эустомы',
    category: 'mono',
    occasion: ['birthday', 'apology', 'gratitude', 'wedding'],
    price: 3800,
    stemsCount: '15 веток (более 45 бутонов)',
    composition: ['Эустома махровая Super Magic White', 'Лента из натурального льна'],
    palette: 'Чистый белый и свежая мята',
    badge: 'Стойкость 14+ дней',
    scentIntensity: 'Деликатный',
    durabilityDays: '14-18 дней',
    description: 'Потрясающая японская махровая эустома, напоминающая шелковые юбки балерин. Один из самых стойких цветов, способный радовать получателя до 3 недель при регулярной смене воды.',
    imageUrl: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80'
    ],
    flowerType: 'eustoma',
    gradientBg: 'from-[#F5F8F6] via-[#E8F1EC] to-[#D5E5DC]',
    accentColor: '#4A7C59',
    variants: [
      { size: 'S', label: '10 веток (S)', price: 2700, stemsCount: '10 веток (30 бутонов)', diameter: '30 см' },
      { size: 'M', label: '15 веток (M)', price: 3800, stemsCount: '15 веток (45 бутонов)', diameter: '40 см' },
      { size: 'L', label: '25 веток (L)', price: 6100, stemsCount: '25 веток (75 бутонов)', diameter: '52 см' },
      { size: 'Deluxe', label: '40 веток (Deluxe)', price: 9500, stemsCount: '40 веток (120 бутонов)', diameter: '68 см' },
    ],
    translations: {
      ky: {
        title: 'Кардай Ак Эустома',
        subtitle: 'Чыдамкай ак япон эустомасынын монобукети',
        composition: ['Super Magic White япон эустомасы', 'Табигый зыгыр тасмасы'],
        description: 'Балеринанын көйнөгүндөй кооз ак махровый эустома. Эң чыдамдуу гүлдөрдүн бири, суусун жаңылап турса 2-3 жумага чейин жаңы бойдон сакталат.',
        badge: '14+ күн сакталат',
        palette: 'Таза ак жана жалбыз жашыл',
        durabilityDays: '14-18 күн',
      },
      en: {
        title: 'Snow White Eustoma',
        subtitle: 'Long-lasting and weightless Japanese lisianthus mono bouquet',
        composition: ['Double Flowered Super Magic White Lisianthus', 'Natural Linen Ribbon'],
        description: 'Breath-taking Japanese double lisianthus reminiscent of ballerina silk skirts. One of the hardiest cut stems, lasting up to 3 weeks with fresh water.',
        badge: '14+ Days Fresh',
        palette: 'Pure white & fresh mint',
        durabilityDays: '14-18 days',
      },
    },
  },
  {
    id: 'fl-08',
    title: 'Пудровый Зефир',
    subtitle: 'Композиция в круглой коробочке с макарунами',
    category: 'boxes',
    occasion: ['birthday', 'love', 'gratitude'],
    price: 4400,
    stemsCount: '15 цветов + 6 макарун',
    composition: ['Кустовые пионовидные розы', 'Гипсофила розовая', 'Французские макаруны 6 шт', 'Дизайнерская коробка'],
    palette: 'Зефирно-розовая',
    badge: 'Цветы + Десерт',
    isPopular: true,
    scentIntensity: 'Умеренный',
    durabilityDays: '8-10 дней',
    description: 'Идеальный подарок "2 в 1": свежайшие пионовидные бутоны в оазисе и коробочка свежих французских макарун ручной работы с начинками фисташка, малина и соленая карамель.',
    imageUrl: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1000&q=80'
    ],
    flowerType: 'box',
    gradientBg: 'from-[#FDF3F5] via-[#FAE1E7] to-[#F5CBD4]',
    accentColor: '#B8556F',
    variants: [
      { size: 'S', label: 'S (Box + 4 макаруна)', price: 3200, stemsCount: '11 цветов + сладости', diameter: '24 см' },
      { size: 'M', label: 'M (Box + 6 макарун)', price: 4400, stemsCount: '15 цветов + сладости', diameter: '32 см' },
      { size: 'L', label: 'L (Box + 10 макарун)', price: 6500, stemsCount: '25 цветов + сладости', diameter: '42 см' },
      { size: 'Deluxe', label: 'Гранд Свит Люкс', price: 9800, stemsCount: '40 цветов + сладости', diameter: '55 см' },
    ],
    translations: {
      ky: {
        title: 'Пудра Зефир',
        subtitle: 'Тегерек кутучадагы гүлдөр жана макарун таттуулары',
        composition: ['Пион сымал бадал розалары', 'Кызгылт гипсофила', 'Француз макарундары 6 даана', 'Дизайнердик куту'],
        description: 'Эң сонун «2-биринин ичинде» белек: жаңы розалар жана колго жасалган таттуу француз макарундары (фисташка, малина, карамель).',
        badge: 'Гүлдөр + Таттуулар',
        palette: 'Зефир кызгылт',
        durabilityDays: '8-10 күн',
      },
      en: {
        title: 'Powder Marshmallow',
        subtitle: 'Flowers in round box with French macarons',
        composition: ['Spray Peony Roses', 'Pink Baby\'s Breath', '6 Handcrafted French Macarons', 'Designer Round Box'],
        description: 'The ultimate 2-in-1 delight: fresh garden blooms in floral foam alongside 6 freshly baked artisanal French macarons.',
        badge: 'Flowers + Dessert',
        palette: 'Marshmallow pink',
        durabilityDays: '8-10 days',
      },
    },
  },
  {
    id: 'fl-09',
    title: 'Солнечный Бишкек',
    subtitle: 'Яркий жизнерадостный букет из подсолнухов и ромашек',
    category: 'mix',
    occasion: ['birthday', 'gratitude'],
    price: 3300,
    stemsCount: '15 стеблей',
    composition: ['Мини-подсолнухи Vincent Choice', 'Матрикария (ромашка)', 'Солидаго', 'Краспедия'],
    palette: 'Медово-золотистая',
    scentIntensity: 'Деликатный',
    durabilityDays: '10-14 дней',
    description: 'Солнце и тепло Чуйской долины в одном букете. Наполняет дом уютным светом, поднимает настроение и дарит искреннюю улыбку с первой секунды.',
    imageUrl: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80'
    ],
    flowerType: 'mix',
    gradientBg: 'from-[#FFFCEB] via-[#FEF6CE] to-[#FCEAA5]',
    accentColor: '#B8841B',
    variants: [
      { size: 'S', label: 'Маленькое солнце (S)', price: 2300, stemsCount: '9 стеблей', diameter: '26 см' },
      { size: 'M', label: 'Стандарт (M)', price: 3300, stemsCount: '15 стеблей', diameter: '36 см' },
      { size: 'L', label: 'Большой луч (L)', price: 4900, stemsCount: '25 стеблей', diameter: '48 см' },
      { size: 'Deluxe', label: 'Золотой восторг', price: 7800, stemsCount: '41 стебель', diameter: '60 см' },
    ],
    translations: {
      ky: {
        title: 'Күнөстүү Бишкек',
        subtitle: 'Күн карама жана ромашкалардан турган шайыр букет',
        composition: ['Vincent Choice мини күн карамалары', 'Талаа ромашкалары', 'Солидаго', 'Краспедия'],
        description: 'Чүй өрөөнүнүн күн нурун жана жылуулугун тартуулаган жаркыраган букет. Үйгө жарык чачып, маанайды көтөрөт.',
        palette: 'Балдай алтын сары',
        durabilityDays: '10-14 күн',
      },
      en: {
        title: 'Sunny Bishkek',
        subtitle: 'Vibrant cheerful bouquet of sunflowers & chamomile',
        composition: ['Mini Sunflowers Vincent Choice', 'Matricaria Chamomiles', 'Golden Solidago', 'Craspedia Spheres'],
        description: 'Warmth and golden sunshine of the Chuy valley tied into one vibrant bouquet. Brightens up any room with warmth and genuine joy.',
        palette: 'Honey golden amber',
        durabilityDays: '10-14 days',
      },
    },
  },
];

export const COMPLIMENTARY_ADDONS: AddonItem[] = [
  {
    id: 'ad-card',
    title: 'Открытка с рукописным каллиграфическим пожеланием',
    price: 0,
    category: 'card',
    description: 'Бережно подпишем дизайнерскую открытку вашим текстом пером и тушью.',
    isComplimentary: true,
    translations: {
      ky: {
        title: 'Кол менен каллиграфияда жазылган фирмалык открытка',
        description: 'Сиздин каалооңузду сыя жана калем менен открыткага кооз кылып жазып беребиз.',
      },
      en: {
        title: 'Handwritten Calligraphed Greeting Card',
        description: 'Carefully hand-lettered with dip pen and ink with your personal message.',
      },
    },
  },
  {
    id: 'ad-chrysal',
    title: 'Пакетик фирменной голландской подкормки Chrysal',
    price: 0,
    category: 'care',
    description: 'Продлевает стойкость бутона в вазе в 1.5–2 раза и сохраняет воду прозрачной.',
    isComplimentary: true,
    translations: {
      ky: {
        title: 'Chrysal голландиялык фирмалык гүл азыгы',
        description: 'Гүлдүн өмүрүн 1.5–2 эсе узартып, вазадагы сууну таза сактайт.',
      },
      en: {
        title: 'Chrysal Dutch Floral Food Sachet',
        description: 'Doubles bloom longevity in vase and prevents cloudy water.',
      },
    },
  },
  {
    id: 'ad-photo',
    title: 'Фото букета перед отправкой в WhatsApp/Telegram',
    price: 0,
    category: 'care',
    description: 'Флорист согласует с вами ракурс и вид букета до выезда курьера.',
    isComplimentary: true,
    translations: {
      ky: {
        title: 'Жөнөтөрдөн мурда букеттин WhatsApp аркылуу сүрөтү',
        description: 'Курьер чыгардын алдында флорист даяр букетти сизге сүрөткө тартып көрсөтөт.',
      },
      en: {
        title: 'Photo of Bouquet via WhatsApp Before Dispatch',
        description: 'Florist shares photo & video of your exact arrangement prior to courier departure.',
      },
    },
  },
];

export const PAID_ADDONS: AddonItem[] = [
  {
    id: 'ad-choc',
    title: 'Крафтовый бельгийский шоколад ручной работы',
    price: 650,
    category: 'sweets',
    description: 'Плитка темного шоколада с сублимированной малиной, фисташками и лепестками роз.',
    translations: {
      ky: {
        title: 'Колго жасалган бельгиялык крафт шоколады',
        description: 'Малина, фисташка жана роза жалбырактары кошулган кара шоколад.',
      },
      en: {
        title: 'Handcrafted Belgian Artisan Chocolate',
        description: 'Dark chocolate bar garnished with freeze-dried raspberries, pistachios & rose petals.',
      },
    },
  },
  {
    id: 'ad-vase',
    title: 'Дизайнерская рифленая ваза из дымчатого стекла',
    price: 1250,
    category: 'vase',
    description: 'Идеальная высота 24 см для удобной постановки букета без лишней подрезки.',
    translations: {
      ky: {
        title: 'Түтүн түстүү дизайнердик айнек ваза',
        description: '24 см бийиктик букетти кооз коюу үчүн абдан ыңгайлуу.',
      },
      en: {
        title: 'Smoked Fluted Glass Designer Vase',
        description: 'Optimal 24cm height designed to fit bouquets without awkward trimming.',
      },
    },
  },
  {
    id: 'ad-topper',
    title: 'Деревянный топпер «С Днём Рождения» / «Любимой»',
    price: 250,
    category: 'topper',
    description: 'Изящная лазерная гравировка из светлого березового шпона.',
    translations: {
      ky: {
        title: 'Жыгачтан жасалган топпер «Туулган Күнүң Менеен» / «Сүйүктүүмө»',
        description: 'Лазердик оюм түшүрүлгөн кооз жыгач жазуу.',
      },
      en: {
        title: 'Engraved Wooden Topper "Happy Birthday" / "With Love"',
        description: 'Delicate laser-cut birch wood topper inscription.',
      },
    },
  },
  {
    id: 'ad-candle',
    title: 'Соевая ароматическая свеча «Пион и Кашемир»',
    price: 950,
    category: 'sweets',
    description: '100% натуральный соевый воск, хлопковый фитиль, 35 часов чистого горения.',
    translations: {
      ky: {
        title: '«Пион жана Кашемир» табигый соя жыпар шамдары',
        description: '100% соя мому, 35 саат таза күйөт, назик жыпар жыт.',
      },
      en: {
        title: 'Soy Aromatherapy Candle "Peony & Cashmere"',
        description: '100% natural soy wax, cotton wick, 35 hours clean burning time.',
      },
    },
  },
];

export const BISHKEK_DISTRICTS = [
  {
    id: 'center',
    name: 'Центр (Золотой квадрат: Чуй / Эркиндик / Московская / Манаса)',
    nameKy: 'Борбор (Алтын квадрат: Чүй / Эркиндик / Москва / Манас)',
    nameEn: 'City Center (Golden Square: Chuy / Erkindik / Moskovskaya / Manas)',
    cost: 0,
    minFreeOrder: 3000,
    standardCost: 200,
    approxMinutes: '40-60 мин',
    approxMinutesKy: '40-60 мүн',
    approxMinutesEn: '40-60 mins',
  },
  {
    id: 'south',
    name: 'Южные микрорайоны (мкр 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, Асанбай)',
    nameKy: 'Түштүк кичи райондор (3, 4, 5, 6, 7, 8, 9, 10, 11, 12 к/р, Асанбай)',
    nameEn: 'Southern Microdistricts (Districts 3-12, Asanbay)',
    cost: 250,
    approxMinutes: '45-65 мин',
    approxMinutesKy: '45-65 мүн',
    approxMinutesEn: '45-65 mins',
  },
  {
    id: 'jal',
    name: 'Джал, Верхний Джал, Джал-Артис, Гагарина',
    nameKy: 'Жал, Жогорку Жал, Жал-Артис, Гагарин көч.',
    nameEn: 'Jal, Upper Jal, Jal-Artis, Gagarin St',
    cost: 250,
    approxMinutes: '45-65 мин',
    approxMinutesKy: '45-65 мүн',
    approxMinutesEn: '45-65 mins',
  },
  {
    id: 'tunguch',
    name: 'Тунгуч, Восток-5, Аламедин-1, Кара-Жыгач, Кок-Жар',
    nameKy: 'Туңгуч, Чыгыш-5, Аламүдүн-1, Кара-Жыгач, Көк-Жар',
    nameEn: 'Tunguch, Vostok-5, Alamedin-1, Kok-Zhar',
    cost: 280,
    approxMinutes: '50-70 мин',
    approxMinutesKy: '50-70 мүн',
    approxMinutesEn: '50-70 mins',
  },
  {
    id: 'kyrgyzstan1',
    name: 'Киргизия-1, Ынтымак, Чон-Арык, Байтик, Орто-Сай',
    nameKy: 'Кыргызстан-1, Ынтымак, Чоң-Арык, Байтик, Орто-Сай',
    nameEn: 'Kyrgyzstan-1, Yntymak, Chon-Aryk, Baytik, Orto-Say',
    cost: 350,
    approxMinutes: '55-80 мин',
    approxMinutesKy: '55-80 мүн',
    approxMinutesEn: '55-80 mins',
  },
  {
    id: 'pickup',
    name: 'Самовывоз из бутика (Бишкек, бул. Эркиндик 35, угол Боконбаева)',
    nameKy: 'Бутиктен өзү алып кетүү (Бишкек, Эркиндик бул. 35, Бөкөнбаев бурчу)',
    nameEn: 'Storefront Self-Pickup (Bishkek, 35 Erkindik Blvd, corner Bokonbaev)',
    cost: 0,
    approxMinutes: 'Готовность через 30 мин',
    approxMinutesKy: '30 мүнөттө даяр',
    approxMinutesEn: 'Ready in 30 mins',
  },
];

export const TIME_SLOTS_DATA: Record<SupportedLanguage, string[]> = {
  ru: [
    'В течение 60-75 минут (Экспресс)',
    '09:00 — 12:00 (Утренний)',
    '12:00 — 15:00 (День)',
    '15:00 — 18:00 (После полудня)',
    '18:00 — 21:00 (Вечерний)',
    '21:00 — 23:00 (Поздний вечер)',
    'К точному времени (+300 сом)',
  ],
  ky: [
    '60-75 мүнөттүн ичинде (Экспресс)',
    '09:00 — 12:00 (Эртең менен)',
    '12:00 — 15:00 (Күндүз)',
    '15:00 — 18:00 (Түштөн кийин)',
    '18:00 — 21:00 (Кечки)',
    '21:00 — 23:00 (Түнкү)',
    'Белгиленген так мүнөткө (+300 сом)',
  ],
  en: [
    'Within 60-75 minutes (Express)',
    '09:00 — 12:00 (Morning)',
    '12:00 — 15:00 (Afternoon)',
    '15:00 — 18:00 (Late Afternoon)',
    '18:00 — 21:00 (Evening)',
    '21:00 — 23:00 (Night)',
    'At exact time (+300 KGS)',
  ],
};

export const TIME_SLOTS: string[] = TIME_SLOTS_DATA.ru;

// Localized helper
export function getLocalizedProduct(p: FlowerProduct, lang: SupportedLanguage): FlowerProduct {
  if (lang === 'ky' && p.translations?.ky) {
    return {
      ...p,
      title: p.translations.ky.title || p.title,
      subtitle: p.translations.ky.subtitle || p.subtitle,
      composition: p.translations.ky.composition || p.composition,
      description: p.translations.ky.description || p.description,
      badge: p.translations.ky.badge !== undefined ? p.translations.ky.badge : p.badge,
      palette: p.translations.ky.palette || p.palette,
      durabilityDays: p.translations.ky.durabilityDays || p.durabilityDays,
    };
  }
  if (lang === 'en' && p.translations?.en) {
    return {
      ...p,
      title: p.translations.en.title || p.title,
      subtitle: p.translations.en.subtitle || p.subtitle,
      composition: p.translations.en.composition || p.composition,
      description: p.translations.en.description || p.description,
      badge: p.translations.en.badge !== undefined ? p.translations.en.badge : p.badge,
      palette: p.translations.en.palette || p.palette,
      durabilityDays: p.translations.en.durabilityDays || p.durabilityDays,
    };
  }
  return p;
}

export function getLocalizedAddon(a: AddonItem, lang: SupportedLanguage): AddonItem {
  if (lang === 'ky' && a.translations?.ky) {
    return {
      ...a,
      title: a.translations.ky.title || a.title,
      description: a.translations.ky.description || a.description,
    };
  }
  if (lang === 'en' && a.translations?.en) {
    return {
      ...a,
      title: a.translations.en.title || a.title,
      description: a.translations.en.description || a.description,
    };
  }
  return a;
}

export function getLocalizedDistrictName(dist: typeof BISHKEK_DISTRICTS[0], lang: SupportedLanguage): string {
  if (lang === 'ky') return dist.nameKy;
  if (lang === 'en') return dist.nameEn;
  return dist.name;
}

export function getLocalizedDistrictTime(dist: typeof BISHKEK_DISTRICTS[0], lang: SupportedLanguage): string {
  if (lang === 'ky') return dist.approxMinutesKy;
  if (lang === 'en') return dist.approxMinutesEn;
  return dist.approxMinutes;
}
