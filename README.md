# SXO Master — Landing Page

Premium landing page for **SXO Master**, a WordPress plugin by **SitesBrand**.
Built with Next.js 16, TypeScript, Tailwind CSS 4, and Framer Motion.

## 🚀 Quick Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **"Add New"** → **"Project"**
3. Import this repository
4. Vercel auto-detects Next.js — just click **"Deploy"**
5. Done! Your site is live in 2-3 minutes

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# In the project folder
vercel

# Follow the prompts, then deploy to production
vercel --prod
```

## 🌐 Connect Custom Domain

1. In Vercel dashboard → your project → **Settings** → **Domains**
2. Enter your domain (e.g., `sxo.sitesbrand.com`)
3. Add the DNS record shown by Vercel to your domain provider:

   **For subdomain (sxo.sitesbrand.com):**
   ```
   Type:  CNAME
   Name:  sxo
   Value: cname.vercel-dns.com
   ```

   **For root domain (sitesbrand.com):**
   ```
   Type:  A
   Name:  @
   Value: 76.76.21.21
   ```

4. Wait 5-30 minutes for DNS propagation
5. SSL is automatically provisioned by Vercel ✅

## 📝 Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## 📂 Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css       # Dark theme styles
│   │   ├── layout.tsx         # SEO metadata
│   │   └── page.tsx           # Landing page (all sections)
│   ├── components/ui/         # UI components (button, card, etc.)
│   └── lib/utils.ts           # Utility functions
├── public/
│   └── screenshots/           # Product screenshots
├── next.config.ts
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

## 🎨 Customization

- **Colors & Theme:** `src/app/globals.css`
- **Content & Sections:** `src/app/page.tsx`
- **SEO Metadata:** `src/app/layout.tsx`
- **CTA Links:** Search for `FREE_AUDIT_URL` and `CONTACT_URL` in `page.tsx`

## 📧 Contact

- **Product queries:** info@sitesbrand.com
- **Support:** support@sitesbrand.xyz
- **Website:** [sitesbrand.com](https://sitesbrand.com)

---

**Built by SitesBrand** — Psychology, Design & Technology
Founder & CEO: Hassam Shabbir
