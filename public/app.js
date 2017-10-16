 var app = new Vue({
    el: "#app",
    data: {
      siteList: [],
      unchangableList:[],
      topics:""
    },
    methods:{
      fetchData(){
        axios.get('https://cnodejs.org/api/v1/topics')
          .then(function(response){
            if (response.success = 'true'){
              alert('成功导入数据');
            } else { return;}
            //let jump = response.data.data;
            //alert(/*JSON.stringify(*/jump/*)*/);
            //alert(typeof response.data.data);  //object
            app.unchangableList = app.siteList = response.data.data; //response.data.data才能获得response中的data数组。
          }) 
      },
      sortTopics(){
        app.topics = event.target.value;
        //alert(`topics = ${app.topics}`);

        /*
        app.siteList = app.unchangableList.filter(function(arg){
          let kk = event.target.value;  //event.target.value能获取当前事件的对象
          return (arg[kk] === true);
        })
        */
        /* 
        var kk = event.target;
        alert(kk);
        */
      }
    }
  })
  app.fetchData();
  $('.special.cards .image').dimmer({
    on: 'hover'
  });