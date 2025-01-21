import { GoogleGenerativeAI } from "@google/generative-ai"


const genAI = new GoogleGenerativeAI("AIzaSyBCwvXbg0An2Nt-WFTWKgApeS49FhDMZKc");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


async function generatePrompt(prompt){

    // const prompt = "Explain how AI works";
    
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    
    return response;

}

export default generatePrompt