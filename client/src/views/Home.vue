<template>
  <div class="home">
     <button @click="showMessageForm= !showMessageForm"
      type="button" class="btn btn-primary">Show mwssageForm</button>
  <form v-if="showMessageForm" @submit.prevent="addMessage">
      <div class="form-group">
        <label for="username">User name</label>
       <input type="text"
          v-model="message.username"
         class="form-control"
         id="username"
         placeholder="anonim"
         value="anonimous"
         required
       >
      </div>
      <div class="form-group">
       <label for="subject">Subject</label>
       <input type="text"
          v-model="message.subject"
          class="form-control"
          id="subject"
          placeholder="Enter a subject"
          value="anonimous"
          required
          >
       </div>
        <div class="form-group">
        <label for="subject">Message</label>
       <input type="text"
          v-model="message.message"
          class="form-control"
          id="subject"
          placeholder="Enter a message"
          value="anonimous"
          required
          >
       </div>
       <div class="form-group">
        <label for="image Url">Image Url</label>
       <input type="url"
          v-model="message.imageURL"
          class="form-control"
          id="imageURl"
          placeholder="Enter a Image URL"
          value="anonimous"
          required
          >
       </div>
       <button type="submit"> Submit</button>
 </form>

   <div class="list-unstyled" v-for="message in reversedMessages" :key="message._id">
       <hr />
    <li class="media" >
      <img :src="message.imageURL" class="mr-3" :alt="message.subject">
     <div class="media-body">
       <h4 class="mt-0 mb-1">{{message.subject}}</h4>
       <h5 class="mt-0 mb-1">{{message.subject}}</h5>

        {{message.message}}
        <br />
        <small>{{message.created}}</small>
     </div>
    </li>
    <hr />
   </div>
  </div>
</template>

<script>
// @ is an alias to /src

const API_URL = 'http://localhost:4000/messages';
const POST_URL = 'http://localhost:4000/message';

export default {
  name: 'Home',
  data: () => ({
    showMessageForm: true,
    messages: [],
    message: {
      username: 'Anonymous',
      subject: '',
      message: '',
      imageURL: '',

    },
  }),

  computed: {
    reversedMessages() {
      return this.messages.slice().reverse();
    },
  },

  mounted() {
    fetch(API_URL).then((response) => response.json()).then((result) => {
      this.messages = result;
    });
  },

  methods: {
    addMessage() {
      fetch(POST_URL, {
        method: 'POST',
        body: JSON.stringify(this.message),
        headers: {
          'content-type': 'application/json',
        },
      }).then((response) => response.json()).then((result) => {
        console.log(result);
      });
    },
  },

};
</script>

<style scoped>
hr {
  border-top: 1px solid red;
}

img {
  max-width: 300px;
  height: auto;
}
</style>
