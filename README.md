# 🌌 NebulOS

**NebulOS** is a web-based desktop environment that runs entirely in your browser, featuring a built-in proxy-powered web browser, window system, and lightweight apps.

It’s designed to feel like a real operating system — but hosted on the web.

---

## 🚀 Features

* 🪟 Window-based desktop UI
* 🌐 Proxy-powered browser (Scramjet backend)
* 🧭 Tabs + navigation system
* ⌨️ Terminal (basic commands)
* 📝 Notepad (auto-saves locally)
* 🎨 Paint app
* ⚙️ Settings panel
* 📁 File viewer mock system

---

## 🧠 What is NebulOS?

NebulOS is essentially a **browser inside a browser**, wrapped in a desktop-style interface.

It combines:

* A **frontend OS UI** (HTML, CSS, JS)
* A **backend proxy** (Scramjet)

This allows you to:

* Load websites inside an iframe
* Navigate pages like a real browser
* Bypass basic restrictions using a proxy

---

## ⚙️ How it Works

1. You enter a URL in the NebulOS browser
2. The request is sent to the **Scramjet proxy backend**
3. Scramjet rewrites and fetches the site
4. The site loads inside NebulOS

---

## 📦 Installation (GitHub Codespaces)

### 1. Clone your repo

```bash
git clone https://github.com/your-username/nebulos.git
cd nebulos
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Start the server

```bash
npm start
```

---

### 4. Open the app

* Codespaces will prompt you to open **port 3000**
* Click **“Open in Browser”**

---

## 🌐 Project Structure

```
/nebulos
 ├── index.html      # Frontend OS
 ├── server.js       # Scramjet proxy backend
 ├── package.json    # Dependencies
```

---

## 🔧 Configuration

By default, the proxy runs on:

```
http://localhost:3000
```

The frontend automatically connects using:

```js
const PROXY = location.origin;
```

---

## ⚠️ Limitations

Some websites may not work due to:

* Anti-proxy protections
* iframe restrictions
* CSP (Content Security Policy)

Examples:

* Google
* Discord
* Streaming services

This is expected behavior.

---

## 🚀 Future Improvements

* Tab close buttons + icons
* Session restore (save tabs)
* Proxy switching system
* Chrome-style UI
* Cloaking (about:blank launcher)
* Download support

---

## 📜 Disclaimer

NebulOS is for **educational purposes only**.

Do not use it to bypass restrictions or access content you are not permitted to view.

---

## 👤 Author

Built by you 😎
Powered by Scramjet proxy technology

---

## ⭐ Tip

If something doesn’t load:

* Try another site
* Or refresh the tab

---

Enjoy your web OS 🌌
