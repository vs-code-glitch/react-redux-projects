import "./App.css";

function App() {
  const developer = {
    name: "Vivek Singh",
    role: "React Developer",
    location: "India",
    experience: "Beginner",
    skills: ["JavaScript", "React", "Redux"],
  };

  return (
    <main className="profile-card">
      <div className="avatar">VS</div>

      <h1>{developer.name}</h1>
      <h2>{developer.role}</h2>

      <p>Location: {developer.location}</p>
      <p>Experience: {developer.experience}</p>

      <h3>My Skills</h3>

      <ul>
        {developer.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <button type="button">View Profile</button>
    </main>
  );
}

export default App;
