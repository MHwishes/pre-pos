function count_same_elements(collection) {
  //在这里写入代码
var newArray=[];
var cnt=1;

var CArray=[];

for(var i=0;i<collection.length-1;i++)
{
    if(collection[i]===collection[i+1])
        cnt++;
    else{

       newArray.push({key:collection[i],count:cnt});
       cnt=1;

       }

}

CArray=collection[collection.length-1].split("");
newArray.push({key:CArray[0],count:parseInt(CArray[CArray.length-1])});

return  newArray;
}

