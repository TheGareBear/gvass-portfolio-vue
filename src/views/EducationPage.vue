<template>
  <div class="edu-page">
    <div class="card" style="width: 50vw">
      <div class="card-body">
        <h5 class="card-title">The Array School of Technology and Design</h5>
        <h6 class="card-subtitle mb-2">August 2020 - December 2020</h6>
        <p class="card-text">
        <ul>
          <li>Created a Pixel Art Maker using HTML, CSS, and JavaScript</li>
          <li>Created a web chatroom with a partner using React, Redux, Express, Node, MongoDB and Web Sockets and
            deployed to Heroku</li>
            <a href="https://garreck-kyle-chatroom.herokuapp.com/" target="_blank">glibness chat</a>
          <li> Created a redesign for a local non-profit corporation in React, Redux, Node, Express and MongoDB</li>
          <li> Created a mobile application using React Native for an existing local theater company</li>
        </ul>
        </p>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'EducationPage',
  props: {
  }
}
</script>
  
<style scoped>
.edu-page {
  display: flex;
  justify-content: center;
}
.card {
  margin: 15px;
}

h5 {
  color: black;
}

h6 {
  color: black;
}

li {
  color: black;
}
</style>
  