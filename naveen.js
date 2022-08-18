// List of Bills
Bills=[
    Bill1={A:2000,B:200,C:1000},
    Bill2={A:1500,B:0,C:0,D:1300},
    Bill3={B:1000,C:0}
]
// Average of each Bill 
const avgEachbill=(object)=>{
rate=[]
sumOfList=0
avg=0
for(i in object){
    rate.push(object[i])
}
for(i of rate){
    sumOfList=sumOfList+i
}
avg=sumOfList/rate.length
return avg
}
//Paid amount of the user in each bill
const paidBill=(object)=>{
avg=avgEachbill(object) // Average Function
for(i in object){
object[i]=object[i]-avg
}
return object
}
// Paid by each Bill
for(i in Bills){
    Bills[i]=paidBill(Bills[i])
}
settlement={}//Final Settlement Object
for(i=0;i<Bills.length;i++){
for(e in Bills[i]){
    if(e in settlement){
        settlement[e]=settlement[e]+Bills[i][e]
    }
    else{
        settlement[e]=Bills[i][e]
    }
}
}

pay={} // have to pay
get={} // have to get
for(i in settlement){
if(settlement[i]==0){
    console.log(i+" no Need to pay")
}
else if(settlement[i]<0){
    pay[i]=settlement[i]
}
else if(settlement[i]>0){
    get[i]=settlement[i]
}}

// Sorting the object 
const objectSorting=(Object)=>{
l=[]
for(i in Object){
l.push(Object[i])
}
function sort(a,b){
return a-b
}
l.sort(sort)
sortedObject={}
for (e of l){
for(i in Object){
    if(Object[i]==e){
        sortedObject[i]=e
    }}}
return(sortedObject)
}

// Sorting the object in Reverse
const reverseShorting=(Object)=>{
l=[]
for(i in Object){
l.push(Object[i])
}
function sort(a,b){
return a-b
}
l.sort(sort)
l.reverse()
reverseSortedObject={}
for (e of l){
for(i in Object){
    if(Object[i]==e){
        reverseSortedObject[i]=e
    }}}
return(reverseSortedObject)
}

get=reverseShorting(get)
pay=objectSorting(pay)
console.log("Payment have to Get:",get) 
console.log("Payment have to Pay:",pay) 

// Zero Remove function for Object
const zeroRemove=(object)=>{
zeroRemovedObject={}
for(i in object){
    if(object[i]!=0){
        zeroRemovedObject[i]=object[i]
    }}
return zeroRemovedObject
}

// Settling the Amount
for(p in pay){
for(g in get){
    if(get[g]>Math.abs(pay[p])){
        console.log(`${p} has to pay ${Math.abs(pay[p]).toFixed(2)} to ${g}`)
        get[g]=(get[g])-(Math.abs(pay[p]))
        pay[p]=0
        pay=zeroRemove(pay)
    }
    else if(get[g]<Math.abs(pay[p])){
        console.log(`${p} has to pay ${Math.abs(get[g]).toFixed(2)}  to ${g}`)
        pay[p]=Math.floor((get[g]))-Math.floor(Math.abs(pay[p]))
        get[g]=0
        get=zeroRemove(get)           
    }
    else if(get[g]==Math.abs(pay[p])){
        console.log(`${p} has to pay ${Math.abs(pay[p]).toFixed(2)} to ${g}`)
        get[g]=0
        pay[p]=0
        get=zeroRemove(get)
        pay=zeroRemove(pay)
    }
}
}