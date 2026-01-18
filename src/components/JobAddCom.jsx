import { useState } from "react";

export default function JobForm() {
  const [form, setForm] = useState({
    job_id: "",
    role: "",
    location: "",
    job_filled: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // fetch("/api/jobs", {
    //   method: "POST",
    //   body: formData
    // });

    console.log("FormData sent");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "12px" }}>
      <input
        type="text"
        name="job_id"
        placeholder="Job ID"
        value={form.job_id}
        onChange={handleChange}
      />

      <input
        type="text"
        name="role"
        placeholder="Role"
        value={form.role}
        onChange={handleChange}
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
      />

      <label>
        <input
          type="checkbox"
          name="job_filled"
          checked={form.job_filled}
          onChange={handleChange}
        />
        Job Filled
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
