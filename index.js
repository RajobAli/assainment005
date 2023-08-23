var buttons = document.getElementsByTagName("button");
var resultDiv = document.getElementById("result");
var resultDive = document.getElementById("resultt");

var makepursesbtn = document.getElementById("button1");






var totalValue = 0;

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
    var value = parseFloat(this.getElementsByTagName("p")[0].textContent);
        

    
       
 var text = this.getElementsByTagName("h1")[0].textContent;

        
       
        totalValue += value;
  
        resultDiv.innerHTML  ="<p>" + text +  " : " +value + "</p>"

         resultDiv.innerHTML ="<p>" + " totalValue" + " : " +totalValue.toFixed(2) + "</p>"  

        const p = document.createElement("p");
      
      
       p.innerText = text 
    
        resultDive.appendChild(p);
        

        const ss = totalValue.toFixed(2);
        const btn = document.getElementById("btn");
        const btnn = document.getElementById("btnn");
        const inp = document.getElementById("ddd");
        const inputtwo = document.getElementById("dddd");
        var applybtn = document.getElementById("btn");
        var inputtwovaluee = inputtwo.value;
    
        
      
    
        const discount = document.getElementById("discount");
        const pay = document.getElementById("pay");
        const modalvalue = document.getElementById("modalid");
        const inputvalue = inp.value;

    
     

                

        if(totalValue>0){
         
            btn.disabled = false;
            btn.style.color = 'red';
            makepursesbtn.disabled = false;
            makepursesbtn.style.color = 'white'
            makepursesbtn.style.backgroundColor = 'black'

        }
        if(totalValue>200){
         
            btnn.disabled = false;
            btnn.style.color = 'red';
            applybtn.disabled = false;
            applybtn.style.color = 'white';
            applybtn.style.backgroundColor = 'black'
          


        }
       
        if(totalValue>200 && inputtwovaluee =='SELL200'){
            const dis = ((totalValue*20)/ 100);
                discount.innerText ="Discount   " + dis.toFixed(2);
                pay.innerText ="Total Pay " + (totalValue  - dis).toFixed(2)
              

            
        }
    });
}

  
modalvalue.addEventListener('click',function(){
  
    resultDiv.innerText = '';
    resultDiv.innerText = '' ;
 
    });        

   

   
      


    
