function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
/*
var newArray=[];
   for(var i=0;i<collection_a.length;i++)
       for(var j=0;j<collection_b[0].length;j++)
        {
             if(collection_a[i]===collection_b[0][j])
                 newArray.push(collection_a[i]);
 
        }
  return newArray;
}

*/

   var newArray=[];
   for(var i=0;i<collection_a.length;i++)
  {
        var item=collection_a[i];
        if(isExist(item,collection_b[0])){
           newArray.push(item);
         }
  }
      return newArray;
  }
  function isExist(element,collection_b)
  {
     for(var i=0;i<collection_b.length;i++)
     {
         if(element===collection_b[i])
         return true;
         
     }
   return false;
  }
