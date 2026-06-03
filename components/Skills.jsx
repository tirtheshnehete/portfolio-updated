
export default function Skills() {
  const skills = [
    "react", "nodejs", "python", "java",
    "html", "css", "js", "bootstrap", "tailwind",
    "mongodb", "firebase", "git",
  ];

  return (
    <section className="skills-section" id="skills" >
      <h2 className="skills-title">🛠 My Tech Toolbox</h2>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-icon">
            <img
              src={`https://skillicons.dev/icons?i=${skill}`}
              alt={skill}
              onContextMenu={(e)=>e.preventDefault()} draggable="false"
            />
            <p>{skill.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
