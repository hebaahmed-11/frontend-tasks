function pow(base,power){
    
   var p=1;
    for(var i=0;i<power;i++){
        
      p=p*base;
    }
    return p;
    
}
pow(5,2);
console.log(`the result =${pow(6,2)}`);