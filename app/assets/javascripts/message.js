$(function(){
  function buildHTML(message){
    var image = (message.image !== null) ? `<img src=${message.image} >` : ""

    var html =
     `<div class="message" data-message-id=${message.id}>
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.date}
          </div>
        </div>
      <div class="lower-message">
        <p class="lower-message__content">
          ${message.content}
        </p>
      </div>
        ${image}
    </div>`
    return html;
  }

  $(".new_message").on("submit", function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')  
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function(data){
        var html = buildHTML(data);
        // console.log(data)
        $('.messages').append(html);  
        // console.log(html)    
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');  
        $('form')[0].reset();
        $('#button').prop('disabled', false);
      })    
  })
})

// var a = 1;
    // if (a == 1) {
    //   "true"
    // } else {
    //   "false"
    // }
    // a == 1 ? "true": "false"

    // if ( message.image ) {
    //   var image = <img src=${message.image} ></img>
    //  } else {
    //    var image = ""
    //  }

    // if ( message.image ) {
    //   var html =
    //    `<div class="message" data-message-id=${message.id}>
    //       <div class="upper-message">
    // //         <div class="upper-message__user-name">
    // //           ${message.user_name}
    // //         </div>
    // //         <div class="upper-message__date">
    // //           ${message.date}
    // //         </div>
    // //       </div>
    // //       <div class="lower-message">
    // //         <p class="lower-message__content">
    // //           ${message.content}
    // //         </p>
    // //       </div>
    // //       <img src=${message.image} >
    // //     </div>`
    //   return html;
    // } else {
    //   var html =
    //    `<div class="message" data-message-id=${message.id}>
    //       <div class="upper-message">
    //         <div class="upper-message__user-name">
    //           ${message.user_name}
    //         </div>
    //         <div class="upper-message__date">
    //           ${message.date}
    //         </div>
    //       </div>
    //       <div class="lower-message">
    //         <p class="lower-message__content">
    //           ${message.content}
    //         </p>
    //       </div>
    //     </div>`
    //   return html;
    // };



