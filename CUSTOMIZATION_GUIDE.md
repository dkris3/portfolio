# Quick Customization Checklist

## 🎯 Essential Updates (Do These First!)

### 1. Personal Information
- [ ] **Hero.jsx** - Line 43: Change "Dean Tayabas" to your name
- [ ] **Hero.jsx** - Line 50: Change "Full Stack Developer" to your title
- [ ] **Hero.jsx** - Lines 55-58: Update your intro text
- [ ] **Hero.jsx** - Lines 85-101: Update social media URLs (GitHub, LinkedIn, Twitter)

### 2. About Section
- [ ] **About.jsx** - Lines 35-48: Rewrite your personal story
- [ ] **About.jsx** - Lines 54-72: Update technologies you work with

### 3. Projects Section
- [ ] **Projects.jsx** - Lines 11-76: Replace ALL placeholder projects with your real projects
- [ ] Update project titles, descriptions, images, technologies, and links
- [ ] Get project screenshots or use Unsplash images temporarily

### 4. Tech Stack
- [ ] **TechStack.jsx** - Lines 17-52: Add/remove technologies based on YOUR skills
- [ ] Keep only technologies you actually know

### 5. Experience & Certifications
- [ ] **Experience.jsx** - Lines 11-51: Replace with YOUR work experience
- [ ] **Experience.jsx** - Lines 54-76: Replace with YOUR certifications
- [ ] Update company names, titles, dates, and descriptions

### 6. Contact Information
- [ ] **Contact.jsx** - Lines 77-96: Update all social media links
- [ ] **Contact.jsx** - Line 83: Change email to your actual email
- [ ] **Contact.jsx** - Lines 122-136: Update location and availability

### 7. Footer
- [ ] **Footer.jsx** - Lines 76-88: Update social links again

### 8. Meta Tags & SEO
- [ ] **index.html** - Lines 6-19: Update all meta tags with your info
- [ ] Change title, description, and keywords

---

## 🎨 Optional Customizations

### Colors & Branding
- [ ] **tailwind.config.js** - Lines 9-16: Change primary, secondary, accent colors
- [ ] Pick colors that match your personal brand

### Fonts
- [ ] **index.css** - Line 1: Change Google Fonts import
- [ ] **tailwind.config.js** - Lines 18-21: Update font families

### Navigation
- [ ] **Navbar.jsx** - Lines 37-44: Customize nav items if you add/remove sections
- [ ] **Navbar.jsx** - Line 51: Update logo/brand

---

## 📸 Image Guidelines

### Project Images
- **Recommended Size**: 1200x800px or 800x600px
- **Format**: WebP or JPG (optimized)
- **Sources**: 
  - Your own screenshots
  - Unsplash.com for placeholders
  - Create mockups using Figma/Canva

### Where to Host Images
1. **In your project**: Place in `public/images/` folder
2. **Unsplash**: Use direct URLs (temporary)
3. **Cloudinary**: Free image hosting
4. **GitHub**: Upload to a separate repo

---

## 🔗 Social Media Links to Update

Search and replace these URLs across all files:
- `https://github.com/yourusername` → Your GitHub
- `https://linkedin.com/in/yourusername` → Your LinkedIn
- `https://twitter.com/yourusername` → Your Twitter/X
- `mailto:your.email@example.com` → Your email

---

## ✅ Testing Checklist

Before deploying:
- [ ] All links work (no placeholder URLs)
- [ ] All images load properly
- [ ] Contact form alerts work (or is connected to backend)
- [ ] Mobile responsive on all pages
- [ ] Smooth scroll navigation works
- [ ] No console errors in browser
- [ ] All social links open in new tabs
- [ ] Meta tags updated (check with View Source)

---

## 🚀 Deployment Steps

### Using Vercel (Easiest)
1. Push code to GitHub
2. Go to vercel.com → New Project
3. Import your GitHub repository
4. Click Deploy (auto-configured for Vite)
5. Done! Get your live URL

### Using Netlify
1. Run `npm run build`
2. Drag `dist` folder to netlify.com/drop
3. Or connect GitHub for auto-deploy

---

## 🆘 Common Issues & Fixes

**Images not showing?**
- Check image URLs are correct
- Use absolute URLs for external images
- Place local images in `public/` folder

**Tailwind classes not working?**
- Restart dev server: `npm run dev`
- Check `tailwind.config.js` content paths

**Animations not smooth?**
- Check browser performance
- Reduce motion in `prefers-reduced-motion` media query

**Contact form not working?**
- Current form only shows alert
- Integrate EmailJS, Formspree, or custom backend

---

## 📝 File Structure Quick Reference

```
src/
├── components/
│   ├── Hero.jsx          → Landing section
│   ├── About.jsx         → About me section
│   ├── TechStack.jsx     → Skills section
│   ├── Projects.jsx      → Projects showcase
│   ├── Experience.jsx    → Work & certifications
│   ├── Contact.jsx       → Contact form
│   ├── Navbar.jsx        → Navigation
│   └── Footer.jsx        → Footer
├── App.jsx               → Main app component
├── index.css             → Global styles + Tailwind
└── App.css               → Additional styles

Config Files:
├── tailwind.config.js    → Tailwind customization
├── postcss.config.js     → PostCSS config
├── vite.config.js        → Vite configuration
└── index.html            → HTML template + meta tags
```

---

## 💡 Pro Tips

1. **Start with content**: Write all your text content first
2. **Use real projects**: Don't launch with placeholder projects
3. **Get feedback**: Share with friends before deploying
4. **Keep it updated**: Add new projects regularly
5. **Test on mobile**: Most visitors will be on mobile devices
6. **Optimize images**: Use tools like TinyPNG before uploading
7. **Add analytics**: Use Vercel Analytics or Google Analytics
8. **Custom domain**: Buy a domain and connect it to your deployment

---

**Need Help?** 
- Check the main README.md for detailed documentation
- Review component files - they have clear structure
- Use browser DevTools to debug issues

Good luck with your portfolio! 🚀
