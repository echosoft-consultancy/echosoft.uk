<template>
  <div>
    <h2 class="references">References</h2>
    <p class="linkedin">
      <a href="https://www.linkedin.com/in/benjjefferies/details/recommendations" target="_blank" rel="noopener">
        LinkedIn recommendations
      </a>
    </p>
    <div class="card" v-for="reference in references" :key="reference.author">
      <h3 class="card-title">{{ reference.author }}</h3>
      <div class="card-body">
        <h5>{{ reference.role }}</h5>
        <p v-for="(paragraph, index) in reference.quotes" :key="index">{{ paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'References',
  data () {
    return {
      references: [
        {
          author: 'Hanno Klausmeier',
          role: 'Managing Director at VEV Platform Services France',
          quotes: [
            'Ben Jefferies worked for us during a good year (2023/2024). He helped us enormously in the area of DevOps. He taught us a lot of good technical lessons. Especially my development team highly benefited from him. I definitely do recommend Ben should you be in the need to have a technical very skilled person in the DevOps area.'
          ]
        },
        {
          author: 'Claude Rossi',
          role: 'Principal Software Engineer at VEV Platform Services France',
          quotes: [
            'I\'m happy to recommend Ben Jefferies, who worked as our DevOps consultant at VEV for the past 11 months. Ben played a key role in setting up our AWS infrastructure from scratch using Kubernetes, Terraform, Helm charts, and more.',
            'Ben brought a strong DevOps culture to our VEV-IQ team, which was mainly composed of developers. His background in development helped bridge the gap and foster better collaboration and communication within the team. He also set up our CI/CD pipeline, making it incredibly easy for us to deliver new releases smoothly and efficiently.',
            'Ben\'s work on monitoring, alerting, and improving our VEV-IQ platform\'s stability and scalability was outstanding. He made our systems more resilient and our team more agile. Ben\'s contributions have had a lasting impact, and I highly recommend him for any DevOps role.'
          ]
        },
        {
          author: 'Kylie Baker',
          role: 'Head of Software Engineering at Sero',
          quotes: [
            'Ben was already a part of our team when I joined. He was one of the first to welcome me and I appreciated him testing my position on a few things to find where we were aligned and where our opinions differed.',
            'I always knew that if I wanted an honest opinion and some healthy challenge on something Ben would be there. He is genuinely a brilliant person to work with and will support however he can.',
            'Ben is highly skilled in both Software Engineering and DevOps and had a big impact on our ability to deliver quickly. Ben is one of the best contractors I\'ve worked with and I\'d recommend him if you need a strong engineer on your team who can get started quickly.'
          ]
        },
        {
          author: 'Jack Thomson',
          role: 'Tech Lead at Sero',
          quotes: [
            'Ben is an exceptional software engineer with qualities that extend beyond his technical expertise. He possesses a broad knowledge base, allowing him to concentrate on identifying and understanding problems rather than merely focusing narrowly on their solutions. This comprehensive approach enhances his ability to contribute innovative insights to a team, making him a valuable asset.',
            'Having worked with Ben, I can personally attest to his professionalism and collaborative spirit. His ability to communicate complex ideas clearly and work seamlessly within a team environment made our collaboration productive and enjoyable. His thoughtful approach to problem-solving and an unerring commitment to excellence made a lasting impression on me, and I look forward to any opportunity to work with him again in the future.'
          ]
        },
        {
          author: 'Quentin Castel',
          role: 'Tech Lead at ForgeRock',
          quotes: [
            'Ben has been part of the ForgeRock Open Banking team for more than a year. After only a couple of weeks in the field, Ben was already up to speed and contributing significantly in the project.',
            'It was at a critical moment when Ben joined, as we needed to move from a simple hosted applications to a multi-tenancy cloud services in GCP with tonnes of new features on top. Having him in the team was key for us, and we successfully met our crazy deadlines thanks to him.',
            'On top of being an excellent software engineer that can write code in any languages, Ben is also a great DevOps engineer. We would have not been able to provide a cloud service on GCP in 4 months without his help. He helped fulfilling the bridge between the developers and the operational engineers, making us all DevOps engineers.',
            'Not only he contributed a lot to the project, I also think he helped the team to become better software engineers. By promoting the DevOps culture, setting CI/CD for this project, providing test frameworks to allow better test coverage and code maintenance, and many more good principles, I can say today that Ben helped me improving my software engineer skills.',
            'If you are looking for a full stack developer or a DevOps engineer, Ben can do both at the same time. You will soon find Ben an indispensable asset and wish there were more Ben engineers.'
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
}
.references {
  text-align: left;
}
.linkedin {
  margin-bottom: 1rem;
}
a {
  color: #28364f;
}
</style>
