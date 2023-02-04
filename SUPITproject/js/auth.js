//windows on load function
$(() => {
    const $submitBtn = $("form#auth button[type='submit']")
    $("form#auth").submit(async (e) => {     
        e.preventDefault();
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
          sessionStorage.setItem('token', response.data['token'])
          sessionStorage.setItem('username', response.data['username'])
          location.href = 'index.html';
        }

    });

  
});
