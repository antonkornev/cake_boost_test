<template>
  <div id="app" class="container-fluid p-0">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
*{
  outline: none !important;
  box-shadow: none !important;
}
button{
  outline: none !important;
  box-shadow: none!important;
}
div{
  -webkit-user-select: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.pointer {
  cursor: pointer;
}
.pointer:hover{
  color: white !important;
}
.table-block {
  height: 100%;
  overflow: auto;
}

::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-thumb {
  width: 2px;
  background-color: #a49fa5;
}
.vm--overlay {
  background-color: rgba(0, 0, 0, 0.7) !important;
}
.contentTable > div,
.item {
  background-color: #3b7173;
}
.contentTable > div:hover,
.item:hover {
  background-color: #417c7e;
}
.dataTableRow:hover, .dataTableRow:hover > .even{
  background-color: #417c7e;
}
.edit_I:hover{
  color: #541aff;
  cursor: pointer;
}
.copy_I:hover{
  color: #07faeb;
  cursor: pointer;
}
.delete_I:hover{
  color: #ff0002;
  cursor: pointer;
}
.stop_I:hover{
  color: red;
  cursor: pointer;
}
.start_I:hover{
  color: green;
  cursor: pointer;
}
.onlyLogin_I:hover{
  color: #d632ff;
  cursor: pointer;
}
.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter, .slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
