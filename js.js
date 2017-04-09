
///API request for dropdown manu



request('GET', "https://restcountries.eu/rest/v2/all").done(function (res) {
data =  JSON.parse(res.getBody());
console.log(data);
var sotregData = JSON.stringify(data)
localStorage.setItem("data",sotregData)


});

function findcour(data){
  var x= []
for(i=0;i<data.length;i++){
if(data[i].currencies[0].code=="AFN"){
x.push(data[i].flag)
console.log(x);
}

}

}
var dataObj= JSON.parse(localStorage.getItem('data'))
 var inputBox = document.getElementById('input');
 inputBox.onkeyup = function(){
var res =[]
if(inputBox.value.length !==0){
for(i=0;i<dataObj.length;i++){
 var firstNum = (data[i].name.length-data[i].name.length-data[i].name.length)+inputBox.value.length
var secNym = (data[i].name.length)  -inputBox.value.length
if(data[i].name.toLowerCase() ==inputBox.value+dataObj[i].name.substr(firstNum, secNym).toLowerCase()){
res.push(data[i].name);

}
}
console.log(res);
renderOption(res);
res=[]
}else{
  res=[]
  return  res;
}
}
function renderOption(res) {
  var res =res;

  var select= document.getElementById('geos')
     select.innerHTML=""
  for(i=0;i<res.length;i++){
   select.innerHTML+='<option value=" ">' +res[i]+ '</option>'

  }
 res= []

}
