export function getUserToken(){
    try{
        const item = window.localStorage.getItem("token");
        return item ? JSON.parse(item) : "";     
    }catch (error){
        console.log(error);
    }
}
export function setUserToken(token){
    try {
        window.localStorage.setItem("token", JSON.stringify(token));
    } catch (error) {
        console.error(error);
    }
}