    //set some variabels
    var totalprice=document.querySelectorAll('#finalPrice')[0]
    totalprice.value=final()
    var price=document.querySelectorAll('.price')
    //set some attributs
    for(let i=0;i<document.querySelectorAll('.price').length;i++){
      price[i].setAttribute('oroginalprice',`${price[i].textContent}`)
      document.querySelectorAll('.like')[i].setAttribute('onclick','heartf()')
      document.querySelectorAll('.minus-btn')[i].setAttribute('onclick','minus()')
      document.querySelectorAll('.plus-btn')[i].setAttribute('onclick','plus()')
      document.querySelectorAll('.Quant')[i].setAttribute('onkeyup','Quantity()')
      document.querySelectorAll('.delete')[i].setAttribute('onclick','deleter()')
    }
    //set chooser in all functions to know wicth item the funcions will work on
      for (let i = 0; i < document.querySelectorAll('.Item').length; i++) {
        document.querySelectorAll('.Item')[i].onmouseover = function () {
          chooser = i
        }
      }
    //main functions
    function heartf(){
      var heart= document.querySelectorAll("i")[chooser]
         if(heart.style.color==='red'){
           heart.style.color='black'
         }
         else{
           heart.style.color='red'
         }
    }
     function plus(){
      Quant=document.querySelectorAll('.Quant')[chooser]
      Quant.value++
      newprice=price[chooser]
      newprice.textContent=price[chooser].getAttribute('oroginalprice')*Quant.value
      newprice.textContent=cheker(newprice.textContent)
      totalprice.value=final()
    }
     function minus(){
      Quant=document.querySelectorAll('.Quant')[chooser]
      if(Quant.value>1){
        Quant.value--
        newprice=price[chooser]
        newprice.textContent=price[chooser].getAttribute('oroginalprice')*Quant.value
        newprice.textContent=cheker(newprice.textContent)
        totalprice.value=final()
      }
    }
    function Quantity(){
      Quant=document.querySelectorAll('.Quant')[chooser]
      if(Quant.value>0&&!Quant.value.includes(".")&&Quant.value!==""){
        newprice=price[chooser]
        newprice.textContent=price[chooser].getAttribute('oroginalprice')*Quant.value
        newprice.textContent=cheker(newprice.textContent)
        totalprice.value=final()
      }
      else{
        alert("-please write numbers bigger than 0                                                     -write numbers without separator                                                          -don't write letters/symbols...")
          Quant.value=1
          newprice=document.querySelectorAll('.price')[chooser]
          newprice.textContent=price[chooser].getAttribute('oroginalprice')*Quant.value
          newprice.textContent=cheker(newprice.textContent)
          totalprice.value=final()
      }
      }
      function deleter(){
        document.querySelectorAll('.Item')[chooser].style.display='none'
        price[chooser].textContent=0
        totalprice.value=final()
      }
      //calculator of the total price
     function final(){
      var i=0
      var prices=document.querySelectorAll('.price')
      var finaleprice= document.querySelectorAll('#finalPrice')[0] 
      finaleprice.value=0
      while(i<document.querySelectorAll('.price').length){
        finaleprice.value=parseFloat(finaleprice.value)+parseFloat(prices[i].textContent)
        i++
      }
      finaleprice.value=cheker(finaleprice.value)
      return finaleprice.value
    }
    //to make sure the total price didin't change
    totalprice.onkeyup=function(){
      totalprice.value=final()
    }
    totalprice.onkeydown=function(){
      totalprice.value=final()
    }
    totalprice.onblur=function(){
      totalprice.value=final()
    }
    //check any price if thier is a visual bug
    function cheker(thenumber){
      a=[]
      result=[]
      a=thenumber.split("")
      for(let i=0;i<a.length;i++){
        if(a[i].includes(".")){
          result.push(a[i])
          i++
          result.push(a[i])
          i++
          if(a[i]===undefined){
            result.push("0")
          }
          else{
            result.push(a[i])
          }
          break
        }
        else{
          result.push(a[i])
        }
      }
      if((result.join('').includes("."))){
        return result.join('')
      }
      else{
        return result.join('')+".00"
      }
        }
