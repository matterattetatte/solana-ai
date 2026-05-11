FROM mcr.microsoft.com/azureml/minimal-ubuntu22.04-py310-cpu-inference

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir fastapi uvicorn vllm torch torchvision torchaudio

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
