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

async function steps(){
    try{
        const downloadData = await downLoad("www.abcd.com");
        return downloadData;

    } catch(error){
        console.log("got error ", error)
    } finally{
        console.log("ending");
    }
   
}

steps();
