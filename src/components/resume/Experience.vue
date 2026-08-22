<template>
  <div>
    <h2 class="experience">Experience</h2>
    <div class="card" v-for="job in jobs" :key="job.title + job.period">
      <h3 class="card-title">{{ job.title }}</h3>
      <div class="card-body">
        <h5>{{ job.period }}</h5>
        <p v-if="job.description" v-html="job.description"></p>
        <ul v-if="job.tech && job.tech.length">
          <li v-for="item in job.tech" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  data () {
    return {
      jobs: [
        {
          title: 'Software Engineer, Prolific',
          period: 'Bristol (remote) — September 2024 - Present',
          description: 'Integral to a focused initiative to integrate Prolific onto the Google Cloud Marketplace to increase revenue streams and enhance organic traffic. Architecting and implementing an event-driven, serverless platform using event-sourcing patterns to deliver resilient, scalable, and efficient infrastructure. Collaborating across teams to refine the deployment pipeline, and ensure high availability for critical systems. Streamlining development workflows and enhancing platform observability to support rapid iteration cycles.',
          tech: [
            'Languages: TypeScript, Python, HTML, CSS, Terraform',
            'Frameworks: Vue, Vitest, Django',
            'DevOps: GCP, AWS, CDK, GitHub, Datadog, Terraform',
            'Data: Mongo, DynamoDB, SQS, EventBridge'
          ]
        },
        {
          title: 'Software/DevOps Engineer, VEV',
          period: 'France (remote) — September 2023 - August 2024',
          description: 'Led the transformation to a resilient, highly available Kubernetes environment governed by Infrastructure as Code (IaC), significantly improving its stability and scalability during its start-up phase. Revitalised monitoring and alert mechanisms, enabling more preemptive identification and management of system issues. Facilitated a shift towards increased team agility and enhanced communication, streamlining project execution and collaboration. Engaging and driving an event-driven re-architecture to enhance scalability and redundancy. Streamlined deployment of all applications to achieve multiple deployments a day.',
          tech: [
            'Languages: TypeScript, HTML, CSS, Terraform',
            'Frameworks: React, React Native, Express, Playwright, Mocha, NestJS',
            'DevOps: AWS, SOPS, GitHub, Kubernetes, Prometheus',
            'Data: Mongo, DynamoDB, Postgres, Kafka'
          ]
        },
        {
          title: 'Software/DevOps Engineer, Sero',
          period: 'Cardiff (remote) — February 2021 - September 2023',
          description: 'Helping grow the software engineering team whilst guiding and advising on best working and technical practices. Building an IoT platform to scale to millions of telemetry event data from thousands of home peripherals. Controlling and optimising house control to focus on carbon efficiency and comfort. Developing and building apps to support transitioning homes to carbon zero. Building a home control app from the ground up using Expo for low overhead, easy to deploy mobile development experience. Embracing and encouraging the use of generative AI within the team to optimise the team.',
          tech: [
            'Languages: TypeScript, HTML, CSS, Terraform',
            'Frameworks: React, Expo, React Native, Express, Apollo (GraphQL), TypeORM, Tailwind, Playwright, Cypress, Jest',
            'DevOps: AWS, GCP, SOPS, GitLab',
            'SaaS: Auth0, Sentry',
            'Data: Postgres, BigQuery, Mongo, InfluxDB'
          ]
        },
        {
          title: 'Software/DevOps Engineer, Yoello',
          period: 'Cardiff (remote) — May 2020 - February 2021',
          description: 'Developing and building a financial payment app for Yoello using Serverless, Python, and AWS stack for the backend. TypeScript, React, and React Native for the web and mobile apps.',
          tech: [
            'Languages: Python, TypeScript, HTML, CSS, Terraform',
            'Frameworks: Flask, SQLAlchemy, React, React Native, Cypress, pytest',
            'DevOps: AWS, Serverless, SOPS, GitLab',
            'SaaS: Auth0, Sentry',
            'Data: Postgres'
          ]
        },
        {
          title: 'DevOps Engineer, Moneyhub',
          period: 'Bristol (remote) — February 2020 - May 2020',
          description: 'Moneyhub runs a service to manage your finances. It also offers this product as a SaaS for businesses to help employees manage their finances. I led the project to migrate their infrastructure to Kubernetes in AWS (EKS). In migrating I designed the infrastructure and deployment model, putting in best practices such as GitOps to version their resources and Terraform, Continuous Deployment and promotion for infrastructure and software releases, and DevSecOps practices to securely manage secrets.',
          tech: [
            'Languages: Python, TypeScript, HTML, CSS, Terraform',
            'Frameworks: Terragrunt',
            'DevOps: AWS, Kubernetes, SOPS, Bitbucket'
          ]
        },
        {
          title: 'Software/DevOps Engineer, ForgeRock',
          period: 'Bristol (hybrid) — September 2018 - February 2020',
          description: 'ForgeRock develops the reference sandbox implementation for Open Banking at <a href="https://directory.ob.forgerock.financial">directory.ob.forgerock.financial</a>. This evolved into building a HA SaaS offering for banks to hit the PSD2 deadlines. We leveraged CI/CD best practices along with Kubernetes to deploy microservices, IAM and MongoDB. We supported the community that uses the sandbox via the official open banking Slack channel. At ForgeRock I had a hybrid DevOps/Developer role where I was involved in building and maintaining GKE instances, monitoring, alerting, and networking using Terraform. We continuously deploy using CI/CD into integration clusters through multi-region, high availability, production clusters via promotion using blue/green deployments using Helm, supported by Python scripts baked into Docker images. When in development mode I kept the software up to date with the OBIE specification, built a functional test suite in Kotlin and helped in making the software open source at <a href="https://github.com/OpenBankingToolkit/">github.com/OpenBankingToolkit</a>.',
          tech: [
            'Languages: Java, Kotlin, TypeScript, Python, HTML, CSS, Terraform',
            'Frameworks: Spring Boot, Angular, Cypress, JUnit',
            'DevOps: GCP, Kubernetes, Docker, Travis, GitHub Actions',
            'SaaS: ForgeRock IAM, Codefresh',
            'Data: MongoDB'
          ]
        },
        {
          title: 'Senior Software Engineer, ONS',
          period: 'Newport (hybrid) — October 2017 - September 2018',
          description: 'The Office for National Statistics produces official statistics for the UK. The project I worked on is a survey application used to ingest data for statistical analysis. The survey application is configured via an authoring tool to allow easy onboarding of new surveys. The application has been designed to be secure and scalable in AWS Elastic Beanstalk. Data is encrypted at rest and can only be decrypted when interacting with the user. The survey application needs to scale to the size of the nation as it will host the next official Census in which the nation will complete the survey online. The application is completely open-source, written in Python and can be found here <a href="https://github.com/ONSdigital/eq-survey-runner">github.com/ONSdigital/eq-survey-runner</a>.',
          tech: [
            'Languages: Java, Go, Python, HTML, CSS',
            'Frameworks: Flask, Django, SQLAlchemy, WTForms, Jinja, Spring Boot, pytest',
            'DevOps: AWS, Terraform, Cloud Foundry, Docker, Concourse, Travis',
            'Data: Postgres, Redis, RabbitMQ'
          ]
        },
        {
          title: 'Senior Software Engineer, Royal Bank of Scotland',
          period: 'Bristol (hybrid) — April 2017 - October 2017',
          description: 'Royal Bank of Scotland redesigned its corporate and private banking platform. The corporate and banking application supports the UK’s largest businesses in financial transactions. The web app is being rewritten as a single-page application utilising modern designs with a scalable microservice architecture.',
          tech: [
            'Languages: Java, JavaScript, HTML, CSS',
            'Frameworks: React, Babel, Webpack, Spring Boot',
            'DevOps: TeamCity'
          ]
        },
        {
          title: 'Senior Software Engineer, ONS',
          period: 'Newport (hybrid) — September 2016 - April 2017'
        },
        {
          title: 'Senior Big Data Engineer, UKHO',
          period: 'Taunton — February 2016 - August 2016',
          description: 'The United Kingdom Hydrographic Office is a leader in the marine nautical charting industry with a wealth of marine data. The greenfield project I was involved in enables UKHO to analyse its data to achieve further insights with the potential to provide additional products and services. Data collected is terabytes of sensory and geospatial data. Deployment of a production-scale Hadoop cluster on AWS EC2 instances at the press of a button is a key aspect to enable fast iterations resulting in faster development. Mentoring and upskilling other team members in technical and agile aspects. Researching technologies and performing presentations of research. I also researched the RFC for electronic nautical charts and designed software to parse them.',
          tech: [
            'Languages: Java, TypeScript, Python, HTML, CSS',
            'Frameworks: Oozie, Hive, MapReduce',
            'DevOps: AWS, Ansible, Docker',
            'Data: Hadoop, Spark, Elasticsearch'
          ]
        },
        {
          title: 'Java Developer, Landmark Solutions',
          period: 'Exeter — August 2015 - February 2016',
          description: 'Landmark Solutions is collaborating in a government-initiated project called Flood Re which is an insurance integration system for high flood risk properties. I collaborated in an agile team of 12 including developers, testers, BAs and the product owner. The outcome of the project was maintainable, automatically tested and deployed an array of microservices and web applications.',
          tech: [
            'Languages: Java, JavaScript, HTML, CSS, Terraform',
            'Frameworks: Angular, Bootstrap, Selenium, Dropwizard, Hibernate, Spring',
            'DevOps: GCP, Kubernetes, Docker, Travis, GitHub Actions',
            'Data: Postgres'
          ]
        },
        {
          title: 'Java Integrations Developer, Anatwine',
          period: 'Cheltenham — April 2015 - August 2015',
          description: 'Anatwine is a leading integration platform integrating the world’s largest fashion brands to the largest fashion retailer. Anatwine is hosted in AWS allowing them to leverage technologies such as S3, SQS, DynamoDB and scalable virtual instances. Responsibilities included designing, implementing, testing and documenting integration applications and core platform functionality; collaborating with the team to design and produce high-quality software; demonstrating correctness through testing; interrogating databases, log files, data feeds and XML; and identifying and interacting with stakeholders to ensure their needs were being met.',
          tech: [
            'Languages: Java, JavaScript, HTML, CSS',
            'Frameworks: Angular, Bootstrap, MuleESB',
            'DevOps: AWS',
            'Data: Postgres'
          ]
        },
        {
          title: 'Software Engineer, Gresham Computing',
          period: 'Bristol (hybrid) — June 2013 - April 2015',
          description: 'Gresham Computing plc is a leading software and services company that specialises in providing real-time financial transaction control solutions to the global matching and reconciliation market. I was involved in migrating the desktop client to a web app, playing a key part in designing, developing, and documenting REST APIs to serve a highly available, asynchronous web client where performance, scalability and security are essential. Automated testing is vital which meant acceptance tests, integration tests, and unit tests had to be written for all code/new features.<br />Due to tight deadlines and high demand for the product I was approached by the CTO to be a part of a rapid response team which meant working on-site in Singapore for 2 weeks to triage issues as they came in and do upfront analysis to give immediate feedback to customers. Since then I have assisted one of our largest customers in their go-live process in Chennai, India.',
          tech: [
            'Languages: Java',
            'Frameworks: Spring Boot, JUnit',
            'Data: H2, Oracle, MsSQL, GigaSpaces'
          ]
        },
        {
          title: 'Java Developer, Nominet',
          period: 'Oxford — August 2011 - June 2013',
          description: 'Whilst working at Nominet I was part of the growing Operational Applications team. As a team, we were responsible for supporting, designing, developing and deploying Nominet\'s core registry services used to support 10+ million domains in the .uk registry.<br />I led a project to deliver a scalable, high throughput system that persisted over 30 million records of data a month, allowing the user to query for results in milliseconds. Nominet\'s support team used the product to be able to aid customers with inquiries.',
          tech: [
            'Languages: Java, JavaScript, HTML, CSS',
            'Frameworks: Bootstrap, jQuery, Spring, Hibernate, JUnit',
            'Data: Elasticsearch, Oracle'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 767px) {
  h2 {
    text-align: center;
    font-size: 1.6rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  h5 {
    font-size: 1rem;
  }
  .card-body {
    padding-left: 0px;
    padding-right: 0px;
  }
  .card {
    padding-left: 0px;
    padding-right: 0px;
  }
  h2.experience {
    text-align: center;
  }
  ul,
  li {
    list-style: none;
    padding-inline-start: 0px;
  }
  li {
    list-style: none;
    padding-inline-start: 10px;
  }
  li:before {
    content: "\00b7";
    font-size: 1.2rem;
    padding-right: 10px;
  }
}
.experience {
  text-align: left;
}
.card-body >>> a {
  color: #28364f;
}
</style>
