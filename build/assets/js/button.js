
      let thisForm = document.querySelector('#myForm');
      thisForm.addEventListener('submit', (e)=>{
          e.preventDefault();
          thisForm.querySelector('.loading').classList.add('d-block');
          
          
          emailjs.sendForm('service_h2td2uq', 'template_2ftt8qi', '#myForm', 'user_3ISJti3XikNyve9gc2yef')
            .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
              thisForm.querySelector('.error-message').classList.remove('d-block');
                window.location.href = 'thank.html';
            }, function(error) {
                console.log('FAILED...', error);
                thisForm.querySelector('.loading').classList.remove('d-block');
                thisForm.querySelector('.error-message').innerHTML = 'An Error Occurred';
                thisForm.querySelector('.error-message').classList.add('d-block');
            });  
              
      });
