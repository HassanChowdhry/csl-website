# Dalhousie Computer Science Leaders

This society aims to provide an environment for students to explore and deepen their understanding of computer science fundamentals, data structures, algorithms, cloud computing, systems design, networks, problem-solving, and real-world applications. The society will provide a platform for students to collaborate, share knowledge, and work on projects related to these topics.

The society will also conduct workshops, seminars, and talks by industry experts to help students learn about the latest developments in computer science. Additionally, the society aims to provide students with practical experience by working on projects relevant to the field and providing opportunities for internships and co-op positions.

One of the main goals of this society is to create leaders for the future. By providing students with the opportunity to gain knowledge and skills that will be valuable in their future careers, this society will give students the tools they need to succeed in the competitive field of computer science and become future leaders in the field.

The society is open to all students regardless of their major and welcomes anyone who is interested in computer science and wants to learn more about the field. I believe that this society will be beneficial for students by providing them with the opportunity to gain knowledge and skills that will be valuable in their future careers.

# Dalhousie CSL Website

A modern, animated website for the Dalhousie Computer Science League (CSL) featuring interview preparation services, community features, and a blog system.

## ✨ Features

### 🎨 **Modern UI with Aceternity-style Animations**
- Smooth framer-motion animations throughout
- Direction-aware hover effects on team cards
- Animated testimonials carousel with swipe gestures
- Floating navigation bar
- Glassmorphism design elements

### 🧭 **Enhanced Navigation**
- Sticky navbar with CSL logo and branding
- Floating bottom navigation for quick access
- Smooth scroll navigation between sections

### 🎯 **Services Section**
- Mock Technical Interviews with Calendly integration
- Mock Behavioral Interviews
- System Design Interview preparation
- ICPC Training programs
- Interactive service cards with hover effects

### 📅 **Events Management**
- Upcoming events display
- Event registration functionality
- Event categories and details
- Real-time event updates

### 📱 **Social Media Integration**
- LinkedIn and Instagram feed display
- Latest updates from social platforms
- Social media follow buttons
- Community engagement features

### 💬 **Discord Community**
- Discord server invitation
- Community features showcase
- Join Discord call-to-action
- Community benefits highlight

### ⭐ **Animated Testimonials**
- Carousel-style testimonials with auto-play
- Swipe gestures for mobile interaction
- Star ratings and success stories
- Alumni testimonials from top companies

### 👥 **Enhanced Team Section**
- Direction-aware hover effects
- Social media links on hover
- Animated team member cards
- Professional profile display

### 📝 **Blog System**
- Complete blog functionality with categories
- Sanity CMS integration ready
- Responsive blog layout
- SEO optimized blog posts

### 🏢 **Updated Companies Section**
- Changed to "Our members have gotten offers from these companies"
- Company logos display
- Success stories integration

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd csl-web
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
# Sanity CMS Configuration (Optional)
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production

# Add your actual Sanity project ID and dataset here
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Sanity CMS Integration

### Setting up Sanity CMS

1. **Create a Sanity project**
   - Go to [sanity.io](https://sanity.io)
   - Create a new project
   - Note your project ID and dataset name

2. **Configure environment variables**
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

3. **Set up content schemas**
Create schemas for:
- Blog posts
- Events
- Team members
- Testimonials

4. **Deploy Sanity Studio**
```bash
npm install -g @sanity/cli
sanity init
sanity deploy
```

### Content Management
- Use Sanity Studio for content management
- Real-time collaboration
- Version control for content
- API-first approach

## 🎨 Customization

### Colors
The website uses a consistent color scheme:
- **Primary**: Indigo (#4F46E5)
- **Secondary**: Purple (#7C3AED)
- **Accent**: Blue (#3B82F6)
- **Success**: Green (#10B981)
- **Warning**: Orange (#F59E0B)

### Typography
- **Primary Font**: Inter (via Tailwind CSS)
- **Headings**: Bold weights
- **Body**: Regular weights

### Icons
- **Lucide React**: Primary icon library
- **React Icons**: Social media icons
- **Custom SVGs**: Where needed

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Configuration

### Update Links
- **Calendly**: Update links in `components/Services.tsx`
- **Discord**: Update invite link in `components/Discord.tsx`
- **Social Media**: Update links in `components/LatestUpdates.tsx`
- **Team Social**: Update links in `components/Team.tsx`

### Content Updates
- **Team Members**: Update in `components/Team.tsx`
- **Services**: Modify in `components/Services.tsx`
- **Events**: Update in `components/Events.tsx`
- **Testimonials**: Edit in `components/Testimonials.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`

### Other Platforms
The website can be deployed on any static hosting service:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps

## 📊 Performance

### Optimizations
- Image optimization with Next.js
- Lazy loading for components
- Code splitting
- CSS optimization
- Bundle analysis

### Lighthouse Scores
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## 🔒 Security

### Best Practices
- Environment variables for sensitive data
- HTTPS enforcement
- Content Security Policy
- Regular dependency updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues:
- Create an issue on GitHub
- Contact the CSL team
- Check the documentation

## 🔄 Updates

### Recent Updates
- ✅ Added Aceternity-style animations
- ✅ Enhanced team section with direction-aware hover
- ✅ Integrated Sanity CMS for blog
- ✅ Added floating navigation
- ✅ Enhanced testimonials with carousel
- ✅ Updated services section with Calendly integration
- ✅ Added Discord community section
- ✅ Implemented social media integration

### Planned Features
- [ ] Real-time chat integration
- [ ] Advanced analytics dashboard
- [ ] Mobile app companion
- [ ] Advanced search functionality
- [ ] Multi-language support

---

Built with ❤️ by the CSL Team
