<template>
  <b-container class="text-left">
    <div class="text-center">
      <img class="profile-pic" src="../../assets/images/bio.jpg" />
      <h2>Ben Jefferies</h2>
      <h5>DevOps Engineer</h5>
    <div class="card">
      <div>
        <a href="mailto:>benjefferies@echosoft.uk">benjefferies@echosoft.uk</a>
      </div>
      <div>
        <a href="https://github.com/benjefferies">github.com/benjefferies</a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/ben-jefferies-0bb1b24b/">linkedin.com/ben-jefferies</a>
      </div>
    </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
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
</style>
