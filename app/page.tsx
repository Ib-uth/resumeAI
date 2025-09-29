'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-6">
              Resume<span className="text-gray-400">AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              The most revolutionary resume builder. Drag, drop, and let AI enhance your career story.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href="/builder" 
              className="group relative bg-white text-black px-8 py-4 rounded-none font-medium tracking-wide uppercase transition-all duration-300 hover:bg-gray-100 border border-white hover:border-gray-300"
            >
              <span className="relative z-10">Start Building</span>
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start Building</span>
            </a>
            <button className="text-gray-400 hover:text-white transition-colors duration-300 border border-gray-600 px-8 py-4 rounded-none font-medium tracking-wide uppercase">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Revolutionary Features</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Built for the modern professional who demands excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4">AI Enhancement</h3>
              <p className="text-gray-400 leading-relaxed">
                Let artificial intelligence optimize your content for ATS systems and human recruiters.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4">Drag & Drop</h3>
              <p className="text-gray-400 leading-relaxed">
                Intuitive drag-and-drop interface that makes building your resume effortless and enjoyable.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4">Premium Templates</h3>
              <p className="text-gray-400 leading-relaxed">
                Curated collection of award-winning templates designed by industry professionals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6">See It In Action</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience the future of resume building
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-2xl">
                <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-500">Builder Interface Preview</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-2xl">
                <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-500">Template Gallery Preview</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-2xl">
                <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-500">AI Enhancement Preview</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-2xl">
                <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
      <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-500">Export Options Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Ready to Build Your <span className="text-gray-400">Dream Resume</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of professionals who have already transformed their careers with ResumeAI.
          </p>
        <a 
          href="/builder" 
            className="inline-block bg-white text-black px-12 py-4 rounded-none font-medium tracking-wide uppercase transition-all duration-300 hover:bg-gray-100 border border-white hover:border-gray-300"
        >
            Get Started Now
        </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 ResumeAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
