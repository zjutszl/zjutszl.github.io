 var app = new Vue({
    el: "#app",
    data: {
      siteList: [],
      topics:"",
      warning:[],
      limit_topic:10,
      page_number:0,
      tab_string:"share"
    },
    methods:{
      fetchData(){
        axios.get('https://cnodejs.org/api/v1/topics',{
          params:{
            tab:this.tab_string,
            page:this.page_number,
            limit:this.limit_topic
          }
        })
          .then(function(response){
            if (response.success = 'true'){
              if (app.warning.indexOf("fetchData") === -1){
                app.warning.push("fetchData");
              }
            } else { return;}
            //let jump = response.data.data;
            
            //alert(typeof response.data.data);  //object
            let middle =response.data.data;
            for (var kk in middle){
              kk.visible = false;
            }
            app.siteList = middle;
           
            //app.siteList = response.data.data; //response.data.data才能获得response中的data数组
          }) 
      },
      chooseTab (){
        app.tab_string = event.target.value;
        app.fetchData();
      },
      openContent (){
        //...
      }
    }
  })
  app.fetchData();

  //图片的切换
  $('.special.cards .image').dimmer({
    on: 'hover'
  });
  //可关闭的消息
  $('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;