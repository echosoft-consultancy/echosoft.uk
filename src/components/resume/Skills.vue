<template>
  <div>
    <div class="card" v-bind:key='name' v-for="(skill, name) in skills">
    <h4 class="card-title text-center">{{name}}</h4>
    <b-row class="card-body">
      <b-col cols="12" v-bind:key='item.name' v-for="item in skill">
        <p>{{item.name}}</p>
        <b-progress :value='item.percentage' :max='100'></b-progress>
      </b-col>
    </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      skills:
        {
          'Java': [
            {
              name: 'Java',
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
          'Python': [
            {
              name: 'Python',
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
          'Web': [
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
          'Database': [
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
          'Devops': [
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
          'Cloud': [
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
          'Big Data': [
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
@media screen and (max-width: 767px) {
  h4 {
      font-size: 1.4rem;
  }
  .card {
    padding: 0px;
  }
}

.card {
  background-color: #00000000;
  padding-top: 15px;
}

.card-body {
  padding: 0px;
}

p {
  font-family: 'Darker Grotesque','Helvetica Neue', Helvetica, Arial, sans-serif, cursive !important;
  margin-bottom: 0px;
}
</style>
