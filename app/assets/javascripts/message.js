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
        $('.messages').append(html);  
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');  
        $('form')[0].reset();
        $('#button').prop('disabled', false);
      })
      .fail(function(){
        alert('メッセージ送信に失敗しました');
      });
      return false;
  });
});

$(function() {
  //省略
  
  var reloadMessages = function() {
    var last_message_id = $(".message:last").data("message-id");
    var group_id= $(".left-box__title").data("group-id");
    $.ajax({
      url: `/groups/${group_id}/api/messages`,
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id},
    })
    .done(function(messages) {
      var insertHTML = '';
      messages.forEach(function(message){
        insertHTML = buildHTML(message);
      });
    });
  };
  setInterval(reloadMessages, 5000);
});