from typing import List
from fastapi import FastAPI, status
from fastapi.exceptions import HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic.main import BaseModel

app = FastAPI()
app.add_middleware(CORSMiddleware,
                   allow_origins=['*'],
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"],
                   )


class ArrayBody(BaseModel):
    array: List[int]


@app.post("/calculate", status_code=status.HTTP_200_OK)
def calculate_array(arrayBody: ArrayBody):
    """
    Finds the index number at which the left and the right sub arrays
    add up to the same result
    """

    print(arrayBody)

    if (len(arrayBody.array) == 1):
        return {'index': '0'}

    if (len(arrayBody.array) == 2):
        if (arrayBody.array[0] != arrayBody.array[1]):
            return {'index': 'None'}
        else:
            return {'index': '1'}

    left = 0
    right = len(arrayBody.array) - 1
    if arrayBody.array[left + 1]:
        mid = left + 1

    while mid < right:
        leftArray = sum(arrayBody.array[left: mid])
        rightArray = sum(arrayBody.array[mid + 1: right + 1])
        if leftArray == rightArray:
            return {'index': str(mid)}
        else:
            mid += 1
    return {'index': 'None'}
