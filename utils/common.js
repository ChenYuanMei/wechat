import $ from 'jquery'
export default function (Vue, options) {
  Vue.prototype.createChat = (elem) => {
    // console.log(elem)
    var childOffset = elem.target.offsetTop
    var parentOffset = elem.target.parentNode.parentNode.offsetTop
    var childTop = childOffset - parentOffset
    console.log(elem.target.previousElementSibling)
// var clone = elem.target.childNodes[0].clone()
    var clone = 'xxx'
    var top = childTop + 12 + 'px'

    $(clone).css({'top': top}).addClass('floatingImg').appendTo('#chatbox')

    setTimeout(function () { $('#profile p').addClass('animate'); $('#profile').addClass('animate') }, 100)
    setTimeout(function () {
      $('#chat-messages').addClass('animate')
      $('.cx, .cy').addClass('s1')
      setTimeout(function () { $('.cx, .cy').addClass('s2') }, 100)
      setTimeout(function () { $('.cx, .cy').addClass('s3') }, 200)
    }, 150)

    $('.floatingImg').animate({
      'width': '68px',
      'left': '108px',
      'top': '20px'
    }, 200)

    var name = elem.find('p strong').html()
    var email = elem.find('p span').html()
    $('#profile p').html(name)
    $('#profile span').html(email)

    $('.message').not('.right').find('img').attr('src', $(clone).attr('src'))
    $('#friendslist').fadeOut()
    $('#chatview').fadeIn()

    $('#close').unbind('click').click(function () {
      $('#chat-messages, #profile, #profile p').removeClass('animate')
      $('.cx, .cy').removeClass('s1 s2 s3')
      $('.floatingImg').animate({
        'width': '40px',
        'top': top,
        'left': '12px'
      }, 200, function () { $('.floatingImg').remove() })

      setTimeout(function () {
        $('#chatview').fadeOut()
        $('#friendslist').fadeIn()
      }, 50)
    })
  }
}
