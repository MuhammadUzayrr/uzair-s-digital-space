import { Mail, MapPin, Building, Github, Linkedin } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header / Nav */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center gap-x-8 gap-y-2">
          <h1 className="text-lg font-semibold text-foreground tracking-tight">Muhammad Uzair</h1>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#background" className="hover:text-primary transition-colors">Background</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <aside className="md:w-64 shrink-0">
            <img
              src={profileAvatar}
              alt="Muhammad Uzair"
              className="w-44 h-44 rounded-full mx-auto md:mx-0 object-cover border-4 border-border"
            />
            <div className="mt-5 text-center md:text-left">
              <h2 className="text-xl font-bold text-foreground">Muhammad Uzair</h2>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                Computer Science Student at The Shaikh Ayaz University, Shikarpur
              </p>
              <p className="text-xs text-muted-foreground mt-1 italic">
                Co-founder at DYLP · Youth Climate Fellow
              </p>
            </div>

            <div className="mt-6 space-y-2.5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Shikarpur, Sindh, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-primary" />
                <span>The Shaikh Ayaz University</span>
              </div>
              <a href="mailto:m.uzairmangi@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span>Email</span>
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Github className="w-4 h-4 text-primary" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4 text-primary" />
                <span>LinkedIn</span>
              </a>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* About */}
            <section id="about">
              <h2 className="text-2xl font-bold text-foreground italic mb-4">About</h2>
              <p className="text-foreground leading-relaxed">
                Hi! I'm Muhammad Uzair, a Computer Science student at{" "}
                <a href="https://www.saus.edu.pk/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  The Shaikh Ayaz University, Shikarpur
                </a>{" "}
                (graduating January 2026). My work blends software development—especially in AI and Machine Learning—with
                a deep passion for leadership and social impact, particularly in climate action. I'm also the Co-founder
                of the{" "}
                <span className="font-semibold">Digital Youth Leadership Program (DYLP)</span>, where I'm helping design
                a fellowship to equip students with skills in emerging technologies, cybersecurity, and leadership.
              </p>
            </section>

            {/* Background */}
            <section id="background" className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">My background and history</h2>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Education</h3>
              <ul className="space-y-3 text-foreground leading-relaxed">
                <li>
                  <strong>BS in Computer Science</strong> (CGPA: 3.2/4.0) from{" "}
                  <a href="https://www.saus.edu.pk/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    The Shaikh Ayaz University, Shikarpur
                  </a>{" "}
                  (2022–2026). Key coursework: Artificial Intelligence, Machine Learning, Cybersecurity.
                </li>
                <li>
                  <strong>12th Certificate (Pre-Engineering)</strong> (Grade: 4.0/4.0) from Govt. Islamia College Sukkur (2019–2021).
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-8 mb-2">Key Experiences</h3>
              <ul className="space-y-3 text-foreground leading-relaxed">
                <li>
                  <strong>Co-founder & Authorized Representative, DYLP</strong> — Leading the launch of a fellowship program
                  focused on youth development, cybersecurity, and emerging technologies.
                </li>
                <li>
                  <strong>Youth Climate Fellow, Transparency International Pakistan</strong> (2024–2025) — Developed a
                  Community Carbon Tracker website and secured 1st place in the final presentation.
                </li>
                <li>
                  <strong>Software Developer Intern, Marfah Technologies</strong> (2025) — Completed a 2-month Flutter internship.
                </li>
                <li>
                  <strong>Summer Intern, ISPR</strong> (2025) — Participated in the summer internship program and developed
                  an ML prototype.
                </li>
                <li>
                  <strong>Project Manager, TechnoFun, SAUS</strong> (2024 & 2025) — Contributed to planning and execution
                  of the university's flagship tech event.
                </li>
              </ul>
            </section>

            {/* Current Work / Projects */}
            <section id="projects" className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Current work & projects</h2>

              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Co-founding DYLP Fellowship</h3>
              <p className="text-foreground leading-relaxed">
                Currently developing a one-month fellowship program for students at The Shaikh Ayaz University. Thematic
                areas include: Cyber Security Awareness, Emerging Technologies (AI), Leadership Skills, SDGs & Climate
                Awareness, Personal Branding, and Career Direction.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Technical Projects</h3>
              <ul className="space-y-3 text-foreground leading-relaxed">
                <li>
                  <strong>AI Carbon Emission Analyzer</strong> — A system featuring predictive analytics and a personal
                  carbon tracker, presented at the International Youth Leadership Conference on SDG 2030.
                </li>
                <li>
                  <strong>Pakistani Celebrities/Singers Recognition Dataset</strong> — Created and published a dataset on{" "}
                  <a href="https://kaggle.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Kaggle
                  </a>{" "}
                  for face recognition research.
                </li>
                <li>
                  <strong>Smart Information Detection System</strong> — An ML prototype developed during the ISPR internship.
                </li>
                <li>
                  Various other projects in <strong>Flutter</strong>, <strong>Machine Learning</strong>, and <strong>Python</strong>.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-border mt-12">
        <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-muted-foreground">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <span className="font-medium uppercase tracking-wider text-xs">Follow:</span>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
          </div>
          <p>© 2026 Muhammad Uzair Mangi.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
