<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
</head>

<body class="container">
  <h1 class="my-3">Voting</h1>
  <div class="mb-4">
  <button class="btn btn-primary" id="counter1">Vote for John:</button>
  <button class="btn btn-success" id="counter2">Vote for Alice:</button>
     </div>
  
  <div class="mt-4"><h5 class="fw-medium fs-4">Vote for John:</h5> <span id="result1">0</span></div>
  <div class="mt-4"><h5 class="fw-medium fs-4">Vote for Alice:</h5> <span id="result2">0</span></div>
  
  
  <script>
    const counter1Btn = document.querySelector('#counter1')
    const counter2Btn = document.querySelector('#counter2')
    const result1 = document.querySelector('#result1')
    const result2 = document.querySelector('#result2')

      let countFor1 = 0;
      let countFor2 = 0;
    
    counter1Btn.addEventListener('click', function(e){
      e.preventDefault(); 
      result1.textContent = `${countFor1 += 1}`;
    })

    counter2Btn.addEventListener('click', function(e){
      e.preventDefault(); 
      result2.textContent = `${countFor2 += 1}`;
    })

      
    
    
  </script>
  <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
