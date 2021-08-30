# getir-case-study
We’d like you to create a RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format.

#Quick Start

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```
#API Endpoins.

POST Method - Get Records By Filter - /records

Sample Request Body
```
 {
    "startDate": "2016-01-26", 
    "endDate": "2018-02-02", 
    "minCount": 2700, 
    "maxCount": 3000
 }
```

Sample Response -
```
{
    "code": 0,
    "msg": "success",
    "records": [
        {
            "key": "ibfRLaFT",
            "createdAt": "2016-12-25T16:43:27.909Z",
            "totalCount": 2892
        },
        {
            "key": "pxClAvll",
            "createdAt": "2016-12-19T10:00:40.050Z",
            "totalCount": 2772
        }
    ]
}
```
