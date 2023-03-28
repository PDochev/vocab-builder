<template>
    <div>
      <h1>Show Word</h1>
  
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="germany flag"></i> German
        </div>
        <input type="text" readonly  :value="word.german"/>
      </div>
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="united kingdom flag"></i> English
        </div>
        <input type="text" readonly  :value="word.english"/>
      </div>
      <div class="actions">
        <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
          Edit word
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  
  </script>
  
  <style scoped>
  .actions a {
    display: block;
    text-decoration: underline;
    margin: 20px 10px;
  }
  </style>