function setFormToShowPages(item,urlDetail){
    var start =  '<div class="row content2">';
    var limkUrl= '<a href="'+urlDetail;
    if(item.is_main_pages_id==-1){
      limkUrl += 'group_page/'+item.pages_content_id +'" style="font-size: 20px;">';
      }
      else
      {
        limkUrl +='detail_page/'+ item.filesave.replace('/', '+')+' " style="font-size: 20px;">';
      }
    
      var content = ' <div class="col-2"></div><div class="col-10"><div class="row"><div class="col-sm-4 col-md-4"><div class="card">'           
      + '<img src="' +item.content_img +'" alt="images"  class="card-img-top"/> <div class="card-body">'
      +'<h5 class="card-title">'+item.title +'</h5> <p class="card-text">' +item.content
      + '</p><a href="#" class="btn btn-primary">Xem thêm</a></div></div></div></div></div></div></div>';
    return (start+content + ' </a>');
  }