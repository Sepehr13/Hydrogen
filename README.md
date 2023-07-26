
# Hydrogen HTTP Client

An easy to use http client.


## Why use this?

It's basically my first npm package and i wanted to learn how to publish packages.
Feel free to contribute if you feel this project worths it.


![Logo](https://github.com/Sepehr13/Hydrogen/assets/21054209/f971cb7c-42b2-478b-be29-2e39232314e2)


## Screenshots

![App Screenshot](https://github.com/Sepehr13/Hydrogen/assets/21054209/6fd7b5a1-e5a1-4270-804b-462e3c2d1890)


## Installation

Install Hydrogen with npm

```bash
  npm install @sepehrazizi/hydrogen
```

Import it into your project

```typescript
    import { Hydrogen, RequestType } from '@sepehrazizi/hydrogen';
```

Use it.

```typescript
    let HRequest = Hydrogen.axiosEngine()
      .Type(RequestType.GET)
      .BaseUrl("https://hub.dummyapis.com/")
      .Destination(["delay", "?seconds=:delay"])
      .DestinationParamMap({"delay": 5})
      .Build();
      HRequest.execute().subscribe(
        {
          next: res => {
            console.log(res);           
          },
          error: e => {
            console.error(e);            
          }
        }
      );
```
## Donations

#### USDT (TRC20)

TRoSbkdspucUR9PTK2Wdieq9ZMvkohb7fm

#### TRX

TRoSbkdspucUR9PTK2Wdieq9ZMvkohb7fm

#### Bitcoin

bc1q0hzfgfhw6cpam90kj0s45h0jj222w7mrsexem7

#### Ethereum ETH Network

0xa7Ecf7D686C3B9521a4cC272effDf30B45779bf8


## Feedback

If you have any feedback, please reach out to us at a2XGAdThUm2PCmPXBZ4TZsVVxDc5M@proton.me

