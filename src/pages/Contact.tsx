const Contact = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground italic mb-4">Contact</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Contact information is below. Feel free to reach out for collaborations, opportunities, or just to connect.
      </p>
      <ul className="space-y-3 text-foreground leading-relaxed list-disc list-inside">
        <li>
          E-mail:{" "}
          <a href="mailto:m.uzairmangi@gmail.com" className="text-primary hover:underline">
            m.uzairmangi@gmail.com
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/muhammad-uzair-mangi/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Muhammad Uzair
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a href="https://github.com/MuhammadUzayrr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            GitHub Profile
          </a>
        </li>
        <li>
          Instagram:{" "}
          <a href="https://www.instagram.com/uzairethics_/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Instagram Profile
          </a>
        </li>
        <li>
          Kaggle:{" "}
          <a href="https://www.kaggle.com/uzairpk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Kaggle Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
