<template>
      <b-container>
        <b-row class="overflow-auto">
          <b-col cols="12">
            <b-pagination-nav no-page-detect align="fill" hide-goto-end-buttons :pages="pages" use-router></b-pagination-nav>
          </b-col>
          <router-view></router-view>
        </b-row>
      </b-container>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
      pages: [
        { link: '/about/java', text: 'Java' },
        { link: '/about/python', text: 'Python' },
        { link: '/about/web', text: 'Web' },
        { link: '/about/database', text: 'Database' },
        { link: '/about/devops', text: 'DevOps' },
        { link: '/about/cloud', text: 'Cloud' },
        { link: '/about/bigdata', text: 'Big Data' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #28364f !important;
}
.link {
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  color: #28364f !important;
}
</style>
