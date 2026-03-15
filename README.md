# MoneyHub - Product Management Hackathon
**Live Demo:** [https://money-hub-psi.vercel.app/](https://money-hub-psi.vercel.app/)

---

##  Project Overview

MoneyHub is a comprehensive budgeting web application developed for the SCS x Ascend Concordia Product Management Hackathon (March 13-15, 2026). This project transforms a minimal budgeting prototype into a full-featured financial management platform tailored for creator economy professionals.

##  Problem Statement

Content creators face unique financial challenges:
- Income from multiple platforms (YouTube, Twitch, TikTok, Patreon, etc.)
- Irregular payment schedules and fluctuating revenue
- Complex expense tracking (business vs. personal, tax-deductible items)
- Need for platform-specific analytics and forecasting
- Difficulty managing cash flow across diverse revenue streams

##  Solution

MoneyHub provides creators with:
- **Multi-platform income tracking** across 8+ creator platforms
- **Smart expense categorization** with tax-deductibility tagging
- **Content P&L tracker** to measure profitability per piece of content
- **Financial health scoring** based on spending discipline and savings rate
- **AI-powered insights** and revenue forecasting
- **Multi-language & multi-currency support** (6 languages, 6 currencies)

##  Key Features

### Core Functionality
- **Dashboard Analytics**: Monthly/annual views with income vs. expense breakdowns
- **Transaction Management**: Full CRUD operations with search, filter, and sort
- **Platform Income Tracking**: Dedicated views for YouTube, Twitch, TikTok, Patreon, etc.
- **Expense Categorization**: Business/Personal tagging for tax optimization
- **Content P&L**: Track costs and earnings per video/stream/post

### Advanced Features
- **Financial Health Score**: 100-point system evaluating budget adherence, savings rate, subscription load, and impulse spending
- **AI Forecasting**: Weighted revenue predictions based on 3-month trends
- **Multi-language UI**: English, French, Spanish, German, Japanese, Arabic
- **Currency Conversion**: USD, EUR, GBP, CAD, JPY, AED with real-time formatting
- **Dark Mode**: Persistent theme preference across sessions

### Cloud Integration (Supabase)
- **User Authentication**: Email/password sign-up and sign-in
- **Cloud Sync**: Transactions, preferences, and feedback synced per user
- **Data Persistence**: Profile settings, language/currency, theme stored remotely

## 🏗️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Charts**: Chart.js 4.4.1
- **Backend**: Supabase (PostgreSQL, Auth, Realtime)
- **Deployment**: Vercel
- **Design**: Custom CSS with dark mode support

##  Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for Supabase sync

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd moneyhub
   ```

2. **Open locally**
   ```bash
   # Simply open the HTML file in your browser
   open index.html
   ```
   Or use a local server:
   ```bash
   python -m http.server 8000
   # Navigate to http://localhost:8000
   ```

3. **Access the live demo**
   Visit [https://money-hub-psi.vercel.app/](https://money-hub-psi.vercel.app/)

### First-Time Setup

1. **Create an account** (Sign Up tab)
   - Enter first name, last name, email, password
   - Password must be 8-15 characters with at least 1 special character

2. **Complete onboarding**
   - Select creator type (YouTuber, Twitch Streamer, Influencer, etc.)
   - Choose income platforms
   - Set financial goal
   - Enter your display name

3. **Start tracking**
   - Add income/expense transactions
   - Explore analytics and insights
   - Track content profitability

## 📊 Business Model

### Target Market
- **Primary**: Content creators earning $2K-$15K/month across multiple platforms
- **Secondary**: Freelancers, gig workers, small creator businesses
- **Market Size**: 50M+ content creators globally (2026)

### Monetization Strategy

**Freemium Model**
- **Free Tier ($0/month)**
  - Dashboard with monthly/annual views
  - Transaction tracking (100 transactions/month limit)
  - Basic analytics
  - CSV export
  
- **Pro Tier ($19/month)**
  - Everything in Free
  - Unlimited transactions
  - Advanced analytics & benchmarking
  - Content P&L tracker
  - Financial health scoring
  - Priority support
  - Cloud sync (unlimited devices)

**Revenue Projections (3-Year Roadmap)**
- Year 1: 5,000 users (10% conversion to Pro) → $114K ARR
- Year 2: 25,000 users (15% conversion) → $855K ARR
- Year 3: 100,000 users (20% conversion) → $4.56M ARR

### Competitive Advantage
- **Creator-specific**: Unlike Mint/YNAB, built for multi-platform income
- **Content P&L**: Unique feature not found in existing budgeting apps
- **Platform integration**: Direct sync with YouTube, Patreon (future roadmap)

## 🗺️ Roadmap

### Q1 2026 (Current)
-  Core budgeting features
-  Multi-platform tracking
-  Supabase cloud sync
-  Multi-language/currency

### Q2-Q3 2026
-  Platform API integrations (YouTube, Twitch, Patreon)
-  Mobile app (React Native)
-  Team/accountant sharing
-  Automated tax form generation (1099 tracking)

### Q4 2026 - 2027
-  Predictive budgeting with ML
-  Bank account sync (Plaid integration)
-  Invoicing & payment collection
-  Marketplace for creator financial services

##  Team

- **[Tanisha Fonseca]** - Full-stack Development, Product Strategy
- **[Aarefe Fathima]** - UI/UX Design, Business Analysis
- **[Samantha Menezes]** - Backend Developer
- **[Suyash sharma]** -  Market Research and unique factor

##  License

This project was developed for the SCS x Ascend Concordia Product Management Hackathon.

##  Acknowledgments

- **Ascend Concordia** and **SCS** for organizing the hackathon
- Mentors and judges for guidance
- Chart.js for visualization library
- Supabase for backend infrastructure

<img src="moneyhub_logo.png" alt="MoneyHub Logo" width="200"/>
---

**Built with ❤️ for creators by creators** | March 13-15, 2026
