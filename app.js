const fs = require('fs');
fs.writeFile('example.txt',"This is the file",(err)=>{
	if(err)
		console.log(err);
	else
		console.log('File created successfully');
});
fs.readFile('example.txt','utf8',(err,file)=>{
	if(err)
		console.log(err);
	else
		console.log(file);
});
fs.rename('example.txt','tutorial.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('File renamed successfully');
});
fs.appendFile('tutorial.txt'," new text",(err)=>{
    if(err)
        console.log(err);
    else
        console.log('File appended successfully');
});
fs.readFile('tutorial.txt','utf8',(err,file)=>{
	if(err)
		console.log(err);
	else
		console.log(file);
});
fs.unlink('tutorial.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('File deleted successfully');
});
fs.mkdir('Tutorial',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Folder created successfully');
});
fs.rmdir('Tutorial',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Folder deleted successfully');
});
fs.mkdir('Directory',(err)=>{
    if(err)
        console.log(err);
    else{
        fs.writeFile('./Directory/example.txt',"This is another file",(err)=>{
            if(err)
                console.log(err);
            else
                console.log('File inside Directory created successfully');
        });
    }
});
fs.unlink('./Directory/example.txt',(err)=>{
    if(err)
        console.log(err);
    else{
        fs.rmdir('Directory',(err)=>{
            if(err)
                console.log(err);
            else
                console.log('Directory removed successfully');
        });
    }
});
fs.readdir('Delete all my files',(err,files)=>{
    if(err)
        console.log(err);
    else{
        for(let file of files){
            fs.unlink('./Delete all my files/'+file,(err)=>{
                if(err)
                    console.log(err);
                else
                    console.log(file+' deleted successfully');                
            });
        }
    }
});
const rs = fs.createReadStream('poems.txt','utf8');
rs.on('data',(chunk)=>{
    console.log(chunk);
});