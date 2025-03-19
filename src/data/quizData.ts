import { QuizQuestion, QuizResult, CategoryResult, QuestionCategory } from '../types/quiz';

const standardScale = [
  { value: 1, label: "Never" },
  { value: 2, label: "Rarely" },
  { value: 3, label: "Sometimes" },
  { value: 4, label: "Often" },
  { value: 5, label: "Very Often" }
];

export const quizQuestions: QuizQuestion[] = [
  // Section A: Social Media Engagement Patterns
  {
    id: 1,
    question: "On average, how many minutes per day do you actively spend engaging (scrolling, posting, commenting) on social media platforms?",
    options: [
      { value: 1, label: "Less than 15 minutes" },
      { value: 2, label: "15-30 minutes" },
      { value: 3, label: "30-60 minutes" },
      { value: 4, label: "1-2 hours" },
      { value: 5, label: "More than 2 hours" }
    ],
    category: 'engagement',
    section: 'A'
  },
  {
    id: 2,
    question: "How often do you find yourself mindlessly scrolling through social media without a specific purpose?",
    options: standardScale,
    category: 'engagement',
    section: 'A'
  },
  {
    id: 3,
    question: "How often do you check social media first thing in the morning?",
    options: standardScale,
    category: 'engagement',
    section: 'A'
  },
  {
    id: 4,
    question: "How often do you check social media right before going to bed?",
    options: standardScale,
    category: 'engagement',
    section: 'A'
  },
  {
    id: 5,
    question: "How many different social media platforms do you actively use on a regular basis?",
    options: [
      { value: 1, label: "1 platform" },
      { value: 2, label: "2 platforms" },
      { value: 3, label: "3 platforms" },
      { value: 4, label: "4 platforms" },
      { value: 5, label: "5+ platforms" }
    ],
    category: 'engagement',
    section: 'A'
  },
  // Section B: Emotional Reactions & Mood
  {
    id: 6,
    question: "How often do you feel content or satisfied after using social media?",
    options: standardScale,
    category: 'emotional',
    section: 'B'
  },
  {
    id: 7,
    question: "How often do you feel anxious or on edge after using social media?",
    options: standardScale,
    category: 'emotional',
    section: 'B'
  },
  {
    id: 8,
    question: "How often do you feel overwhelmed by the amount of information or content on social media?",
    options: standardScale,
    category: 'emotional',
    section: 'B'
  },
  // Section C: Social Comparison & Self-Perception
  {
    id: 9,
    question: "How often do you compare your appearance to others on social media?",
    options: standardScale,
    category: 'comparison',
    section: 'C'
  },
  {
    id: 10,
    question: "How often do you compare your achievements to others on social media?",
    options: standardScale,
    category: 'comparison',
    section: 'C'
  },
  {
    id: 11,
    question: "How often do you feel pressure to present a 'perfect' or idealized version of yourself on social media?",
    options: standardScale,
    category: 'comparison',
    section: 'C'
  },
  // Section D: Cognitive Function & Attention
  {
    id: 12,
    question: "How often do you have difficulty concentrating on tasks after using social media?",
    options: standardScale,
    category: 'cognitive',
    section: 'D'
  },
  {
    id: 13,
    question: "How often do you find yourself easily distracted by social media notifications?",
    options: standardScale,
    category: 'cognitive',
    section: 'D'
  },
  {
    id: 14,
    question: "How often do you feel mentally fatigued or drained after using social media?",
    options: standardScale,
    category: 'cognitive',
    section: 'D'
  },
  // Section E: Real-Life Relationships & Social Connection
  {
    id: 15,
    question: "How often do you feel more connected to friends and family because of social media?",
    options: standardScale,
    category: 'relationships',
    section: 'E'
  },
  {
    id: 16,
    question: "How often do you feel disconnected from the people around you because you are focused on social media?",
    options: standardScale,
    category: 'relationships',
    section: 'E'
  },
  {
    id: 17,
    question: "How often do you feel lonely or isolated despite being active on social media?",
    options: standardScale,
    category: 'relationships',
    section: 'E'
  },
  // Section F: Coping Mechanisms & Avoidance
  {
    id: 18,
    question: "How often do you use social media to avoid dealing with difficult emotions or problems?",
    options: standardScale,
    category: 'coping',
    section: 'F'
  },
  {
    id: 19,
    question: "How often do you use social media to distract yourself from stress or anxiety?",
    options: standardScale,
    category: 'coping',
    section: 'F'
  },
  {
    id: 20,
    question: "How often do you find yourself using social media as a way to procrastinate on important tasks?",
    options: standardScale,
    category: 'coping',
    section: 'F'
  },
  // Section G: Values Alignment & Authenticity
  {
    id: 21,
    question: "How often do you feel that your social media activity reflects your true self and values?",
    options: standardScale,
    category: 'values',
    section: 'G'
  },
  {
    id: 22,
    question: "How often do you feel pressure to conform to certain trends or opinions on social media?",
    options: standardScale,
    category: 'values',
    section: 'G'
  },
  {
    id: 23,
    question: "How often do you feel authentic and genuine when using social media?",
    options: standardScale,
    category: 'values',
    section: 'G'
  }
];

const getLevelFromScore = (percentage: number): 'minimal' | 'low' | 'moderate' | 'high' | 'significant' => {
  if (percentage <= 20) return 'minimal';
  if (percentage <= 40) return 'low';
  if (percentage <= 60) return 'moderate';
  if (percentage <= 80) return 'high';
  return 'significant';
};

const getCategoryFeedback = (category: QuestionCategory, level: string): string => {
  const feedbackMap: Record<QuestionCategory, Record<string, string>> = {
    engagement: {
      minimal: "Your social media engagement is very limited and well-controlled.",
      low: "You maintain a healthy balance with social media usage.",
      moderate: "Your social media engagement is moderate but could benefit from more mindful usage.",
      high: "Your social media usage is notably high and may be affecting your daily life.",
      significant: "Your social media engagement is excessive and needs immediate attention."
    },
    emotional: {
      minimal: "Social media has minimal emotional impact on you.",
      low: "You maintain good emotional balance when using social media.",
      moderate: "Social media has a moderate effect on your emotions.",
      high: "Social media significantly affects your emotional wellbeing.",
      significant: "Social media has a strong negative impact on your emotional state."
    },
    comparison: {
      minimal: "You rarely compare yourself to others on social media.",
      low: "You maintain a healthy perspective when viewing others' content.",
      moderate: "You sometimes engage in social comparison on social media.",
      high: "You frequently compare yourself to others on social media.",
      significant: "Social comparison is significantly affecting your self-perception."
    },
    cognitive: {
      minimal: "Social media has minimal impact on your cognitive function.",
      low: "You maintain good focus despite social media use.",
      moderate: "Social media sometimes affects your concentration.",
      high: "Social media often disrupts your cognitive performance.",
      significant: "Social media severely impacts your ability to focus."
    },
    relationships: {
      minimal: "You maintain strong real-life connections alongside social media.",
      low: "Social media generally enhances your relationships.",
      moderate: "Your relationships are somewhat affected by social media.",
      high: "Social media may be interfering with your real-life relationships.",
      significant: "Social media is significantly impacting your personal connections."
    },
    coping: {
      minimal: "You rarely use social media as a coping mechanism.",
      low: "You have healthy coping strategies beyond social media.",
      moderate: "You sometimes use social media to cope with difficulties.",
      high: "You often rely on social media for emotional coping.",
      significant: "You heavily depend on social media for emotional regulation."
    },
    values: {
      minimal: "Your social media use strongly aligns with your values.",
      low: "You generally maintain authenticity on social media.",
      moderate: "You sometimes feel pressure to conform on social media.",
      high: "You often feel disconnected from your values on social media.",
      significant: "Your social media presence rarely reflects your true self."
    }
  };

  return feedbackMap[category][level];
};

const getCategoryRecommendations = (category: QuestionCategory, level: string): string[] => {
  const recommendationsMap: Record<QuestionCategory, Record<string, string[]>> = {
    engagement: {
      minimal: ["Continue your mindful approach to social media use"],
      low: ["Set specific times for checking social media", "Use app timers to maintain boundaries"],
      moderate: ["Implement regular digital detox periods", "Create tech-free zones in your home"],
      high: ["Set strict daily time limits", "Delete social media apps from your phone", "Use website blockers"],
      significant: ["Consider a complete social media break", "Seek professional help for digital addiction", "Replace social media with offline activities"]
    },
    emotional: {
      minimal: ["Continue monitoring your emotional responses to social media"],
      low: ["Practice gratitude journaling", "Maintain awareness of emotional triggers"],
      moderate: ["Curate your feed to focus on positive content", "Take regular breaks when feeling overwhelmed"],
      high: ["Unfollow accounts that trigger negative emotions", "Practice mindfulness meditation", "Seek support from friends"],
      significant: ["Consider counseling or therapy", "Take an extended break from social media", "Focus on real-world connections"]
    },
    comparison: {
      minimal: ["Continue your healthy perspective on social media content"],
      low: ["Remember that social media shows curated highlights", "Practice self-appreciation"],
      moderate: ["Create a list of your personal achievements", "Focus on your unique journey", "Limit exposure to triggering content"],
      high: ["Unfollow accounts that trigger comparison", "Practice daily self-compassion", "Focus on personal growth"],
      significant: ["Seek professional help for self-esteem", "Take a break from social media", "Join support groups"]
    },
    cognitive: {
      minimal: ["Maintain your current boundaries with social media"],
      low: ["Use app timers to track usage", "Take regular breaks"],
      moderate: ["Create designated focus time", "Turn off notifications", "Use website blockers"],
      high: ["Implement strict focus sessions", "Delete social media apps temporarily", "Practice mindfulness"],
      significant: ["Seek professional help for attention issues", "Consider a digital detox", "Establish new work habits"]
    },
    relationships: {
      minimal: ["Continue balancing online and offline connections"],
      low: ["Schedule regular in-person meetups", "Use social media to enhance real connections"],
      moderate: ["Set phone-free social times", "Prioritize face-to-face interactions", "Call instead of messaging"],
      high: ["Create tech-free social events", "Join offline groups or clubs", "Practice active listening"],
      significant: ["Seek relationship counseling", "Take a social media break", "Focus on rebuilding in-person connections"]
    },
    coping: {
      minimal: ["Continue using healthy coping mechanisms"],
      low: ["Develop additional stress management techniques", "Practice mindfulness"],
      moderate: ["Learn new coping strategies", "Try exercise or meditation", "Journal about emotions"],
      high: ["Seek professional support", "Develop a stress management plan", "Join support groups"],
      significant: ["Start therapy or counseling", "Learn emotional regulation techniques", "Build a support network"]
    },
    values: {
      minimal: ["Continue expressing your authentic self online"],
      low: ["Regularly reflect on your online presence", "Share meaningful content"],
      moderate: ["Review your social media connections", "Define your personal values", "Be selective about what you share"],
      high: ["Curate your online presence", "Take breaks to reconnect with yourself", "Join authentic communities"],
      significant: ["Consider professional guidance", "Rebuild your online presence", "Focus on authentic self-expression"]
    }
  };

  return recommendationsMap[category][level];
};

const getGeneralRecommendations = (level: 'minimal' | 'low' | 'moderate' | 'high' | 'significant'): string[] => {
  const recommendations = {
    minimal: [
      "Continue your balanced approach to social media",
      "Share your positive social media habits with others",
      "Monitor any changes in your usage patterns",
      "Stay informed about digital wellness best practices"
    ],
    low: [
      "Set specific goals for maintaining healthy social media habits",
      "Create a weekly digital wellness check-in routine",
      "Explore new ways to enhance your online-offline balance",
      "Share positive content that aligns with your values"
    ],
    moderate: [
      "Implement a structured digital wellness plan",
      "Set specific times for social media use",
      "Practice mindfulness when using social media",
      "Consider using app timers and focus modes",
      "Regular check-ins with yourself about your social media use"
    ],
    high: [
      "Consider a digital detox period",
      "Seek support from friends or family",
      "Create strict boundaries around social media use",
      "Focus on rebuilding offline connections",
      "Consider discussing your results with a mental health professional"
    ],
    significant: [
      "Strongly consider professional support or counseling",
      "Implement immediate changes to reduce social media use",
      "Develop alternative coping mechanisms",
      "Build a support network for accountability",
      "Focus on mental health and wellbeing resources"
    ]
  };

  return recommendations[level];
};

export const getQuizResults = (answers: Record<number, number>): QuizResult => {
  console.log('Processing answers:', answers);
  
  // Group questions by category
  const questionsByCategory = quizQuestions.reduce((acc, q) => {
    if (!acc[q.category]) {
      acc[q.category] = [];
    }
    acc[q.category].push(q);
    return acc;
  }, {} as Record<QuestionCategory, QuizQuestion[]>);

  // Calculate results for each category
  const categoryResults: CategoryResult[] = Object.entries(questionsByCategory).map(([category, questions]) => {
    const categoryAnswers = questions
      .filter(q => answers[q.id] !== undefined)
      .map(q => answers[q.id]);
    
    const score = categoryAnswers.reduce((sum, value) => sum + value, 0);
    const totalPossible = questions.length * 5; // Max score per question is 5
    const percentage = (score / totalPossible) * 100;
    const level = getLevelFromScore(percentage);

    console.log(`Category ${category}:`, {
      score,
      totalPossible,
      percentage,
      level,
      answersCount: categoryAnswers.length,
      expectedCount: questions.length
    });

    return {
      category: category as QuestionCategory,
      score,
      totalPossible,
      percentage,
      level,
      feedback: getCategoryFeedback(category as QuestionCategory, level),
      recommendations: getCategoryRecommendations(category as QuestionCategory, level)
    };
  });

  // Calculate overall results
  const totalScore = categoryResults.reduce((sum, cat) => sum + cat.score, 0);
  const maxPossible = categoryResults.reduce((sum, cat) => sum + cat.totalPossible, 0);
  const overallPercentage = (totalScore / maxPossible) * 100;
  const overallLevel = getLevelFromScore(overallPercentage);

  console.log('Overall results:', {
    totalScore,
    maxPossible,
    overallPercentage,
    overallLevel
  });

  return {
    totalScore,
    maxPossible,
    overallLevel,
    categoryResults,
    generalRecommendations: getGeneralRecommendations(overallLevel)
  };
}; 