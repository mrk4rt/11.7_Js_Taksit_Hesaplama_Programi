// Kullanıcıdan ürün fiyatını iste
let fiyat = parseFloat(
  prompt("Lütfen hesaplamamı istediğiniz tutarı (TL cinsinden) giriniz.")
);

// Kullanıcıdan taksit sayısını iste
let taksit = parseInt(
  prompt("Lütfen hesaplamamı istediğiniz taksit sayısını giriniz (2, 3, 6, 12)")
);

// Girilen fiyatın geçerli bir sayı olup olmadığını kontrol et
if (isNaN(fiyat)) {
  console.log("Lütfen geçerli bir fiyat girin.");
} 
// Girilen taksit sayısının geçerli bir sayı olup olmadığını kontrol et
else if (isNaN(taksit)) {
  console.log("Lütfen geçerli bir taksit sayısı girin.");
} 
// Taksit hesaplama
else if (taksit === 2 || taksit === 3 || taksit === 6 || taksit === 12) {
  let taksitMiktari = fiyat / taksit; // Her taksit miktarını hesapla
  console.log("Her taksit: " + taksitMiktari.toFixed(2) + " TL"); // Sonucu yazdır
} 
// Geçersiz taksit sayısı kontrolü
else {
  console.log("Geçersiz taksit sayısı.");
}
