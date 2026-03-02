import { Mail, MapPin, Building, Github, Linkedin } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import profileAvatar from "@/assets/profile-avatar.jpg";

const navItems = [
  { label: "About", path: "/" },
  { label: "Background", path: "/background" },
  { label: "Projects", path: "/projects" },
  { label: "CV", path: "/cv" },
  { label: "Contact", path: "/contact" },
];

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header / Nav */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center gap-x-8 gap-y-2">
          <NavLink to="/" className="text-lg font-semibold text-foreground tracking-tight hover:text-primary transition-colors">
            Muhammad Uzair
          </NavLink>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-primary transition-colors ${isActive ? "text-primary font-medium" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
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

          {/* Page Content */}
          <div className="flex-1 min-w-0">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-muted-foreground">
          <p>© 2026 Muhammad Uzair Mangi.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
