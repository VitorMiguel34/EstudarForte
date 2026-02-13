from django.http import JsonResponse
from groq import Groq
from dotenv import load_dotenv
import json
import os

load_dotenv()

def resposta_chatbot(request) -> JsonResponse:
    if request.method != "POST":
        return JsonResponse({
            "sucess":True,
            "error":"Este endpoint aceita apenas requisições POST"
        })
    
    API_KEY = os.environ.get("API_KEY")
    MODEL = "openai/gpt-oss-120b"
    SYSTEM = '''Você receberá uma pergunta sobre algum assunto escolar, aja como um professor excepcional, explicando
    a dúvida de forma completa e de fácil entendimento'''
    
    chat = Groq(api_key=API_KEY)
    body = json.loads(request.body)
    pergunta_usuario = body.get("pergunta")
    response = chat.chat.completions.create(
        model=MODEL,
        messages=[
            {"role":"system", "content":SYSTEM},
            {"role":"user", "content": pergunta_usuario}
        ]
    )
    resposta_chatbot = response.choices[0].message.content
    
    return JsonResponse({
        "sucess":True,
        "body":{
            "resposta":resposta_chatbot
        },
        "message":"Pergunta respondida com sucesso"
    })
      
