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
    <form id="voteBooth">
      <input type="radio" name="vote" value="John" />Vote for John
      <input type="radio" name="vote" value="Alice" class="mx-3"/>Vote for Alice
  <button type="submit" class="btn btn-primary mx-3" id="count">Vote</button>
    </form>
     </div>
  
  <div class="row"> 
  <div class="mt-4 col-md-6"><h5 class="fw-medium fs-4">Vote count for John:</h5> <span id="result1">0</span></div>
  <div class="mt-4 col-md-6"><h5 class="fw-medium fs-4">Vote count for Alice:</h5> <span id="result2">0</span></div>
  <div class="mt-4 col-md-6"><h5 class="fw-medium fs-4">Current Winner:</h5> <span id="result" class="fw-medium fs-6">No votes yet!</span></div>
    </div>
  
  <script>
    const voteBooth = document.querySelector('#voteBooth')
    const result1 = document.querySelector('#result1')
    const result2 = document.querySelector('#result2')
    const result = document.querySelector('#result')
    

      let countFor1 = 0;
      let countFor2 = 0;
    
    
      voteBooth.addEventListener('submit', function(e){
      e.preventDefault(); 
    const votes = document.querySelectorAll('input[name="vote"]:checked')
        let newVote = votes[0].value;   
        if(newVote == "John"){    
      result1.textContent = `${countFor1 += 1}`;
          compareVotes();
        } 
        else {    
      result2.textContent = `${countFor2 += 1}`;
          compareVotes();
        }
    })

    
    const compareVotes = () => {
      if(countFor2 > countFor1){
        result.textContent = `Alice is winning with ${countFor2} votes!`
      }
      else if(countFor2 < countFor1){
        result.textContent = `John is winning with ${countFor1} votes!`
      } else{
         result.textContent = `It's a tie with ${countFor2} each!`
      }
    }
      
    
    
  </script>
  <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
