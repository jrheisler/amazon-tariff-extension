# 🧾 Amazon Tariff Estimator Chrome Extension

**Amazon Tariff Estimator** is a Chrome extension that displays the **estimated import tariff** on Amazon product pages. It fetches real-time tariff data from a GitHub-hosted JSON file and overlays the calculated cost directly on the page — helping consumers see the *true* price before checkout.

---

## 💡 Features

- 🛍️ Works automatically on **Amazon product pages**
- 📦 Estimates tariffs by **product category and country of origin**
- 💰 Shows both **tariff amount** and **price after tariff**
- 🔁 Fetches data in **real time** from a GitHub JSON file you can update anytime
- ❤️ Includes a **PayPal Donate link** to support further development

---

## 🚀 How It Works

- Injects a content script into Amazon product pages
- Extracts product title and price from the DOM
- Uses keyword matching to guess product category
- Looks up tariff rate from [this GitHub JSON file](https://github.com/jrheisler/amazon-tariff-extension/blob/main/tariffs.json)
- Displays:
  - Estimated tariff amount
  - Estimated total price after tariff
  - Optional donate link

---

## 🛠️ Installation (Dev Mode)

1. Download or clone this repo
2. Open `chrome://extensions` in Chrome
3. Enable **Developer Mode** (top right)
4. Click **Load Unpacked**
5. Select the folder with this extension's files
6. Go to any Amazon product page — your tariff estimate appears under the price!

---

## 🌍 Example

A product listed at **$100** with a **25% tariff** from China would show:

📦 Estimated Tariff (China, electronics): $25.00 (25%) 💵 Estimated Price After Tariff: $100.00 + $25.00 = $125.00


---

## 🧾 Tariff Data

Tariff rates are fetched live from this file:
📄 [`tariffs.json`](https://github.com/jrheisler/amazon-tariff-extension/blob/main/tariffs.json)

You can update it directly on GitHub, and all extension users will receive the changes automatically.

---

## 💖 Support This Project

If you find this helpful, consider donating to support further development:

[![Donate with PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.com/donate?hosted_button_id=YOUR_ID_HERE)

> Replace `YOUR_ID_HERE` with your actual PayPal hosted button ID.

---

## 📦 Coming Soon (Ideas)

- Origin country selection dropdown
- Support for other Amazon domains (e.g., .ca, .co.uk)
- Expansion to other marketplaces (eBay, Walmart)
- Tooltip explanations of tariff logic

---

## 📄 License

MIT License — feel free to use, modify, or fork.

---

### ✨ Created by [Jeff Heisler](mailto:jrheisler@yahoo.com)
