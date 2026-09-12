# 🚀 Deployment Guide: 1-Click Zero-Build Hosting
### *Host the SOF Olympiad App for Free in Under 2 Minutes*

The app is built as a **zero-build, static, offline-first single page application (SPA)**:
- ❌ **No `npm install`** or Node.js runtime required
- ❌ **No build step**, bundling, or compilation
- ❌ **No backend server** or database setup needed
- ✅ **100% Client-side**: Uses browser LocalStorage, Web Audio API, and Web Speech API.

This means you can deploy it to any free static host in 60 seconds, or even open it directly from a flash drive offline.

---

## 🌟 Method 1: GitHub Pages (Recommended — Permanent Free URL)

If your code is stored in a GitHub repository:
1. Open your repository on GitHub (`https://github.com/your-username/your-repo`).
2. Click on the **Settings** tab at the top right of the repository.
3. In the left sidebar, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` (or `master`), and keep the folder as `/ (root)`.
   - Click **Save**.
5. Wait ~60 seconds. Refresh the page, and GitHub will provide your live HTTPS link:
   > `https://<your-username>.github.io/<your-repo>/`
6. Share this link with your family! It will work seamlessly on iPad, Android tablets, laptops, and phones.

---

## ⚡ Method 2: Vercel (Drag-and-Drop or Git Import)

### Option A: Via GitHub Import
1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **Add New...** → **Project**.
3. Select your repository.
4. Framework Preset: Choose **Other** (no build command needed).
5. Click **Deploy**. In 15 seconds, you will receive a free `https://your-project.vercel.app` URL.

### Option B: Drag-and-Drop (Vercel CLI / Dashboard)
1. In the Vercel dashboard, you can deploy without git by dragging the folder directly into the project deployer.

---

## 🌐 Method 3: Netlify Drop (No Account or Git Needed)

1. Open [app.netlify.com/drop](https://app.netlify.com/drop) in your browser.
2. Drag and drop the entire `SoF` folder directly onto the browser window.
3. Netlify will instantly publish it and give you a free live URL (e.g., `https://sof-class2-olympiad.netlify.app`).

---

## 💻 Method 4: Local Offline Use (No Internet Needed)

If your child is practicing while traveling or without internet access:
1. Copy the `SoF` folder to your laptop, tablet, or USB thumb drive.
2. Double-click `index.html` to open it in Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari.
3. Everything—including sound effects, Minecraft emeralds, speech read-aloud, and mistake notebook—operates **100% offline**.

---

## 🔄 Updates & Sync
Because all user progress (XP, streaks, mistakes, badges) is stored in browser `localStorage`:
- Progress is preserved across page refreshes and browser restarts.
- If you update question text or add new sets, child progress remains safe.
