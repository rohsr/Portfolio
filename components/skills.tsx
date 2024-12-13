export default function Skills() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", 
    "PostgreSQL", "GraphQL", "AWS", "Docker", "Git", "Agile Methodologies"
  ]

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-white text-gray-800 px-4 py-2 rounded-full shadow">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

