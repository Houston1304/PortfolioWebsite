"use strict"

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
    const formArea = document.getElementById('contact');

    async function formSend(e){
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);
    
        if(error === 0){
            formArea.classList.add('_sending');
            let response = await fetch('sendmail.php', {
               method: 'POST',
               body: formData

            });
            if(response.ok){
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
                formArea.classList.remove('_sending');
            }else{
                alert('Ошибка');
                formArea.classList.remove('_sending');
            }

        } else{
            alert('Заполните обязательные поля или исправьте ошибки...');
        }
    }

    function formValidate(form){
        let error = 0;
        let formReg = document.querySelectorAll('._req');

        for(let index = 0; index < formReg.length; index++){
            const input = formReg[index];
            formRemoveError(input);

            if(input.classList.contains('_email')){
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                } 
            } else if(input.value === ''){
                formAddError(input);
                error++;
            }

        }
        return error;
    }

    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add("_error");
    }
    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove("_error");
    }
    // test email
    function emailTest(input){
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);

    }

});