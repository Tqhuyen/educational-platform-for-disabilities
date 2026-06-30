'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import { Play } from 'lucide-react'

export function LearningCenterContent() {
  const { language } = useLanguage()
  const [selectedLevel, setSelectedLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner')

  const levels = [
    { id: 'beginner', labelEn: 'Beginner', labelVi: 'Người Mới Bắt Đầu' },
    { id: 'intermediate', labelEn: 'Intermediate', labelVi: 'Trung Bình' },
    { id: 'advanced', labelEn: 'Advanced', labelVi: 'Nâng Cao' },
  ]

  const lessons = {
    beginner: [
      { id: 1, titleEn: 'Basic Greetings', titleVi: 'Lời Chào Cơ Bản', duration: '15 min', level: 'easy' },
      { id: 2, titleEn: 'Numbers 1-10', titleVi: 'Số 1-10', duration: '12 min', level: 'easy' },
      { id: 3, titleEn: 'Days of the Week', titleVi: 'Các Ngày Trong Tuần', duration: '18 min', level: 'easy' },
      { id: 4, titleEn: 'Common Objects', titleVi: 'Vật Dụng Thông Thường', duration: '20 min', level: 'easy' },
      { id: 5, titleEn: 'Family Members', titleVi: 'Thành Viên Gia Đình', duration: '17 min', level: 'easy' },
      { id: 6, titleEn: 'Colors', titleVi: 'Màu Sắc', duration: '14 min', level: 'easy' },
    ],
    intermediate: [
      { id: 7, titleEn: 'Simple Sentences', titleVi: 'Câu Đơn Giản', duration: '22 min', level: 'medium' },
      { id: 8, titleEn: 'Describing Objects', titleVi: 'Mô Tả Vật Dụng', duration: '25 min', level: 'medium' },
      { id: 9, titleEn: 'Daily Routines', titleVi: 'Sinh Hoạt Hàng Ngày', duration: '28 min', level: 'medium' },
      { id: 10, titleEn: 'Food & Drinks', titleVi: 'Thức Ăn & Thức Uống', duration: '20 min', level: 'medium' },
      { id: 11, titleEn: 'Emotions', titleVi: 'Cảm Xúc', duration: '23 min', level: 'medium' },
      { id: 12, titleEn: 'Question Formation', titleVi: 'Xây Dựng Câu Hỏi', duration: '26 min', level: 'medium' },
    ],
    advanced: [
      { id: 13, titleEn: 'Complex Sentences', titleVi: 'Câu Phức Tạp', duration: '35 min', level: 'hard' },
      { id: 14, titleEn: 'Conversation Practice', titleVi: 'Thực Hành Hội Thoại', duration: '40 min', level: 'hard' },
      { id: 15, titleEn: 'Storytelling', titleVi: 'Kể Chuyện', duration: '38 min', level: 'hard' },
      { id: 16, titleEn: 'Idioms & Expressions', titleVi: 'Thành Ngữ & Cách Nói', duration: '32 min', level: 'hard' },
      { id: 17, titleEn: 'Public Speaking', titleVi: 'Nói Công Khai', duration: '45 min', level: 'hard' },
      { id: 18, titleEn: 'Debate Topics', titleVi: 'Chủ Đề Tranh Luận', duration: '40 min', level: 'hard' },
    ],
  }

  const currentLessons = lessons[selectedLevel as keyof typeof lessons]

  return (
    <div className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          {language === 'vi' ? 'Trung Tâm Học Tập' : 'Learning Center'}
        </h1>
        <p className="text-xl text-neutral-600">
          {language === 'vi'
            ? 'Chọn mức độ của bạn và bắt đầu học tập'
            : 'Select your level and start learning'}
        </p>
      </div>

      {/* Level Selection */}
      <div className="mb-12 flex flex-wrap gap-4">
        {levels.map((level) => (
          <button
            key={level.id}
            onClick={() => setSelectedLevel(level.id as typeof selectedLevel)}
            className={`px-6 py-3 rounded-xl font-bold text-lg transition-all duration-200 ${
              selectedLevel === level.id
                ? 'bg-[#0284c7] text-white shadow-lg'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {language === 'vi' ? level.labelVi : level.labelEn}
          </button>
        ))}
      </div>

      {/* Lessons Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentLessons.map((lesson) => (
          <div
            key={lesson.id}
            className="card group hover:shadow-lg transition-all duration-200 hover:-translate-y-2"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {language === 'vi' ? lesson.titleVi : lesson.titleEn}
                </h3>
                <div className="flex items-center gap-2 text-neutral-600">
                  <span className="text-sm font-semibold">{lesson.duration}</span>
                  <span className="text-sm">•</span>
                  <span
                    className={`text-sm font-semibold px-3 py-1 rounded-full ${
                      lesson.level === 'easy'
                        ? 'bg-[#d1fae5] text-[#10b981]'
                        : lesson.level === 'medium'
                          ? 'bg-[#fed7aa] text-[#f97316]'
                          : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {lesson.level === 'easy' ? (language === 'vi' ? 'Dễ' : 'Easy') : lesson.level === 'medium' ? (language === 'vi' ? 'Trung Bình' : 'Medium') : language === 'vi' ? 'Khó' : 'Hard'}
                  </span>
                </div>
              </div>
              <div className="bg-[#e0f2fe] rounded-full p-3">
                <Play className="w-5 h-5 text-[#0284c7]" />
              </div>
            </div>

            <div className="mb-4 flex items-center gap-2">
              <div className="flex-1 bg-neutral-200 rounded-full h-2">
                <div className="bg-[#0284c7] h-2 rounded-full w-0" />
              </div>
              <span className="text-sm text-neutral-600">0%</span>
            </div>

            <button className="btn-primary w-full text-center">
              {language === 'vi' ? 'Bắt Đầu' : 'Start'}
            </button>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="card-accent text-center py-8">
          <div className="text-4xl font-bold text-[#0284c7] mb-2">{currentLessons.length}</div>
          <p className="text-neutral-700 font-semibold">
            {language === 'vi' ? 'Bài Học Khả Dụng' : 'Lessons Available'}
          </p>
        </div>
        <div className="card-success text-center py-8">
          <div className="text-4xl font-bold text-[#10b981] mb-2">0</div>
          <p className="text-neutral-700 font-semibold">
            {language === 'vi' ? 'Bài Học Hoàn Thành' : 'Lessons Completed'}
          </p>
        </div>
        <div className="card-warning text-center py-8">
          <div className="text-4xl font-bold text-[#f97316] mb-2">0%</div>
          <p className="text-neutral-700 font-semibold">
            {language === 'vi' ? 'Tiến Độ Tổng Thể' : 'Overall Progress'}
          </p>
        </div>
      </div>
    </div>
  )
}
