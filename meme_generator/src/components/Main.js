import React from "react";
import memesData from "../memesData";

export default function Main(){
    const [meme,setMeme]= React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    function getMemes(){
        const memes=memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memes.length)
        const url=memes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    }

    function handleChange(event) {
        setMeme(prev=> {
            return{
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }
    return (
        <div>
            <main className="main">
           
                    <input type="text" placeholder="Top Text" className="form--text" name="topText" value={meme.topText} onChange={handleChange}/>
                    <input type="text" placeholder="Bottom Text" className="form--text" name="bottomText" value={meme.bottomText}onChange={handleChange}/>
                    <button className="form--button" onClick={getMemes}>Get a new meme image 🖼️</button>
                </main>
                <div className="meme">
                    <img src={meme.randomImage} className="form--image"/>

                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                    </div>
                    
                    
            
        
        </div>
    )
}