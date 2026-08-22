<template>
    <div class="text-center">
      <picture>
        <source type="image/webp" srcset="../../assets/images/bio.webp">
        <img
          class="profile-pic"
          src="../../assets/images/bio.jpg"
          alt="Ben Jefferies"
          width="640"
          height="640"
          loading="lazy"
          decoding="async"
        >
      </picture>
      <h2>Ben Jefferies</h2>
      <h5>Software/DevOps Engineer</h5>
      <div>
        <p class="location">Bristol</p>
        <a href="tel:+447850445146">+44 7850 445146</a>
        <br>
        <a href="mailto:benjefferies@echosoft.uk">benjefferies@echosoft.uk</a>
        <br>
        <a href="https://github.com/benjefferies">github.com/benjefferies</a>
        <br>
        <a href="https://www.linkedin.com/in/benjjefferies">linkedin.com/in/benjjefferies</a>
        <br>
        <a href="https://echosoft.uk">echosoft.uk</a>
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
