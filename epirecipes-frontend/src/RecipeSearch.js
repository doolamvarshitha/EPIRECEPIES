import React, { useState, useEffect } from 'react';
import recipesData from './data/recipes.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeSearch = () => {
    const [recipes, setRecipes] = useState(recipesData);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

    useEffect(() => {
        const results = recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRecipes(results);
    }, [searchTerm, recipes]);

    return (
        <div className="container">
            <h1 className="my-4">Recipe Search</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Search recipes"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className="list-group mt-3">
                {filteredRecipes.map(recipe => (
                    <li key={recipe.id} className="list-group-item">
                        <h5>{recipe.title}</h5>
                        <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                        <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
                        <p><strong>Preparation Time:</strong> {recipe.preparation_time} minutes</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeSearch;
