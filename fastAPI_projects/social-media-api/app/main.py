from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class UserPostIn(BaseModel):
    body: str


class UserPost(UserPostIn):
    id: int
