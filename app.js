<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <button id="counter1">Increment Count 1</button>
  <button id="counter2">Increment Count 2</button>

  <div>Count 1: <span id="result1">0</span></div>
  <div>Count 2: <span id="result2">0</span></div>
  <div id="result"></div>
  
  <script>
    const counter1Btn = document.querySelector('#counter1')
    const counter2Btn = document.querySelector('#counter2')
    const result1 = document.querySelector('#result1')
    const result2 = document.querySelector('#result2')
    const result = document.querySelector('#result')

      let countFor1 = 0;
      let countFor2 = 0;
    
    counter1Btn.addEventListener('click', function(e){
      e.preventDefault(); 
      result1.textContent = `${countFor1 += 1}`;
      finalResult(); 
    })

    counter2Btn.addEventListener('click', function(e){
      e.preventDefault(); 
      result2.textContent = `${countFor2 += 1}`;
      finalResult(); 
    })

      const finalResult = () => {
      if(countFor2 > countFor1){
        result.textContent = "count 2 is greater than count 1."
      }
       else if(countFor1 > countFor2){
          result.textContent = "count 1 is greater than count 2."
        }
        else{
           result.textContent = "count 1 is equal to count 2."
        }
      }
    
    
  </script>
</body>

</html>
