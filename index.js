const {app,BrowserWindow}=require('electron');
const url=require('url');
const path=require('path');
let MW=null;
app.on('ready',()=>{
   MW=new BrowserWindow({});
   MW.loadURL(url.format({
        pathname:path.join(__dirname,'view/index.html'),
        protocol:'file',
        slashes:true
      }));
})



