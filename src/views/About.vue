<template>
  <div class="container">
    <div class="a-name">
      <h1>Andriar Mafazan</h1>
      <h1>Rizkiansah</h1>
    </div>
    <div class="a-proffesion">Software Engineer</div>
    <div class="container-body">
      <div class="a-title">Description</div>
      <div class="a-desc">
        I am a person who can adapt quickly and like to learn new things. I like
        to sharing knowledge with others and i like the culture of startup
        company. I have experience in working on team for planning and executing
        a project using agile framework in developing applications.
      </div>
    </div>

    <div class="container-body">
      <div class="a-title">Detail</div>
      <div class="a-detail">
        <div class="a-group">
          <div class="a-group-detail">
            <div class="a-detail-title">Birth</div>
            <div class="a-detail-body">May 1995</div>
          </div>
          <div class="a-group-detail">
            <div class="a-detail-title">Address</div>
            <div class="a-detail-body">Jambu, Kabupaten Semarang</div>
          </div>
        </div>

        <div class="a-group">
          <div class="a-group-detail">
            <div class="a-detail-title">Email</div>
            <div class="a-detail-body">andriar.fazzan@gmail.com</div>
          </div>
          <div class="a-group-detail">
            <div class="a-detail-title">Develop</div>
            <div class="a-detail-body">Web, Mobile</div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-body">
      <div class="a-title">Skills</div>
      <div class="a-skills">
        <div class="a-skills-div" v-for="(skill, index) in skills" :key="index">
          <div>{{ skill.name }}</div>
          <div>{{ skill.level }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      skills: [
        {
          name: "Laravel",
          level: "intermediate",
        },
        {
          name: "Codeigniter",
          level: "intermediate",
        },
        {
          name: "PHP",
          level: "intermediate",
        },
        {
          name: "Node JS",
          level: "intermediate",
        },
        {
          name: "Vue JS",
          level: "intermediate",
        },
        {
          name: "React Native",
          level: "intermediate",
        },
        {
          name: "React JS",
          level: "intermediate",
        },
        {
          name: "Express JS",
          level: "Novice",
        },
        {
          name: "Postgre SQL",
          level: "intermediate",
        },
        {
          name: "MySQL",
          level: "intermediate",
        },
        {
          name: "MongoDB",
          level: "Novice",
        },
        {
          name: "Typescript",
          level: "intermediate",
        },
        {
          name: "Javascript",
          level: "intermediate",
        },
        {
          name: "ES6",
          level: "intermediate",
        },
        {
          name: "FIGMA",
          level: "Novice",
        },
        {
          name: "Git",
          level: "intermediate",
        },
        {
          name: "Agile",
          level: "intermediate",
        },
        {
          name: "Trello",
          level: "intermediate",
        },
        {
          name: "Asana",
          level: "Novice",
        },
        {
          name: "Bitbucket",
          level: "Novice",
        },
        {
          name: "Jira",
          level: "Novice",
        },
      ],
    };
  },
};
</script>
