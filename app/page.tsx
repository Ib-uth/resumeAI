'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">ResumeAI</h1>
        <p className="text-xl text-gray-600 mb-8">Revolutionary AI-Powered Resume Builder</p>
        <a 
          href="/builder" 
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
        >
          Start Building
        </a>
      </div>
    </div>
  );
}
