import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = {
    name: '',
    weight: 0,
    height: 0
}

const PokemonForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.addPokemon(formData);
        setFormData(initialState);
        navigate("/pokemon");
    }

    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value});
        console.log(evt);
    }
    return (
        <main>
            <h2>New Pokemon</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}/>
                <label htmlFor="weight">Weight:</label>
                <input 
                    type="text"
                    name="weight"
                    id="weight"
                    value={formData.weight}
                    onChange={handleChange}/>
                <label htmlFor="height">Height:</label>
                <input 
                    type="text"
                    name="height"
                    id="height"
                    value={formData.height}
                    onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default PokemonForm