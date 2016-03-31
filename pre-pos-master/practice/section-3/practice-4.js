function create_updated_collection(collection_a, object_b) {
  //在这里写入代码


var newArray=[];
var cnt=1;
var CArray=[];

var newArrayC=[];

for(var i=0;i<collection_a.length-1;i++)
{
    if(collection_a[i]===collection_a[i+1])
        cnt++;
    else{

       newArrayC.push({key:collection_a[i],count:cnt});
       cnt=1;

       }

}

CArray=collection_a[collection_a.length-1].split("");
newArrayC.push({key:CArray[0],count:parseInt(CArray[CArray.length-1])});


 for(var i=0;i<newArrayC.length;i++)
   {
     for(var j=0;j<object_b.value.length;j++)
     {
          if(newArrayC[i].key===object_b.value[j]  &&  (newArrayC[i].count/3)>=1)
             newArrayC[i].count-=Math.floor(newArrayC[i].count/3);
     }
   newArray.push({key:newArrayC[i].key,count:newArrayC[i].count});
  }

   return newArray;  





}
