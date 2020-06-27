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
          name: "Postgre SWL",
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

<style lang="scss">
.container {
  padding-left: 100px;
  padding-right: 100px;
  margin-bottom: 100px;
  margin-bottom: -100px;
}

.a-name {
  border: solid;
  border-color: #2f495e;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-top-width: 0px;
  padding-left: 20px;
  color: #fff;
}

.a-proffesion {
  padding-top: 10px;
  padding-left: 22px;
  font-size: 18px;
  color: #bdc3c7;
}

.container-body {
  padding-top: 20px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;
}

.a-title {
  flex: 1;
  padding-left: 20px;
  font-weight: bold;
  color: #fff;
}

.a-desc {
  flex: 3;
  text-align: justify;
  color: #fff;
}

.a-skills {
  display: flex;
  flex-wrap: wrap;
  flex: 2;
}

.a-skills-div {
  padding: 10px;
  width: 175px;
  display: flex;
  flex-direction: column;
  background-color: #2f495e;
  color: white;
  border-radius: 20px;
  margin-right: 5px;
  margin-top: 5px;
}

.a-skills-div div {
  margin: 5px;
}

.a-detail {
  flex: 3;
  background-color: #2f495e;
  color: white;
  border-radius: 20px;
  padding: 20px;
}

.a-group {
  flex-direction: row;
  display: flex;
  flex: 1;
}

.a-group-detail {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 30px;
}

.a-detail-title {
  font-weight: 600;
  letter-spacing: 2px;
}

.a-detail-body {
  font-weight: 400;
  letter-spacing: 2px;
}

@media screen and (max-width: 768px) {
  .container {
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 100px;
  }

  .container-body {
    flex-direction: column;
  }

  .container-body div {
    margin-bottom: 20px;
  }

  .a-group {
    flex-direction: column;
  }

  .a-skills {
    justify-content: center;
  }
}
</style>
