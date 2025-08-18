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

function doAfterReciving(value){
    iter.next(value)
}

 async function steps(){
    const downloadData = await downLoad("www.abcd.com");
    console.log("data download is", downloadData);
    const writeData = await writeFile(downloadData);
    console.log("write data", writeData);
    const uploadData = await uploadFile(writeData, "www.abd.com");
    console.log("uploaded data", uploadData);
    return uploadData;
}

steps();
