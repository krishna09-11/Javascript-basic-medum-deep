function downLoad(url){
    return new Promise(function exec(resolve, reject){
        console.log("starting to preparefile",url);
        setTimeout(function down(){
            console.log("downloading files");
            const name = "krishnuu";
            resolve(name);
        }, 6000)
    }
) 
}

function writeFile(data){
    return new Promise (function except(resolve, reject){
        console.log("preparing to fupload a url in file", data);
        setTimeout(( function upload(){
            const fileName = " krishna 11vk";
            resolve(fileName);
        }),2000);
    })

}

function uploadFile(data, url){
    return new Promise (function expres(resolve, reject){
        console.log("starting to upload into file", data, url);
        setTimeout (function prse(){
            console.log("started url pushing into file");
            const uploadedStatus = " completed";
            resolve(uploadedStatus);
        }, 2000)
    })
}

downLoad("www.xyz.com")
.then (function processWrite(value){
    console.log("executing the proceswrite",value);
})
.then(function processUpload(value){
    console.log("executing the proceUpload",value)
})
.catch(function (err){
    console.log("catching error",err);
})
.finally(function f(value){
    console.log(value, "finally")
})