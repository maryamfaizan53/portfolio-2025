import { NextResponse } from 'next/server'

export async function GET() {
  const resumeContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Maryam Faizan - Professional Resume</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #1a1815;
          background: white;
          padding: 40px;
        }
        
        .header {
          background: linear-gradient(135deg, #CF0F47 0%, #B03052 100%);
          color: white;
          padding: 40px;
          border-radius: 12px;
          margin-bottom: 40px;
          box-shadow: 0 10px 30px rgba(207, 15, 71, 0.2);
        }
        
        .name {
          font-size: 48px;
          font-weight: 900;
          margin-bottom: 8px;
          letter-spacing: -1px;
        }
        
        .title {
          font-size: 24px;
          font-weight: 600;
          opacity: 0.95;
          margin-bottom: 16px;
        }
        
        .contact-info {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          font-size: 14px;
          opacity: 0.9;
          margin-top: 16px;
        }
        
        .section {
          margin-bottom: 32px;
          page-break-inside: avoid;
        }
        
        .section-title {
          font-size: 20px;
          font-weight: 800;
          color: #CF0F47;
          border-bottom: 3px solid #D76C82;
          padding-bottom: 12px;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .entry {
          border-left: 4px solid #CF0F47;
          padding-left: 20px;
          margin-bottom: 16px;
          page-break-inside: avoid;
        }
        
        .entry-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4px;
        }
        
        .entry-title {
          font-size: 16px;
          font-weight: 700;
          color: #1a1815;
        }
        
        .entry-date {
          font-size: 13px;
          color: #71706a;
          font-style: italic;
        }
        
        .entry-subtitle {
          font-size: 14px;
          color: #CF0F47;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        ul {
          list-style: none;
          padding-left: 0;
        }
        
        li {
          font-size: 13px;
          color: #3f3d37;
          margin-bottom: 6px;
          padding-left: 20px;
          position: relative;
        }
        
        li:before {
          content: "▸";
          position: absolute;
          left: 0;
          color: #D76C82;
          font-weight: bold;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        
        .skill-category {
          background: #F2E8E5;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #E6D0CA;
        }
        
        .skill-category-title {
          font-size: 12px;
          font-weight: 700;
          color: #CF0F47;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        
        .skill-tag {
          display: inline-block;
          background: white;
          color: #B03052;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          border: 1px solid #D76C82;
        }
        
        .footer {
          border-top: 2px solid #D76C82;
          margin-top: 40px;
          padding-top: 20px;
          text-align: center;
          font-size: 11px;
          color: #71706a;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="name">MARYAM FAIZAN</div>
        <div class="title">Agentic AI Developer | Automation Architect | Full-Stack Innovator</div>
        <div class="contact-info">
          <div>📧 maryam.faizanmianoor@gmail.com</div>
          <div>📱 +92 321 3863866</div>
          <div>📍 Karachi, Pakistan</div>
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">Professional Summary</div>
        <p>Agentic AI Developer with expertise in multi-agent systems, Python, OpenAI SDK, automation workflows, RAG pipelines, and prompt engineering. Skilled in full-stack development using Next.js, React, TypeScript, Node.js, and various databases.</p>
      </div>
      
      <div class="section">
        <div class="section-title">Technical Skills</div>
        <div class="skills-grid">
          <div class="skill-category">
            <div class="skill-category-title">AI & Automation</div>
            <div class="skill-tags">
              <span class="skill-tag">Agentic AI</span>
              <span class="skill-tag">OpenAI</span>
              <span class="skill-tag">RAG</span>
              <span class="skill-tag">n8n</span>
            </div>
          </div>
          <div class="skill-category">
            <div class="skill-category-title">Frontend</div>
            <div class="skill-tags">
              <span class="skill-tag">Next.js</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">TypeScript</span>
            </div>
          </div>
          <div class="skill-category">
            <div class="skill-category-title">Backend</div>
            <div class="skill-tags">
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">MongoDB</span>
              <span class="skill-tag">Firebase</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer">
        Generated on ${new Date().toLocaleDateString()}
      </div>
    </body>
    </html>
  `

  return new NextResponse(resumeContent, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Disposition': 'attachment; filename="Maryam_Faizan_Resume.html"',
    },
  })
}
