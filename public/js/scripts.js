const clickMe = () => {
    console.log('clickMe clicked');
}

const addCards = (items) => {
    console.log(items);
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align"> <div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+ item.image +'"></img></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">'+ item.title +'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span><p class="card-text">'+item.description+'</p></div></div></div>';
        $('#card-section').append(itemToAppend);
    });
}

const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.image = $('#image').val();
    formData.link = $('#link').val();
    formData.description = $('#description').val();

    console.log('form data: ', formData);
    addDog(formData);
    //tell the server to save this to DB
}

const addDog = (dog) => {
    $.ajax({
        url: 'api/dogs',
        data: dog,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload();
        }
    });
}

const getDogs = () => {
    $.get('/api/dogs',(response)=>{
        if(response.statusCode === 200){
            addCards(response.data);
        }
    })
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitForm();
    })
    getDogs();
    $('.modal').modal();
    
});