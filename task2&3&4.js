const { Promise } = require( "mongoose" );

async function awaitCall() {
    const data = await new Promise((resolve, reject)=>
        setTimeout(() => resolve('API RESPONSE WITH DATA'),2000))
    console.log(data);
    
}
awaitCall();

async function errorCall() {
    try {
        let success= true;
        const data = await new Promise (
            (resolve, reject) =>{
                setTimeout(()=>{
                    if(success)
                        resolve('API RESPONSE WITH DATA')
                    else
                        reject('API CALL FAILED');
                },2000)
            }
        )
    } catch (error) {
        console.log(error);
    }
}