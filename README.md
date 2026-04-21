# WIPULSCAN PRO v6.0 - Web App

## 🚀 GitHub Pages Deployment

### Schnellstart-Anleitung

#### 1. GitHub Repository erstellen
1. Öffne https://github.com/new
2. Repository-Name: `wipulscan-professional-v2`
3. Wähle **"Public"**
4. Klicke **"Create repository"**

#### 2. Dateien hochladen
1. Im Repository auf **"Upload files"** klicken
2. Alle Dateien aus diesem Ordner hochladen:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `jingle-intro.mp3`
   - `icon-192.png`
   - `icon-512.png`
   - `apple-touch-icon.png`
   - `assets/` Ordner (mit JS und CSS)
3. Auf **"Commit changes"** klicken

#### 3. GitHub Pages aktivieren
1. Gehe zu **Settings** → **Pages** (links im Menü)
2. Unter **"Source"** wähle **"Deploy from a branch"**
3. Branch: `main`, Ordner: `/(root)`
4. Auf **"Save"** klicken

#### 4. Fertig! 🎉
Nach 1-2 Minuten ist die App live:
```
https://DEIN-USERNAME.github.io/wipulscan-professional-v2
```

---

## 📱 Installation auf Handy (PWA)

### Android (Chrome):
1. Chrome öffnen
2. URL eingeben: `https://DEIN-USERNAME.github.io/wipulscan-professional-v2`
3. Chrome-Menü (3 Punkte) → **"Zum Startbildschirm hinzufügen"**
4. Fertig! 📱

### iOS (Safari):
1. Safari öffnen
2. URL eingeben
3. Teilen-Button → **"Zum Home-Bildschirm"**
4. Fertig! 📱

---

## ✅ Features

- ⚡ **Offline-fähig** (Service Worker)
- 📲 **PWA** (zum Startbildschirm hinzufügen)
- 🔊 **Cinematic Intro** mit Audio
- 📊 **Echte Netzwerk-Messungen**
- 🎨 **AR-Visualisierung**
- 🌍 **10 Sprachen**

---

## 🛠️ Technische Details

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **PWA:** Manifest + Service Worker
- **Storage:** localStorage / IndexedDB
- **Audio:** Web Audio API
- **Netzwerk:** Network Information API, Fetch API

**Keine Electron-Abhängigkeiten mehr!** Reine Web-Technologie.

---

© Cobra Dynamics 2026
Dennis Stein & Christoph Frick
