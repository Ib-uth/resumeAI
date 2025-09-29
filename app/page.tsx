'use client';

import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
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
              {/* Builder Interface Screenshot */}
              <div className="bg-white p-6 rounded-lg shadow-2xl">
                <div className="h-80 bg-gray-50 rounded-lg overflow-hidden">
                  <div className="h-full bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-xs text-gray-500">ResumeAI Builder</div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex space-x-2">
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-xs font-medium">Details</div>
                        <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs">Templates</div>
                        <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs">Export</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="h-8 bg-gray-200 rounded"></div>
                          <div className="h-8 bg-gray-200 rounded"></div>
                          <div className="h-8 bg-gray-200 rounded"></div>
                        </div>
                        <div className="bg-gray-100 rounded p-3">
                          <div className="text-xs text-gray-600 mb-2">Live Preview</div>
                          <div className="space-y-2">
                            <div className="h-4 bg-gray-300 rounded"></div>
                            <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Template Gallery Screenshot */}
              <div className="bg-white p-6 rounded-lg shadow-2xl">
                <div className="h-80 bg-gray-50 rounded-lg overflow-hidden">
                  <div className="h-full bg-white border border-gray-200 rounded-lg p-4">
                    <div className="text-center mb-4">
                      <div className="text-sm font-medium text-gray-800">Template Gallery</div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-100 rounded p-3">
                        <div className="h-16 bg-white rounded mb-2"></div>
                        <div className="text-xs text-gray-600">Modern</div>
                      </div>
                      <div className="bg-gray-100 rounded p-3">
                        <div className="h-16 bg-white rounded mb-2"></div>
                        <div className="text-xs text-gray-600">Creative</div>
                      </div>
                      <div className="bg-gray-100 rounded p-3">
                        <div className="h-16 bg-white rounded mb-2"></div>
                        <div className="text-xs text-gray-600">Executive</div>
                      </div>
                      <div className="bg-gray-100 rounded p-3">
                        <div className="h-16 bg-white rounded mb-2"></div>
                        <div className="text-xs text-gray-600">Minimal</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              {/* AI Enhancement Screenshot */}
              <div className="bg-white p-6 rounded-lg shadow-2xl">
                <div className="h-80 bg-gray-50 rounded-lg overflow-hidden">
                  <div className="h-full bg-white border border-gray-200 rounded-lg p-4">
                    <div className="text-center mb-4">
                      <div className="text-sm font-medium text-gray-800">AI Enhancement</div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-blue-50 border border-blue-200 rounded p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-xs font-medium text-blue-800">Original Text</div>
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="text-xs text-gray-600">Software Developer with 3 years experience</div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-xs font-medium text-green-800">AI Enhanced</div>
                          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="text-xs text-gray-600">Senior Software Developer with 3+ years of expertise in full-stack development, specializing in modern web technologies and cloud architecture</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Export Options Screenshot */}
              <div className="bg-white p-6 rounded-lg shadow-2xl">
                <div className="h-80 bg-gray-50 rounded-lg overflow-hidden">
                  <div className="h-full bg-white border border-gray-200 rounded-lg p-4">
                    <div className="text-center mb-4">
                      <div className="text-sm font-medium text-gray-800">Export Options</div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-red-50 border border-red-200 rounded p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">PDF</span>
                          </div>
                          <div>
                            <div className="text-xs font-medium text-gray-800">PDF Format</div>
                            <div className="text-xs text-gray-600">High-quality, print-ready</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">DOC</span>
                          </div>
                          <div>
                            <div className="text-xs font-medium text-gray-800">Word Document</div>
                            <div className="text-xs text-gray-600">Editable format</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-500 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">HTML</span>
                          </div>
                          <div>
                            <div className="text-xs font-medium text-gray-800">Web Format</div>
                            <div className="text-xs text-gray-600">Online sharing</div>
                          </div>
                        </div>
                      </div>
                    </div>
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
