//windows on load function
$(() => {
    const $submitBtn = $("form#auth button[type='submit']")
    $("form#auth").submit(async (e) => {     //The keyword async before a function makes the function return a promise:
        e.preventDefault();             //Description: If this method is called, the default action of the event will not be triggered.
        const response = await $.post({
            url: e.target.action,
            data: JSON.stringify(Object.fromEntries(new FormData(e.target))),
            processData: false,
            contentType: "application/json",
          });
        console.log(response);
        if(!response.isSuccess){
            $("#error").show();
            return;
        }
        if(response.isSuccess){
          localStorage.setItem('token', response.data['token']);
          localStorage.setItem('username', response.data['username']);
          location.href = 'index.html';
        }

    });

  
});
