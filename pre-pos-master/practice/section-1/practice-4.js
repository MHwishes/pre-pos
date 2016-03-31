function collect_same_elements(collection_a, object_b) {
  //在这里写入代码

/*
var newArray=[];

   for(var i=0;i<collection_a.length;i++)

       for(var j=0;j<object_b.value.length;j++)
        {
             if(collection_a[i].key===object_b.value[j])
                 newArray.push(collection_a[i].key);
 
        }
  return newArray;

}
*/

   var newArray=[];
   for(var i=0;i<collection_a.length;i++)
  {
        var item=collection_a[i].key;
        if(isExist(item,object_b)){
           newArray.push(item);
         }
  }
      return newArray;
  }
  function isExist(element,object_b)
  {
     for(var i=0;i<object_b.value.length;i++)
     {
         if(element===object_b.value[i])
         return true;
         
     }
   return false;
  }
