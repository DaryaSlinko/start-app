let users = $('.comments-slider__user');
let a = users.length
let currentIndex = 1
let feedback = $('.comments-slider__feedback')



$('.arrow-right').click(function () {
    hideFeedback()
    currentIndex += 1
    if (currentIndex > 2) {
        currentIndex = 2
    }
    var user = users.eq(currentIndex);
    users.removeClass('active-img')
    user.addClass('active-img')
    showFeedback()
})


$('.arrow-left').click(function () {
    hideFeedbackLeft()
    currentIndex -= 1
    if (currentIndex < 0) {
        currentIndex = 0
    }
    var user = users.eq(currentIndex);
    users.removeClass('active-img')
    user.addClass('active-img')
    showFeedbackLeft()
})


function showFeedback() {
    // if (currentIndex > 2) {
    //     currentIndex = 0
    // }
    feedback.eq(currentIndex).css('display', 'flex').removeClass('active-user-prev').addClass('active-user-next')

}

function hideFeedback() {
    if (currentIndex === 0) {
        feedback.eq(currentIndex).removeClass('active-user-next').removeClass('active-user-prev').css('transform', 'translateX(-570px)')
        feedback.eq(currentIndex + 1).removeClass('active-user-next').removeClass('active-user-prev').css('transform', 'translateX(-570px)')
    }
    if (currentIndex === 1) {
        feedback.eq(currentIndex).removeClass('active-user-next').removeClass('active-user-prev').css('transform', 'translateX(-1140px)')
        feedback.eq(currentIndex + 1).removeClass('active-user-next').removeClass('active-user-prev').css('transform', 'translateX(-1140px)')
    }
}

function hideFeedbackLeft() {
    if (currentIndex === 1) {
        feedback.eq(currentIndex).removeClass('active-user-next').removeClass('active-user-prev').css('transform', 'translateX(0)')
        feedback.eq(currentIndex - 1).removeClass('active-user-next').removeClass('active-user-prev').css('transform', 'translateX(0)')
    }

    if (currentIndex === 2) {
        feedback.eq(currentIndex).removeClass('active-user-next').removeClass('active-user-prev').css('transform', 'translateX(-570px)')
        feedback.eq(currentIndex - 1).removeClass('active-user-next').removeClass('active-user-prev').css('transform', 'translateX(-570px)')
    }
}

function showFeedbackLeft() {
    // if (currentIndex < 0) {
    //     currentIndex = 2
    // }
    feedback.eq(currentIndex).css('display', 'flex').removeClass('active-user-next').addClass('active-user-prev')
}


//выбор плана по клику

$('.plan').click(function (event) {
    if (!($(this).hasClass('chosen-plan'))) {
        showWhiteChosenPlan.call(this)
    }

})

function showWhiteChosenPlan() {
    if ($(this).hasClass('plan1')) {
        $('.plan1').addClass('chosen-plan')
        $('.plan2').removeClass('chosen-plan')
    }
    if ($(this).hasClass('plan2')) {
        $('.plan2').addClass('chosen-plan')
        $('.plan1').removeClass('chosen-plan')
    }

}

//выбор компания или индивидуально
$('.individudal').css('color', 'black')

$('.choose-plan__option').click(function (event) {
        showWhiteChosenOption.call(this)
})

function showWhiteChosenOption() {
    if ($(this).hasClass('individudal')){
        $('.chosen-option').css({
            'transform' : 'translateX(0)'
        });
        $('.individudal').css('color', 'black')
        $('.company').css('color', '#a0a1a4')
    }
    if ($(this).hasClass('company')){
        $('.chosen-option').css({
            'transform' : 'translateX(124px)'
        });
        $('.individudal').css('color', '#a0a1a4')
        $('.company').css('color', 'black')
    }


}


//Меню открытие

$('.burger-menu').click(function () {
    $('.top-menu').removeClass('close').addClass('open')
});

$('.menu-items img, .menu-items li, .menu__socials, .menu-items .btn, .menu-items svg').click(function () {
    $('.top-menu').removeClass('open').addClass('close')
});