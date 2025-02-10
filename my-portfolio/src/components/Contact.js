import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required");
      setSuccessMessage(""); // Reset success message
      return;
    }
    setError("");
    
    // Here you can integrate your backend code
    // For example, using fetch or axios:
    try {
      const response = await fetch('/your-backend-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });
      
      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
      } else {
        setError("There was an issue sending your message.");
      }
    } catch (error) {
      setError("Failed to send message.");
    }
    
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact-f1">
      <form id="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        {error && <div className="text-danger">{error}</div>}
        {successMessage && <div className="text-success">{successMessage}</div>}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
