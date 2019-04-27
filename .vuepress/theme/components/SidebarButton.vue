<template>
  <div class="sidebar-button" @click="$emit('toggle-menu')">
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512">
      <path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path>
    </svg>
  </div>
</template>

<style lang="stylus">
.sidebar-button
  cursor pointer
  display none
  width 20px
  height 20px
  position absolute
  top 0
  right 0
  .icon
    color $accentColor
    display block
    width 20px
    height 20px

@media (max-width: $MQMobile)
  .sidebar-button
    display block
</style>
