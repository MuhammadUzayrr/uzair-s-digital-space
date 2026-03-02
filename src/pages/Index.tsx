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
          (graduating January 2026). My work blends software development—especially in AI and Machine Learning—with
          a deep passion for leadership and social impact, particularly in climate action. I'm also the Co-founder
          of the{" "}
          <span className="font-semibold">Digital Youth Leadership Program (DYLP)</span>, where I'm helping design
          a fellowship to equip students with skills in emerging technologies, cybersecurity, and leadership.
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
          (2022–2026), with key coursework in Artificial Intelligence, Machine Learning, and Cybersecurity.
          Prior to that, I completed my 12th Certificate (Pre-Engineering) with a 4.0/4.0 grade from Govt. Islamia College Sukkur.
        </p>
      </section>

      {/* Research Interests */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Research Interests</h2>
        <p className="text-foreground leading-relaxed">
          My research interests are at the intersection of AI, Data Science, and Software Engineering. Specifically,
          my primary interests include <strong>Machine Learning</strong>, <strong>Data Mining</strong>,{" "}
          <strong>Pattern Recognition</strong>, <strong>Image Processing</strong>, <strong>IoT</strong>,{" "}
          <strong>Software Testing</strong>, <strong>Databases</strong>, <strong>Parallel Numerical Algorithms</strong>,{" "}
          and <strong>Constraint Satisfaction Problems (CSP)</strong>.
        </p>
        <p className="text-foreground leading-relaxed mt-3">
          These areas strongly align with my recent projects and with China's "Digital China" initiative, which
          emphasizes the use of Artificial Intelligence and IoT to advance the economy and society. I would be
          delighted to contribute to green and digital innovation — leveraging my experience in social work and
          AI — while also contributing to the advancement of AI and software development in my own country.
        </p>
      </section>
    </div>
  );
};

export default Index;
