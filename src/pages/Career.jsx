import React from 'react';
const Career = () => {
  return (
    <section className="section my-5">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold">CAREER</h1>
        <p className="lead">We are hiring passionate developers!</p>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title text-primary">Full-Stack App Developer</h3>
          <h6 className="card-subtitle mb-2 text-muted">(React Native & Node.js)</h6>

          <ul className="list-group list-group-flush mt-3">
            <li className="list-group-item"><strong>Location:</strong> Bengaluru, India</li>
            <li className="list-group-item"><strong>Type:</strong> Full-time</li>
            <li className="list-group-item"><strong>Experience:</strong> 5+ years</li>
            <li className="list-group-item"><strong>Salary:</strong> Industry Standard</li>
            <li className="list-group-item"><strong>Joining:</strong> Immediate</li>
          </ul>

          <div className="mt-4">
            <h5 className="text-success">How to Apply:</h5>
            <ol>
              <li>Send your resume & GitHub (or portfolio) to <a href="mailto:info@yachii.com">info@yachii.com</a></li>
              <li>Include a short story about a time you built something real-time (chat, games, live updates)</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
