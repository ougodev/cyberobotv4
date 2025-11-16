# Cyber Challenge V4.0 - Deployment on Replit

## 🚀 Steps to Deploy on Replit

### 1. Create a Replit Account
- Go to [https://replit.com/](https://replit.com/)
- Sign up or log in

### 2. Import Your Project

**Option A: Import from GitHub (Recommended)**
1. Create a GitHub repository for your project
2. Push all your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
3. On Replit, click "Create Repl"
4. Select "Import from GitHub"
5. Enter your repository URL
6. Click "Import from GitHub"

**Option B: Upload Files Directly**
1. On Replit, click "Create Repl"
2. Select "Node.js" template
3. Name your Repl (e.g., "cyberobot-challenge")
4. Upload all your files using the Files panel

### 3. Configure Replit

The project is already configured with:
- `.replit` - Replit configuration file
- `replit.nix` - Environment dependencies
- `vite.config.js` - Updated for Replit hosting

### 4. Install Dependencies

In the Replit Shell, run:
```bash
npm install
```

### 5. Run the Application

Click the "Run" button at the top, or in the Shell:
```bash
npm run dev
```

The app will be available at the URL shown in the Webview panel (usually `https://YOUR-REPL-NAME.YOUR-USERNAME.repl.co`)

### 6. Deploy to Production

For a production deployment:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Click the "Deploy" button in Replit
   - Choose "Static" deployment
   - Follow the deployment wizard
   - Your site will be live at a permanent URL

### 7. Environment Variables (if needed)

If you need to add environment variables:
1. Click on "Secrets" (lock icon) in the left panel
2. Add your variables as key-value pairs

### 📝 Important Notes

- **Free Tier Limitations**: Replit free tier has some limitations on uptime
- **Custom Domain**: You can add a custom domain in Replit's deployment settings
- **Automatic HTTPS**: Replit provides automatic HTTPS for all deployments
- **File Uploads**: Make sure all images in `public/images/` are uploaded

### 🔧 Troubleshooting

**Port Issues:**
- The app is configured to use port 3000 with `0.0.0.0` host for Replit compatibility

**Build Errors:**
- Make sure all dependencies are installed: `npm install`
- Clear cache and rebuild: `rm -rf node_modules package-lock.json && npm install`

**Images Not Loading:**
- Verify all images are in the `public/images/` folder
- Check file paths are correct (case-sensitive on Linux)

### 🌐 Accessing Your Site

After deployment, your site will be accessible at:
- **Development**: `https://YOUR-REPL-NAME.YOUR-USERNAME.repl.co`
- **Production**: Custom URL provided after deployment

### 📦 Alternative: Deploy to Vercel or Netlify

If you prefer other platforms:

**Vercel:**
```bash
npm install -g vercel
vercel login
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

---

## ✅ Deployment Checklist

- [ ] All code committed and pushed
- [ ] Dependencies installed (`npm install`)
- [ ] Build successful (`npm run build`)
- [ ] Images uploaded to `public/images/`
- [ ] Environment variables configured (if any)
- [ ] Site tested in development mode
- [ ] Deployed to production
- [ ] Custom domain configured (optional)

---

**Need Help?** Contact: clubcyberobot@gmail.com | +216 53 081 308
