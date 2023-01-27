let users = $('.comments-slider__user');
let a = users.length
let currentIndex = 1
let feedback = $('.comments-slider__feedback')

console.log(a)
console.log(currentIndex)

$('.arrow-right').click(function () {
    hideFeedback()
    currentIndex += 1
    if (currentIndex > 2) {
        $('.arrow-right').disable()
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
        $('.arrow-left').disable()
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