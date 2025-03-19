# Connect & Reflect AI: Social Media & Wellbeing

A modern web application focused on promoting healthy social media habits and digital wellbeing through interactive features and AI-powered support.

## Features

- Interactive Reflection Quiz
- Curated Resource Hub
- Research Insights
- AI-Powered Chat Support
- Responsive Design
- Dark Mode Interface

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Google AI Studio API key

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd connect
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the project root and add your Google AI Studio API key:
```
REACT_APP_GOOGLE_AI_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── contexts/       # React context providers
  ├── data/          # Static data and content
  ├── pages/         # Page components
  ├── services/      # API and service functions
  ├── types/         # TypeScript type definitions
  └── App.tsx        # Main application component
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Google AI Studio (Gemini Pro)
- React Router

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
