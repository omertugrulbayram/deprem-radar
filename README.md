# ⚡ Deprem Radar — Türkiye Canlı Deprem Haritası

> Türkiye'deki depremleri gerçek zamanlı olarak takip eden, tek dosyadan oluşan web uygulaması.

![Status](https://img.shields.io/badge/status-live-red?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML-single--file-orange?style=for-the-badge)
![API](https://img.shields.io/badge/veri-Kandilli%20Rasathanesi-green?style=for-the-badge)

---

## 🌍 Demo

Direkt tarayıcıda açın: `index.html` — backend yok, kurulum yok, API key yok.

---

## 🚀 Özellikler

- 🔴 **Canlı veri** — Kandilli Rasathanesi verisi (`api.orhanaydogdu.com.tr` üzerinden)
- 🗺️ **İnteraktif harita** — Leaflet.js ile Türkiye odaklı görünüm, koyu tema
- ⏱️ **Zaman filtresi** — Son 24 saat / 7 gün / 30 gün
- 📊 **Büyüklük filtresi** — Minimum magnitude slider (0.0 – 6.0)
- 🟡 **Renkli büyüklük gösterimi** — 5 farklı renk kategorisi
- 💥 **Pulse animasyonu** — 4.0+ büyüklükteki depremler için titreşim halkası
- 📋 **Deprem listesi** — Sağ panelde son 100 deprem, tıklanabilir
- 🔍 **Detay paneli** — Konum, büyüklük, derinlik, koordinat, zaman (TR saati)
- 🔄 **Otomatik yenileme** — Her 5 dakikada bir güncellenir
- 📱 **Responsive** — Mobilde harita tam ekran (sidebar gizlenir)

---

## 📦 Kullanım

```bash
# Repoyu klonla
git clone https://github.com/kullanici/deprem-radar.git

# index.html dosyasını tarayıcıda aç
open index.html
```

Veya **GitHub Pages** ile yayınla:
1. Repo → Settings → Pages
2. Source: `main` branch, `/root`
3. Save → Canlı link hazır!

---

## 🛠️ Teknoloji Stack

| Teknoloji | Kullanım |
|-----------|----------|
| HTML / CSS / Vanilla JS | Saf frontend, sıfır dependency |
| [Leaflet.js v1.9.4](https://leafletjs.com/) | İnteraktif harita |
| [OpenStreetMap](https://www.openstreetmap.org/) | Harita katmanı (koyu filtreli) |
| [api.orhanaydogdu.com.tr](https://api.orhanaydogdu.com.tr) | Kandilli verisi — CORS destekli |
| Google Fonts | Share Tech Mono, Bebas Neue, DM Sans |

---

## 📡 Veri Kaynağı

**Kandilli Rasathanesi ve Deprem Araştırma Enstitüsü (KRDAE)**
Boğaziçi Üniversitesi — Bölgesel Deprem-Tsunami İzleme ve Değerlendirme Merkezi

Veriler `api.orhanaydogdu.com.tr` aracılığıyla JSON formatında çekilir:

```
GET https://api.orhanaydogdu.com.tr/deprem/kandilli/live
    → Son 24 saatteki depremler

GET https://api.orhanaydogdu.com.tr/deprem/kandilli/archive?date=YYYY-MM-DD
    → Arşiv verisi (7 gün / 30 gün için kullanılır)
```

Her ikisi de **tamamen ücretsiz**, API key gerektirmez.

---

## 🎨 Büyüklük Renk Skalası

| Renk | Büyüklük |
|------|----------|
| 🟢 Yeşil `#00cc66` | < 2.0 |
| 🟡 Sarı-Yeşil `#88cc00` | 2.0 – 3.0 |
| 🟡 Sarı `#ffcc00` | 3.0 – 4.0 |
| 🟠 Turuncu `#ff8800` | 4.0 – 5.0 |
| 🔴 Kırmızı `#ff4444` | 5.0+ |

4.0+ büyüklükteki depremler haritada **pulse (titreşim) halkası** ile gösterilir.

---

## 📁 Dosya Yapısı

```
deprem-radar/
├── index.html      # Tüm uygulama — tek dosya
└── README.md       # Bu dosya
```

Uygulama intentionally tek dosyada tutulmuştur. Backend yok, build adımı yok.

---

## ⚙️ Geliştirme Notları

### Neden `api.orhanaydogdu.com.tr`?

Kandilli Rasathanesi'nin kendi sitesi (`koeri.boun.edu.tr`) CORS header'ı dönmüyor — tarayıcıdan direkt fetch engelleniyordu. `api.orhanaydogdu.com.tr`, Kandilli verisini proper CORS header'larıyla sunan Türkçe açık kaynaklı bir proxy API'dir.

### Neden USGS değil?

İlk versiyon USGS GeoJSON feed'i kullanıyordu. Ancak USGS koordinat bazlı Türkiye filtresi küçük yerel depremleri kapsam dışında bırakıyordu. Kandilli verisine geçilmesiyle Türkiye'ye özel, daha hassas ve Türkçe konum adlı veri elde edildi.

### Zaman dilimi

Kandilli verileri Türkiye saatiyle (UTC+3) gelir. Uygulama detay panelinde bu saati doğrudan gösterir.

---

## 🔒 Lisans

MIT — istediğin gibi kullan, fork'la, geliştir.

Veri kaynağı olan Kandilli Rasathanesi verileri ticari amaçlı kullanım için Boğaziçi Üniversitesi Rektörlüğü'nün yazılı iznini gerektirir.

---

<p align="center">⚡ Made with pure HTML · Veri: Kandilli Rasathanesi</p>
