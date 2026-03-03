const Background = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">My background and history</h2>

      {/* Education */}
      <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Education</h3>
      <ul className="space-y-3 text-foreground leading-relaxed">
        <li>
          <strong>BS in Computer Science</strong> (CGPA: 3.2/4.0) from{" "}
          <a href="https://www.saus.edu.pk/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            The Shaikh Ayaz University, Shikarpur
          </a>{" "}
          (2022–2026). Key coursework: <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Artificial Intelligence</a>, <a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Machine Learning</a>, <a href="https://en.wikipedia.org/wiki/Computer_security" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cybersecurity</a>.
        </li>
        <li>
          <strong>12th Certificate (Pre-Engineering)</strong> (Grade: 4.0/4.0) from Govt. Islamia College Sukkur (2019–2021).
        </li>
      </ul>

      {/* Co-founder (Present) */}
      <h3 className="text-lg font-semibold text-foreground mt-8 mb-2">Co-founder — Present</h3>
      <ul className="space-y-3 text-foreground leading-relaxed">
        <li>
          <strong>Co-founder & Authorized Representative, <a href="https://www.linkedin.com/company/dylpakistan" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Digital Youth Leadership Program (DYLP)</a></strong> — Leading the launch of a fellowship program
          focused on youth development, cybersecurity, and emerging technologies. Currently developing a one-month fellowship
          for students with thematic areas including: Cyber Security Awareness, Emerging Technologies (AI), Leadership Skills,
          SDGs & <a href="https://en.wikipedia.org/wiki/Climate_change" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Climate Awareness</a>, Personal Branding, and Career Direction.
        </li>
      </ul>

      {/* Fellowships */}
      <h3 className="text-lg font-semibold text-foreground mt-8 mb-2">Fellowships</h3>
      <ul className="space-y-3 text-foreground leading-relaxed">
        <li>
          <strong>Youth Climate Fellow, Transparency International Pakistan</strong> (2024–2025) — Developed a
          Community Carbon Tracker website and secured 1st place in the final presentation.
        </li>
        <li>
          <strong>National Youth Leadership Program (NYLP) Fellow</strong> — Presented at the International Conference
          on Emerging Leaders for <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SDG 2030</a>.
        </li>
      </ul>

      {/* Internships */}
      <h3 className="text-lg font-semibold text-foreground mt-8 mb-2">Internships</h3>
      <ul className="space-y-3 text-foreground leading-relaxed">
        <li>
          <strong>Software Developer Intern, Marfah Technologies</strong> (2025) — Completed a 2-month <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Flutter</a> internship.
        </li>
        <li>
          <strong>Summer Intern, ISPR</strong> (2025) — Participated in the summer internship program and developed
          an ML prototype (Smart Information Detection System).
        </li>
      </ul>

      {/* Leadership & Events */}
      <h3 className="text-lg font-semibold text-foreground mt-8 mb-2">Leadership & Events</h3>
      <ul className="space-y-3 text-foreground leading-relaxed">
        <li>
          <strong>Project Manager, TechnoFun, SAUS</strong> (2024 & 2025) — Contributed to planning and execution
          of the university's flagship tech event.
        </li>
      </ul>
    </div>
  );
};

export default Background;
