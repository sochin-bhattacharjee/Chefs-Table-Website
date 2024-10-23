import Recipe from "./Recipe";
import SideBar from "./SideBar";

const OurRecipe = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-extrabold">our recipe</h1>
            <p className="text-center w-9/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum amet porro, neque enim asperiores quisquam ipsam quasi </p>
            </div>
            <div className="flex flex-col md:flex-row">
                {/* Recipe section */}
                <Recipe></Recipe>
                {/* Side bar section */}
                <SideBar></SideBar>
            </div>
        </div>
    );
};

export default OurRecipe;