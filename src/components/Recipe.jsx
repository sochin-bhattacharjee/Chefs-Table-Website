import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const Recipe = () => {
    const [recipes , setRecipes] = useState([]);
    useEffect(() => {
        fetch('./recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    console.log(recipes)
    // console.log(recipe.recipe_id)
    return (
        <div className="md:w-2/3 grid lg:grid-cols-2 gap-7">
            {
                recipes.map(recipe =>
                    
                    <div key={recipe.recipe_id} className="card bg-base-100 w-auto shadow-xl">
                        <figure className="px-2 pt-2">
                            <img className="rounded-xl h-40" src={recipe.recipe_image} alt="Recipe"/>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{recipe.recipe_name}</h2>
                    <p>{recipe.short_description}</p>
                    <div className="card-actions">
                    </div>
                    <hr className="border-[1px] w-11/12" />
                    <div>
                        <p className="text-start text-lg font-bold w-full">Ingredients : 6</p>
                        <ul className="text-start font-medium">
                            {
                                recipe.ingredients.map((item , index) =>(<li className="list-disc" key={index}>{item}</li>))
                            }
                            </ul>
                    </div>
                    <hr className="border-[1px] w-11/12" />
                    <div className="flex gap-4">
                        <p>{recipe.preparing_time}</p>
                        <p>{recipe.calories}</p>
                    </div>
                    <button className="btn bg-green-400 font-bold">Want to cook</button>
                </div>
                </div>
                )
            }
        </div>
    );
};

export default Recipe;