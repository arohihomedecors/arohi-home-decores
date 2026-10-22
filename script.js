(() => {
  const translations = {
    en: {
      tagline:"Handmade with love", navShop:"Shop", navCustom:"Custom orders", navContact:"Contact", navProducts:"Products",
      eyebrow:"HANDMADE • THOUGHTFUL • BEAUTIFUL", heroTitle:'Little details.<br><em>A warmer home.</em>',
      heroText:"Discover handmade flower torans, floral hangings and cheerful accents for your home and celebrations.",
      browse:"Browse collection", customLink:"Request a custom design ↗", heroNote:"Made in small batches. Custom colours welcome.",
      artCaption:"A little joy for every doorway", trust1:"Handmade with care", trust2:"Made for your home", trust3:"Custom designs available",
      collectionEyebrow:"THE COLLECTION", shopTitle:"Decorate with feeling", shopIntro:"Browse our starter collection. Message us to confirm availability, delivery and your final total.",
      priceNote:"Prices shown are sample placeholders. Update them before publishing.", order:"Order on WhatsApp", customEyebrow:"MADE FOR YOU",
      customTitle:"Have a colour or design in mind?", customText:"Tell us about your doorway, celebration or gift idea. We’ll discuss colours, size, price and delivery before confirming your order.",
      customButton:"Ask about a custom order", howEyebrow:"SIMPLE & PERSONAL", howTitle:"How to order", step1Title:"Choose a design",
      step1Text:"Explore the catalogue and pick your favourite.", step2Title:"Message us", step2Text:"Confirm stock, quantity, delivery fee and total on WhatsApp.",
      step3Title:"Pay and receive", step3Text:"Use the verified UPI details we confirm, then we’ll arrange dispatch.",
      paymentTitle:"Easy UPI payment", paymentText:"We’ll share our verified UPI ID or QR code after confirming your order total. Please check the recipient name before paying.",
      paymentBadge:"Pay after confirmation", contactEyebrow:"LET’S TALK", contactTitle:"A little décor goes a long way.",
      contactText:"Questions about a product, delivery or a custom design? We’d love to hear from you.",
      contactCardLabel:"CONTACT AROHI", whatsappLabel:"WhatsApp", upiLabel:"UPI", contactButton:"Message us on WhatsApp",
      footerText:"Thoughtful handmade décor for everyday moments and special celebrations.",
      noPhone:"[Add your WhatsApp number]", noUpi:"[Add your verified UPI ID]",
      noWhatsApp:"Add your WhatsApp number in products.js to enable ordering.", orderMessage:"Hello Arohi Home Decore! I am interested in: ",
      productLine:"Product: ", priceLine:"Listed sample price: ", qtyLine:"Quantity: 1", finalLine:"Please confirm availability, delivery charges and final total.",
      placeholder:"Add your product photo", languageName:"हिन्दी"
    },
    hi: {
      tagline:"प्यार से बनाया गया", navShop:"उत्पाद", navCustom:"कस्टम ऑर्डर", navContact:"संपर्क", navProducts:"उत्पाद",
      eyebrow:"हस्तनिर्मित • सुंदर • खास", heroTitle:'छोटी-छोटी बातें।<br><em>घर में खुशियाँ।</em>',
      heroText:"अपने घर और खास अवसरों के लिए हस्तनिर्मित फूलों के तोरण, लटकन और सुंदर सजावटी वस्तुएँ देखें।",
      browse:"संग्रह देखें", customLink:"अपनी पसंद का डिज़ाइन पूछें ↗", heroNote:"छोटी मात्रा में बनाए जाते हैं। पसंद के रंग उपलब्ध हो सकते हैं।",
      artCaption:"हर दरवाज़े के लिए थोड़ी-सी खुशी", trust1:"ध्यान से हस्तनिर्मित", trust2:"आपके घर के लिए", trust3:"कस्टम डिज़ाइन उपलब्ध",
      collectionEyebrow:"हमारा संग्रह", shopTitle:"अपने घर को सजाएँ", shopIntro:"हमारे शुरुआती संग्रह को देखें। उपलब्धता, डिलीवरी और कुल कीमत की पुष्टि के लिए संदेश भेजें।",
      priceNote:"दिखाई गई कीमतें केवल उदाहरण हैं। वेबसाइट प्रकाशित करने से पहले इन्हें बदलें।", order:"WhatsApp पर ऑर्डर करें", customEyebrow:"आपकी पसंद के अनुसार",
      customTitle:"कोई खास रंग या डिज़ाइन चाहिए?", customText:"अपने दरवाज़े, उत्सव या उपहार के बारे में हमें बताएँ। ऑर्डर की पुष्टि से पहले रंग, आकार, कीमत और डिलीवरी पर बात करेंगे।",
      customButton:"कस्टम ऑर्डर के बारे में पूछें", howEyebrow:"आसान और व्यक्तिगत", howTitle:"ऑर्डर कैसे करें", step1Title:"डिज़ाइन चुनें",
      step1Text:"उत्पाद देखें और अपनी पसंद चुनें।", step2Title:"हमें संदेश भेजें", step2Text:"WhatsApp पर स्टॉक, मात्रा, डिलीवरी शुल्क और कुल कीमत की पुष्टि करें।",
      step3Title:"भुगतान और डिलीवरी", step3Text:"हमारी पुष्टि की गई UPI जानकारी से भुगतान करें। इसके बाद हम भेजने की व्यवस्था करेंगे।",
      paymentTitle:"आसान UPI भुगतान", paymentText:"ऑर्डर की कुल कीमत तय होने के बाद हम अपनी सत्यापित UPI ID या QR कोड साझा करेंगे। भुगतान से पहले प्राप्तकर्ता का नाम जाँचें।",
      paymentBadge:"पुष्टि के बाद भुगतान", contactEyebrow:"बात करें", contactTitle:"छोटी सजावट, बड़ा बदलाव।",
      contactText:"उत्पाद, डिलीवरी या कस्टम डिज़ाइन के बारे में सवाल हैं? हमें संदेश भेजें।",
      contactCardLabel:"AROHI से संपर्क करें", whatsappLabel:"WhatsApp", upiLabel:"UPI", contactButton:"WhatsApp पर संदेश भेजें",
      footerText:"रोज़मर्रा और खास अवसरों के लिए प्यार से बनाई गई सजावट।",
      noPhone:"[अपना WhatsApp नंबर जोड़ें]", noUpi:"[अपनी सत्यापित UPI ID जोड़ें]",
      noWhatsApp:"ऑर्डर शुरू करने के लिए products.js में अपना WhatsApp नंबर जोड़ें।", orderMessage:"नमस्ते Arohi Home Decore! मुझे इस उत्पाद में रुचि है: ",
      productLine:"उत्पाद: ", priceLine:"दिखाई गई उदाहरण कीमत: ", qtyLine:"मात्रा: 1", finalLine:"कृपया उपलब्धता, डिलीवरी शुल्क और अंतिम कुल कीमत की पुष्टि करें।",
      placeholder:"अपने उत्पाद की तस्वीर जोड़ें", languageName:"English"
    }
  };
  let lang = "en";
  const $ = (s) => document.querySelector(s);
  const money = (n) => new Intl.NumberFormat(lang === "hi" ? "en-IN" : "en-IN", {style:"currency", currency:"INR", maximumFractionDigits:0}).format(n);
  const tr = (key) => translations[lang][key] || translations.en[key] || key;

  function applyLanguage() {
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
    document.body.classList.toggle("hindi", lang === "hi");
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    $("#languageToggle").textContent = tr("languageName");
    $("#phoneDisplay").textContent = window.AROHI_CONFIG.whatsappNumber ? "+" + window.AROHI_CONFIG.whatsappNumber : tr("noPhone");
    $("#upiDisplay").textContent = window.AROHI_CONFIG.upiId || tr("noUpi");
    renderProducts();
  }

  function getWhatsAppUrl(message) {
    const number = (window.AROHI_CONFIG.whatsappNumber || "").replace(/\D/g, "");
    if (!number) return null;
    return "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
  }

  function showNotice(message) {
    const notice = $("#notice");
    notice.textContent = message;
    notice.classList.add("show");
    window.setTimeout(() => notice.classList.remove("show"), 3600);
  }

  function startWhatsApp(message) {
    const url = getWhatsAppUrl(message);
    if (!url) {
      showNotice(tr("noWhatsApp"));
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function renderProducts() {
    const grid = $("#productGrid");
    grid.innerHTML = "";
    (window.AROHI_PRODUCTS || []).forEach(product => {
      const card = document.createElement("article");
      card.className = "product-card";
      const imageWrap = document.createElement("div");
      imageWrap.className = "product-image-wrap";
      const img = document.createElement("img");
      img.className = "product-image";
      img.src = product.image;
      img.alt = product.imageAlt[lang];
      img.loading = "lazy";
      img.onerror = () => {
        imageWrap.innerHTML = "";
        const placeholder = document.createElement("div");
        placeholder.className = "image-placeholder";
        const flower = document.createElement("span");
        flower.textContent = "✿";
        const note = document.createElement("small");
        note.textContent = tr("placeholder");
        placeholder.append(flower, note);
        imageWrap.appendChild(placeholder);
      };
      imageWrap.appendChild(img);
      const info = document.createElement("div");
      info.className = "product-info";
      const category = document.createElement("span");
      category.className = "product-category";
      category.textContent = product.category[lang];
      const title = document.createElement("h3");
      title.textContent = product.name[lang];
      const desc = document.createElement("p");
      desc.textContent = product.description[lang];
      const bottom = document.createElement("div");
      bottom.className = "product-bottom";
      const price = document.createElement("span");
      price.className = "product-price";
      price.textContent = money(product.price);
      const button = document.createElement("button");
      button.className = "order-button";
      button.type = "button";
      button.textContent = tr("order");
      button.addEventListener("click", () => {
        const message = `${tr("orderMessage")}\n${tr("productLine")}${product.name[lang]} (${product.id})\n${tr("priceLine")}${money(product.price)}\n${tr("qtyLine")}\n${tr("finalLine")}`;
        startWhatsApp(message);
      });
      bottom.append(price, button);
      info.append(category, title, desc, bottom);
      card.append(imageWrap, info);
      grid.appendChild(card);
    });
  }

  function setupGeneralWhatsApp() {
    const msg = lang === "hi"
      ? "नमस्ते Arohi Home Decore! मुझे उत्पादों और कस्टम ऑर्डर के बारे में जानकारी चाहिए।"
      : "Hello Arohi Home Decore! I would like to know about your products and custom orders.";
    const url = getWhatsAppUrl(msg);
    ["#customWhatsApp", "#contactWhatsApp"].forEach(sel => {
      const link = $(sel);
      if (url) {
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      } else {
        link.href = "#contact";
        link.onclick = (event) => { event.preventDefault(); showNotice(tr("noWhatsApp")); };
      }
    });
  }

  $("#languageToggle").addEventListener("click", () => {
    lang = lang === "en" ? "hi" : "en";
    applyLanguage();
    setupGeneralWhatsApp();
  });
  $("#year").textContent = new Date().getFullYear();
  applyLanguage();
  setupGeneralWhatsApp();
})();
