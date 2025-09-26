import ScrollStack, { ScrollStackItem } from "../custom/ScrollStack";

export default function WhyDhs() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-whale via-blue to-blue-whale">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-elf-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#b22f26] to-[#e47a5a] rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center pt-12 md:pt-20 pb-8 md:pb-4 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
          Why Choose <span className="ramp-text">DHS</span>?
        </h2>
        <p className="text-lg md:text-xl text-mercury max-w-3xl mx-auto leading-relaxed">
          Discover the advantages that make DHS the preferred choice for digital asset trading and financial innovation
        </p>
      </div>

      {/* ScrollStack Container - Proper stacking with container scroll */}
      <div className="relative z-10 h-[80vh] md:h-[90vh]">
        {/* Scroll indicator */}
        <div className="absolute top-4 right-4 z-20 text-white/60 text-sm hidden md:flex items-center gap-2">
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span>Scroll to explore</span>
        </div>
        
        <ScrollStack 
          useWindowScroll={false}
          itemStackDistance={25}
          baseScale={0.88}
          itemScale={0.05}
          stackPosition="25%"
          scaleEndPosition="15%"
          itemDistance={150}
          className="h-full"
        >
          <ScrollStackItem itemClassName="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm border border-white/20 shadow-2xl">
            <div className="flex flex-col h-full justify-center px-2 md:px-0">
              <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-elf-green to-elf-green/80 rounded-2xl flex items-center justify-center mb-4 md:mb-0 md:mr-6 mx-auto md:mx-0">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-blue-whale text-center md:text-left">Advanced Security</h3>
              </div>
              <p className="text-sm md:text-lg text-blue-whale/80 leading-relaxed mb-4 text-center md:text-left">
                State-of-the-art security protocols protect your digital assets with multi-layer encryption, 
                cold storage solutions, and real-time threat monitoring.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-2 md:px-3 py-1 bg-elf-green/10 text-elf-green text-xs md:text-sm rounded-full">Multi-Signature</span>
                <span className="px-2 md:px-3 py-1 bg-elf-green/10 text-elf-green text-xs md:text-sm rounded-full">Cold Storage</span>
                <span className="px-2 md:px-3 py-1 bg-elf-green/10 text-elf-green text-xs md:text-sm rounded-full">24/7 Monitoring</span>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-gradient-to-br from-blue-whale/95 to-blue/90 backdrop-blur-sm border border-white/10 shadow-2xl">
            <div className="flex flex-col h-full justify-center px-2 md:px-0">
              <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#b22f26] to-[#e47a5a] rounded-2xl flex items-center justify-center mb-4 md:mb-0 md:mr-6 mx-auto md:mx-0">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-white text-center md:text-left">Lightning Fast Trading</h3>
              </div>
              <p className="text-sm md:text-lg text-mercury leading-relaxed mb-4 text-center md:text-left">
                Execute trades in milliseconds with our high-performance matching engine. 
                Experience zero-latency trading with institutional-grade infrastructure.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-2 md:px-3 py-1 bg-white/10 text-mercury text-xs md:text-sm rounded-full">Sub-millisecond Execution</span>
                <span className="px-2 md:px-3 py-1 bg-white/10 text-mercury text-xs md:text-sm rounded-full">99.9% Uptime</span>
                <span className="px-2 md:px-3 py-1 bg-white/10 text-mercury text-xs md:text-sm rounded-full">Global Infrastructure</span>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-gradient-to-br from-elf-green/95 to-elf-green/80 backdrop-blur-sm border border-white/20 shadow-2xl">
            <div className="flex flex-col h-full justify-center px-2 md:px-0">
              <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 md:mb-0 md:mr-6 mx-auto md:mx-0">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-white text-center md:text-left">Competitive Fees</h3>
              </div>
              <p className="text-sm md:text-lg text-white/90 leading-relaxed mb-4 text-center md:text-left">
                Enjoy some of the lowest trading fees in the industry. Our transparent fee structure 
                ensures you keep more of your profits with no hidden charges.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-2 md:px-3 py-1 bg-white/10 text-white text-xs md:text-sm rounded-full">0.1% Trading Fee</span>
                <span className="px-2 md:px-3 py-1 bg-white/10 text-white text-xs md:text-sm rounded-full">No Hidden Charges</span>
                <span className="px-2 md:px-3 py-1 bg-white/10 text-white text-xs md:text-sm rounded-full">Volume Discounts</span>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-white backdrop-blur-sm border border-white/30 shadow-2xl">
            <div className="flex flex-col h-full justify-center px-2 md:px-0">
              <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-whale to-blue rounded-2xl flex items-center justify-center mb-4 md:mb-0 md:mr-6 mx-auto md:mx-0">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-blue-whale text-center md:text-left">24/7 Support</h3>
              </div>
              <p className="text-sm md:text-lg text-blue-whale/80 leading-relaxed mb-4 text-center md:text-left">
                Our dedicated support team is available around the clock to assist you. 
                Get expert help whenever you need it through multiple channels.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-2 md:px-3 py-1 bg-blue-whale/10 text-blue-whale text-xs md:text-sm rounded-full">Live Chat</span>
                <span className="px-2 md:px-3 py-1 bg-blue-whale/10 text-blue-whale text-xs md:text-sm rounded-full">Email Support</span>
                <span className="px-2 md:px-3 py-1 bg-blue-whale/10 text-blue-whale text-xs md:text-sm rounded-full">Phone Support</span>
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </section>
  );
}