<template>
  <div>
    <div class="card" v-bind:key="name" v-for="(skill, name) in skills">
      <h4 class="card-title text-center">{{ name }}</h4>
      <div class="row card-body">
        <div class="col-12" v-bind:key="item.name" v-for="item in skill">
          <p>{{ item.name }}</p>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              :style="{ width: item.percentage + '%' }"
              :aria-valuenow="item.percentage"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
      skills: {
        Languages: [
          {
            name: 'TypeScript',
            percentage: 95
          },
          {
            name: 'Python',
            percentage: 90
          },
          {
            name: 'Java/Kotlin',
            percentage: 90
          },
          {
            name: 'Go',
            percentage: 75
          },
          {
            name: 'HTML',
            percentage: 90
          },
          {
            name: 'CSS',
            percentage: 90
          }
        ],
        DevOps: [
          {
            name: 'AWS',
            percentage: 95
          },
          {
            name: 'GCP',
            percentage: 90
          },
          {
            name: 'Terraform',
            percentage: 95
          },
          {
            name: 'Kubernetes',
            percentage: 90
          },
          {
            name: 'Docker',
            percentage: 90
          },
          {
            name: 'CI/CD',
            percentage: 95
          },
          {
            name: 'Serverless',
            percentage: 85
          },
          {
            name: 'SOPS',
            percentage: 85
          }
        ],
        'Web/Mobile': [
          {
            name: 'React',
            percentage: 90
          },
          {
            name: 'React Native',
            percentage: 85
          },
          {
            name: 'Expo',
            percentage: 85
          },
          {
            name: 'Next.js',
            percentage: 80
          },
          {
            name: 'Vue',
            percentage: 80
          },
          {
            name: 'Express',
            percentage: 85
          },
          {
            name: 'Django',
            percentage: 80
          },
          {
            name: 'Flask',
            percentage: 85
          },
          {
            name: 'Spring Boot',
            percentage: 85
          }
        ],
        Testing: [
          {
            name: 'Jest',
            percentage: 85
          },
          {
            name: 'pytest',
            percentage: 90
          },
          {
            name: 'Playwright',
            percentage: 80
          },
          {
            name: 'JUnit',
            percentage: 90
          }
        ],
        'Database/Messaging': [
          {
            name: 'Postgres',
            percentage: 90
          },
          {
            name: 'MongoDB',
            percentage: 85
          },
          {
            name: 'DynamoDB',
            percentage: 85
          },
          {
            name: 'InfluxDB',
            percentage: 75
          },
          {
            name: 'BigQuery',
            percentage: 80
          },
          {
            name: 'Elasticsearch',
            percentage: 85
          }
        ],
        SaaS: [
          {
            name: 'Auth0',
            percentage: 85
          },
          {
            name: 'Sentry',
            percentage: 80
          },
          {
            name: 'Datadog',
            percentage: 80
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
  font-family: "Darker Grotesque", "Helvetica Neue", Helvetica, Arial,
    sans-serif, cursive !important;
  margin-bottom: 0px;
}
</style>
