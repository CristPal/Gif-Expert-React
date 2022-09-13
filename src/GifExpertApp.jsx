import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['League Of Legends']);
    

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        // Agregar un nuevo elemento al listado de categorias
        setCategories([newCategory, ...categories])
    }


  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={onAddCategory}
        />

        {   
            categories.map(category => (
                <GifGrid 
                    key={category} 
                    category={category}/>
            ))
        }
            


    </>
  )
}

