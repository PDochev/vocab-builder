<template>
  <div>
    <h1>Words</h1>
    <table id="words" class="ui celled compact table">
      <thead>
        <tr>
          <th>Englis</th>
          <th>German</th>
          <th colspan="3"></th>
        </tr>
      </thead>
      <tr v-for="(word, i) in words" :key="i">
        <td>{{ word.english }}</td>
        <th>{{ word.german }}</th>
        <td width="75" class="center aligned">
          <router-linnk :to="{ name: 'show', params: { id: word._id } }"
            >Show</router-linnk
          >
        </td>
        <td width="75" class="center aligned">Edit</td>
        <td width="75" class="center aligned">Delete</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from "../helpers/helpers";
export default {
  name: "words",
  data() {
    return {
      words: [],
    };
  },
  async mounted() {
    this.words = await api.getWords();
  },
};
</script>
