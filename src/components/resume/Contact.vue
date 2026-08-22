<template>
    <div class="text-center">
      <img class="profile-pic" src="../../assets/images/bio.jpg" />
      <h2>Ben Jefferies</h2>
      <h5>Software/DevOps Engineer</h5>
      <div>
        <p class="location">Bristol</p>
        <b-link href="tel:+447850445146">+44 7850 445146</b-link>
        <br>
        <b-link href="mailto:benjefferies@echosoft.uk">benjefferies@echosoft.uk</b-link>
        <br>
        <b-link href="https://github.com/benjefferies">github.com/benjefferies</b-link>
        <br>
        <b-link href="https://www.linkedin.com/in/benjjefferies">linkedin.com/in/benjjefferies</b-link>
        <br>
        <b-link href="https://echosoft.uk">echosoft.uk</b-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
@media screen and (max-width: 767px) {
  h2 {
      font-size: 1.6rem;
  }
  h5 {
      font-size: 1rem;
  }
  a {
      font-size: 0.6rem;
  }
}
a {
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
}
/* unvisited link */
a:link {
  color: #28364f;
}

/* visited link */
a:visited {
  color: #28364f;
}

/* mouse over link */
a:hover {
  color: #1c1c1e;
}

/* selected link */
a:active {
  color: blue;
}
.profile-pic {
  height: 80%;
  width: 80%;
  margin-bottom: 20px;
  border-radius: 50%;
}
.card {
  background-color: #00000000;
}
.location {
  margin-bottom: 0.25rem;
}
</style>
