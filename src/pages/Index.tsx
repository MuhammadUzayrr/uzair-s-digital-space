const Index = () => {
  return (
    <div>
      <section>
        <h2 className="text-2xl font-bold text-foreground italic mb-4">About</h2>
        <p className="text-foreground leading-relaxed">
          Hi! I'm Muhammad Uzair, a Computer Science student at{" "}
          <a href="https://www.saus.edu.pk/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            The Shaikh Ayaz University, Shikarpur
          </a>{" "}
          (graduating January 2026). My work blends software development—especially in <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AI</a> and <a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Machine Learning</a>—with
          a deep passion for leadership and social impact, particularly in climate action. I'm also the Co-founder
          of the{" "}
          <a href="https://www.linkedin.com/company/dylpakistan" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
            Digital Youth Leadership Program (DYLP)
          </a>, where I'm helping design
          a fellowship to equip students with skills in emerging technologies, <a href="https://en.wikipedia.org/wiki/Computer_security" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cybersecurity</a>, and leadership.
        </p>
      </section>

      {/* Education */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Education</h2>
        <p className="text-foreground leading-relaxed">
          I received my BS in Computer Science from{" "}
          <a href="https://www.saus.edu.pk/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            The Shaikh Ayaz University, Shikarpur
          </a>{" "}
          (2022–2026), with key coursework in <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Artificial Intelligence</a>, <a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Machine Learning</a>, and <a href="https://en.wikipedia.org/wiki/Computer_security" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cybersecurity</a>.
        </p>
      </section>

      {/* Research Interests */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Research Interests</h2>
        <p className="text-foreground leading-relaxed">
          My research interests are at the intersection of AI, Data Science, and Software Engineering. Specifically,
          my primary interests include <strong><a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Machine Learning</a></strong>, <strong><a href="https://en.wikipedia.org/wiki/Data_mining" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Data Mining</a></strong>,{" "}
          <strong><a href="https://en.wikipedia.org/wiki/Pattern_recognition" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Pattern Recognition</a></strong>, <strong><a href="https://en.wikipedia.org/wiki/Image_processing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Image Processing</a></strong>, <strong><a href="https://en.wikipedia.org/wiki/Internet_of_things" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">IoT</a></strong>,{" "}
          <strong><a href="https://en.wikipedia.org/wiki/Software_testing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Software Testing</a></strong>, <strong><a href="https://en.wikipedia.org/wiki/Database" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Databases</a></strong>, <strong><a href="https://en.wikipedia.org/wiki/Parallel_algorithm" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Parallel Numerical Algorithms</a></strong>,{" "}
          <strong><a href="https://en.wikipedia.org/wiki/Constraint_satisfaction_problem" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Constraint Satisfaction Problems (CSP)</a></strong>, and <strong>AI for Social Good</strong>.
        </p>
      </section>
    </div>
  );
};

export default Index;
