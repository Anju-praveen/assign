arr=[1,1,3,5,7,6,8,5,6,4,7,6,0,2,1,6,8,9,5];
console.log(arr[0],arr[0]%2!=0)
//write pgm to find the frequent item of an array
let k=['s','p', 'm','s', 'd', 's'];
let maxvalue=0;
let maxcount=0;
for ( const i of k) {
if(k[i]==null){
    k[i]=1;

}else{
    k[i]++;

}
if(k[i]>maxcount){
    maxvalue=i;
    maxcount=k[i];

}
    
}
console.log('value','=', maxvalue,'count','=',maxcount)
//prgrm for loop that will iterate from 0 to 15for each iteration check if the number is odd or even and display the message to screen as odd or even
for (let i = 0;i <= 15;i++) {
   if (i%2===0) 
    {
    console.log(i+'is even');
    
   }
   else
   {
     console.log(i+ 'is odd');

   }
    
}
//prgm to find the sum of squre of the element of an array
let a=[1,2,3,4,5,6];
let sum=0;
for (let i = 0; i < a.length; i++) {
 sum+=a[i]*a[i];
 console.log(sum);   
    
}
