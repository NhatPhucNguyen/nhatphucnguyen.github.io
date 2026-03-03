# GitHub Pages Deployment Guide

## Setup Complete! 🚀

Your portfolio is now configured for GitHub Pages user site deployment. Here's what was added:

### Configuration Files Updated:
- ✅ **package.json**: Added homepage URL for user site
- ✅ **vite.config.ts**: Configured base path for root deployment
- ✅ **GitHub Actions**: Automated deployment workflow

### Deployment Steps:

1. **Repository Setup:**
   - Repository name should be: `nhatphucnguyen.github.io`
   - This will be your main GitHub Pages user site

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages user site"
   git push origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your GitHub repository
   - Navigate to **Settings** > **Pages**
   - Source: **GitHub Actions**
   - The workflow will automatically deploy on every push to main

4. **Manual Deployment (Alternative):**
   ```bash
   npm run deploy
   ```

### Important Notes:

- **User Site**: This deploys to your main GitHub Pages URL (not a project subdirectory)
- **Repository Name**: Must be `nhatphucnguyen.github.io` for user site
- **Base Path**: Set to `/` (root) for user site deployment
- **Resume PDF**: Make sure your resume PDF is in the `public` folder

### URLs:
- **Live Site**: https://nhatphucnguyen.github.io
- **Development**: http://localhost:5173

### Troubleshooting:
- Ensure repository name is exactly `nhatphucnguyen.github.io`
- For custom domain, add a `CNAME` file to the `public` folder
- Monitor the Actions tab for deployment status

Your portfolio is ready for deployment as your main GitHub Pages site! 🎉