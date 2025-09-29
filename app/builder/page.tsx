'use client';

import { useState } from 'react';
import Link from 'next/link';

// Resume Data Types
interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: string;
  degree: string;
  school: string;
  year: string;
}

interface Skill {
  id: string;
  name: string;
  level: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
}

interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    website: string;
  };
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
}

export default function BuilderPage() {
  const [activeTab, setActiveTab] = useState('details');
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      website: ''
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
    projects: []
  });

  const tabs = [
    { 
      id: 'details', 
      label: 'Details', 
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      id: 'templates', 
      label: 'Templates', 
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      id: 'export', 
      label: 'Export', 
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-light">
                Resume<span className="text-gray-400">AI</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                Save Draft
              </button>
              <button className="bg-white text-black px-6 py-2 rounded-none font-medium tracking-wide uppercase hover:bg-gray-100 transition-colors">
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-900 p-1 rounded-lg w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-white text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Form */}
          <div className="space-y-8">
            {activeTab === 'details' && (
              <DetailsTab resumeData={resumeData} setResumeData={setResumeData} />
            )}
            {activeTab === 'templates' && (
              <TemplatesTab selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
            )}
            {activeTab === 'export' && (
              <ExportTab />
            )}
          </div>

          {/* Right Panel - Preview */}
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <div className="bg-white text-black p-8 rounded-lg shadow-2xl">
              <h3 className="text-xl font-semibold mb-6 text-center">Live Preview</h3>
              <ResumePreview data={resumeData} template={selectedTemplate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Details Tab Component
function DetailsTab({ resumeData, setResumeData }: { resumeData: ResumeData, setResumeData: (data: ResumeData) => void }) {
  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value
      }
    });
  };

  const updateSummary = (value: string) => {
    setResumeData({
      ...resumeData,
      summary: value
    });
  };

  const enhanceWithAI = async (type: 'summary' | 'experience' | 'achievement', content: string) => {
    try {
      const response = await fetch('/api/ai/enhance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          type
        }),
      });

      if (response.ok) {
        const { enhancedContent } = await response.json();
        if (type === 'summary') {
          updateSummary(enhancedContent);
        }
        // Handle other types as needed
      }
    } catch (error) {
      console.error('AI enhancement failed:', error);
    }
  };

  return (
    <div className="space-y-8">
      {/* Personal Information */}
      <div className="bg-gray-900 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
            value={resumeData.personalInfo.name}
            onChange={(e) => updatePersonalInfo('name', e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
            value={resumeData.personalInfo.email}
            onChange={(e) => updatePersonalInfo('email', e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                />
                <input 
                  type="tel" 
                  placeholder="Phone" 
            value={resumeData.personalInfo.phone}
            onChange={(e) => updatePersonalInfo('phone', e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
          />
          <input
            type="text"
            placeholder="Location"
            value={resumeData.personalInfo.location}
            onChange={(e) => updatePersonalInfo('location', e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                />
              </div>
            </div>
            
      {/* Professional Summary */}
      <div className="bg-gray-900 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Professional Summary
          <button 
            onClick={() => enhanceWithAI('summary', resumeData.summary)}
            className="ml-auto text-sm bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded transition-colors"
          >
            AI Enhance
          </button>
        </h3>
        <textarea
          placeholder="Write a compelling professional summary..."
          rows={4}
          value={resumeData.summary}
          onChange={(e) => updateSummary(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
        />
      </div>

      {/* Experience */}
      <div className="bg-gray-900 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
          </svg>
          Work Experience
        </h3>
        <div className="space-y-4">
          <div className="border border-gray-700 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Job Title"
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="Company"
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Start Date"
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="End Date"
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
              />
            </div>
            <textarea
              placeholder="Describe your achievements and responsibilities..."
              rows={3}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
            />
            <div className="flex justify-end mt-4">
              <button className="text-sm bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded transition-colors">
                AI Enhance
              </button>
            </div>
          </div>
          <button className="w-full border-2 border-dashed border-gray-600 rounded-lg py-4 text-gray-400 hover:text-white hover:border-gray-500 transition-colors">
            + Add Experience
          </button>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-gray-900 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Skills
          <button className="ml-auto text-sm bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded transition-colors">
            AI Suggest
          </button>
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">JavaScript</span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">React</span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Node.js</span>
          <button className="border border-gray-600 rounded-full px-3 py-1 text-sm text-gray-400 hover:text-white hover:border-gray-500 transition-colors">
            + Add Skill
          </button>
        </div>
      </div>
    </div>
  );
}

// Templates Tab Component
function TemplatesTab({ selectedTemplate, setSelectedTemplate }: { selectedTemplate: string, setSelectedTemplate: (template: string) => void }) {
  const templates = [
    { id: 'modern', name: 'Modern Professional', category: 'Professional', preview: 'Modern clean design' },
    { id: 'creative', name: 'Creative Portfolio', category: 'Creative', preview: 'Bold and artistic' },
    { id: 'executive', name: 'Executive Suite', category: 'Executive', preview: 'Luxury and prestige' },
    { id: 'minimal', name: 'Minimalist', category: 'Minimal', preview: 'Clean and simple' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-light mb-4">Choose Your Template</h3>
        <p className="text-gray-400">Select from our curated collection of award-winning designs</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((template) => (
          <div 
            key={template.id} 
            className={`rounded-lg overflow-hidden transition-all cursor-pointer group border-2 ${
              selectedTemplate === template.id 
                ? 'border-blue-500 bg-blue-900/20' 
                : 'border-gray-700 bg-gray-900 hover:bg-gray-800'
            }`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            <div className="aspect-[3/4] bg-white flex items-center justify-center">
              <div className="text-center text-black p-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <p className="text-sm font-medium">{template.name}</p>
                <p className="text-xs text-gray-500">{template.category}</p>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-semibold mb-1">{template.name}</h4>
              <p className="text-sm text-gray-400 mb-3">{template.preview}</p>
              <button 
                className={`w-full py-2 rounded-lg font-medium transition-colors ${
                  selectedTemplate === template.id
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {selectedTemplate === template.id ? 'Selected' : 'Use Template'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Export Tab Component
function ExportTab() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-light mb-4">Export Your Resume</h3>
        <p className="text-gray-400">Download your resume in multiple formats</p>
          </div>
          
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold">PDF</span>
          </div>
          <h4 className="text-xl font-semibold mb-2">PDF Format</h4>
          <p className="text-gray-400 mb-4">High-quality, print-ready PDF</p>
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors">
            Download PDF
            </button>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold">DOC</span>
          </div>
          <h4 className="text-xl font-semibold mb-2">Word Document</h4>
          <p className="text-gray-400 mb-4">Editable Microsoft Word format</p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
            Download Word
            </button>
        </div>
      </div>
      
      <div className="bg-gray-900 p-6 rounded-lg">
        <h4 className="text-lg font-semibold mb-4">Export Settings</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Include AI enhancements</span>
            <input type="checkbox" className="w-4 h-4" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span>Optimize for ATS</span>
            <input type="checkbox" className="w-4 h-4" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span>Include contact information</span>
            <input type="checkbox" className="w-4 h-4" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
}

// Resume Preview Component
function ResumePreview({ data, template = 'modern' }: { data: ResumeData, template?: string }) {
  const renderTemplate = () => {
    switch (template) {
      case 'creative':
        return (
          <div className="space-y-6 text-sm">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-blue-600 mb-2">{data.personalInfo.name || 'Your Name'}</h1>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">Software Engineer</p>
              <p className="text-gray-600">
                {data.personalInfo.email || 'your@email.com'} • {data.personalInfo.phone || '(555) 123-4567'}
              </p>
            </div>
            
            {data.summary && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2 text-blue-800">Professional Summary</h2>
                <p className="text-gray-700 leading-relaxed">{data.summary}</p>
              </div>
            )}
            
            <div>
              <h2 className="text-lg font-semibold mb-2 text-blue-600">Experience</h2>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Senior Software Engineer</h3>
                      <p className="text-gray-600">Tech Company Inc.</p>
                    </div>
                    <span className="text-gray-600">2020 - Present</span>
                  </div>
                  <ul className="mt-2 text-gray-700 space-y-1">
                    <li>• Led development of microservices architecture</li>
                    <li>• Improved system performance by 40%</li>
                    <li>• Mentored junior developers</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold mb-2 text-blue-600">Skills</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">JavaScript</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">React</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">Node.js</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">Python</span>
              </div>
            </div>
          </div>
        );
      
      case 'executive':
        return (
          <div className="space-y-6 text-sm">
            <div className="text-center border-b-2 border-gray-300 pb-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{data.personalInfo.name || 'Your Name'}</h1>
              <p className="text-gray-600 text-xl">Software Engineer</p>
              <p className="text-gray-600">
                {data.personalInfo.email || 'your@email.com'} • {data.personalInfo.phone || '(555) 123-4567'}
              </p>
            </div>
            
            {data.summary && (
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800 uppercase tracking-wide">Executive Summary</h2>
                <p className="text-gray-700 leading-relaxed text-base">{data.summary}</p>
              </div>
            )}
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-gray-800 uppercase tracking-wide">Professional Experience</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">Senior Software Engineer</h3>
                      <p className="text-gray-600 font-medium">Tech Company Inc.</p>
                    </div>
                    <span className="text-gray-600 font-medium">2020 - Present</span>
                  </div>
                  <ul className="mt-2 text-gray-700 space-y-1">
                    <li>• Led development of microservices architecture</li>
                    <li>• Improved system performance by 40%</li>
                    <li>• Mentored junior developers</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-gray-800 uppercase tracking-wide">Core Competencies</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800 text-white px-3 py-1 rounded text-xs">JavaScript</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded text-xs">React</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded text-xs">Node.js</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded text-xs">Python</span>
              </div>
            </div>
          </div>
        );
      
      case 'minimal':
        return (
          <div className="space-y-6 text-sm">
            <div className="text-center">
              <h1 className="text-2xl font-light text-gray-800 mb-1">{data.personalInfo.name || 'Your Name'}</h1>
              <p className="text-gray-500">Software Engineer</p>
              <p className="text-gray-500 text-xs">
                {data.personalInfo.email || 'your@email.com'} • {data.personalInfo.phone || '(555) 123-4567'}
              </p>
            </div>
            
            {data.summary && (
              <div>
                <h2 className="text-sm font-medium mb-2 text-gray-800 uppercase tracking-wider">Summary</h2>
                <p className="text-gray-600 leading-relaxed text-xs">{data.summary}</p>
              </div>
            )}
            
            <div>
              <h2 className="text-sm font-medium mb-2 text-gray-800 uppercase tracking-wider">Experience</h2>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-sm">Senior Software Engineer</h3>
                      <p className="text-gray-500 text-xs">Tech Company Inc.</p>
                    </div>
                    <span className="text-gray-500 text-xs">2020 - Present</span>
                  </div>
                  <ul className="mt-1 text-gray-600 space-y-0.5 text-xs">
                    <li>• Led development of microservices architecture</li>
                    <li>• Improved system performance by 40%</li>
                    <li>• Mentored junior developers</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-sm font-medium mb-2 text-gray-800 uppercase tracking-wider">Skills</h2>
              <div className="flex flex-wrap gap-1">
                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">JavaScript</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">React</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">Node.js</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">Python</span>
              </div>
            </div>
          </div>
        );
      
      default: // modern
        return (
          <div className="space-y-6 text-sm">
            <div className="text-center border-b border-gray-300 pb-4">
              <h1 className="text-2xl font-bold">{data.personalInfo.name || 'Your Name'}</h1>
              <p className="text-gray-600">Software Engineer</p>
              <p className="text-gray-600">
                {data.personalInfo.email || 'your@email.com'} • {data.personalInfo.phone || '(555) 123-4567'}
              </p>
            </div>
            
            {data.summary && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Professional Summary</h2>
                <p className="text-gray-700 leading-relaxed">{data.summary}</p>
              </div>
            )}
            
            <div>
              <h2 className="text-lg font-semibold mb-2">Experience</h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Senior Software Engineer</h3>
                      <p className="text-gray-600">Tech Company Inc.</p>
                    </div>
                    <span className="text-gray-600">2020 - Present</span>
                  </div>
                  <ul className="mt-2 text-gray-700 space-y-1">
                    <li>• Led development of microservices architecture</li>
                    <li>• Improved system performance by 40%</li>
                    <li>• Mentored junior developers</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold mb-2">Skills</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs">JavaScript</span>
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs">Node.js</span>
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs">Python</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return renderTemplate();
}
