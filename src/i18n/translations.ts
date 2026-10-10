export type SupportedLanguage = 'ru' | 'ky' | 'en';

export interface Translations {
  announcement: {
    address: string;
    deliveryTime: string;
    trackOrder: string;
  };
  nav: {
    catalog: string;
    peonies: string;
    roses: string;
    boxes: string;
    mapAddress: string;
    delivery: string;
    care: string;
    chatbot: string;
    cart: string;
    searchPlaceholder: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    btnCatalog: string;
    btnOccasion: string;
    badgeDelivery: string;
    badgeDeliverySub: string;
    badgePhoto: string;
    badgePhotoSub: string;
    badgeChrysal: string;
    badgeChrysalSub: string;
    atelierCollection: string;
    onlinePayment: string;
    inStockToday: string;
    exactDateChoice: string;
    exactDateSub: string;
  };
  filters: {
    catalogTitle: string;
    catalogKicker: string;
    searchPlaceholder: string;
    found: string;
    sortBy: string;
    sortPopular: string;
    sortPriceAsc: string;
    sortPriceDesc: string;
    allFlowers: string;
    peonies: string;
    frenchRoses: string;
    hydrangeas: string;
    hatBoxes: string;
    mixes: string;
    mono: string;
    occasionLabel: string;
    occAll: string;
    occBirthday: string;
    occLove: string;
    occAnniversary: string;
    occMarch8: string;
    occGratitude: string;
    occWedding: string;
    noResults: string;
    noResultsSub: string;
    resetFilters: string;
  };
  productCard: {
    som: string;
    addToCart: string;
    added: string;
    quickView: string;
  };
  quickView: {
    stemsDiameter: string;
    durability: string;
    compositionLabel: string;
    sizeLabel: string;
    includedFree: string;
    freeCard: string;
    aquaBox: string;
    chrysal: string;
    totalCost: string;
    btnAddToCart: string;
    btnAdded: string;
  };
  cart: {
    title: string;
    freeMeterUnlocked: string;
    freeMeterNeeded: string;
    emptyTitle: string;
    emptySubtitle: string;
    backToCatalog: string;
    addonsTitle: string;
    free: string;
    subtotalFlowers: string;
    subtotalAddons: string;
    total: string;
    btnCheckout: string;
    checkoutHint: string;
  };
  checkout: {
    stepTitle: string;
    mainTitle: string;
    errorHeader: string;
    step1Title: string;
    dateLabel: string;
    today: string;
    tomorrow: string;
    dayAfter: string;
    timeSlotLabel: string;
    step2Title: string;
    districtLabel: string;
    askAddressRecipient: string;
    streetHousePlaceholder: string;
    aptOfficePlaceholder: string;
    step3Title: string;
    forOther: string;
    forMyself: string;
    senderTitle: string;
    senderName: string;
    senderPhone: string;
    recipientTitle: string;
    recipientName: string;
    recipientPhone: string;
    pickupSelfNotice: string;
    anonymousDelivery: string;
    photoBeforeDelivery: string;
    step4Title: string;
    cardPlaceholder: string;
    cardPreview: string;
    anonymousSign: string;
    fromSign: string;
    orderCommentLabel: string;
    orderCommentPlaceholder: string;
    summaryFlowers: string;
    summaryDelivery: string;
    freeDelivery: string;
    toPay: string;
    btnProceedPayment: string;
    pickupMapTitle: string;
    pickupMapDesc: string;
  };
  payment: {
    stepTitle: string;
    orderPaymentTitle: string;
    deliveryDetailsTitle: string;
    date: string;
    address: string;
    amountToPay: string;
    chooseMethod: string;
    mbankQr: string;
    mbankQrDesc: string;
    mbankPush: string;
    mbankPushDesc: string;
    card: string;
    cardDesc: string;
    cod: string;
    codDesc: string;
    scanQrNotice: string;
    openMbankSteps: string;
    paymentCode: string;
    copy: string;
    copied: string;
    recipientCo: string;
    pushPhoneLabel: string;
    pushHowItWorks: string;
    pushStep1: string;
    pushStep2: string;
    pushStep3: string;
    sslSecurity: string;
    cardNumber: string;
    expiryDate: string;
    cvc: string;
    cardHolderName: string;
    codTitle: string;
    codText: string;
    codTip: string;
    receiptNotice: string;
    btnProcessing: string;
    btnConfirmMbank: string;
    btnSendPush: string;
    btnPayCard: string;
    btnConfirmCod: string;
    secure3DTitle: string;
    secure3DText: string;
    smsPlaceholder: string;
    btnCancel: string;
    btnConfirm: string;
  };
  orderSuccess: {
    title: string;
    subtitle: string;
    orderIdLabel: string;
    paidOnline: string;
    paidCod: string;
    dateTimeLabel: string;
    whereToDeliver: string;
    recipient: string;
    cardLabel: string;
    itemsComposition: string;
    deliveryCostLabel: string;
    free: string;
    total: string;
    whatNextTitle: string;
    whatNext1: string;
    whatNext2Photo: string;
    whatNext2Aqua: string;
    whatNext3: string;
    btnTrack: string;
    btnWhatsApp: string;
    btnPrint: string;
  };
  tracker: {
    titleKicker: string;
    title: string;
    searchPlaceholder: string;
    orderLabel: string;
    deliveryDateLabel: string;
    stagesTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    step5Title: string;
    step5Desc: string;
    currentStatus: string;
    urgentSupport: string;
    urgentSupportDesc: string;
    notFoundTitle: string;
    notFoundDesc: string;
  };
  careModal: {
    kicker: string;
    title: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    btnGotIt: string;
  };
  mapSection: {
    kicker: string;
    title: string;
    subtitle: string;
    deliveryZones: string;
    btnCopyAddress: string;
    btnRoute: string;
    openToday: string;
    flagshipShowroom: string;
    parkingNotice: string;
    satelliteMode: string;
    streetMode: string;
  };
  deliveryInfo: {
    kicker: string;
    title: string;
    subtitle: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    tariffsTitle: string;
    deliveryTimeLabel: string;
    costLabel: string;
    freeCenterNote: string;
  };
  footer: {
    aboutText: string;
    showroomTitle: string;
    showroomAddress: string;
    showroomHours: string;
    showOnMap: string;
    serviceTitle: string;
    trackStatus: string;
    careGuide: string;
    deliveryZones: string;
    corporateOrders: string;
    paymentTitle: string;
    paymentDesc: string;
    copyright: string;
    tagline: string;
  };
}

export const TRANSLATIONS: Record<SupportedLanguage, Translations> = {
  ru: {
    announcement: {
      address: 'Бишкек, бул. Эркиндик 35',
      deliveryTime: 'Доставка от 60 минут · Прием заказов 24/7',
      trackOrder: 'Отследить заказ',
    },
    nav: {
      catalog: 'Каталог',
      peonies: 'Пионы',
      roses: 'Розы',
      boxes: 'В коробках',
      mapAddress: 'Карта & Адрес',
      delivery: 'Доставка в Бишкеке',
      care: 'Уход за цветами',
      chatbot: 'Чат-бот',
      cart: 'Корзина',
      searchPlaceholder: 'Поиск: пионы, розы, гортензии...',
    },
    hero: {
      kicker: 'Бишкек · Флористическое ателье · Экспресс-доставка',
      title: 'Цветы, которые говорят искреннее любых слов',
      subtitle: 'Собираем авторские букеты из свежайших голландских пионов, эквадорских роз и редких сезонных цветов. Доставим в любую точку Бишкека к точному часу с каллиграфической открыткой.',
      btnCatalog: 'Выбрать букет в каталоге',
      btnOccasion: 'Букеты на День Рождения',
      badgeDelivery: 'Доставка от 60 мин',
      badgeDeliverySub: 'По всему Бишкеку',
      badgePhoto: 'Фото до отправки',
      badgePhotoSub: 'В WhatsApp/Telegram',
      badgeChrysal: 'Стойкость до 14 дней',
      badgeChrysalSub: 'Подкормка Chrysal в дар',
      atelierCollection: 'Atelier Collection · 2026',
      onlinePayment: 'MBank & Онлайн Оплата',
      inStockToday: 'В наличии сегодня',
      exactDateChoice: 'Выбор точной даты доставки',
      exactDateSub: 'Сюрприз к точному времени',
    },
    filters: {
      catalogTitle: 'Каталог букетов и композиций',
      catalogKicker: 'Коллекция сезона · Свежие поставки из Голландии',
      searchPlaceholder: 'Поиск: пионы, розы остина, гортензия, тюльпаны...',
      found: 'Найдено:',
      sortBy: 'Сортировка:',
      sortPopular: 'По популярности',
      sortPriceAsc: 'Сначала недорогие',
      sortPriceDesc: 'Премиум букеты',
      allFlowers: 'Все цветы',
      peonies: 'Пионы',
      frenchRoses: 'Французские розы',
      hydrangeas: 'Гортензии',
      hatBoxes: 'В шляпных коробках',
      mixes: 'Авторские миксы',
      mono: 'Монобукеты',
      occasionLabel: 'Повод:',
      occAll: 'Любой повод',
      occBirthday: 'День рождения',
      occLove: 'Любовь & Свидание',
      occAnniversary: 'Годовщина',
      occMarch8: '8 Марта',
      occGratitude: 'Благодарность',
      occWedding: 'Свадьба',
      noResults: 'По вашему запросу цветы не найдены',
      noResultsSub: 'Попробуйте изменить категорию или сбросить фильтры поиска.',
      resetFilters: 'Показать все букеты',
    },
    productCard: {
      som: 'сом',
      addToCart: 'В корзину',
      added: 'Добавлено',
      quickView: 'Быстрый просмотр',
    },
    quickView: {
      stemsDiameter: 'Диаметр',
      durability: 'Стойкость',
      compositionLabel: 'Состав букета:',
      sizeLabel: 'Размер букета:',
      includedFree: 'Входит в стоимость заказа:',
      freeCard: '• Фирменная открытка с вашим текстом (бесплатно)',
      aquaBox: '• Аквабокс для свежести при доставке по Бишкеку',
      chrysal: '• Подкормка Chrysal и инструкция флориста',
      totalCost: 'Итоговая стоимость:',
      btnAddToCart: 'Добавить в корзину',
      btnAdded: 'Добавлено в корзину',
    },
    cart: {
      title: 'Ваша Корзина',
      freeMeterUnlocked: 'Бесплатная доставка по центру Бишкека разблокирована!',
      freeMeterNeeded: 'Добавьте еще на {amount} сом для бесплатной доставки в Золотой квадрат Бишкека.',
      emptyTitle: 'Корзина пока пуста',
      emptySubtitle: 'Выберите свежий букет в каталоге, и мы бережно соберем его для вашего события.',
      backToCatalog: 'Вернуться к букетам',
      addonsTitle: 'Дополнения к букету:',
      free: 'Бесплатно',
      subtotalFlowers: 'Букеты',
      subtotalAddons: 'Дополнения:',
      total: 'Итого:',
      btnCheckout: 'Оформить доставку букетов',
      checkoutHint: 'Выбор даты, адреса по Бишкеку и онлайн-оплата MBank на следующем шаге',
    },
    checkout: {
      stepTitle: 'Шаг 1 из 2 · Детали доставки в Бишкеке',
      mainTitle: 'Оформление доставки букета',
      errorHeader: 'Пожалуйста, проверьте следующие поля:',
      step1Title: '1. Дата и интервал доставки букета',
      dateLabel: 'Выберите дату доставки:',
      today: 'Сегодня',
      tomorrow: 'Завтра',
      dayAfter: 'Послезавтра',
      timeSlotLabel: 'Интервал времени доставки:',
      step2Title: '2. Адрес доставки в Бишкеке',
      districtLabel: 'Район Бишкека:',
      askAddressRecipient: 'Не знаю точный адрес получателя — курьер вежливо позвонит и согласует удобный адрес и время вручения сюрприза',
      streetHousePlaceholder: 'Например: ул. Токтогула 125/1, ЖК «Триумф»',
      aptOfficePlaceholder: 'кв. 42, 6 этаж, код 42#',
      step3Title: '3. Кому доставить букет?',
      forOther: 'В подарок другому',
      forMyself: 'Доставить мне',
      senderTitle: 'Ваши контакты (Заказчик):',
      senderName: 'Ваше имя:',
      senderPhone: 'Ваш телефон (WhatsApp): *',
      recipientTitle: 'Контакты получателя:',
      recipientName: 'Имя получателя: *',
      recipientPhone: 'Телефон получателя: *',
      pickupSelfNotice: 'Курьер свяжется с вами по указанному телефону заказчика перед выездом.',
      anonymousDelivery: 'Анонимная доставка — курьер не раскроет получателю имя отправителя (сюрприз инкогнито)',
      photoBeforeDelivery: 'Отправить фото готового букета в WhatsApp перед выездом курьера (Бесплатно)',
      step4Title: '4. Бесплатная открытка с каллиграфией',
      cardPlaceholder: 'Напишите слова, которые согреют сердце...',
      cardPreview: 'Предпросмотр фирменной открытки Gülshat:',
      anonymousSign: 'Твой тайный поклонник',
      fromSign: 'От: {name}',
      orderCommentLabel: 'Комментарий к заказу (код домофона, пожелания флористу):',
      orderCommentPlaceholder: 'Например: Не звонить в звонок — ребенок спит / Вручить лично в руки',
      summaryFlowers: 'Букеты и подарки:',
      summaryDelivery: 'Доставка ({district}):',
      freeDelivery: 'Бесплатно',
      toPay: 'К оплате:',
      btnProceedPayment: 'Перейти к онлайн-оплате',
      pickupMapTitle: 'Адрес для самовывоза на карте: бул. Эркиндик 35',
      pickupMapDesc: 'Бутик расположен на пересечении бульвара Эркиндик и ул. Боконбаева. Отмечен красной меткой-капелькой на карте. Цветы будут собраны к выбранному времени.',
    },
    payment: {
      stepTitle: 'Шаг 2 из 2 · Безопасная онлайн-оплата',
      orderPaymentTitle: 'Оплата заказа {orderId}',
      deliveryDetailsTitle: 'Доставка букета в Бишкеке',
      date: 'Дата:',
      address: 'Адрес:',
      amountToPay: 'Сумма к оплате:',
      chooseMethod: 'Выберите способ онлайн-оплаты в Кыргызстане:',
      mbankQr: 'MBank QR',
      mbankQrDesc: 'Сканировать QR',
      mbankPush: 'MBank Push',
      mbankPushDesc: 'Счет на номер',
      card: 'Карта',
      cardDesc: 'Visa, MC, Элкарт',
      cod: 'При вручении',
      codDesc: 'Курьеру в Бишкеке',
      scanQrNotice: 'Отсканируйте QR-код в приложении MBank',
      openMbankSteps: 'Откройте MBank → Нажмите на значок QR → Наведите камеру на код ниже',
      paymentCode: 'Код платежа:',
      copy: 'Копировать',
      copied: 'Скопировано',
      recipientCo: 'Получатель: ОсОО «Гюльшат Фловерс» (Р/с: 1030120019283748 в MBank Кыргызстан)',
      pushPhoneLabel: 'Номер телефона, привязанный к MBank:',
      pushHowItWorks: 'Как это работает:',
      pushStep1: '1. Нажмите кнопку «Отправить счет в MBank»',
      pushStep2: '2. На ваш телефон поступит push-уведомление от банка',
      pushStep3: '3. Подтвердите списание в 1 клик',
      sslSecurity: '256-bit SSL шифрование платежа',
      cardNumber: 'Номер карты:',
      expiryDate: 'Срок действия:',
      cvc: 'CVC / CVV:',
      cardHolderName: 'Имя держателя карты (на латинице):',
      codTitle: 'Оплата при вручении курьеру в Бишкеке',
      codText: 'Вы сможете оплатить наличными сомами или банковской картой через переносной POS-терминал курьера при получении букета.',
      codTip: 'Для анонимной доставки рекомендуется онлайн-оплата MBank или картой.',
      receiptNotice: 'Чек и квитанция с номером заказа сохраняются в системе',
      btnProcessing: 'Обработка платежа...',
      btnConfirmMbank: 'Подтвердить оплату через MBank ({amount} с.)',
      btnSendPush: 'Отправить счет в MBank',
      btnPayCard: 'Оплатить {amount} сом картой',
      btnConfirmCod: 'Подтвердить заказ с оплатой курьеру',
      secure3DTitle: 'Подтверждение транзакции',
      secure3DText: 'Код подтверждения отправлен в SMS на номер владельца карты',
      smsPlaceholder: '7492',
      btnCancel: 'Отмена',
      btnConfirm: 'Подтвердить',
    },
    orderSuccess: {
      title: 'Заказ успешно оформлен!',
      subtitle: 'Спасибо за доверие бутику Gülshat Atelier. Флорист уже готовит цветы к сборке.',
      orderIdLabel: 'Номер заказа в Бишкеке:',
      paidOnline: 'Оплачено онлайн',
      paidCod: 'Оплата при получении',
      dateTimeLabel: 'Дата и время доставки:',
      whereToDeliver: 'Куда доставить в Бишкеке:',
      recipient: 'Получатель:',
      cardLabel: 'Фирменная каллиграфическая открытка:',
      itemsComposition: 'Состав заказа',
      deliveryCostLabel: 'Доставка по Бишкеку',
      free: 'Бесплатно',
      total: 'Итого:',
      whatNextTitle: 'Что происходит дальше?',
      whatNext1: '1. Флорист собирает букет из свежих срезов с голландского склада.',
      whatNext2Photo: '2. Вам придет фотоотчет в WhatsApp для утверждения.',
      whatNext2Aqua: '2. Букет упаковывается в аквабокс для сохранения свежести.',
      whatNext3: '3. Наш штатный курьер вручит цветы в указанный интервал.',
      btnTrack: 'Отслеживать статус заказа',
      btnWhatsApp: 'Чат в WhatsApp',
      btnPrint: 'Печать',
    },
    tracker: {
      titleKicker: 'Служба доставки · Бишкек',
      title: 'Отслеживание статуса заказа',
      searchPlaceholder: 'Введите номер заказа, например: KG-2684',
      orderLabel: 'Заказ:',
      deliveryDateLabel: 'Дата доставки:',
      stagesTitle: 'Этапы выполнения в Бишкеке:',
      step1Title: 'Заказ принят и подтвержден',
      step1Desc: 'Оплата зафиксирована, заказ передан в студию на бул. Эркиндик 35.',
      step2Title: 'Флорист собирает букет',
      step2Desc: 'Подрезка стеблей под углом 45°, сборка по авторской спиральной технике.',
      step3Title: 'Фотоотчет согласован',
      step3Desc: 'Цветы упакованы в аквабокс со свежей водой и переданы службе доставки.',
      step4Title: 'Курьер в пути по Бишкеку',
      step4Desc: 'Бережная перевозка в климатизированном салоне авто.',
      step5Title: 'Букет вручен с теплыми словами',
      step5Desc: 'Подарок доставлен получателю в отличном настроении!',
      currentStatus: 'Текущий статус',
      urgentSupport: 'Нужно срочно изменить адрес или время?',
      urgentSupportDesc: 'Свяжитесь с куратором доставки бутика Gülshat Atelier',
      notFoundTitle: 'Заказ с таким номером не найден',
      notFoundDesc: 'Проверьте правильность введенного номера или оформите новый заказ в каталоге.',
    },
    careModal: {
      kicker: 'Памятка флориста · Gülshat Atelier',
      title: 'Как сохранить свежесть букета до 14 дней',
      step1Title: '1. Правильная подрезка стеблей',
      step1Desc: 'Перед тем как поставить цветы в воду, срежьте стебли на 1.5–2 см острым секатором или ножом под углом 45°. Это увеличит площадь всасывания влаги.',
      step2Title: '2. Холодная вода и чистота вазы',
      step2Desc: 'Тщательно промойте вазу с мылом. Налейте прохладную фильтрованную воду на 2/3 вазы. Обязательно удалите нижние листья, чтобы они не загнивали в воде.',
      step3Title: '3. Подкормка Chrysal (в комплекте)',
      step3Desc: 'Растворите содержимое подарочного пакетика Chrysal в воде. Средство предотвращает размножение бактерий и питает бутоны, продлевая жизнь в 1.5–2 раза.',
      step4Title: '4. Идеальное место в доме',
      step4Desc: 'Не ставьте букет рядом с батареями отопления, на сквозняке или под прямыми лучами солнца. Также избегайте соседства со свежими фруктами.',
      btnGotIt: 'Понятно, спасибо!',
    },
    mapSection: {
      kicker: 'Точный адрес на карте',
      title: 'Наш бутик на карте Бишкека',
      subtitle: 'Адрес бутика отмечен на карте красной меткой-капелькой (бул. Эркиндик 35, пересечение с ул. Боконбаева).',
      deliveryZones: 'Зоны доставки',
      btnCopyAddress: 'Скопировать адрес',
      btnRoute: 'Маршрут',
      openToday: 'Открыто сегодня до 22:00',
      flagshipShowroom: 'Флагманский салон Gülshat Atelier',
      parkingNotice: 'г. Бишкек, бульвар Эркиндик, 35 (угол ул. Боконбаева). Удобная парковка перед входом.',
      satelliteMode: 'Спутник / Карта',
      streetMode: 'Схема улиц',
    },
    deliveryInfo: {
      kicker: 'Бишкек и пригород · Служба заботы',
      title: 'Условия и районы доставки',
      subtitle: 'Привезем букет бережно в специальном защитном боксе со свежей водой прямо к двери.',
      pillar1Title: 'Выбор точной даты и часа',
      pillar1Desc: 'Заказывайте букет день-в-день за 60 минут или планируйте сюрприз на важную дату за месяц вперед.',
      pillar2Title: 'Фото букета до выезда',
      pillar2Desc: 'Перед передачей курьеру флорист сделает фото и короткое видео в WhatsApp для вашего утверждения.',
      pillar3Title: 'Курьеры с улыбкой',
      pillar3Desc: 'Вежливые штатные курьеры, опрятный внешний вид, звонок за 15 минут до приезда. Возможность вручить анонимно.',
      tariffsTitle: 'Тарифы доставки по Бишкеку:',
      deliveryTimeLabel: 'Время доставки:',
      costLabel: 'Стоимость:',
      freeCenterNote: '* В Центре (Золотой квадрат) доставка бесплатна при заказе от 3 000 сом. Доставка за черту города рассчитывается индивидуально.',
    },
    footer: {
      aboutText: 'Авторский цветочный бутик и сервис премиальной доставки в Бишкеке. Доставляем эмоции, заботу и тепло с 2018 года.',
      showroomTitle: 'Бутик в Бишкеке',
      showroomAddress: 'г. Бишкек, бул. Эркиндик 35 (пересекает ул. Боконбаева)',
      showroomHours: 'Шоурум: ежедневно 08:30 — 22:00 · Онлайн-заказы: 24/7',
      showOnMap: 'Показать адрес на карте',
      serviceTitle: 'Сервис и забота',
      trackStatus: 'Отследить статус доставки',
      careGuide: 'Инструкция по уходу за букетом',
      deliveryZones: 'Зоны доставки и тарифы',
      corporateOrders: 'Корпоративные букеты и опт',
      paymentTitle: 'Онлайн-оплата в Кыргызстане',
      paymentDesc: 'Принимаем оплату через MBank QR, Elsom, О!Деньги, карты VISA, MasterCard и Элкарт без комиссии.',
      copyright: '© 2026 Gülshat Atelier Bishkek. Все права защищены.',
      tagline: 'Флористика ручной работы в сердце Бишкека',
    },
  },

  ky: {
    announcement: {
      address: 'Бишкек ш., Эркиндик бул. 35',
      deliveryTime: 'Жеткирүү 60 мүнөттөн башталат · Буйрутмалар 24/7',
      trackOrder: 'Буйрутманы көзөмөлдөө',
    },
    nav: {
      catalog: 'Каталог',
      peonies: 'Пиондор',
      roses: 'Розалар',
      boxes: 'Кутучадагы гүлдөр',
      mapAddress: 'Карта & Дарек',
      delivery: 'Бишкекке жеткирүү',
      care: 'Гүлгө кам көрүү',
      chatbot: 'Чат-бот',
      cart: 'Себет',
      searchPlaceholder: 'Издөө: пиондор, розалар, гортензия...',
    },
    hero: {
      kicker: 'Бишкек · Флористикалык ателье · Экспресс-жеткирүү',
      title: 'Сөздөн да таасирдүү сүйлөгөн кооз гүлдөр',
      subtitle: 'Голландиянын пиондорунан, Эквадордун баркыт розаларынан жана сейрек сезондук гүлдөрдөн автордук букеттерди чогултабыз. Бишкектин каалаган бурчуна так убагында каллиграфиялык открытка менен жеткиребиз.',
      btnCatalog: 'Каталогдон букет тандоо',
      btnOccasion: 'Туулган күнгө букеттер',
      badgeDelivery: 'Жеткирүү 60 мүнөттөн',
      badgeDeliverySub: 'Бишкек шаары боюнча',
      badgePhoto: 'Жөнөтөрдөн мурда сүрөтү',
      badgePhotoSub: 'WhatsApp/Telegram аркылуу',
      badgeChrysal: '14 күнгө чейин жаңы бойдон',
      badgeChrysalSub: 'Chrysal азыгы белекке',
      atelierCollection: 'Atelier Коллекциясы · 2026',
      onlinePayment: 'MBank & Онлайн Төлөм',
      inStockToday: 'Бүгүн кампада бар',
      exactDateChoice: 'Жеткирүү күнүн так тандоо',
      exactDateSub: 'Белгиленген мүнөткө белек',
    },
    filters: {
      catalogTitle: 'Букеттер жана композициялар каталогу',
      catalogKicker: 'Сезондун жаңы коллекциясы · Голландиядан түз келген',
      searchPlaceholder: 'Издөө: пион, Остин розалары, гортензия, тюльпан...',
      found: 'Табылды:',
      sortBy: 'Иреттөө:',
      sortPopular: 'Популярдуулугу боюнча',
      sortPriceAsc: 'Алгач арзаныраактар',
      sortPriceDesc: 'Премиум букеттер',
      allFlowers: 'Бардык гүлдөр',
      peonies: 'Пиондор',
      frenchRoses: 'Француз розалары',
      hydrangeas: 'Гортензиялар',
      hatBoxes: 'Шляпа кутучасындагылар',
      mixes: 'Автордук микстер',
      mono: 'Монобукеттер',
      occasionLabel: 'Майрам / Себеп:',
      occAll: 'Бардык майрамдар',
      occBirthday: 'Туулган күн',
      occLove: 'Сүйүү & Жолугушуу',
      occAnniversary: 'Маараке / Юбилей',
      occMarch8: '8-Март',
      occGratitude: 'Ыраазычылык',
      occWedding: 'Үйлөнүү үлпөтү',
      noResults: 'Сиз издеген гүлдөр табылган жок',
      noResultsSub: 'Башка категорияны тандап же издөө сөзүн өзгөртүп көрүңүз.',
      resetFilters: 'Бардык букеттерди көрсөтүү',
    },
    productCard: {
      som: 'сом',
      addToCart: 'Себетке салуу',
      added: 'Кошулду',
      quickView: 'Тез көрүү',
    },
    quickView: {
      stemsDiameter: 'Диаметри',
      durability: 'Чыдамдуулугу',
      compositionLabel: 'Букеттин курамы:',
      sizeLabel: 'Букеттин өлчөмү:',
      includedFree: 'Буйрутманын баасына акысыз кирет:',
      freeCard: '• Сиздин каалооңуз жазылган фирмалык открытка (акысыз)',
      aquaBox: '• Гүлдөр куурабашы үчүн сууга чыланган аквабокс',
      chrysal: '• Chrysal голландиялык азыгы жана флористтин эрежеси',
      totalCost: 'Жалпы баасы:',
      btnAddToCart: 'Себетке кошуу',
      btnAdded: 'Себетке кошулду',
    },
    cart: {
      title: 'Сиздин Себетиңиз',
      freeMeterUnlocked: 'Бишкектин борборуна акысыз жеткирүү ачылды!',
      freeMeterNeeded: 'Алтын квадратка акысыз жеткирүү үчүн дагы {amount} сомго кошуңуз.',
      emptyTitle: 'Себет азырынча бош',
      emptySubtitle: 'Каталогдон жаңы букет тандаңыз, биз аны өзгөчө сүйүү менен чогултуп беребиз.',
      backToCatalog: 'Букеттерге кайтуу',
      addonsTitle: 'Букетке кошумча белектер:',
      free: 'Акысыз',
      subtotalFlowers: 'Букеттер',
      subtotalAddons: 'Кошумчалар:',
      total: 'Жалпы:',
      btnCheckout: 'Жеткирүүнү тариздөө',
      checkoutHint: 'Күндү тандоо, Бишкектеги дарек жана MBank төлөмү кийинки кадамда',
    },
    checkout: {
      stepTitle: '1-кадам (2ден) · Бишкекке жеткирүү маалыматы',
      mainTitle: 'Букетти жеткирүүнү тариздөө',
      errorHeader: 'Төмөнкү талааларды текшерип чыгыңыз:',
      step1Title: '1. Букетти жеткирүү күнү жана убактысы',
      dateLabel: 'Жеткирүү күнүн тандаңыз:',
      today: 'Бүгүн',
      tomorrow: 'Эртең',
      dayAfter: 'Бүрсүгүнү',
      timeSlotLabel: 'Жеткирүү убактысынын аралыгы:',
      step2Title: '2. Бишкектеги жеткирүү дареги',
      districtLabel: 'Бишкектин району:',
      askAddressRecipient: 'Алуучунун так дарегин билбейм — курьер сылык чалып, ыңгайлуу даректи жана убакытты өзү тактап алат',
      streetHousePlaceholder: 'Мисалы: Токтогул көчөсү 125/1, «Триумф» ТК',
      aptOfficePlaceholder: '42-батир, 6-кабат, домофон коду 42#',
      step3Title: '3. Букет кимге жеткирилет?',
      forOther: 'Башка адамга белек',
      forMyself: 'Өзүмө жеткирүү',
      senderTitle: 'Сиздин байланыш маалыматыңыз (Буйрутмачы):',
      senderName: 'Сиздин атыңыз:',
      senderPhone: 'Сиздин номериңиз (WhatsApp): *',
      recipientTitle: 'Алуучунун байланыш маалыматы:',
      recipientName: 'Алуучунун аты: *',
      recipientPhone: 'Алуучунун телефону: *',
      pickupSelfNotice: 'Курьер жолго чыгардын алдында буйрутмачы менен байланышат.',
      anonymousDelivery: 'Анонимдүү жеткирүү — курьер алуучуга буйрутмачынын ким экенин ачпайт (сырдуу күйөрман)',
      photoBeforeDelivery: 'Курьер чыгардан мурун даяр букеттин сүрөтүн WhatsApp аркылуу жөнөтүү (Акысыз)',
      step4Title: '4. Каллиграфия менен акысыз открытка',
      cardPlaceholder: 'Жүрөктү жылыта турган жылуу сөздөрдү жазыңыз...',
      cardPreview: 'Gülshat фирмалык открыткасынын көрүнүшү:',
      anonymousSign: 'Сиздин сырдуу күйөрманыңыз',
      fromSign: 'Кимден: {name}',
      orderCommentLabel: 'Буйрутмага эскертүү (домофон коду, флористке өтүнүч):',
      orderCommentPlaceholder: 'Мисалы: Коңгуроону баспагыла — наристе уктап жатат / Жеке колуна тапшыруу',
      summaryFlowers: 'Букеттер жана белектер:',
      summaryDelivery: 'Жеткирүү ({district}):',
      freeDelivery: 'Акысыз',
      toPay: 'Төлөнө турган сумма:',
      btnProceedPayment: 'Онлайн төлөмгө өтүү',
      pickupMapTitle: 'Өзү алып кетүү дареги картада: Эркиндик бул. 35',
      pickupMapDesc: 'Бутик Эркиндик бульвары менен Бөкөнбаев көчөсүнүн кесилишинде жайгашкан. Картада кызыл тамчы менен белгиленген. Гүлдөр тандалган убакытка даяр болот.',
    },
    payment: {
      stepTitle: '2-кадам (2ден) · Коопсуз онлайн төлөм',
      orderPaymentTitle: '{orderId} буйрутмасын төлөө',
      deliveryDetailsTitle: 'Бишкек боюнча букет жеткирүү',
      date: 'Күнү:',
      address: 'Дареги:',
      amountToPay: 'Төлөнө турган сумма:',
      chooseMethod: 'Кыргызстандагы онлайн төлөм жолун тандаңыз:',
      mbankQr: 'MBank QR',
      mbankQrDesc: 'QR сканерлөө',
      mbankPush: 'MBank Push',
      mbankPushDesc: 'Номерге эсеп',
      card: 'Карта',
      cardDesc: 'Visa, MC, Элкарт',
      cod: 'Алганда',
      codDesc: 'Курьерге накталай',
      scanQrNotice: 'MBank тиркемесинде QR-кодду сканерлеңиз',
      openMbankSteps: 'MBank тиркемесин ачыңыз → QR белгисин басыңыз → Камераны төмөнкү кодго буруңуз',
      paymentCode: 'Төлөм коду:',
      copy: 'Көчүрүү',
      copied: 'Көчүрүлдү',
      recipientCo: 'Алуучу: «Гюльшат Фловерс» ЖЧК (Э/э: 1030120019283748 MBank Кыргызстан)',
      pushPhoneLabel: 'MBank тиркемесине катталган телефон номери:',
      pushHowItWorks: 'Кантип иштейт:',
      pushStep1: '1. «Эсепти MBankка жөнөтүү» баскычын басыңыз',
      pushStep2: '2. Телефонуңузга банктан push-билдирүү келет',
      pushStep3: '3. Төлөмдү 1 чыкылдатуу менен ырастаңыз',
      sslSecurity: '256-bit SSL коопсуздук протоколу',
      cardNumber: 'Картанын номери:',
      expiryDate: 'Мөөнөтү:',
      cvc: 'CVC / CVV:',
      cardHolderName: 'Карта ээсинин аты (латынча):',
      codTitle: 'Бишкекте курьерге букетти алганда төлөө',
      codText: 'Сиз букетти алганда накталай сом менен же курьердин көчмө POS-терминалы аркылуу карта менен төлөй аласыз.',
      codTip: 'Анонимдүү белек үчүн MBank же карта аркылуу алдын ала төлөө сунушталат.',
      receiptNotice: 'Чек жана буйрутманын номери системада сакталат',
      btnProcessing: 'Төлөм текшерилүүдө...',
      btnConfirmMbank: 'MBank аркылуу төлөөнү ырастоо ({amount} с.)',
      btnSendPush: 'Эсепти MBankка чыгаруу',
      btnPayCard: 'Карта менен {amount} сом төлөө',
      btnConfirmCod: 'Курьерге төлөө менен буйрутманы бекитүү',
      secure3DTitle: 'Транзакцияны ырастоо',
      secure3DText: 'Ырастоо коду карта ээсинин номерине SMS аркылуу жөнөтүлдү',
      smsPlaceholder: '7492',
      btnCancel: 'Артка',
      btnConfirm: 'Ырастоо',
    },
    orderSuccess: {
      title: 'Буйрутма ийгиликтүү кабыл алынды!',
      subtitle: 'Gülshat Atelier бутигине ишеним артканыңыз үчүн рахмат. Флорист жаңы гүлдөрдү чогултууга киришти.',
      orderIdLabel: 'Бишкектеги буйрутма номери:',
      paidOnline: 'Онлайн төлөндү',
      paidCod: 'Алганда төлөнөт',
      dateTimeLabel: 'Жеткирүү күнү жана убактысы:',
      whereToDeliver: 'Бишкектеги дарек:',
      recipient: 'Алуучу:',
      cardLabel: 'Фирмалык каллиграфиялык открытка:',
      itemsComposition: 'Буйрутманын курамы',
      deliveryCostLabel: 'Бишкек боюнча жеткирүү',
      free: 'Акысыз',
      total: 'Жалпы:',
      whatNextTitle: 'Андан ары эмне болот?',
      whatNext1: '1. Флорист голландиялык жаңы гүлдөрдөн букетти чогултат.',
      whatNext2Photo: '2. Сиздин макулдугуңуз үчүн WhatsApp аркылуу фотоотчет келет.',
      whatNext2Aqua: '2. Гүлдөр жаңылыгын жоготпошу үчүн атайын аквабокско салынат.',
      whatNext3: '3. Биздин штаттагы курьер белгиленген убакытта гүлдөрдү тапшырат.',
      btnTrack: 'Буйрутманын статусун көрүү',
      btnWhatsApp: 'WhatsApp чаты',
      btnPrint: 'Басып чыгаруу',
    },
    tracker: {
      titleKicker: 'Жеткирүү кызматы · Бишкек',
      title: 'Буйрутманын статусун көзөмөлдөө',
      searchPlaceholder: 'Буйрутма номерин жазыңыз, мисалы: KG-2684',
      orderLabel: 'Буйрутма:',
      deliveryDateLabel: 'Жеткирүү күнү:',
      stagesTitle: 'Бишкекте аткаруу баскычтары:',
      step1Title: 'Буйрутма кабыл алынды жана бекитилди',
      step1Desc: 'Төлөм катталды, буйрутма Эркиндик бул. 35 дарегиндеги студияга берилди.',
      step2Title: 'Флорист букетти чогултууда',
      step2Desc: 'Сабактары 45° кесилип, автордук спиралдык ыкма менен куралууда.',
      step3Title: 'Фотоотчет даярдалды',
      step3Desc: 'Гүлдөр таза суусу бар аквабокско салынып, жеткирүү кызматына берилди.',
      step4Title: 'Курьер Бишкек боюнча жолдо',
      step4Desc: 'Автоунаанын салкын салонунда этияттык менен жеткирилүүдө.',
      step5Title: 'Букет жылуу маанайда тапшырылды',
      step5Desc: 'Белек алуучуга кубаныч жана жылмаюу менен жеткирилди!',
      currentStatus: 'Учурдагы статус',
      urgentSupport: 'Даректи же убакытты тез арада өзгөртүү керекпи?',
      urgentSupportDesc: 'Gülshat Atelier жеткирүү куратору менен байланышыңыз',
      notFoundTitle: 'Мындай номердеги буйрутма табылган жок',
      notFoundDesc: 'Номерин текшерип же каталогдон жаңы букетке буйрутма бериңиз.',
    },
    careModal: {
      kicker: 'Флористтин эскертүүсү · Gülshat Atelier',
      title: 'Букетти 14 күнгө чейин кантип жаңы сактоо керек?',
      step1Title: '1. Сабактарды туура кесүү',
      step1Desc: 'Гүлдү сууга салардан мурун курч бычак же секатор менен сабактарын 45° бурчта 1.5–2 см кесип салыңыз. Бул нымдуулукту сиңирүүнү жакшыртат.',
      step2Title: '2. Муздак суу жана таза ваза',
      step2Desc: 'Вазаны самын менен таза жууңуз. Муздак таза сууну 2/3 бөлүгүнө чейин куюңуз. Төмөнкү жалбырактарын сууга тийгизбей алып салыңыз.',
      step3Title: '3. Chrysal азыгы (комплектте)',
      step3Desc: 'Белекке берилген Chrysal пакетин сууга эритип коюңуз. Ал бактерияларды жок кылып, гүлдүн өмүрүн 1.5–2 эсеге узартат.',
      step4Title: '4. Үйдөгү эң ыңгайлуу орун',
      step4Desc: 'Букетти жылыткычтардын жанына, шамал соккон жерге же күндүн түз нуруна койбоңуз. Ошондой эле жаңы мөмө-жемиштердин жанына койбогон оң.',
      btnGotIt: 'Түшүнүктүү, рахмат!',
    },
    mapSection: {
      kicker: 'Картадагы так дарек',
      title: 'Биздин бутик Бишкектин картасында',
      subtitle: 'Бутиктин дареги картада кызыл тамчы менен белгиленген (Эркиндик бул. 35, Бөкөнбаев көчөсү менен кесилишет).',
      deliveryZones: 'Жеткирүү аймактары',
      btnCopyAddress: 'Даректи көчүрүү',
      btnRoute: 'Маршрут',
      openToday: 'Бүгүн 22:00гө чейин ачык',
      flagshipShowroom: 'Gülshat Atelier флагмандык салону',
      parkingNotice: 'Бишкек ш., Эркиндик бульвары, 35 (Бөкөнбаев көчөсүнүн бурчу). Кире бериште ыңгайлуу унаа токтотуучу жай бар.',
      satelliteMode: 'Спутник / Карта',
      streetMode: 'Көчө схемасы',
    },
    deliveryInfo: {
      kicker: 'Бишкек жана шаар чети · Кам көрүү кызматы',
      title: 'Жеткирүү шарттары жана аймактар',
      subtitle: 'Букетти атайын суусу бар коргоочу боксто эшигиңизге чейин кылдат жеткиребиз.',
      pillar1Title: 'Күндү жана саатты так тандоо',
      pillar1Desc: 'Букетти ошол эле күнү 60 мүнөттө же бир ай мурун маанилүү датага алдын ала пландаштырып буйрутма бериңиз.',
      pillar2Title: 'Жолго чыга электе сүрөтү',
      pillar2Desc: 'Курьерге берүүдөн мурун флорист WhatsApp аркылуу сиздин макулдугуңуз үчүн фото жана кыска видео тартат.',
      pillar3Title: 'Жылмайган сылык курьерлер',
      pillar3Desc: 'Өзүбүздүн тыкан курьерлер, келерден 15 мүнөт мурун чалуу. Анонимдүү тапшыруу мүмкүнчүлүгү.',
      tariffsTitle: 'Бишкек боюнча жеткирүү баалары:',
      deliveryTimeLabel: 'Жеткирүү убактысы:',
      costLabel: 'Баасы:',
      freeCenterNote: '* Борбордо (Алтын квадрат) 3 000 сомдон жогору буйрутмаларга жеткирүү акысыз. Шаардын четине өзүнчө эсептелет.',
    },
    footer: {
      aboutText: 'Бишкектеги автордук гүл бутиги жана премиум жеткирүү кызматы. 2018-жылдан бери жылуулук жана кубаныч тартуулайбыз.',
      showroomTitle: 'Бишкектеги бутик',
      showroomAddress: 'Бишкек ш., Эркиндик бул. 35 (Бөкөнбаев көчөсү менен кесилишет)',
      showroomHours: 'Шоурум: күн сайын 08:30 — 22:00 · Онлайн буйрутмалар: 24/7',
      showOnMap: 'Даректи картадан көрсөтүү',
      serviceTitle: 'Сервис жана кам көрүү',
      trackStatus: 'Жеткирүүнүн абалын көзөмөлдөө',
      careGuide: 'Гүлгө кам көрүү эрежеси',
      deliveryZones: 'Жеткирүү аймактары жана тарифтер',
      corporateOrders: 'Корпоративдик букеттер жана дүң сатып алуу',
      paymentTitle: 'Кыргызстандагы онлайн төлөм',
      paymentDesc: 'MBank QR, Elsom, О!Деньги, VISA, MasterCard жана Элкарт аркылуу комиссиясыз төлөмдөрдү кабыл алабыз.',
      copyright: '© 2026 Gülshat Atelier Bishkek. Бардык укуктар корголгон.',
      tagline: 'Бишкектин чок ортосундагы кол эмгегинен жаралган флористика',
    },
  },

  en: {
    announcement: {
      address: 'Bishkek, 35 Erkindik Blvd',
      deliveryTime: 'Delivery from 60 mins · Order 24/7',
      trackOrder: 'Track Order',
    },
    nav: {
      catalog: 'Catalog',
      peonies: 'Peonies',
      roses: 'Roses',
      boxes: 'In Boxes',
      mapAddress: 'Map & Address',
      delivery: 'Delivery in Bishkek',
      care: 'Flower Care',
      chatbot: 'AI Assistant',
      cart: 'Cart',
      searchPlaceholder: 'Search: peonies, roses, hydrangeas...',
    },
    hero: {
      kicker: 'Bishkek · Floral Atelier · Express Delivery',
      title: 'Flowers that speak more sincerely than words',
      subtitle: 'Artisanal bouquets made with fresh Dutch peonies, Ecuadorian garden roses, and rare seasonal stems. Delivered anywhere in Bishkek on time with a complimentary calligraphed card.',
      btnCatalog: 'Browse Bouquet Catalog',
      btnOccasion: 'Birthday Bouquets',
      badgeDelivery: 'Delivery in 60 mins',
      badgeDeliverySub: 'Across all Bishkek',
      badgePhoto: 'Photo before dispatch',
      badgePhotoSub: 'Via WhatsApp / Telegram',
      badgeChrysal: 'Fresh up to 14 days',
      badgeChrysalSub: 'Chrysal nutrient included',
      atelierCollection: 'Atelier Collection · 2026',
      onlinePayment: 'MBank & Online Payment',
      inStockToday: 'In stock today',
      exactDateChoice: 'Exact Delivery Date Selection',
      exactDateSub: 'Surprise delivered on time',
    },
    filters: {
      catalogTitle: 'Bouquets & Arrangements Catalog',
      catalogKicker: 'Seasonal Collection · Direct Dutch Shipments',
      searchPlaceholder: 'Search: peonies, Austin roses, hydrangea, tulips...',
      found: 'Found:',
      sortBy: 'Sort by:',
      sortPopular: 'Most Popular',
      sortPriceAsc: 'Price: Low to High',
      sortPriceDesc: 'Premium First',
      allFlowers: 'All Flowers',
      peonies: 'Peonies',
      frenchRoses: 'French Roses',
      hydrangeas: 'Hydrangeas',
      hatBoxes: 'In Hat Boxes',
      mixes: 'Artisan Mixes',
      mono: 'Mono Bouquets',
      occasionLabel: 'Occasion:',
      occAll: 'All Occasions',
      occBirthday: 'Birthday',
      occLove: 'Romance & Date',
      occAnniversary: 'Anniversary',
      occMarch8: 'March 8th',
      occGratitude: 'Gratitude',
      occWedding: 'Wedding',
      noResults: 'No flowers found matching your criteria',
      noResultsSub: 'Try selecting a different category or resetting filters.',
      resetFilters: 'Show All Bouquets',
    },
    productCard: {
      som: 'KGS',
      addToCart: 'Add to Cart',
      added: 'Added',
      quickView: 'Quick View',
    },
    quickView: {
      stemsDiameter: 'Diameter',
      durability: 'Vase life',
      compositionLabel: 'Floral composition:',
      sizeLabel: 'Bouquet size:',
      includedFree: 'Included free with every order:',
      freeCard: '• Custom handwritten calligraphed card (free)',
      aquaBox: '• Protective aquabox keeping water fresh during delivery',
      chrysal: '• Chrysal food sachet and florist care guide',
      totalCost: 'Total price:',
      btnAddToCart: 'Add to Cart',
      btnAdded: 'Added to Cart',
    },
    cart: {
      title: 'Your Shopping Bag',
      freeMeterUnlocked: 'Free delivery in Central Bishkek unlocked!',
      freeMeterNeeded: 'Add {amount} KGS more for free Golden Square delivery.',
      emptyTitle: 'Your cart is currently empty',
      emptySubtitle: 'Explore our catalog and choose fresh stems hand-tied by our florists.',
      backToCatalog: 'Return to Flowers',
      addonsTitle: 'Complements & Gifts:',
      free: 'Free',
      subtotalFlowers: 'Bouquets',
      subtotalAddons: 'Addons:',
      total: 'Total:',
      btnCheckout: 'Proceed to Delivery Details',
      checkoutHint: 'Date picker, Bishkek address and MBank online payment on next step',
    },
    checkout: {
      stepTitle: 'Step 1 of 2 · Bishkek Delivery Coordinates',
      mainTitle: 'Bouquet Delivery Checkout',
      errorHeader: 'Please check the following fields:',
      step1Title: '1. Delivery Date & Time Slot',
      dateLabel: 'Select delivery date:',
      today: 'Today',
      tomorrow: 'Tomorrow',
      dayAfter: 'Day After',
      timeSlotLabel: 'Time slot interval:',
      step2Title: '2. Delivery Address in Bishkek',
      districtLabel: 'Bishkek District:',
      askAddressRecipient: 'I do not know the recipient\'s exact address — courier will politely call and agree on convenient time and place',
      streetHousePlaceholder: 'e.g. 125/1 Toktogul St, Triumph Residence',
      aptOfficePlaceholder: 'Apt 42, 6th floor, door code 42#',
      step3Title: '3. Who should receive the bouquet?',
      forOther: 'Gift for someone else',
      forMyself: 'Deliver to me',
      senderTitle: 'Your Contacts (Sender):',
      senderName: 'Your Name:',
      senderPhone: 'Your Phone (WhatsApp): *',
      recipientTitle: 'Recipient Contacts:',
      recipientName: 'Recipient Name: *',
      recipientPhone: 'Recipient Phone: *',
      pickupSelfNotice: 'Our courier will contact you at the provided sender phone number before dispatch.',
      anonymousDelivery: 'Anonymous Delivery — courier will not disclose sender\'s identity (secret admirer)',
      photoBeforeDelivery: 'Send photo of ready bouquet via WhatsApp before courier departure (Free)',
      step4Title: '4. Free Calligraphed Greeting Card',
      cardPlaceholder: 'Write heartfelt words to be hand-lettered...',
      cardPreview: 'Gülshat Signature Card Preview:',
      anonymousSign: 'Your Secret Admirer',
      fromSign: 'From: {name}',
      orderCommentLabel: 'Order comments (intercom code, florist notes):',
      orderCommentPlaceholder: 'e.g. Please don\'t ring door bell, baby is sleeping / Hand deliver personally',
      summaryFlowers: 'Bouquets & Gifts:',
      summaryDelivery: 'Delivery ({district}):',
      freeDelivery: 'Free',
      toPay: 'Total to Pay:',
      btnProceedPayment: 'Proceed to Online Payment',
      pickupMapTitle: 'Self-pickup address on map: 35 Erkindik Blvd',
      pickupMapDesc: 'Showroom is located at the intersection of Erkindik Boulevard and Bokonbaev St. Marked with a red pin droplet on the map.',
    },
    payment: {
      stepTitle: 'Step 2 of 2 · Secure Online Payment',
      orderPaymentTitle: 'Order Payment {orderId}',
      deliveryDetailsTitle: 'Bouquet Delivery in Bishkek',
      date: 'Date:',
      address: 'Address:',
      amountToPay: 'Amount to pay:',
      chooseMethod: 'Choose payment method in Kyrgyzstan:',
      mbankQr: 'MBank QR',
      mbankQrDesc: 'Scan QR code',
      mbankPush: 'MBank Push',
      mbankPushDesc: 'Invoice to phone',
      card: 'Card',
      cardDesc: 'Visa, MC, Elkart',
      cod: 'On Delivery',
      codDesc: 'Pay to courier',
      scanQrNotice: 'Scan the QR code in your MBank app',
      openMbankSteps: 'Open MBank → Tap QR icon → Point camera at the code below',
      paymentCode: 'Payment code:',
      copy: 'Copy',
      copied: 'Copied',
      recipientCo: 'Beneficiary: LLC "Gulshat Flowers" (Acc: 1030120019283748 at MBank Kyrgyzstan)',
      pushPhoneLabel: 'Phone number linked to MBank account:',
      pushHowItWorks: 'How it works:',
      pushStep1: '1. Click "Send invoice to MBank"',
      pushStep2: '2. Receive instant push notification on your mobile',
      pushStep3: '3. Confirm debit with 1 tap',
      sslSecurity: '256-bit SSL encrypted checkout',
      cardNumber: 'Card Number:',
      expiryDate: 'Expiry Date:',
      cvc: 'CVC / CVV:',
      cardHolderName: 'Cardholder Name (Latin characters):',
      codTitle: 'Payment upon delivery to courier in Bishkek',
      codText: 'You can pay in cash KGS or with any bank card via the courier\'s portable POS terminal.',
      codTip: 'For anonymous gifts, online payment via MBank or card is recommended.',
      receiptNotice: 'Receipt and order confirmation saved in system',
      btnProcessing: 'Processing payment...',
      btnConfirmMbank: 'Confirm payment via MBank ({amount} KGS)',
      btnSendPush: 'Send invoice to MBank',
      btnPayCard: 'Pay {amount} KGS with Card',
      btnConfirmCod: 'Confirm order with Cash/Card on delivery',
      secure3DTitle: '3D Secure Verification',
      secure3DText: 'One-time verification SMS code sent to cardholder phone',
      smsPlaceholder: '7492',
      btnCancel: 'Cancel',
      btnConfirm: 'Confirm',
    },
    orderSuccess: {
      title: 'Order Successfully Placed!',
      subtitle: 'Thank you for choosing Gülshat Atelier. Our florists are preparing your fresh blooms.',
      orderIdLabel: 'Bishkek Order Number:',
      paidOnline: 'Paid Online',
      paidCod: 'Pay on Delivery',
      dateTimeLabel: 'Delivery Date & Time:',
      whereToDeliver: 'Delivery Address in Bishkek:',
      recipient: 'Recipient:',
      cardLabel: 'Handwritten Calligraphy Card:',
      itemsComposition: 'Order Items',
      deliveryCostLabel: 'Bishkek Delivery',
      free: 'Free',
      total: 'Total:',
      whatNextTitle: 'What happens next?',
      whatNext1: '1. Florist hand-ties bouquet from fresh Dutch cold-storage stems.',
      whatNext2Photo: '2. You will receive a photo report on WhatsApp for approval.',
      whatNext2Aqua: '2. Flowers are packaged into a fresh water aquabox.',
      whatNext3: '3. Our dedicated courier delivers the gift in the chosen time window.',
      btnTrack: 'Track Order Status',
      btnWhatsApp: 'WhatsApp Chat',
      btnPrint: 'Print Receipt',
    },
    tracker: {
      titleKicker: 'Delivery Service · Bishkek',
      title: 'Track Order Status',
      searchPlaceholder: 'Enter order ID, e.g.: KG-2684',
      orderLabel: 'Order:',
      deliveryDateLabel: 'Delivery Date:',
      stagesTitle: 'Execution Milestones in Bishkek:',
      step1Title: 'Order received & confirmed',
      step1Desc: 'Payment secured, order routed to boutique at 35 Erkindik Blvd.',
      step2Title: 'Florist assembling bouquet',
      step2Desc: 'Stems recut at 45°, spiraled with premium ribbon wrap.',
      step3Title: 'Photo report approved',
      step3Desc: 'Arranged into protective aquabox with cold water.',
      step4Title: 'Courier in transit across Bishkek',
      step4Desc: 'Gentle transit in climate-controlled vehicle.',
      step5Title: 'Bouquet delivered with warmth',
      step5Desc: 'Handed to recipient in delightful presentation!',
      currentStatus: 'Current status',
      urgentSupport: 'Need to urgently adjust address or time?',
      urgentSupportDesc: 'Connect with Gülshat Atelier delivery supervisor',
      notFoundTitle: 'Order not found',
      notFoundDesc: 'Please check your order number or place a new order in our catalog.',
    },
    careModal: {
      kicker: 'Florist Guide · Gülshat Atelier',
      title: 'How to keep your bouquet fresh up to 14 days',
      step1Title: '1. Proper stem cutting',
      step1Desc: 'Before placing stems in water, trim 1.5–2 cm at a 45° angle with clean floral shears or sharp knife.',
      step2Title: '2. Cold water and clean vase',
      step2Desc: 'Wash vase thoroughly with soap. Fill 2/3 with clean, cool filtered water. Remove any submerged lower foliage.',
      step3Title: '3. Chrysal food sachet (included)',
      step3Desc: 'Dissolve the complimentary Chrysal sachet in water. It inhibits bacteria growth and nourishes buds, doubling vase life.',
      step4Title: '4. Ideal spot in your home',
      step4Desc: 'Keep flowers away from heaters, direct sunlight, and fruit bowls (ethylene gas accelerates wilting).',
      btnGotIt: 'Understood, thank you!',
    },
    mapSection: {
      kicker: 'Exact Address on Map',
      title: 'Our Showroom on Bishkek Map',
      subtitle: 'Boutique address is marked on the map with a red droplet pin (35 Erkindik Blvd, corner of Bokonbaev St).',
      deliveryZones: 'Delivery Zones',
      btnCopyAddress: 'Copy Address',
      btnRoute: 'Get Directions',
      openToday: 'Open today until 22:00',
      flagshipShowroom: 'Gülshat Atelier Flagship Showroom',
      parkingNotice: 'Bishkek, 35 Erkindik Blvd (corner of Bokonbaev St). Dedicated parking in front.',
      satelliteMode: 'Map / Satellite',
      streetMode: 'Street Grid',
    },
    deliveryInfo: {
      kicker: 'Bishkek & Suburbs · Care Service',
      title: 'Delivery Terms & Districts',
      subtitle: 'Delivered in a specialized protective box with fresh water right to the doorstep.',
      pillar1Title: 'Choose Exact Date & Hour',
      pillar1Desc: 'Order same-day in 60 minutes or schedule surprises weeks in advance.',
      pillar2Title: 'Photo Before Dispatch',
      pillar2Desc: 'Florist shares a WhatsApp photo & video of your exact bouquet before dispatch.',
      pillar3Title: 'Courteous Couriers',
      pillar3Desc: 'Uniformed couriers call 15 minutes before arrival. Anonymous delivery available.',
      tariffsTitle: 'Delivery Rates Across Bishkek:',
      deliveryTimeLabel: 'Estimated time:',
      costLabel: 'Cost:',
      freeCenterNote: '* Free delivery in City Center (Golden Square) on orders over 3,000 KGS. Suburbs calculated individually.',
    },
    footer: {
      aboutText: 'Artisanal flower boutique and premium delivery service in Bishkek. Delivering warmth, care and emotion since 2018.',
      showroomTitle: 'Bishkek Showroom',
      showroomAddress: 'Bishkek, 35 Erkindik Blvd (crosses Bokonbaev St)',
      showroomHours: 'Showroom: daily 08:30 — 22:00 · Online orders: 24/7',
      showOnMap: 'Show address on map',
      serviceTitle: 'Service & Care',
      trackStatus: 'Track Delivery Status',
      careGuide: 'Flower Care Instructions',
      deliveryZones: 'Delivery Zones & Tariffs',
      corporateOrders: 'Corporate & Bulk Orders',
      paymentTitle: 'Online Payment in Kyrgyzstan',
      paymentDesc: 'We accept MBank QR, Elsom, O!Dengi, Visa, MasterCard and Elkart with zero fee.',
      copyright: '© 2026 Gülshat Atelier Bishkek. All rights reserved.',
      tagline: 'Handcrafted floristry in the heart of Bishkek',
    },
  },
};
