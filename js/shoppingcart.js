  $(function () {
  if (localStorage.getItem('goods')) {
    // 获取购物车数据
    var goodsArr = JSON.parse(localStorage.getItem('goods'))
    // 获取所有数据
    $.ajax({
      url: './data/goods.json',
      type: 'get',
      dataType: 'json',
      cache: false,
      success: function (json) {
        var domStr = ''
        $.each(json, function (index, item) {
          $.each(goodsArr, function (i, obj) {
            if (item.id === obj.id) {
              domStr += `
              <li>
                <input type="checkbox" class="ched">
                <img src="${item.imgurl}" alt="">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <div class="form">
                <button class="rdc">-</button>
                <input type="text" value="${obj.num}" class='txt'>
                <button class="add">+</button>
                </div>
                <em data-id="${item.id}">删除</em>
              </li>
              `
            }
          })
        })
        $('.list').html(domStr)
        return json
      }
    })
    // 删除商品
    $('.list').on('click', 'li em', function () {
      // 当前点击的商品id
      var id = $(this).attr('data-id')
      $.each(goodsArr, function (index, item) {
        if (item.id === id) {
          goodsArr.splice(index, 1)
          return false
        }
      })
      // 删除dom结构
      $(this).parent().remove()
      // 更新本地存储的数据
      localStorage.setItem('goods', JSON.stringify(goodsArr))
      if (goodsArr.length <= 0) {
        localStorage.removeItem('goods')
        var newLi = '<li>购物车暂无数据！</li>'
        $('.list').html(newLi)
      }
    })
    //减少商品数量
    $('.list').on('click', 'li .rdc', function () {
      var aa = $(this).parent().next().attr("data-id");
      var _this = this
      $.each(goodsArr, function (index, item) {
        if (item.id === aa) {
          var sum = item.num - 1
          $(_this).next().val(sum) //商品数量-1
          item.num = sum;
          if (sum <= 1) { //判断小于1不可用
            $(_this).prop('disabled', 'disabled')
          }
        }
      })
      localStorage.setItem('goods',JSON.stringify(goodsArr))
    })
    //增加商品数量
    $('.list').on('click', 'li .add', function () {
      var aa = $(this).parent().next().attr("data-id");
      var _this = this
      $.each(goodsArr, function (index, item) {
        if (item.id === aa) {
          var sum = item.num + 1
          $(_this).prev().val(sum) //商品数量-1
          item.num = sum;
          if (sum > 1) { //判断大于1可用
            $(_this).siblings('.rdc').removeAttr('disabled')
          }
        }
      })
      localStorage.setItem('goods',JSON.stringify(goodsArr))
    })

    //商品全选
    $('.settle .all').click(function(){
      var flag=$('.settle .all').attr('checked');
      var obj=JSON.parse(localStorage.getItem('goods'));
      var num = 0;
      //判断全选是否选中
      if(flag){
       $('.ched').attr('checked','true')
       //遍历所有选中的
       $('.list .ched:checked').each(function(index,ele){
        var pic=$(ele).siblings('p').html()
        num += parseInt(pic);
        $('.settle i').html(num)
       })
      }else{
       $('.ched').removeAttr('checked')
       $('.settle i').html(0)
      }
    })

      // 选中展示价格
      $('.list').on('click','.ched',function(){
        var pic=$(this).siblings('p').html()
        if($(this).prop('checked')){
        $('.settle i').html(pic)
        }else{
          $('.settle i').html(0)
        }
      })
    
  } else {
    var newLi = '<li>购物车暂无数据！</li>'
    $('.list').html(newLi)
  }
})