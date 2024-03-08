<template>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Posts</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
  import PostService from '@/services/PostService';
  import { onMounted } from 'vue'
  
  const service = new PostService()
  const posts = service.getPosts()

  onMounted(async () => { 
    await service.fetchAll() 
  })
</script>

<style scoped>
  table{
    margin: auto;
  }
</style>