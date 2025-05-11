import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    date: "",
    eventType: "",
    guests: "",
    menu: "חלבי",
    allergies: "",
    notes: "",
  });

  const phoneNumber = "972542312663";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    const message = `📅 הזמנת אירוע:
תאריך: ${form.date}
סוג אירוע: ${form.eventType}
כמות מוזמנים: ${form.guests}
אלרגיות: ${form.allergies || "אין"}
פרטים נוספים: ${form.notes || "אין"}

📝 נשלח דרך טופס הזמנה`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="modern-form-container">
      <h2>הזמנת אירוע</h2>
  
      <div className="input-group">
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <label htmlFor="date">תאריך האירוע</label>
      </div>
  
      <div className="input-group">
        <input
          name="eventType"
          type="text"
          value={form.eventType}
          onChange={handleChange}
          required
        />
        <label htmlFor="eventType">סוג אירוע</label>
      </div>
  
      <div className="input-group">
        <input
          name="guests"
          type="number"
          value={form.guests}
          onChange={handleChange}
          required
        />
        <label htmlFor="guests">כמות מוזמנים</label>
      </div>
  
      <div className="input-group">
        <input
          name="allergies"
          type="text"
          value={form.allergies}
          onChange={handleChange}
        />
        <label htmlFor="allergies">אלרגיות (אם יש)</label>
      </div>
  
      <div className="input-group">
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={4}
        />
        <label htmlFor="notes">פרטים נוספים</label>
      </div>
  
      <button onClick={handleSubmit}>
        שליחת ההזמנה לבית העסק
      </button>
    </div>
  );
  
};

export default Contact;
