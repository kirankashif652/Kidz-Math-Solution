// FORWARD COUNTING


var Quetions = prompt(` Choose The Solution! 
  1 :Forward Counting 
  2: Backward Counting
  3: Tables
  `)


if(Quetions === "Forward Counting"){
  document.write("<h4>FARWARD COUNTING</h4>")

for(var i = 1; i <= 100; i += 10){
  for(var j= i; j < i + 10; j++ ){
      document.write( " " + j + " ");
  
  }
  document.write("</br>")
  }
  

  // BACKWARD COUNTING


}else if(Quetions === "Backward Counting"){
  document.write("<h4>BACKWARD COUNTING</h4>")
  for(var i = 100; i >= 1; i -= 10){
    for(var j= i; j > i - 10; j-- ){
    
        document.write(" " + j + " ");
    
    }
    document.write("</br>")
    }


    // TABLES
    
    
  }else if(Quetions === "Tables"){
  document.write("<h4>Table</h4>")

    for(var i=1; i<=10; i++){
          
      }
      
      var startFrom = +prompt("Enter Start Number")
      var endFrom = +prompt("Enter Ending Number")
      var tableOf = +prompt("Enter The Number ")
      
      for(var i= startFrom; i<=endFrom; i++){
          
          document.write( tableOf + "  X  " +  i + " = " +( tableOf*i) +  "</br>")
      }
    
    
      
    }else{
  document.write(`<div class="container"><h1>NOT AVAILABLE</h1></div>`)

    }
  

