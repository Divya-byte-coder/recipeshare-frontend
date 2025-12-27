import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';

function Profile() {
  const user = {
    name: 'Jane Doe',
    avatar: 'https://i.pravatar.cc/150?img=5',
    bio: 'Passionate home cook sharing my favorite recipes!'
  };
  const myRecipes = [
    {
      title: 'Classic Margherita Pizza',
      image: 'https://images.unsplash.com/photo-1601924582975-4f353e17f02b?auto=format&fit=crop&w=800&q=80',
      ingredients: ['200g spaghetti', '1 can tomato', '1 can tomato'],
      instructions: 'Cook pasta. Sauté onion/garlic. Add tomato. Simmer. Combine with pasta.'
    },
    {
      title: 'Chocolate Brownies',
      image: 'https://images.unsplash.com/photo-1599785209707-d79b4d6e45fc?auto=format&fit=crop&w=800&q=80',
      ingredients: ['200g chocolate', '100g butter', '150g sugar', '2 eggs'],
      instructions: 'Melt chocolate & butter. Mix sugar & eggs. Bake at 180°C for 25min.'
    }
  ];

  return (
    <div>
      <Navbar />

      <header className="profile-header">
        <img className="avatar" src={user.avatar} alt={user.name} />
        <h1>{user.name}</h1>
        <p>{user.bio}</p>
      </header>

      <main className="profile-content">
        <h2>My Recipes</h2>
        <div className="recipe-grid">
          {myRecipes.map((recipe, i) => (
            <RecipeCard key={i} {...recipe} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Profile;
