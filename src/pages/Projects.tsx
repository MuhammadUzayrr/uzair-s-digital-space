const projects = [
  {
    title: "TaalConnect",
    description:
      "A full-stack <a href=\"https://flutter.dev/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary hover:underline\">Flutter</a> & <a href=\"https://firebase.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary hover:underline\">Firebase</a> app for artists and event organizers to book, manage, and make in-app payments. Features three dashboards (artist, event-organizer, admin), a ML-based recommendation system for top-rated singers, artist face recognition, and <a href=\"https://stripe.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary hover:underline\">Stripe</a> payment gateway integration for in-app bookings.",
    tech: "Flutter, Firebase, Machine Learning, Stripe",
    highlight: "Final Year Project",
  },
  {
    title: "AI Carbon Emission Analyzer & Personal Footprint System",
    description:
      "A full-stack AI-based Carbon Emission Analyzer website for companies and industries to calculate carbon emissions and a personal footprint analyzer, contributing to SDG 13 (Climate Action). Integrates two machine learning models. Presented at the TI-P Fellowship closing ceremony and the NYLP International Conference on Emerging Leaders for SDG 2030. Our team was awarded 1st position and won a prize of ₨20,000.",
    tech: "Python, Machine Learning, Web Development",
    highlight: "1st Place — TI-P Fellowship",
  },
  {
    title: "Smart Information Detection System",
    description:
      "A prototype developed during the ISPR internship to automatically detect and categorize media and security-related information.",
    tech: "Python, Flutter, SQL, <a href=\"https://en.wikipedia.org/wiki/Natural_language_processing\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary hover:underline\">NLP</a>, <a href=\"https://opencv.org/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary hover:underline\">OpenCV</a>, <a href=\"https://www.tensorflow.org/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary hover:underline\">TensorFlow</a>",
    highlight: "ISPR Internship Project",
  },
  {
    title: "Resume Credibility Analyzer",
    description:
      "An AI-powered system that detects fake skills, buzzwords, and scores confidence in resumes. The core functionality detects fake skills and lists additional skills of an individual.",
    tech: "Python, <a href=\"https://streamlit.io/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary hover:underline\">Streamlit</a>, NLP",
  },
  {
    title: "Pakistani Singers/Celebrities Recognition Dataset",
    description:
      "Created and published the first Pakistani Singers/Celebrities face recognition dataset on Kaggle. Currently includes 10 personalities with 30–35 images per artist.",
    tech: "Computer Vision, Dataset Engineering",
    highlight: "Published on Kaggle",
  },
  {
    title: "Software Development Projects",
    description:
      "Developed 30+ projects including internship work, local projects, and competition entries. Currently working with the developer team at The Shaikh Ayaz University (TSAUS).",
    tech: "Flutter, Python, Machine Learning",
  },
];

const Projects = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-4">Projects</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        I've led several major projects that combine Software Development, Machine Learning,
        and AI — showcasing both innovative engineering and societal contributions.
      </p>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <div key={i} className="border-l-2 border-primary pl-5">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
              <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              {project.highlight && (
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                  {project.highlight}
                </span>
              )}
            </div>
            <p className="text-foreground leading-relaxed mb-2" dangerouslySetInnerHTML={{ __html: project.description }} />
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">Tech:</span> <span dangerouslySetInnerHTML={{ __html: project.tech }} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
