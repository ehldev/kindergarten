"use strict";var vm=new Vue({el:"#app",data:{visible:!1},methods:{alertTest:function(){this.visible=!this.visible}}});window.onscroll=function(){var i=window.scrollY,s=document.getElementById("navbar");200<=i?s.classList.add("bg-primary"):s.classList.remove("bg-primary")};