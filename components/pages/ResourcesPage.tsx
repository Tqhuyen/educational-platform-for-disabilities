'use client'

import { LanguageProvider } from '@/lib/language-context'
import { PageWrapper } from '@/components/PageWrapper'
import { Navigation } from '@/components/Navigation'
import { useLanguage } from '@/lib/language-context'
import { BookOpen, Video, Users, Download } from 'lucide-react'

function ResourcesContent() {
  const { language } = useLanguage()

  const resources = [
    {
      titleEn: 'Learning Guides',
      titleVi: 'Hướng Dẫn Học Tập',
      descEn: 'Comprehensive guides for learners',
      descVi: 'Hướng dẫn toàn diện cho những người học',
      icon: BookOpen,
      color: 'bg-[#e0f2fe]',
      textColor: 'text-[#0284c7]',
    },
    {
      titleEn: 'Video Tutorials',
      titleVi: 'Hướng Dẫn Video',
      descEn: 'Step-by-step video lessons',
      descVi: 'Các bài học video từng bước',
      icon: Video,
      color: 'bg-[#fed7aa]',
      textColor: 'text-[#f97316]',
    },
    {
      titleEn: 'Parent Resources',
      titleVi: 'Tài Nguyên Cho Phụ Huynh',
      descEn: 'Support materials for parents',
      descVi: 'Tài liệu hỗ trợ cho phụ huynh',
      icon: Users,
      color: 'bg-[#d1fae5]',
      textColor: 'text-[#10b981]',
    },
    {
      titleEn: 'Downloadable Files',
      titleVi: 'Tệp Có Thể Tải Xuống',
      descEn: 'Practice materials and worksheets',
      descVi: 'Tài liệu và bảng tính thực hành',
      icon: Download,
      color: 'bg-neutral-100',
      textColor: 'text-neutral-700',
    },
  ]

  return (
    <div className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          {language === 'vi' ? 'Tài Nguyên' : 'Resources'}
        </h1>
        <p className="text-xl text-neutral-600">
          {language === 'vi'
            ? 'Truy cập các tài nguyên học tập và hướng dẫn'
            : 'Access learning resources and guides'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {resources.map((resource, index) => {
          const Icon = resource.icon
          return (
            <div
              key={index}
              className={`${resource.color} rounded-3xl p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-2 cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className={`${resource.textColor} text-2xl font-bold mb-2`}>
                    {language === 'vi' ? resource.titleVi : resource.titleEn}
                  </h3>
                  <p className="text-neutral-700">
                    {language === 'vi' ? resource.descVi : resource.descEn}
                  </p>
                </div>
                <div className={`${resource.color} rounded-full p-4 bg-white/60`}>
                  <Icon className={`${resource.textColor} w-6 h-6`} />
                </div>
              </div>
              <button className="btn-primary w-full">
                {language === 'vi' ? 'Xem Thêm' : 'Learn More'}
              </button>
            </div>
          )
        })}
      </div>

      {/* Featured Resources */}
      <div className="card">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">
          {language === 'vi' ? 'Tài Nguyên Nổi Bật' : 'Featured Resources'}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Parent Guide 2024', 'Speech Tips', 'Practice Worksheet'].map((item, i) => (
            <div key={i} className="border-2 border-neutral-200 rounded-xl p-6 hover:border-[#0284c7] transition-colors">
              <h3 className="font-bold text-neutral-900 mb-2">{item}</h3>
              <p className="text-sm text-neutral-600 mb-4">
                {language === 'vi' ? 'Tài liệu hữu ích' : 'Helpful resource'}
              </p>
              <button className="text-[#0284c7] font-semibold hover:underline">
                {language === 'vi' ? 'Tải Xuống' : 'Download'} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ResourcesPageComponent() {
  return (
    <LanguageProvider>
      <PageWrapper>
        <Navigation />
        <main className="bg-white min-h-screen">
          <ResourcesContent />
        </main>
      </PageWrapper>
    </LanguageProvider>
  )
}
