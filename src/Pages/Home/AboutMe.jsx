function AboutMe() {
    return (
      <section id="AboutMe">
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundImage: `url('./img/bluerings.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '12px',
            textAlign: 'center',
            color: 'blue',
            maxWidth: '600px',
            width: '90%', // keeps it responsive
            border: '3px solid blue', // <-- blue border
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)', // lighter shadow now
            }}>
            <img 
                src='./img/pfppng.jpeg' 
                alt="Profile" 
                style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '20px'
                }}
            />
            <p style={{
                margin: '0',
                fontSize: '18px',
                lineHeight: '1.6',
            }}>
                Hi, I’m Abhinav — a tech enthusiast with a background in Computer Science and a passion for bridging technology, business, and innovation. 
                I’m starting my career in tech sales at IBM, where I’m excited to help businesses unlock the power of data and AI. 
                Outside of work, I love exploring new technologies, building side projects, staying active, and always chasing new experiences that push me to grow. 
                Thanks for stopping by!
            </p>
            </div>
        </div>
        </section>
    );
  }
  
  export default AboutMe;