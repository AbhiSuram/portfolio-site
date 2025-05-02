function ContactMe() {
    return (
    <section id="Contact">
      <div style={{
        minHeight: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px'
      }}>
        <h1 style={{
          color: 'blue',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          Contact Me
        </h1>
  
        <form style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          maxWidth: '500px'
        }}
        onSubmit={(e) => { e.preventDefault(); alert('Message sent! (Functionality In Progress)'); }}
        >
          <input 
            type="text"
            placeholder="Your Name"
            required
            style={{
              padding: '12px',
              fontSize: '16px',
              borderRadius: '6px',
              border: '1px solid #ccc'
            }}
          />
          <input 
            type="email"
            placeholder="Your Email"
            required
            style={{
              padding: '12px',
              fontSize: '16px',
              borderRadius: '6px',
              border: '1px solid #ccc'
            }}
          />
          <textarea 
            placeholder="Your Message"
            required
            rows="5"
            style={{
              padding: '12px',
              fontSize: '16px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              resize: 'vertical'
            }}
          ></textarea>
          <button type="submit" style={{
            backgroundColor: 'blue',
            color: 'white',
            fontSize: '18px',
            padding: '12px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'darkblue'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'blue'}
          >
            Send Message
          </button>
        </form>
      </div>
      </section>
    );
  }
  
  export default ContactMe;
  