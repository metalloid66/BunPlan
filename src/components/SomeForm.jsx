import React, { useState } from "react";

export default function SomeForm() {
  const [form, setForm] = useState([]);
  const handleAddLink = (e) => {
    e.preventDefault();
    const inputState = {
      Platform: "",
      Username: "",
    };
    setForm((prev) => [...prev, inputState]);
  };
  const onChange = (event, index) => {
    event.preventDefault();
    event.presist();
    setForm((prev) => {
      return prev.map((item, i) => {
        if (i !== index) {
          return item;
        }
        return {
          ...item,
          [event.target.name]: event.target.value,
        };
      });
    });
  };
  const handleRemoveField = (e, index) => {
    e.preventDefault();
    setForm((prev) => prev.filter((item) => item !== prev[index]));
  };
  return (
    <form>
      {form.map((item, index) => (
        <div key={`item-${index}`}>
          <input
            type="text"
            name="platform"
            placeholder="platform"
            value={item.platform}
            onChange={() => onChange(e, index)}
          />
          <input
            type="text"
            name="username"
            placeholder="username"
            value={item.username}
            onChange={() => onChange(e, index)}
          />
          <button
            onClick={(e) => {
              handleRemoveField(index, e);
            }}
          >
            X
          </button>
        </div>
      ))}
      <button onClick={handleAddLink}>Add a link</button>
    </form>
  );
}
