from fastapi.testclient import TestClient
from .main import app
import json

client = TestClient(app)
# local server url
url = "http://127.0.0.1:8000/calculate"


def test_post_main_one():
    response = client.post(
        url,
        data=json.dumps({
            "array": [1, 2, 6, 3]
        }),
    )
    assert response.status_code == 200
    assert response.json() == {"index": '2'}


def test_post_main_two():
    response = client.post(
        url,
        data=json.dumps({'array': [2, 1, 2, 1, 3, 2]})
    )
    # assert response.status_code == 200
    assert response.json() == {"index": '3'}


def test_post_main_three():
    response = client.post(
        url,
        data=json.dumps({'array': [2, 2, 2, 2, 2, 2, 2,
                        6, 10, 3, 1, 5, 2, 5, 3, 1, 3, 14]})
    )
    # assert response.status_code == 200
    assert response.json() == {"index": '10'}


def test_post_main_none():
    response = client.post(
        url,
        data=json.dumps({'array': [1, 2, 3]})
    )
    # assert response.status_code == 200
    assert response.json() == {"index": 'None'}
