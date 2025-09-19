// app/fees/components/FeesSwiper.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FeeCard from './FeeCard';


const feeData = [
  {
    title: 'Trading Fees',
    items: [
      'Spot Trading:',
      'Maker Fee: 0.1%',
      'Taker Fee: 0.1%',
      '✅ No hidden mark-ups or spread manipulation.',
    ],
  },
  {
    title: 'Deposit Fees',
    items: [
      'AED Bank Transfer: 0%',
      'Card Payments: up to 2%',
      'Crypto Deposits: 0% (network fees may apply)',
    ],
  },
  {
    title: 'Withdrawal Fees',
    items: [
      'AED Bank Transfer: 10 AED flat',
      'Crypto Withdrawals: Network fee only',
    ],
  },
  {
    title: 'Other Fees',
    items: ['❌ Inactivity Fee', '❌ Maintenance Fee', '❌ KYC Fee'],
  },
  {
    title: 'Key Principles',
    items: ['🔍 Transparency', '⚖️ Fairness', '🧭 Accessibility'],
  },
];

export default function FeesSwiper() {
  return (
    <section className="py-12 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Fee Structure Overview</h2>
          <p className="text-mercury/70 max-w-2xl mx-auto">
            Explore our transparent fee structure across all services. No surprises, no hidden charges.
          </p>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button className="fees-swiper-button-prev group bg-white/10 hover:bg-elf-green/20 border border-white/20 hover:border-elf-green/40 rounded-full p-3 transition-all duration-300">
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-elf-green" />
          </button>
          <button className="fees-swiper-button-next group bg-white/10 hover:bg-elf-green/20 border border-white/20 hover:border-elf-green/40 rounded-full p-3 transition-all duration-300">
            <ChevronRight className="w-6 h-6 text-white group-hover:text-elf-green" />
          </button>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1.1}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: '.fees-swiper-button-next',
              prevEl: '.fees-swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-white/30 !w-3 !h-3',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-elf-green',
            }}
            breakpoints={{
              640: { 
                slidesPerView: 1.3,
                centeredSlides: true,
              },
              768: { 
                slidesPerView: 2,
                centeredSlides: false,
              },
              1024: { 
                slidesPerView: 3,
                centeredSlides: false,
              },
              1280: { 
                slidesPerView: 4,
                centeredSlides: false,
              },
            }}
            className="fees-swiper"
          >
            {feeData.map((fee, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="h-full">
                  <FeeCard title={fee.title} items={fee.items} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Auto-play Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8 text-sm text-mercury/60">
          <div className="w-2 h-2 bg-elf-green rounded-full animate-pulse"></div>
          <span>Auto-playing every 4 seconds</span>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .fees-swiper .swiper-pagination {
          position: relative !important;
          margin-top: 2rem !important;
        }
        
        .fees-swiper .swiper-pagination-bullet {
          margin: 0 4px !important;
          transition: all 0.3s ease !important;
        }
        
        .fees-swiper .swiper-pagination-bullet-active {
          transform: scale(1.2) !important;
        }
        
        .fees-swiper .swiper-slide {
          height: auto !important;
          display: flex !important;
        }
        
        .fees-swiper .swiper-slide > div {
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>
    </section>
  );
}
