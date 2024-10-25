# Taksit Hesaplama Programı

## Amaç
Kullanıcının girdiği ürün fiyatına ve taksit sayısına göre taksitli ödeme seçeneklerini hesaplayan bir program.

## Gereksinimler
- Kullanıcıdan ürün fiyatını (TL cinsinden) girmesini iste.
- Kullanıcıdan kaç taksit yapmak istediğini (2, 3, 6, 12) girmesini iste.
- Taksit seçeneklerine göre aşağıdaki koşulları kontrol et:
  - Eğer taksit sayısı 2 ise, toplam tutarı ikiye böl ve her taksit miktarını yazdır.
  - Eğer taksit sayısı 3 ise, toplam tutarı üçe böl ve her taksit miktarını yazdır.
  - Eğer taksit sayısı 6 ise, toplam tutarı altıya böl ve her taksit miktarını yazdır.
  - Eğer taksit sayısı 12 ise, toplam tutarı on ikiye böl ve her taksit miktarını yazdır.
  - Eğer taksit sayısı belirtilen değerler dışında ise, "Geçersiz taksit sayısı." yazdır.
- Girilen ürün fiyatının geçerli bir sayı olup olmadığını kontrol et. Eğer kullanıcı bir sayı girmemişse, "Lütfen geçerli bir fiyat girin." yazdır.
- Girilen taksit sayısının geçerli bir sayı olup olmadığını kontrol et. Eğer kullanıcı bir sayı girmemişse, "Lütfen geçerli bir taksit sayısı girin." yazdır.
- Her taksit miktarını iki ondalık basamakla yazdır.

## Örnek Çıktılar
- Eğer kullanıcı 1000 TL girerse ve 2 taksit seçerse: `Her taksit: 500.00 TL`
- Eğer kullanıcı 1000 TL girerse ve 3 taksit seçerse: `Her taksit: 333.33 TL`
- Eğer kullanıcı 1000 TL girerse ve 6 taksit seçerse: `Her taksit: 166.67 TL`
- Eğer kullanıcı 1000 TL girerse ve 12 taksit seçerse: `Her taksit: 83.33 TL`
- Eğer kullanıcı 1000 TL girerse ve 5 taksit seçerse: `Geçersiz taksit sayısı.`
- Eğer kullanıcı "yüz" girerse: `Lütfen geçerli bir fiyat girin.`
- Eğer kullanıcı "beş" girerse: `Lütfen geçerli bir taksit sayısı girin.`

## Kullanım
1. Programı çalıştırın.
2. Ürün fiyatını ve taksit sayısını girmesi için kullanıcıdan bilgi alın.
3. Hesaplanan taksit miktarını veya hata mesajlarını kullanıcıya gösterin.

## İpuçları
- `prompt()` fonksiyonunu kullanarak kullanıcıdan bilgi alabilirsiniz.
- `isNaN()` fonksiyonunu kullanarak sayı kontrolü yapabilirsiniz.
- `if`, `else if` ve `else` yapısını kullanarak koşulları kontrol edin.
