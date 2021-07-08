# API
## Installation

 - Clone this repository `git clone https://github.com/jumoc/KiwiChallenge.git`
 - Access the api directory `cd api`
 - Install the requirements `pip install -r requirements.txt`

## Usage
 - Start the API `python3 -m uvicorn main:app --reload`

## Routes
| Route          |  Method  | Description                             |
| -------------- | :------: | --------------------------------------- |
| `/calculate`     |  `post`   | calculates the index where subarrays are equal      |
