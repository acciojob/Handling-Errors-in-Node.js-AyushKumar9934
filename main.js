const { response } = require('express');
const fs = require('fs');
const http=require("http");
const server=http.createServer((req,res)=>{
  console.log("request recieved by server");
 
})
let filePath="./output.txt"
function printFileContents(filePath) {
  // TODO: Use fs.readFile to read the file contents
 fs.readFile(filePath,'utf-8',(err,data)=>{
  if(err){
    console.log(`Column ${filePath} not found in the CSV.`)
  }
  else{
    console.log(data);
  }
 })
}

printFileContents(filePath);
server.listen(3000,"localhost",()=>{
  console.log("listing to port 3000...")
})

// TODO: Call printFileContents with the command-line argument
