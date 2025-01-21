import { createContext, useState } from "react";
import generatePrompt from "../config/turbo";


export const Context = createContext();    // creating context in my project to make a centralized system

const ContextProvider = (props) => {


    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [recentPrompt, setrecentPrompt] = useState([]);
    const [prevPrompt, setprevPrompt] = useState("");
    const [resultData, setResultData] = useState("");
    

    // typing effect for prompt
    const delay = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev+nextWord);
        }, 75*index);
    }    


    const onSent = async (prompt) => {

        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response;

        if(prompt !== undefined){
            response = await generatePrompt(prompt);
            setprevPrompt(prompt);
        }
        else{        
            setrecentPrompt((prev)=> [...prev, input]);     // adding all prompts in an array
            setprevPrompt(input);
            response = await generatePrompt(input);            
        }

        let splitResponse = response.split("**");   // adding b tag where double quotes found
        let newResponse = "";

        // modifying prompt
        for (let i = 0; i < splitResponse.length; i++) {
            
            if(i === 0 || i%2 !== 1){
                newResponse += splitResponse[i];
            }
            else{
                newResponse += "<b>"+splitResponse[i]+"</b>";
            }

        }

        let finalResponse = newResponse.split("*").join("<br/>");
        let responseToPrint = finalResponse.split(" ");

        for (let i = 0; i < responseToPrint.length; i++) {
            const nextWord = responseToPrint[i];
            delay(i, nextWord + " "); // Add a space after each word
        }
        
        setLoading(false);
        setInput("");

    }

    
    const newChat = () =>{
        setLoading(false);
        setShowResult(false);
    }


    const contextValues = {     // object of all values which I provide context of..
        input, setInput, loading, showResult, recentPrompt, setprevPrompt, prevPrompt, resultData, onSent, newChat
    };

    return(
        <Context.Provider value={contextValues}>
            {props.children}
        </Context.Provider>     
    )

}

export default ContextProvider

