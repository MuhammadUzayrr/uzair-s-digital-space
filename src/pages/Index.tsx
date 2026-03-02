const Index = () => {
  return (
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
  );
};

export default Index;
