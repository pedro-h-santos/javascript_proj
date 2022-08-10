
function soma(a,b){
    return a + b;
}
function fatorial(n){
        if(n===0){
            return 1;
        }else{
            return n*fatorial(n-1);
        }
}
module.exports = {soma,fatorial};
