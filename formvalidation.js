$(function(){

    $("form[name='registration']").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: Text
            },
            password: {
                required: true,
                minlength: 5
            },
            confirmpassword: {
                required: true,
                minlength: 5,
                equalTo : "#password"
            }
        },
        messages: {
            name: "Please enter your name",
        },
        email: {
            required: "Please enter your email address",
            email: "Please enter a valid email address"
        },
        password: {
            required: "Please provide a password",
            minlength: "Your password must be consist of at least 5 characters"
        },
        confirm_password: {
            required : "Please Re-enter password",
            minlength: "Your password must be consist of at least 5 characters",
            equalTo : "Please enter the same password as above"
        }
    });
});