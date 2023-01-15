//windows on load function
$(() => {
    const $submitBtn = $("form#auth button[type='submit']")
    $("form#auth").submit(async (e) => {     //The keyword async before a function makes the function return a promise:
        e.preventDefault();       
        console.log(e.target)    ;        //Description: If this method is called, the default action of the event will not be triggered.
        const response = await $.post({
            url: e.target.action,
            data: JSON.stringify(Object.fromEntries(new FormData(e.target))),
            processData: false,
            contentType: "application/json",
          });
        console.log($("form#auth").val());
        if(response.isSuccess){
            $("#error").show();
            return;
        }

    });

    const signIn = ({ username, token }) => {
        $(".nav-link[href='/prijava']").hide();
        $(".nav-link[href='/odjava']").show();
        $("#header-username").text(username);
        $.ajaxSetup({ headers: { Authorization: "Bearer " + token } });
        localStorage.setItem("username", username);
        localStorage.setItem("token", token);
      };
    
      const signOut = (e) => {
        if (e) {
          e.preventDefault();
          replaceRoute("/");
        }
        $(".nav-link[href='/prijava']").show();
        $(".nav-link[href='/odjava']").hide();
        $("#header-username").empty();
        $.ajaxSetup({ headers: { Authorization: "" } });
        localStorage.clear();
      };
});
