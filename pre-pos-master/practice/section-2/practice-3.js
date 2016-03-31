function count_same_elements(collection) {
  //在这里写入代码
var newArray=[];
var cnt=1;
var   num;
var ArrayC=[];

for(var i = 0; i < collection.length; i++) {
        
        if(collection[i].length > 1) {
            
           var num = parseInt(collection[i].substring(2, collection[i].length));
           var ArrayC = collection[i].split(''); 
           
           for(j = 0; j < num; j++) {
              // collection.push(words[0])
              collection.splice(i, 0, ArrayC[0]);
           }
          
           collection.splice(i+num, 1);
        }       
    }
      
for(var i=0;i<collection.length;i++)
{
    if(collection[i]===collection[i+1])
        cnt++;
    else{

       newArray.push({name:collection[i],summary:cnt});
       cnt=1;

       }

}

return  newArray;
}
