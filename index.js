$( document ).ready(function() {
    console.log( "ready!" );
    $( "#go" ).on( "click", () => {
        console.log("Clicked");
        $( "#jumbotron" ).html(`${ $( "#fname" ).val() } ${ $( "#lname" ).val() }`);
        return false;
    })
});
