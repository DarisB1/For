const A = document.querySelectorAll(input)

for (let i = 0; i < A.length; i++) {
    A[i].addEventListener('click', (event) => {
  
      for (let j = 0; j < A.length; j++) {
        if (A[j] !== event.target) {
          A[j].checked = false;
        }
      }
      const random = Math.floor(Math.random() * 5) + 1;
  
      document.getElementById(`checkbox${random}`).checked = true;
      console.log(true);
    });
  }