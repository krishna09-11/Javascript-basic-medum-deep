function downLoad(url, time){
    return new Promise(function exec(resolve, reject){
        console.log("starting to preparefile",url);
        setTimeout(function down(){
            console.log("downloading files");
            const name = "krishnuu";
            resolve(name);
        }, time)
    }
) 
}

const p1 = downLoad("www.xyz.com", 2000)
const p2 = downLoad("www.Abc.com",1000)
const p3 = downLoad("www.klm.com",6000)
Promise.all([p1,p2,p3]).then(function fullFillmentHandler(values){
    console.log("All values ",values)
})