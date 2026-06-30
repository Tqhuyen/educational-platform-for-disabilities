'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { BookOpen, Gamepad2, TrendingUp, Star, Users, Zap, Target, Volume2, ArrowRight, Sparkles, Heart, Award } from 'lucide-react'

export function HomePage() {
  const { language } = useLanguage()

  const impactStats = [
    {
      number: '50,000+',
      label: language === 'vi' ? 'Trẻ Em Đã Hỗ Trợ' : 'Children Supported',
      description: language === 'vi' ? 'Trên 15 quốc gia' : 'Across 15 countries',
      color: 'from-sky-400 to-sky-600',
    },
    {
      number: '92%',
      label: language === 'vi' ? 'Tỷ Lệ Cải Thiện' : 'Improvement Rate',
      description: language === 'vi' ? 'Sau 3 tháng học' : 'Within 3 months',
      color: 'from-emerald-400 to-emerald-600',
    },
    {
      number: '2M+',
      label: language === 'vi' ? 'Phút Học Tập' : 'Learning Minutes',
      description: language === 'vi' ? 'Cộng đồng tích cực' : 'Active community',
      color: 'from-amber-400 to-amber-600',
    },
    {
      number: '15+',
      label: language === 'vi' ? 'Loại Bài Tập' : 'Exercise Types',
      description: language === 'vi' ? 'Dựa trên khoa học' : 'Science-backed',
      color: 'from-rose-400 to-rose-600',
    },
  ]

  const features = [
    {
      icon: BookOpen,
      titleEn: 'AI-Powered Learning',
      titleVi: 'Học Tập Thông Minh',
      descEn: 'Adaptive lessons that evolve with each child\'s unique needs',
      descVi: 'Bài học thích ứng phát triển theo nhu cầu riêng',
    },
    {
      icon: Gamepad2,
      titleEn: 'Gamified Practice',
      titleVi: 'Thực Hành Chơi Chơi',
      descEn: 'Transform therapy into engaging games children love',
      descVi: 'Biến liệu pháp thành trò chơi hấp dẫn',
    },
    {
      icon: TrendingUp,
      titleEn: 'Real-time Analytics',
      titleVi: 'Phân Tích Trực Tiếp',
      descEn: 'Parents and therapists track progress instantly',
      descVi: 'Phụ huynh theo dõi tiến độ tức thì',
    },
    {
      icon: Volume2,
      titleEn: 'Speech Recognition',
      titleVi: 'Nhận Dạng Giọng Nói',
      descEn: 'Smart feedback on pronunciation and articulation',
      descVi: 'Phản hồi thông minh về phát âm',
    },
  ]

  const successStories = [
    {
      name: language === 'vi' ? 'Minh' : 'Minh',
      age: '7 tuổi',
      story: language === 'vi' ? 'Từ bị tự kỷ đến tự tin nói chuyện' : 'From autism to confident speaker',
      improvement: '87% improvement',
    },
    {
      name: language === 'vi' ? 'Linh' : 'Linh',
      age: '5 tuổi',
      story: language === 'vi' ? 'Vượt qua rối loạn phát âm' : 'Overcame speech disorder',
      improvement: '94% on target',
    },
    {
      name: language === 'vi' ? 'Hoàng' : 'Hoang',
      age: '8 tuổi',
      story: language === 'vi' ? 'Phát triển kỹ năng xã hội' : 'Developed social skills',
      improvement: '91% milestone reached',
    },
  ]

  const coreFeatures = [
    {
      icon: Sparkles,
      titleEn: 'Personalized Paths',
      titleVi: 'Con Đường Riêng',
    },
    {
      icon: Heart,
      titleEn: 'Inclusive Design',
      titleVi: 'Thiết Kế Toàn Diện',
    },
    {
      icon: Award,
      titleEn: 'Certified Methods',
      titleVi: 'Phương Pháp Chứng Thực',
    },
  ]

  const quickLinks = [
    {
      href: '/learning-center',
      titleEn: 'Interactive Lessons',
      titleVi: 'Bài Học Tương Tác',
      colorBg: 'from-sky-400 to-sky-600',
      icon: BookOpen,
    },
    {
      href: '/games',
      titleEn: 'Fun Games',
      titleVi: 'Trò Chơi Vui',
      colorBg: 'from-emerald-400 to-emerald-600',
      icon: Gamepad2,
    },
    {
      href: '/sign-language',
      titleEn: 'Sign Language',
      titleVi: 'Ký Hiệu Giao Tiếp',
      colorBg: 'from-amber-400 to-amber-600',
      icon: Volume2,
    },
    {
      href: '/progress',
      titleEn: 'Track Progress',
      titleVi: 'Theo Dõi Tiến Độ',
      colorBg: 'from-rose-400 to-rose-600',
      icon: TrendingUp,
    },
  ]

  return (
    <div className="bg-white overflow-hidden">
      {/* Stunning Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-emerald-50 -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-sky-200 to-transparent rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-200 to-transparent rounded-full blur-3xl opacity-30 -z-10" />
        
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    {language === 'vi' ? 'Giáo dục có ảnh hưởng' : 'Impact Education'}
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  {language === 'vi' 
                    ? 'Mở Khóa Khả Năng Giao Tiếp' 
                    : 'Unlock Communication Potential'}
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                {language === 'vi'
                  ? 'Nền tảng học tập AI được thiết kế cho trẻ em có rối loạn phát âm. Đã giúp đỡ 50,000+ trẻ em ở 15 quốc gia.'
                  : 'AI-powered learning platform for children with speech disabilities. Helping 50,000+ children across 15 countries.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/learning-center" className="btn-primary group flex items-center justify-center gap-2">
                  {language === 'vi' ? 'Bắt Đầu Ngay' : 'Start Now'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="btn-secondary">
                  {language === 'vi' ? 'Xem Demo' : 'Watch Demo'}
                </button>
              </div>
            </div>

            {/* Right side visual - Impact cards */}
            <div className="grid grid-cols-2 gap-4">
              {impactStats.map((stat, index) => (
                <div key={index} className={`bg-gradient-to-br ${stat.color} rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform`}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm opacity-90">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'vi' ? 'Những Câu Chuyện Thành Công' : 'Success Stories'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'vi' ? 'Thay đổi cuộc sống thực tế từ các gia đình Việt Nam' : 'Real transformations from Vietnamese families'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-emerald-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {story.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-lg text-gray-900">{story.name}</div>
                    <div className="text-sm text-gray-600">{story.age}</div>
                  </div>
                </div>
                <p className="text-gray-700 font-semibold mb-3">{story.story}</p>
                <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg text-sm font-bold inline-block">
                  {story.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            {language === 'vi' ? 'Tính Năng Ưu Việt' : 'Why We&apos;re Different'}
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-sky-50 to-emerald-50 rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {language === 'vi' ? feature.titleVi : feature.titleEn}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'vi' ? feature.descVi : feature.descEn}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            {language === 'vi' ? 'Khám Phá Ngay' : 'Explore Now'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`bg-gradient-to-br ${link.colorBg} rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
                >
                  <Icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-2">
                    {language === 'vi' ? link.titleVi : link.titleEn}
                  </h3>
                  <p className="text-sm opacity-90">
                    {language === 'vi' ? 'Bắt đầu ngay' : 'Get started'}
                  </p>
                  <ArrowRight className="w-5 h-5 mt-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA - Investment/Partnership */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-r from-slate-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            {language === 'vi' 
              ? 'Hãy Cùng Thay Đổi Cuộc Sống' 
              : 'Join Us in Changing Lives'}
          </h2>
          <p className="text-xl opacity-90">
            {language === 'vi'
              ? 'Nếu bạn là nhà đầu tư, nhà giáo dục hoặc là cha mẹ, hãy tham gia cộng đồng của chúng tôi.'
              : 'Whether you\'re an investor, educator, or parent, join our growing community.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/learning-center" className="bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
              {language === 'vi' ? 'Thử Miễn Phí' : 'Try For Free'}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all">
              {language === 'vi' ? 'Liên Hệ Đối Tác' : 'Partner With Us'}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-lg mb-4">
                {language === 'vi' ? 'Về Chúng Tôi' : 'About'}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {language === 'vi'
                  ? 'Nền tảng giáo dục AI hàng đầu cho trẻ em có rối loạn phát âm'
                  : 'Leading AI education platform for children with speech disabilities'}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">
                {language === 'vi' ? 'Tính Năng' : 'Features'}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Lessons</a></li>
                <li><a href="#" className="hover:text-white transition">Games</a></li>
                <li><a href="#" className="hover:text-white transition">Progress</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">
                {language === 'vi' ? 'Hỗ Trợ' : 'Support'}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">
                {language === 'vi' ? 'Pháp Lý' : 'Legal'}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>
              {language === 'vi'
                ? '© 2024 Nền Tảng Giáo Dục Việt Nam. Bảo lưu mọi quyền.'
                : '© 2024 Vietnamese Education Platform. All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
