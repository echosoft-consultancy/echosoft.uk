<template>
  <b-container>
    <b-row v-bind:key='skill.name' v-for='skill in skills[id]'>
      <b-col>
        <p>{{skill.name}}</p>
        <b-progress :value='skill.percentage' :max='100'></b-progress>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {'id': {'default': 'java'}},
  data () {
    return {
      skills:
        {
          'java': [
            {
              name: 'Java 8',
              percentage: 95
            },
            {
              name: 'Spring Boot',
              percentage: 80
            },
            {
              name: 'Spring Framework',
              percentage: 90
            },
            {
              name: 'Spark Java',
              percentage: 85
            },
            {
              name: 'Junit 4',
              percentage: 95
            },
            {
              name: 'Mockito',
              percentage: 95
            }
          ],
          'python': [
            {
              name: 'Python 3',
              percentage: 90
            },
            {
              name: 'Flask',
              percentage: 90
            },
            {
              name: 'SQL Alchemy',
              percentage: 85
            },
            {
              name: 'Django',
              percentage: 75
            },
            {
              name: 'pytest',
              percentage: 90
            },
            {
              name: 'Jinja',
              percentage: 90
            }
          ],
          'web': [
            {
              name: 'React',
              percentage: 80
            },
            {
              name: 'VueJS',
              percentage: 75
            },
            {
              name: 'Bootstrap',
              percentage: 85
            },
            {
              name: 'Angular',
              percentage: 70
            },
            {
              name: 'REST',
              percentage: 95
            }
          ],
          'database': [
            {
              name: 'Postgres',
              percentage: 90
            },
            {
              name: 'MongoDB',
              percentage: 80
            },
            {
              name: 'DynamoDB',
              percentage: 85
            },
            {
              name: 'ElasticSearch',
              percentage: 85
            }
          ],
          'devops': [
            {
              name: 'Kubernetes',
              percentage: 90
            },
            {
              name: 'Docker',
              percentage: 90
            },
            {
              name: 'Concourse',
              percentage: 90
            },
            {
              name: 'Travis',
              percentage: 90
            },
            {
              name: 'Jenkins',
              percentage: 80
            },
            {
              name: 'Ansible',
              percentage: 80
            },
            {
              name: 'Terraform',
              percentage: 85
            }
          ],
          'cloud': [
            {
              name: 'AWS',
              percentage: 90
            },
            {
              name: 'GCP',
              percentage: 85
            },
            {
              name: 'Digital Ocean',
              percentage: 75
            }
          ],
          'bigdata': [
            {
              name: 'Hadoop',
              percentage: 85
            },
            {
              name: 'Hive',
              percentage: 75
            },
            {
              name: 'Pig',
              percentage: 65
            },
            {
              name: 'Spark',
              percentage: 75
            },
            {
              name: 'NiFi',
              percentage: 85
            }
          ]
        }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

p {
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}
</style>
