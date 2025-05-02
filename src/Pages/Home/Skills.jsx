function Skills() {
    const skills = [
      { category: "Technical Skills", list: ["Python", "JavaScript (React)", "SQL", "Flask", "APIs", "Git & GitHub", "C++"] },
      { category: "Business & Sales Skills", list: ["Tech Sales", "Client Relationship Management", "Solution Selling", "CRM Tools"] },
      { category: "Analytics & Data", list: ["Data Analysis", "Data Visualization", "Dashboarding", "Basic Machine Learning Models"] },
      { category: "Other Skills", list: ["Product Thinking", "Project Management", "Problem Solving", "Public Speaking", "Content Creation"] },
    ];
  
    return (
        <section id="Skills">
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f0f8ff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '40px'
      }}>
        <h1 style={{
          marginBottom: '40px',
          color: 'blue',
          textAlign: 'center'
        }}>My Skills</h1>
  
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          maxWidth: '1200px',
          width: '100%'
        }}>
          {skills.map((skill, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              border: '2px solid blue',
              borderRadius: '12px',
              padding: '20px',
              width: '280px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'black', marginBottom: '15px' }}>{skill.category}</h3>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                {skill.list.map((item, subIndex) => (
                  <li key={subIndex} style={{ marginBottom: '8px', color: 'gray' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      </section>
    );
  }
  
  export default Skills;