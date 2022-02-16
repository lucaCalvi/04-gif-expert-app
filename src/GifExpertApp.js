import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['The Simpsons']);

    /*const handleAdd = () => {

        //setCategories([...categories, 'HunterXHunter']);
        setCategories(cats => [...cats, 'HunterXHunter']);

    }*/

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory setCategories={ setCategories } />

            <ol>
                {
                    categories.map((category, i) => 
                    <GifGrid 
                        key={category}
                        category={category} 
                    />)
                }
            </ol>

        </div>
    );

}