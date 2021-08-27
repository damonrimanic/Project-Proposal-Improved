//function myFunction(imgs) {
//  var expandImg = document.getElementById("expandedImg");
//  var imgText = document.getElementById("imgtext");
//  expandImg.src = imgs.src;
//  imgText.innerHTML = imgs.alt;
//  expandImg.parentElement.style.display = "block";
//}

var app = new Vue({
  el: '#app',
  data: {
    artworks: 'SIT120',
  }
})

new Vue({
  el: '#gallery_images',
  data: {
    desktop: 'w=400&h=400&fit=crop&crop=faces,entropy&auto=format,compress 400w,',
    ipad: 'w=600&h=600&fit=crop&crop=faces,entropy&auto=format,compress 600w,',
    mobile: 'w=900&h=900&fit=crop&crop=faces,entropy&auto=format,compress 900w,',
    responsive: 'w=1200&h=1200&fit=crop&crop=faces,entropy&auto=format,compress 1200w',
    host: 'https://tom.imgix.net/artsy/',
    images: [ '1.jpg?', '2.jpg?', '3.jpg?', '4.jpg?', '5.jpg?', '6.jpg?']
  }, 
  methods: {
    vueSDK: function (i) {
      console.log(i);
      return this.host + this.images[i] + this.desktop + this.host + this.images[i] + this.ipad + this.host + this.images[i] + this.mobile + this.host + this.images[i] + this.responsive;
    }
  }
});

new Vue({
  el: '#app',
  data: {color: '#673AB7'}
})

// Regular expression from W3C HTML5.2 input specification:
// https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

new Vue({
  // root node
  el: "#app",
  // the instance state
  data: function() {
    return {
      name: "John Doe",
      email: {
        value: "jo@hnd.oe",
        valid: true
      },
      features: ["Reactivity", "Encapsulation", "Data Binding"],
      selection: {
        member: "0",
        framework: "vue",
        features: []
      },
      message: {
        text: `Dear Mr. President,\n...`,
        maxlength: 255
      },
      submitted: false
    };
  },
  methods: {
    // submit form handler
    submit: function() {
      this.submitted = true;
    },
    // validate by type and value
    validate: function(type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value) ? true : false;
      }
    },
    // check for valid email adress
    isEmail: function(value) {
      return emailRegExp.test(value);
    },
    // check or uncheck all
    checkAll: function(event) {
      this.selection.features = event.target.checked ? this.features : [];
    }
  },
  watch: {
    // watching nested property
    "email.value": function(value) {
      this.validate("email", value);
    }
  }
});

$(document).ready(function(){
   
  $('.btn-register').click(function(){
      
        setTimeout(function(){
          $('#login-form').removeClass('fadeIn');
          $('.register').removeClass(' zoomOut');
          $('#login-form').css('animation-delay','0');
          $('.register').css(' animation-delay','0');
          $   
      },10)
      
      $('#login-form').addClass('animated zoomOut');
      $('#login-form').css('display','none');
      $('.register').addClass('animated fadeIn');
      $('.register').css('display','block');
      $('.login-container').css('height','95vh');
  })  
  
  $('.btn-login').click(function(){
      setTimeout(function(){
          $('.register').removeClass('fadeIn');
          $('#login-form').removeClass(' zoomOut');
      },10)
      
      
      $('.register').addClass('animated zoomOut');
      $('.register').css('display','none');
      $('#login-form').addClass('animated fadeIn');
      $('#login-form').css('display','block');
      $('.login-container').css('height','70vh');
  }) 
  
})

