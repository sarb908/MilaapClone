export const getlocaldata=(key)=>{
    if(key){
        const data=localStorage.getItem(key)
        return data
    }
}
 export const savelocaldata=(key,value)=>{
    if(key&&value)
    {
        localStorage.setItem(key,value)
    }
}