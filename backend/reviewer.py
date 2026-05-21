import os 
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def review_code(code:str, language:str) -> dict:
    prompt = f"""you are an expert code reviewer. analyse the following {language} code and provide:

1. **Bugs Found** - List any bugs, errors, or problems
2. **Fixed Code** - Provide the complete corrected code
3. **Explanation** - Explain what was wrong and what you fixed

code to review:
'''{language}
{code}
'''

be specific, clear and helpful"""
    
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        model="llama-3.3-70b-versatile",
    )

    return{
        "review": chat_completion.choices[0].message.content
    }