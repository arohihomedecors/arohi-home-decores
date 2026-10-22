/*
 * Arohi Home Decore product catalogue.
 * Replace sample prices, descriptions and image paths before publishing.
 * Put your own optimised product photos in the /images folder.
 */
window.AROHI_CONFIG = {
  // Enter digits only, with India country code 91; example format: "919876543210".
  // Leave blank until you have decided which business number to publish.
  whatsappNumber: "",
  // Add your verified UPI ID only after you are ready to accept payments.
  // Do not use a personal/incorrect UPI ID by mistake.
  upiId: "",
  currency: "INR"
};

window.AROHI_PRODUCTS = [
  {
    id: "toran-01",
    category: { en: "Doorway décor", hi: "दरवाज़े की सजावट" },
    name: { en: "Marigold Flower Toran", hi: "गेंदा फूल तोरण" },
    description: { en: "A cheerful floral accent for your entrance or pooja corner.", hi: "मुख्य द्वार या पूजा स्थान के लिए सुंदर फूलों की सजावट।" },
    price: 249,
    image: "images/toran.jpg",
    imageAlt: { en: "Marigold flower toran product photo placeholder", hi: "गेंदा फूल तोरण की उत्पाद तस्वीर" },
    featured: true
  },
  {
    id: "strings-01",
    category: { en: "Floral hangings", hi: "फूलों की लटकन" },
    name: { en: "Floral Hanging Strings", hi: "फूलों की लटकन वाली लड़ियाँ" },
    description: { en: "Decorative floral strings for festive styling and celebrations.", hi: "त्योहारों और खास अवसरों के लिए सजावटी फूलों की लड़ियाँ।" },
    price: 149,
    image: "images/floral-strings.jpg",
    imageAlt: { en: "Floral hanging strings product photo placeholder", hi: "फूलों की लड़ियों की उत्पाद तस्वीर" },
    featured: false
  },
  {
    id: "wall-01",
    category: { en: "Wall décor", hi: "दीवार की सजावट" },
    name: { en: "Flower Wall Hanging", hi: "फूलों की दीवार सजावट" },
    description: { en: "A handmade-looking floral accent for a cosy corner.", hi: "घर के किसी कोने को सुंदर बनाने के लिए फूलों की सजावट।" },
    price: 349,
    image: "images/wall-hanging.jpg",
    imageAlt: { en: "Flower wall hanging product photo placeholder", hi: "फूलों की दीवार सजावट की उत्पाद तस्वीर" },
    featured: false
  },
  {
    id: "arrangement-01",
    category: { en: "Table décor", hi: "टेबल सजावट" },
    name: { en: "Small Flower Arrangement", hi: "छोटी फूलों की सजावट" },
    description: { en: "A bright little arrangement for shelves, tables or gifting.", hi: "शेल्फ, टेबल या उपहार के लिए छोटी और रंगीन फूल सजावट।" },
    price: 299,
    image: "images/flower-arrangement.jpg",
    imageAlt: { en: "Small flower arrangement product photo placeholder", hi: "छोटी फूल सजावट की उत्पाद तस्वीर" },
    featured: false
  }
];
