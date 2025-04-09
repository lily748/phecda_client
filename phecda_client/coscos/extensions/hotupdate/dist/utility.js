
let fs = require('fs')
let path = require('path')

var emptyDir = function(fileUrl){   

    var files = fs.readdirSync(fileUrl);//读取该文件夹

    files.forEach(function(file){

        var stats = fs.statSync(fileUrl+'/'+file);

        if(stats.isDirectory()){
            emptyDir(fileUrl+'/'+file);
        }else{
            fs.unlinkSync(fileUrl+'/'+file); 
        }        
    });   

}

//删除所有的空文件夹
var rmEmptyDir = function(fileUrl){
    var files = fs.readdirSync(fileUrl);
    let f = fs.readFile
    let canRemove = true
    for (let index = 0; index < files.length; index++) {
        const fileName = files[index];
        let fPath = path.join(fileUrl, fileName)
        let stats=fs.statSync(fPath);
        if(stats.isDirectory()){
            canRemove = rmEmptyDir(fPath) && canRemove
        }else{
            canRemove = false
        }
    }  
    if(canRemove){
        fs.rmdirSync(fileUrl);
    }
    return canRemove
}

var deleteFolder = function(dirPath) {
    var files = [];
    if(!fs.statSync(dirPath).isDirectory()){
        console.error(dirPath, 'is not a dir')
        return
    }
    if( fs.existsSync(dirPath) ) {
        files = fs.readdirSync(dirPath);
        for (let index = 0; index < files.length; index++) {
            const fileName = files[index];
            let fPath = path.join(dirPath, fileName)
            let stats=fs.statSync(fPath);
            if(stats.isDirectory()){
                deleteFolder(fPath)
            }else{
                fs.unlinkSync(fPath)
            }
        }
        fs.rmdirSync(dirPath);
    }
};

let getAllFileNames = function(dirName){
    let all = []
    let files = fs.readdirSync(dirName)
    for (let i = 0; i < files.length; i++) {
        const name = files[i];
        let fPath = path.join(dirName, name)
        let stats=fs.statSync(fPath);
        if(stats.isDirectory()){
            all = all.concat(getAllFileNames(fPath));
        }else{
            all.push(fPath)
        }
    }
    return all
}

module.exports.deleteFolder = deleteFolder  //删除文件夹
module.exports.emptyDir = emptyDir  //清空文件夹
module.exports.rmEmptyDir = rmEmptyDir
module.exports.getAllFileNames = getAllFileNames

