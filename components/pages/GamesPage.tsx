'use client'

import { LanguageProvider } from '@/lib/language-context'
import { PageWrapper } from '@/components/PageWrapper'
import { Navigation } from '@/components/Navigation'
import { useLanguage } from '@/lib/language-context'
import { Gamepad2, Volume2, Target, Zap } from 'lucide-react'

function GamesContent() {
  const { language } = useLanguage()

  const games = [
    {
      titleEn: 'Matching Game',
      titleVi: 'Trò Chơi Ghép Cặp',
      descEn: 'Match words with their pictures or sounds',
      descVi: 'Ghép các từ với hình ảnh hoặc âm thanh của chúng',
      icon: Target,
      color: 'bg-[#e0f2fe]',
      textColor: 'text-[#0284c7]',
    },
    {
      titleEn: 'Quiz Game',
      titleVi: 'Trò Chơi Trắc Nghiệm',
      descEn: 'Answer questions to test your knowledge',
      descVi: 'Trả lời câu hỏi để kiểm tra kiến thức của bạn',
      icon: Zap,
      color: 'bg-[#fed7aa]',
      textColor: 'text-[#f97316]',
    },
    {
      titleEn: 'Speaking Practice',
      titleVi: 'Thực Hành Nói',
      descEn: 'Record and practice your pronunciation',
      descVi: 'Ghi âm và thực hành phát âm của bạn',
      icon: Volume2,
      color: 'bg-[#d1fae5]',
      textColor: 'text-[#10b981]',
    },
    {
      titleEn: 'Memory Game',
      titleVi: 'Trò Chơi Trí Nhớ',
      descEn: 'Find matching pairs and improve memory',
      descVi: 'Tìm các cặp ghép và cải thiện trí nhớ',
      icon: Gamepad2,
      color: 'bg-neutral-100',
      textColor: 'text-neutral-700',
    },
  ]

  return (
    <div className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          {language === 'vi' ? 'Trò Chơi Vui Nhộn' : 'Fun Games'}
        </h1>
        <p className="text-xl text-neutral-600">
          {language === 'vi'
            ? 'Thực hành kỹ năng giao tiếp thông qua các trò chơi tương tác'
            : 'Practice communication skills through interactive games'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {games.map((game, index) => {
          const Icon = game.icon
          return (
            <div
              key={index}
              className={`${game.color} rounded-3xl p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-2 cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className={`${game.textColor} text-2xl font-bold mb-2`}>
                    {language === 'vi' ? game.titleVi : game.titleEn}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {language === 'vi' ? game.descVi : game.descEn}
                  </p>
                </div>
                <div className={`${game.color} rounded-full p-4 bg-white/60`}>
                  <Icon className={`${game.textColor} w-6 h-6`} />
                </div>
              </div>
              <button className="btn-primary w-full">
                {language === 'vi' ? 'Chơi Ngay' : 'Play Now'}
              </button>
            </div>
          )
        })}
      </div>

      {/* Leaderboard Preview */}
      <div className="mt-16 card">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">
          {language === 'vi' ? 'Bảng Xếp Hạng Hàng Tuần' : 'Weekly Leaderboard'}
        </h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl">
              <div className="flex items-center gap-4">
                <span className="font-bold text-lg text-[#0284c7]">#{i}</span>
                <div>
                  <p className="font-semibold text-neutral-900">Student {i}</p>
                  <p className="text-sm text-neutral-600">{1000 - i * 100} points</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#10b981]">{i === 1 ? '🏆' : i === 2 ? '🥈' : '🥉'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function GamesPageComponent() {
  return (
    <LanguageProvider>
      <PageWrapper>
        <Navigation />
        <main className="bg-white min-h-screen">
          <GamesContent />
        </main>
      </PageWrapper>
    </LanguageProvider>
  )
}
