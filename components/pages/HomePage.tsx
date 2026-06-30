'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { translate } from '@/lib/i18n'
import { Star, BookOpen, Gamepad2, TrendingUp, ArrowRight } from 'lucide-react'

export function HomePage() {
  const { language } = useLanguage()

  const features = [
    {
      icon: BookOpen,
      titleEn: 'Interactive Lessons',
      titleVi: 'Bài Học Tương Tác',
      descEn: 'Learn through engaging, step-by-step lessons designed for your needs',
      descVi: 'Học tập thông qua các bài học hấp dẫn, được thiết kế đặc biệt cho bạn',
    },
    {
      icon: Gamepad2,
      titleEn: 'Fun Games',
      titleVi: 'Trò Chơi Vui Nhộn',
      descEn: 'Practice your skills with educational games that are fun and rewarding',
      descVi: 'Thực hành kỹ năng với các trò chơi vừa vui vừa bổ ích',
    },
    {
      icon: TrendingUp,
      titleEn: 'Track Progress',
      titleVi: 'Theo Dõi Tiến Độ',
      descEn: 'Watch your improvements with detailed progress tracking',
      descVi: 'Xem những tiến bộ của bạn qua biểu đồ chi tiết',
    },
    {
      icon: Star,
      titleEn: 'Earn Rewards',
      titleVi: 'Nhận Phần Thưởng',
      descEn: 'Complete lessons and games to earn badges and achievements',
      descVi: 'Hoàn thành bài học để kiếm huy hiệu và thành tích',
    },
  ]

  const quickLinks = [
    {
      href: '/learning-center',
      titleEn: 'Learning Center',
      titleVi: 'Trung Tâm Học Tập',
      colorBg: 'bg-sky-100',
      colorText: 'text-sky-600',
      colorBorder: 'border-sky-200',
    },
    {
      href: '/games',
      titleEn: 'Play Games',
      titleVi: 'Chơi Trò Chơi',
      colorBg: 'bg-emerald-100',
      colorText: 'text-emerald-600',
      colorBorder: 'border-emerald-200',
    },
    {
      href: '/sign-language',
      titleEn: 'Sign Language',
      titleVi: 'Ngôn Ngữ Ký Hiệu',
      colorBg: 'bg-amber-100',
      colorText: 'text-amber-600',
      colorBorder: 'border-amber-200',
    },
    {
      href: '/resources',
      titleEn: 'Resources',
      titleVi: 'Tài Nguyên',
      colorBg: 'bg-slate-100',
      colorText: 'text-slate-600',
      colorBorder: 'border-slate-200',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-12 md:pt-20 pb-16 md:pb-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
                {language === 'vi'
                  ? 'Chào Mừng Đến Với Hành Trình Học Tập Của Bạn'
                  : 'Welcome to Your Learning Journey'}
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
                {language === 'vi'
                  ? 'Một nền tảng học tập được thiết kế đặc biệt để giúp phát triển kỹ năng giao tiếp của bạn'
                  : 'A learning platform designed specifically to help you develop your communication skills'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/learning-center" className="btn-primary">
                <span className="flex items-center justify-center gap-2">
                  {translate('exploreNow', language)}
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <button className="btn-secondary">
                {translate('learningJourney', language)}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="card">
                <div className="text-3xl md:text-4xl font-bold text-sky-600">1000+</div>
                <p className="text-slate-600 font-semibold mt-2">
                  {language === 'vi' ? 'Bài Học' : 'Lessons'}
                </p>
              </div>
              <div className="card">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600">50K+</div>
                <p className="text-slate-600 font-semibold mt-2">
                  {language === 'vi' ? 'Người Học' : 'Learners'}
                </p>
              </div>
              <div className="card">
                <div className="text-3xl md:text-4xl font-bold text-amber-600">15+</div>
                <p className="text-slate-600 font-semibold mt-2">
                  {language === 'vi' ? 'Trò Chơi' : 'Games'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="card-accent h-64 flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="w-16 h-16 text-sky-600 mx-auto mb-4" />
                  <p className="font-semibold text-sky-600">
                    {language === 'vi' ? 'Học Tập' : 'Learn'}
                  </p>
                </div>
              </div>
              <div className="card-success h-64 flex items-center justify-center">
                <div className="text-center">
                  <Gamepad2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                  <p className="font-semibold text-emerald-600">
                    {language === 'vi' ? 'Chơi' : 'Play'}
                  </p>
                </div>
              </div>
              <div className="card-warning h-64 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                  <p className="font-semibold text-amber-600">
                    {language === 'vi' ? 'Tiến Độ' : 'Progress'}
                  </p>
                </div>
              </div>
              <div className="card h-64 flex items-center justify-center border-2 border-slate-300">
                <div className="text-center">
                  <Star className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                  <p className="font-semibold text-slate-700">
                    {language === 'vi' ? 'Phần Thưởng' : 'Rewards'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'vi' ? 'Tính Năng Chính' : 'Key Features'}
            </h2>
            <p className="text-xl text-slate-600">
              {language === 'vi'
                ? 'Mọi công cụ bạn cần để thành công'
                : 'Everything you need to succeed'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="card hover:shadow-lg">
                  <div className="bg-gradient-to-br from-sky-100 to-emerald-100 rounded-2xl p-6 mb-6 flex items-center justify-center h-20">
                    <Icon className="w-10 h-10 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {language === 'vi' ? feature.titleVi : feature.titleEn}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {language === 'vi' ? feature.descVi : feature.descEn}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            {language === 'vi' ? 'Bắt Đầu Ngay' : 'Get Started Now'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${link.colorBg} ${link.colorBorder} border-2 rounded-3xl p-8 md:p-12 hover:shadow-lg transition-all duration-200 hover:-translate-y-2 group`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`${link.colorText} text-2xl md:text-3xl font-bold mb-2`}>
                      {language === 'vi' ? link.titleVi : link.titleEn}
                    </h3>
                    <p className={`${link.colorText} opacity-75 font-semibold`}>
                      {language === 'vi'
                        ? 'Tập trung vào sự phát triển của bạn'
                        : 'Focus on your development'}
                    </p>
                  </div>
                  <ArrowRight className={`${link.colorText} w-8 h-8 group-hover:translate-x-2 transition-transform`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-[#0284c7] to-[#10b981]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'vi'
              ? 'Sẵn Sàng Bắt Đầu Hành Trình Của Bạn?'
              : 'Ready to Start Your Journey?'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'vi'
              ? 'Tham gia hàng ngàn học sinh khác đang phát triển kỹ năng giao tiếp của họ'
              : 'Join thousands of students developing their communication skills'}
          </p>
          <Link href="/learning-center" className="inline-block bg-white text-[#0284c7] font-bold px-8 py-4 rounded-2xl hover:shadow-lg transition-all duration-200 hover:scale-105">
            {translate('start', language)}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-lg mb-4">
                {language === 'vi' ? 'Về Chúng Tôi' : 'About Us'}
              </h4>
              <p className="text-neutral-400 leading-relaxed">
                {language === 'vi'
                  ? 'Nền tảng học tập cho sinh viên Việt Nam'
                  : 'A learning platform for Vietnamese students'}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">
                {language === 'vi' ? 'Liên Kết' : 'Links'}
              </h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">Lessons</a></li>
                <li><a href="#" className="hover:text-white transition">Games</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">
                {language === 'vi' ? 'Hỗ Trợ' : 'Support'}
              </h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition">Help</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">
                {language === 'vi' ? 'Pháp Lý' : 'Legal'}
              </h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400">
            <p>
              {language === 'vi'
                ? '© 2024 Nền Tảng Học Tập Việt Nam. Bảo lưu mọi quyền.'
                : '© 2024 Vietnamese Learning Platform. All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
