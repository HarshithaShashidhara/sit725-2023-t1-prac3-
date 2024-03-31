const cardList = [
    {
        title: "Kitten 2",
        image: "images/card-image-1.jpg",
        link: "About Kitten 2",
        description: "Demo description about kitten 2"
    },
    {
        title: "Kitten 3",
        image: "images/card-image-2.jpg",
        link: "About Kitten 3",
        description: "Demo description about kitten 3"
    }
];

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!");
};

// Wait for the document to be ready
$(document).ready(function(){
    // Add an event listener to the "Click Me" button
    $('#clickMeButton').click(function() {
        // Call the clickMe function when the button is clicked
        clickMe();
    });

    // Your other code...
});

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    console.log("Form Data Submitted: ", formData);
    alert("Form submitted successfully!");
    location.reload();
};

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = `
            <div class="col s4 center-align">
                <div class="card medium">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${item.image}">
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more</i></span>
                        <p><a href="#">${item.link}</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            </div>`;
        $("#card-section").append(itemToAppend);
    });
};



$(document).ready(function(){
    $('.materialboxed').materialbox();
    
    // Function to show the modal
    $('#clickMeButton').click(function() {
        $('#modal1').modal('open');
    });
    
    // Function to handle form submission
    $('#formSubmit').click(function() {
        submitForm();
    });
    
    addCards(cardList);
    $('.modal').modal();
});