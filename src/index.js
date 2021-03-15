module.exports = function check(str, bracketsConfig) {
  str=str.split('');
  let check=[false,false,false,false];
  let configCheck=['(','[','{','|',  
    /*[['(', ')']],
    [['[', ']']],
    [['{', '}']],
    [['|', '|']],*/
  ]
  str=str.map((bracket,index,array)=>{
    switch (bracket){
      case '(': {
        if (array.indexOf(')',index+1)!=-1) { 
          array=array.splice(index,1);
          array=array.splice(array.indexOf(')',index+1),1);
          check[0]=true;
          array[index]='';
        } else {
          check[0]=false;
          return false;}
        break;
      }
      case '[': {
        if (array.indexOf(']',index+1)!=-1)  {
        array=array.splice(index,1).splice(array.indexOf(']',index+1),1);
        check[1]=true;
        array[index]='';
      }else {
        check[1]=false;
        return false;}
        break;
      }
      case '{': {
        if (array.indexOf('}',index+1)!=-1) {
        array=array.splice(index,1).splice(array.indexOf('}',index+1),1);
        check[2]=true;
        array[index]='';
      } else {
        check[2]=false;
        return false;}
        break;
      }
      case '|': {
        if (array.indexOf('|',index+1)!=-1) {
        array=array.splice(index,1).splice(array.indexOf('|',index+1),1);
        check[3]=true;
        array[index]='';
        } else {
          check[3]=false;
          return false;}
        break;
      }
      default: return false;
    }
    return array[index];
  });

if (str.includes(false)) return false
else {
  for (let i=0;i<=3;i++){
      if (check[i]){
      if (!(bracketsConfig.flat().includes(configCheck[i]))) return false;
    }
  }return true;
}
}
