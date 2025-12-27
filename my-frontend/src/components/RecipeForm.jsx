import React, { useState } from 'react';
import './RecipeForm.css';

function RecipeForm() {
  const [form, setForm] = useState({ title: '', image: '', category: 'Easy', description: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); alert('Recipe Saved!'); }

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <h3>Add Recipe</h3>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
      <select name="category" value={form.category} onChange={handleChange}>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
}

export default RecipeForm;
