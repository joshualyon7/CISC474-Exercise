$( document ).ready(function() {

    console.log( "ready!" );
    $( "#go" ).on( "click", () => {
        $( "#jumbotron" ).html(`${ $( "#fname" ).val() } ${ $( "#lname" ).val() }`);
        return false;
    })

});
