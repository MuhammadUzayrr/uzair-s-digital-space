const CV = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground italic mb-4">CV</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">
        If the embedded PDF below does not load, you can{" "}
        <a
          href="/Muhammad_Uzair_CV.pdf"
          download
          className="text-primary hover:underline"
        >
          download it here.
        </a>
      </p>
      <div className="w-full border border-border rounded overflow-hidden">
        <iframe
          src="/Muhammad_Uzair_CV.pdf"
          title="Muhammad Uzair CV"
          className="w-full"
          style={{ height: "80vh" }}
        />
      </div>
    </div>
  );
};

export default CV;
