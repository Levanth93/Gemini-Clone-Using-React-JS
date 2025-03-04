import { createContext, useState } from "react";
import run from "../config/gemini";



export const context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prePrompts,setPrePrompts] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("");

    const delayPara = (index,nextWord) => {

    }


    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const response = await run(input) 
        let responseArray = response.split("**");
        let newResponse ;
        for(let i=0;i<responseArray.length;i++){
            if(i===0 || i%2 !==1){
            newResponse+=responseArray[i];
            }
            else{
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
        let newResponse2= newResponse.split("*").join("</br>")
        setResultData(newResponse2)
        setLoading(false)
        setInput("")

    };


    const ContextValue = {
        prePrompts,
        setPrePrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    };

    return (
        <context.Provider value={ContextValue}> 
            {props.children}
        </context.Provider>
    );
};

export default ContextProvider;
