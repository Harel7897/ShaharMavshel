import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    username:"",
    phonNum:"",
    date: "",
    eventType: "",
    guests: "",
    kashrot:"",
    notes: "",
  });

  const phoneNumber = "972542312663";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    const message = `📅 הזמנת אירוע:
לקוח: ${form.username}
טלפון: ${form.phonNum}
תאריך: ${form.date}
סוג אירוע: ${form.eventType}
כמות מוזמנים: ${form.guests}
כשרות :${form.kashrot }
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
          name="username"
          type="text"
          value={form.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="date"> שם מלא</label>
      </div>

      <div className="input-group">
        <input
          name="phonNum"
          type="text"
          value={form.phonNum}
          onChange={handleChange}
          required
        />
        <label htmlFor="date"> מספר טלפון</label>
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
        <label htmlFor="guests">כמות אנשים</label>
      </div>
  

      <div className="input-group">
        <input
          name="kashrot"
          type="text"
          value={form.kashrot}
          onChange={handleChange}
          required
        />
        <label htmlFor="guests">כשרות</label>
      </div>
  
      <div className="input-group">
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={4}
        />
        <label htmlFor="notes"> הערות/דרישות מיוחדות</label>
      </div>
  
      <button onClick={handleSubmit}>
שליחת ההזמנה וקבלת הצעת מחיר      </button>
    </div>
  );
  
};

export default Contact;
