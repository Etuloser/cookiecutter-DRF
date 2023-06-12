<script setup lang="ts">
import ping from "@/api/ping"
async function say() {
  ping().then((response) => {
    console.log(response.data)
  })
}
</script>

<template>
  <button @click="say">Ping</button>
</template>
