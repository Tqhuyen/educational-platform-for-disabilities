'use client'

import { LanguageProvider } from '@/lib/language-context'
import { PageWrapper } from '@/components/PageWrapper'
import { Navigation } from '@/components/Navigation'
import { useLanguage } from '@/lib/language-context'
import { TrendingUp, Award, Calendar, Target } from 'lucide-react'

function ProgressContent() {
  const { language } = useLanguage()

  const stats = [
    { label: language === 'vi' ? 'Bài Học Hoàn Thành' : 'Lessons Completed', value: 12, icon: Target, color: 'text-[#0284c7]' },
    { label: language === 'vi' ? 'Chuỗi Hiện Tại' : 'Current Streak', value: '5 Days', icon: Calendar, color: 'text-[#10b981]' },
    { label: language === 'vi' ? 'Tổng Điểm' : 'Total Points', value: 2450, icon: Award, color: 'text-[#f97316]' },
    { label: language === 'vi' ? 'Tiến Độ Trung Bình' : 'Avg Progress', value: '85%', icon: TrendingUp, color: 'text-[#06b6d4]' },
  ]

  return (
    <div className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          {language === 'vi' ? 'Tiến Độ Của Bạn' : 'Your Progress'}
        </h1>
        <p className="text-xl text-neutral-600">
          {language === 'vi'
            ? 'Theo dõi sự phát triển của bạn và đạt được mục tiêu'
            : 'Track your development and reach your goals'}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="card text-center">
              <div className="flex justify-center mb-4">
                <Icon className={`${stat.color} w-8 h-8`} />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">{stat.value}</div>
              <p className="text-neutral-600 font-semibold">{stat.label}</p>
            </div>
          )
        })}
      </div>

      {/* Progress by Category */}
      <div className="card mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-8">
          {language === 'vi' ? 'Tiến Độ Theo Danh Mục' : 'Progress by Category'}
        </h2>
        <div className="space-y-8">
          {[
            { name: language === 'vi' ? 'Từ Vựng' : 'Vocabulary', progress: 75 },
            { name: language === 'vi' ? 'Phát Âm' : 'Pronunciation', progress: 60 },
            { name: language === 'vi' ? 'Nghe Hiểu' : 'Listening', progress: 85 },
            { name: language === 'vi' ? 'Nói Chuyện' : 'Speaking', progress: 70 },
          ].map((cat, i) => (
            <div key={i}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-neutral-900">{cat.name}</span>
                <span className="text-lg font-bold text-[#0284c7]">{cat.progress}%</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-4">
                <div
                  className="bg-gradient-to-r from-[#0284c7] to-[#10b981] h-4 rounded-full transition-all duration-500"
                  style={{ width: `${cat.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Activity */}
      <div className="card">
        <h2 className="text-2xl font-bold text-neutral-900 mb-8">
          {language === 'vi' ? 'Hoạt Động Hàng Tuần' : 'Weekly Activity'}
        </h2>
        <div className="grid grid-cols-7 gap-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
            <div key={i} className="text-center">
              <p className="text-sm font-semibold text-neutral-600 mb-2">{day}</p>
              <div className={`aspect-square rounded-lg ${i < 5 ? 'bg-[#10b981]' : 'bg-neutral-100'}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProgressPageComponent() {
  return (
    <LanguageProvider>
      <PageWrapper>
        <Navigation />
        <main className="bg-white min-h-screen">
          <ProgressContent />
        </main>
      </PageWrapper>
    </LanguageProvider>
  )
}
