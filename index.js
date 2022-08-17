const fs = require('fs');
const http = require('http');
const { dirname } = require('path');
const url = require('url');


////////////////////////////////////////////////
//Server

//reading the file
//this will get excecuted only once;
const productData = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');


//this wil get executed again and again
const server = http.createServer((req,res)=>{
    // console.log(req.url);
    const pathName = req.url;

    if(pathName === '/'||pathName === '/overview') res.end("This is the OverView");
   
    else if(pathName === '/product') res.end("This is the product");
    
    else if(pathName === '/api') {
        res.end( productData);
    }
    
    else {
        res.writeHead(404,{
            'content-type':'text/html',
            'my-own-header':'hello-world',
        });
        res.end('<h1>Page not found! </h1>');
    };

});


server.listen(8000, '127.0.0.1', ()=>{
    console.log('Listening to req on port 8000');
})












////////////////////////////////////////////////////
//files

//Blocking , Syc way

// const textIn= fs.readFileSync('./starter/txt/input.txt', 'utf-8');

// console.log(textIn);

// const textOut = `This is what we know about the avocado : ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync('./starter/txt/output.txt',textOut);

// console.log("file has been written");


//Non-Blocking , async way


// fs.readFile('./starter/txt/starttt.txt', 'utf-8', (err, data1)=>{
//     if(err)return console.log("ERROR!");

//     console.log("The file we need to go to : " + data1);

//     fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2)=>{
//         console.log(data2);
//         console.log("\n");
//         fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3)=>{
//             console.log(data3);

//             fs.writeFile('./starter/txt/final.txt',`${data2}\n${data3}`, 'utf-8', err=>{
//                 console.log("the file has been written");
//             } )
//         });
//     })
// })

// console.log("will read File:");


