<template>
  <div class="projects-page">
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Personal Portfolio Website(VueJS)</h5>
          <p class="card-text">
          <ul>
            <li>Conceptualized, wire framed, designed, and developed a personal portfolio website to house individual
              projects and achievements.</li>
            <li>Developed with HTML, CSS, JavaScript, VueJS, Node</li>
          </ul>
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Dooley Oil Mobile App</h5>
          <p class="card-text">
          <ul>
            <li>Worked with a very small team of developers on an enterprise level application to track various
              information from drivers.</li>
            <li>Developed with Flutter/Dart, Bloc, and Firebase</li>
          </ul>
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Dooley Business Management Web Application</h5>
          <p class="card-text">
          <ul>
            <li>Worked with a very small team of developers on an enterprise level application to track information and
              manage drivers, managers, and admins.</li>
            <li>Developed with JavaScript, React and Firebase</li>
          </ul>
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Never Ride Alone (NEVRA) Mobile App</h5>
          <p class="card-text">
          <ul>
            <li>Worked closely with a team to create a scalable application with the intention of bringing like minded
              individuals together for recreational activities</li>
            <li>Developed with Flutter/Dart, Bloc, and Firebase</li>
            <li>Android: https://play.google.com/store/apps/details?id=com.nevraLlc.nevra_app</li>
            <li>IOS: https://apps.apple.com/us/app/nevra/id1567073420</li>
          </ul>
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">DOTS Web App</h5>
          <p class="card-text">
          <ul>
            <li>Worked with a small team of developers to design and create the concept for the DOTS Mobile and Web
              applications including conceptualizing, wire framing, designing, and developing.</li>
            <li>Developed with HTML, CSS, JavaScript, React, Redux, and MongoDB</li>
          </ul>
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">EDGLink (Dots) Mobile App (Elynk)</h5>
          <p class="card-text">
          <ul>
            <li>Worked with a small team of developers to design and create the concept for the DOTS Mobile and Web
              applications including conceptualizing, wire framing, designing, and developing.</li>
            <li>Developed with Flutter/Dart, Bloc, Firebase, and Squirrel</li>
            <li>Android: https://play.google.com/store/apps/details?id=com.edglab.edglink</li>
            <li>IOS: https://apps.apple.com/us/app/edglink/id1575577335</li>
          </ul>
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Personal Portfolio Website(React)</h5>
          <p class="card-text">
          <ul>
            <li>Conceptualized, wire framed, designed, and developed a personal portfolio website to house individual
              projects and achievements.</li>
            <li>Developed with HTML, CSS, JavaScript, React, Redux, Express, Node, MongoDB, and Anime.js</li>
          </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'ProjectsPage',
  props: {
  }
}
</script>
  
<style scoped>
.projects-page {
  display: flex;
  flex-wrap: wrap;
}
.container {
  display: flex;
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

.card {
  margin: 15px 10px 15px 10px;
}
</style>
  