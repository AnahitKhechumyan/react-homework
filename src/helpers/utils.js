export  function formatDate(dateStr=""){
    return dateStr.slice(0,10);
}
export  function shortStr(str="", length = 0){
    if(!length || length >= str.length){
        return str;
    } 
     return str.slice(0, length) + '...'; 
}