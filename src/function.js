export const render=(pSelector,pData)=>{
    console.log( document.querySelector(pSelector))
    console.log(pData)
    document.querySelector(pSelector).innerHTML=pData
}
