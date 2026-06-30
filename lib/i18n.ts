export type Language = 'vi' | 'en'

export const translations = {
  vi: {
    // Navigation
    home: 'Trang Chủ',
    learningCenter: 'Trung Tâm Học Tập',
    signLanguage: 'Ngôn Ngữ Ký Hiệu',
    games: 'Trò Chơi',
    progress: 'Tiến Độ',
    resources: 'Tài Nguyên',
    settings: 'Cài Đặt',
    aboutUs: 'Về Chúng Tôi',

    // Common
    welcome: 'Chào Mừng',
    continue: 'Tiếp Tục',
    start: 'Bắt Đầu',
    next: 'Tiếp Theo',
    back: 'Quay Lại',
    skip: 'Bỏ Qua',
    finish: 'Hoàn Thành',
    loading: 'Đang Tải...',
    error: 'Lỗi',
    success: 'Thành Công',
    tryAgain: 'Thử Lại',

    // Home Page
    homeTitle: 'Chào Mừng Đến Với Nền Tảng Học Tập',
    homeSubtitle: 'Phát Triển Kỹ Năng Giao Tiếp Của Bạn Thông Qua Các Bài Học Tương Tác',
    exploreNow: 'Khám Phá Ngay',
    learningJourney: 'Hành Trình Học Tập Của Bạn',
    lessonsCompleted: 'Bài Học Hoàn Thành',
    currentStreak: 'Chuỗi Hiện Tại',
    days: 'Ngày',

    // Learning Center
    selectLevel: 'Chọn Mức Độ',
    beginner: 'Người Mới Bắt Đầu',
    intermediate: 'Trung Bình',
    advanced: 'Nâng Cao',
    lesson: 'Bài Học',
    vocabulary: 'Từ Vựng',
    phrases: 'Cách Nói',
    sentences: 'Câu Văn',
    practice: 'Thực Hành',
    completed: 'Hoàn Thành',
    inProgress: 'Đang Thực Hiện',

    // Games
    games: 'Trò Chơi',
    matchingGame: 'Trò Chơi Ghép Cặp',
    quizGame: 'Trò Chơi Trắc Nghiệm',
    speakingGame: 'Trò Chơi Nói',
    listeningGame: 'Trò Chơi Lắng Nghe',
    score: 'Điểm Số',
    level: 'Mức Độ',
    difficulty: 'Độ Khó',

    // Progress
    yourProgress: 'Tiến Độ Của Bạn',
    thisWeek: 'Tuần Này',
    thisMonth: 'Tháng Này',
    allTime: 'Tất Cả Thời Gian',
    newVocabulary: 'Từ Vựng Mới',
    articulation: 'Phát Âm',
    comprehension: 'Hiểu Biết',

    // Resources
    resources: 'Tài Nguyên',
    videosGuides: 'Video & Hướng Dẫn',
    downloadMaterials: 'Tải Xuống Tài Liệu',
    tips: 'Mẹo',
    parentGuide: 'Hướng Dẫn Cho Phụ Huynh',
    teacherResources: 'Tài Nguyên Cho Giáo Viên',

    // Settings
    language: 'Ngôn Ngữ',
    accessibility: 'Khả Năng Truy Cập',
    largeText: 'Chữ Lớn',
    highContrast: 'Độ Tương Phản Cao',
    soundEffects: 'Hiệu Ứng Âm Thanh',
    notifications: 'Thông Báo',
    profile: 'Hồ Sơ',
    logout: 'Đăng Xuất',
  },
  en: {
    // Navigation
    home: 'Home',
    learningCenter: 'Learning Center',
    signLanguage: 'Sign Language',
    games: 'Games',
    progress: 'Progress',
    resources: 'Resources',
    settings: 'Settings',
    aboutUs: 'About Us',

    // Common
    welcome: 'Welcome',
    continue: 'Continue',
    start: 'Start',
    next: 'Next',
    back: 'Back',
    skip: 'Skip',
    finish: 'Finish',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    tryAgain: 'Try Again',

    // Home Page
    homeTitle: 'Welcome to Your Learning Platform',
    homeSubtitle: 'Develop Your Communication Skills Through Interactive Lessons',
    exploreNow: 'Explore Now',
    learningJourney: 'Your Learning Journey',
    lessonsCompleted: 'Lessons Completed',
    currentStreak: 'Current Streak',
    days: 'Days',

    // Learning Center
    selectLevel: 'Select Your Level',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    lesson: 'Lesson',
    vocabulary: 'Vocabulary',
    phrases: 'Phrases',
    sentences: 'Sentences',
    practice: 'Practice',
    completed: 'Completed',
    inProgress: 'In Progress',

    // Games
    games: 'Games',
    matchingGame: 'Matching Game',
    quizGame: 'Quiz Game',
    speakingGame: 'Speaking Game',
    listeningGame: 'Listening Game',
    score: 'Score',
    level: 'Level',
    difficulty: 'Difficulty',

    // Progress
    yourProgress: 'Your Progress',
    thisWeek: 'This Week',
    thisMonth: 'This Month',
    allTime: 'All Time',
    newVocabulary: 'New Vocabulary',
    articulation: 'Articulation',
    comprehension: 'Comprehension',

    // Resources
    resources: 'Resources',
    videosGuides: 'Videos & Guides',
    downloadMaterials: 'Download Materials',
    tips: 'Tips',
    parentGuide: 'Parent Guide',
    teacherResources: 'Teacher Resources',

    // Settings
    language: 'Language',
    accessibility: 'Accessibility',
    largeText: 'Large Text',
    highContrast: 'High Contrast',
    soundEffects: 'Sound Effects',
    notifications: 'Notifications',
    profile: 'Profile',
    logout: 'Logout',
  },
} as const

export function translate(key: keyof typeof translations.en, language: Language): string {
  return translations[language][key as keyof typeof translations[Language]] || key
}

export function useTranslation(language: Language) {
  return {
    t: (key: keyof typeof translations.en) => translate(key, language),
    language,
  }
}
