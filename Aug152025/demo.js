function downLoad(url, cb){
    console.log("downloadng the url", url);
    setTimeout(function down(){
        console.log(" Downloading completed")
        const content = "krishna11vk.com";
        cb(content);
    }, 4000)

}

function createFile(data, cb){
    console.log("started downloding data into file",data);
    setTimeout(function down(){
        const fileName = "krishna.txt";
        cb(fileName);
    }, 5000)
}

function uploadFile(url, file, cb){
    console.log("downloading the file with ", file , "url", url);
    setTimeout(function downfile(){
        console.log("starting the file download");
        const UploadFileStatus = "Completed";
        cb(UploadFileStatus);
    })
}

downLoad ("www.xyz.com", function process(content){
    console.log("preparing  conetnet to upload", content);
    createFile("krishna.txt", function crecf(fileName){
        console.log("preparing to to upload into it",fileName);
        uploadFile("krishna11", "dummyfile", function uploadF(UploadFileStatus){
            console.log("uploaded file with name & status", UploadFileStatus)
        })
    })
})