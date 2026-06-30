'use client'

import { LanguageProvider } from '@/lib/language-context'
import { PageWrapper } from '@/components/PageWrapper'
import { Navigation } from '@/components/Navigation'
import { useLanguage } from '@/lib/language-context'
import { Hand, Eye, Zap, Users } from 'lucide-react'

function SignLanguageContent() {
  const { language } = useLanguage()

  const topics = [
    {
      titleEn: 'Basic Signs',
      titleVi: 'Ký Hiệu Cơ Bản',
      descEn: 'Learn fundamental sign language',
      descVi: 'Học ký hiệu cơ bản',
      icon: Hand,
      color: 'bg-[#e0f2fe]',
      textColor: 'text-[#0284c7]',
      videos: 12,
    },
    {
      titleEn: 'Everyday Signs',
      titleVi: 'Ký Hiệu Hàng Ngày',
      descEn: 'Signs for daily communication',
      descVi: 'Ký hiệu cho giao tiếp hàng ngày',
      icon: Eye,
      color: 'bg-[#fed7aa]',
      textColor: 'text-[#f97316]',
      videos: 18,
    },
    {
      titleEn: 'Emotions',
      titleVi: 'Cảm Xúc',
      descEn: 'Express feelings through signs',
      descVi: 'Biểu lộ cảm xúc thông qua ký hiệu',
      icon: Zap,
      color: 'bg-[#d1fae5]',
      textColor: 'text-[#10b981]',
      videos: 10,
    },
    {
      titleEn: 'Social Interaction',
      titleVi: 'Tương Tác Xã Hội',
      descEn: 'Sign conversations and dialogue',
      descVi: 'Các cuộc trò chuyện ký hiệu',
      icon: Users,
      color: 'bg-neutral-100',
      textColor: 'text-neutral-700',
      videos: 15,
    },
  ]

  return (
    <div className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          {language === 'vi' ? 'Ngôn Ngữ Ký Hiệu' : 'Sign Language'}
        </h1>
        <p className="text-xl text-neutral-600">
          {language === 'vi'
            ? 'Học các ký hiệu cơ bản và giao tiếp bằng ký hiệu'
            : 'Learn basic signs and communicate in sign language'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {topics.map((topic, index) => {
          const Icon = topic.icon
          return (
            <div
              key={index}
              className={`${topic.color} rounded-3xl p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-2`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className={`${topic.textColor} text-2xl font-bold mb-2`}>
                    {language === 'vi' ? topic.titleVi : topic.titleEn}
                  </h3>
                  <p className="text-neutral-700 mb-4">
                    {language === 'vi' ? topic.descVi : topic.descEn}
                  </p>
                  <p className="text-sm font-semibold text-neutral-600">
                    {topic.videos} {language === 'vi' ? 'video' : 'videos'}
                  </p>
                </div>
                <div className={`${topic.color} rounded-full p-4 bg-white/60`}>
                  <Icon className={`${topic.textColor} w-6 h-6`} />
                </div>
              </div>
              <button className="btn-primary w-full">
                {language === 'vi' ? 'Xem Video' : 'Watch Videos'}
              </button>
            </div>
          )
        })}
      </div>

      {/* Practice Section */}
      <div className="card-accent">
        <h2 className="text-2xl font-bold text-[#0284c7] mb-6">
          {language === 'vi' ? 'Thực Hành Bây Giờ' : 'Practice Now'}
        </h2>
        <p className="text-neutral-700 mb-8 leading-relaxed">
          {language === 'vi'
            ? 'Sử dụng camera của bạn để thực hành các ký hiệu và nhận phản hồi realtime. Hệ thống nhận dạng cử chỉ sẽ giúp bạn cải thiện kỹ năng.'
            : 'Use your camera to practice signs and get real-time feedback. Our gesture recognition system will help you improve.'}
        </p>
        <button className="btn-primary">
          {language === 'vi' ? 'Bắt Đầu Thực Hành' : 'Start Practicing'}
        </button>
      </div>
    </div>
  )
}

export function SignLanguagePageComponent() {
  return (
    <LanguageProvider>
      <PageWrapper>
        <Navigation />
        <main className="bg-white min-h-screen">
          <SignLanguageContent />
        </main>
      </PageWrapper>
    </LanguageProvider>
  )
}
