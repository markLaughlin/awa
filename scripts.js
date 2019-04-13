function handleClick(){
    console.log("handleSubmission function ran")
    
    $(".submission").click(function (event){
        event.preventDefault();
        console.log("submission button clicked")
        let n = $(".nDogs").val();
        getDogs(n);

    });
}
function getDogs(n){
    console.log("getDogs function ran");
    console.log(`number of random dog images to be returned: ${n}`);  
    
    fetch(`https://dog.ceo/api/breeds/image/random/${n}`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson.message));
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    handleClick();
  });


    
 