# AC S2-3 A11: Shorten URL practice

## Features
1. 使用者輸入網址後，可以取得由5碼英數組成的亂碼短網址，點擊後會導向原本的網頁。
2. 使用者輸入相同網址，會取得一樣的短網址。
3. 使用者可以點擊Copy按鈕來複製產出的短網址。

## Built with
* [VS Code](https://code.visualstudio.com/) - 開發環境
* [Node.js](https://nodejs.org/en/) Ver.14.16.0 - 執行環境
* [Express.js](https://www.npmjs.com/package/express) Ver.4.18.1 - 應用程式框架
* [Express-handlebars](https://www.npmjs.com/package/express-handlebars) Ver.6.0.6. - 樣版引擎
* Mongoose Ver.6.4.4

## Installing
1. Install Node.js and npm in advance
2. Clone this project
```
git clone https://github.com/how200284/AC2-3_Shorten_URL.git
```
3. Install and require dependencies
```
npm install
```
4. Install nodemon
```
npm i nodemon
```
5. Set environment variable: MongoDB_URI
```
export MONGODB_URI=[your connection string]
```
6. Start server
```
npm run dev
```
7. Execute successfully if seeing following message
```
This express server is running on localhost:3000
mongodb connected!
```
