# Matte Tool & Machine Website

A modern, responsive website for Matte Tool & Machine, built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com), and [Cloudinary](https://cloudinary.com) for media management.

---

## 🚀 Tech Stack

- **Next.js (App Router):** React framework for server/client rendering and routing.
- **TypeScript:** Type-safe development for React and API routes.
- **Tailwind CSS:** Utility-first CSS for rapid UI development.
- **shadcn/ui:** Accessible, customizable React UI components.
- **Cloudinary:** CDN and media management for images and videos.
- **Google reCAPTCHA:** Spam protection for contact forms.
- **Nodemailer:** Email sending via SMTP (Gmail, Bellnet, etc.).
- **Environment Variables:** Secure secrets/configuration via `.env.local`.

---

## 📦 Project Structure

```
src/
  app/
    components/
      homepage/
        aboutUs.tsx
        gallery.tsx
        homeCard.tsx
        image_factory.tsx
        outProcess.tsx
      navbar.tsx
      footer.tsx
      gallery/
        galleryCarousel.tsx
    api/
      contact/route.ts      # Handles contact form email sending
      gallery/route.ts      # Fetches media from Cloudinary
    not-found.tsx           # Custom 404 page
    services/page.tsx
    gallery/page.tsx
    about/page.tsx
    contact/page.tsx
  globals.css               # Global styles
public/
  images/                   # Local images, logos, icons
  favicon.ico
  404.gif
```

---

## 🛠️ Setup & Development

### 1. Clone the repository

```bash
git clone https://github.com/RyanMatte/matte-tool-machine.git
cd matte-tool-machine
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
SMTP_USER=your_email@provider.com
SMTP_PASS=your_email_password_or_app_password
```

### 4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment

### Deploy on Vercel

1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/) and import your repository.
3. Add your environment variables in the Vercel dashboard.
4. Deploy!

### Other Hosting

- You can deploy on Netlify, AWS, or any platform supporting Node.js.
- Make sure to set environment variables in your hosting dashboard.

---

## 📸 Media Management

- **Gallery images/videos** are fetched from Cloudinary using a secure API route.
- **Local assets** (logos, icons) are stored in `/public/images/`.
- To add new gallery items, upload them to your Cloudinary folder (`MTM-Website/upload`).

---

## ✉️ Contact Form

- Uses Google reCAPTCHA for spam protection.
- Submissions are sent via Nodemailer to your configured email (Gmail, Bellnet, etc.).
- SMTP credentials are stored securely in `.env.local`.

---

## 🖼️ Image Optimization

- All images use Next.js `<Image />` for lazy loading and optimization.
- External images (Cloudinary) are whitelisted in `next.config.js`.

---

## 🧩 UI Components

- Built with shadcn/ui for dialogs, buttons, sheets, etc.
- Responsive and accessible out of the box.

---

## 📝 Customization

- **Fonts:** Bebas Neue for headings, Geist Sans for body text.
- **404 Page:** Custom design with image and message.
- **Navbar/Footer:** Persistent across all pages via `layout.tsx`.

---

## 🛡️ Security & Best Practices

- Never commit secrets; use `.env.local` for sensitive data.
- API secrets are only used server-side.
- reCAPTCHA keys use the `NEXT_PUBLIC_` prefix for client-side access.

---

## 🤝 Contributing

Pull requests and issues are welcome!  
Please follow best practices and keep secrets out of commits.

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com/docs)
- [Cloudinary Docs](https://cloudinary.com/documentation)
- [Nodemailer Docs](https://nodemailer.com/about/)

---

**Matte Tool & Machine**  
Precision tools and machinery for over 50