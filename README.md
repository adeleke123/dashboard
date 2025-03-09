### Finance Tracker Dashboard

A modern, interactive financial dashboard built with Next.js and Tailwind CSS. This application helps users track their finances with an intuitive interface, comprehensive onboarding flow, and personalized experience.


![image](https://github.com/user-attachments/assets/8eef8f4b-6093-40d7-ad92-d35c7c46bee8)



## Features

- **Financial Overview Dashboard**: View total balance, income, expenses, and recent transactions
- **Interactive Onboarding**: Six-step guided tour for new users
- **User Role Selection**: Personalization based on financial management needs (personal, business, family)
- **Demo Transaction Form**: Practice adding transactions during onboarding
- **Feedback Collection**: Rate your experience to help improve the application
- **Help Center**: Access contextual help throughout the application
- **User Authentication**: Sign-up and login functionality with personalized welcome messages
- **Responsive Design**: Works seamlessly across all device sizes
- **Dark Mode Support**: Toggle between light and dark themes


## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.17.0 or higher)
- npm (usually comes with Node.js)


## Getting Started

Follow these steps to get the project running on your local machine:

### 1. Clone the repository

```shellscript
git clone https://github.com/your-username/dashboard.git
cd dashboard
```

### 2. Install dependencies

```shellscript
npm install
```

### 3. Run the development server

```shellscript
npm run dev
```

### 4. Open the application

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Troubleshooting

If you encounter the error `next: not found` when running `npm run dev`, try these solutions:

1. **Make sure dependencies are installed**:

```shellscript
npm install
```


2. **Check your Node.js version**:

```shellscript
node -v
```

Make sure it's version 18.17.0 or higher. If not, update Node.js.


3. **Install Next.js globally**:

```shellscript
npm install -g next
```


4. **Use npx to run Next.js**:

```shellscript
npx next dev
```


5. **Reinstall dependencies if issues persist**:

```shellscript
rm -rf node_modules
rm package-lock.json
npm install
```




## Project Structure

```
finance-tracker/
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── login/            # Login page
│   └── signup/           # Signup page
├── components/           # React components
│   ├── Dashboard.tsx
│   ├── HelpCenter.tsx
│   ├── Navigation.tsx
│   ├── Onboarding.tsx
│   ├── OnboardingProvider.tsx
│   ├── RecentTransactions.tsx
│   ├── WelcomeMessage.tsx
│   └── ui/               # UI components
├── lib/                  # Utility functions
├── public/               # Static assets
├── package.json          # Project dependencies
└── tailwind.config.js    # Tailwind CSS configuration
```

## Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**:

- [Inter](https://fonts.google.com/specimen/Inter) (general text)
- [Outfit](https://fonts.google.com/specimen/Outfit) (headings)
- [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) (financial figures)


## User Flow

1. Sign up with name, email, and password
2. Receive a personalized welcome message
3. Complete the six-step onboarding process
4. Access the main dashboard with financial overview
5. Use the help center for assistance as needed


## Local Storage

This application uses browser localStorage to persist:

- User authentication state
- Onboarding completion status
- User role selection
- Feedback ratings


In a production environment, these would be stored in a database.

## Development Notes

- The application uses React's Context API for state management
- Form validation is handled client-side
- Authentication is simulated (no actual backend)
- Financial data is currently hardcoded for demonstration purposes


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Feel free to reach out if you have any questions or encounter any issues!




onboarding-flow-project/
├── app/
│   ├── layout.tsx                 # Root layout file for the app
│   ├── page.tsx                   # Main onboarding page component
│   └── globals.css                # Global styles (tailwind or other styles)
├── components/
│   ├── OnboardingContext.tsx      # Context provider for state management
│   ├── Navigation.tsx             # Navigation components (Next, Previous, Skip buttons)
│   ├── ProgressIndicator.tsx      # Progress indicator for onboarding steps
│   ├── WelcomeScreen.tsx          # Welcome screen for the onboarding
│   ├── RoleSelection.tsx          # Role selection step in onboarding
│   ├── FeatureShowcase.tsx        # Step for showcasing app features
│   ├── InteractiveDemo.tsx        # Step for interactive demo
│   ├── FeedbackForm.tsx           # Feedback collection step
│   ├── HelpCenter.tsx             # Help center modal and FAQ section
│   └── Animation.tsx              # Animation setup (Framer Motion)
├── hooks/
│   └── useOnboarding.ts           # Custom hook to manage the onboarding flow logic
├── utils/
│   ├── localStorage.ts            # Helper functions to manage localStorage
│   └── helpers.ts                 # General helper functions (validation, etc.)
├── styles/
│   ├── tailwind.config.js         # TailwindCSS configuration
│   └── globals.css                # Global CSS file (import Tailwind here)
├── public/
│   └── assets/
│       └── logo.svg               # Example app logo or branding assets
├── .gitignore
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Dependencies and scripts
└── README.md                      # Project documentation

