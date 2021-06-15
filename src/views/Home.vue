<template>
  <div class="home">
    <div class="profile-container">
      <div class="profile">
        <div>
          <div class="a-name">
            <span class="a-label-yellow a-nickname">Andriar</span> Mafazan
            Rizkiansah
          </div>
          <div class="a-title">Frontend Developer</div>
          <div class="a-desc">
            I am a person who can <span class="a-label">adapt quickly</span> and
            like to <span class="a-label">learn new things</span>. I like to
            <span class="a-label">sharing knowledge</span> with others and i
            like the culture of startup company. I have experience in working on
            team for planning and executing a project using
            <span class="a-label">agile</span> framework in developing
            applications.
          </div>
        </div>
        <div>
          <vue-load-image>
            <img
              slot="image"
              :src="profile"
              alt="Andriar Mafazan Rizkiansah"
              class="profile-picture"
            />
            <div slot="preloader" class="loader">
              <rotate-square2 />
            </div>
            <div slot="error">cannot load image</div>
          </vue-load-image>
        </div>
      </div>
      <div class="a-socmed">
        <img
          :src="soc.image"
          :alt="soc.description"
          v-for="(soc, index) in socialMedia"
          :key="index"
          @click="goTo(soc.link)"
        />
      </div>
    </div>

    <div class="profile-container">
      <div class="detail-diri">
        <div>
          <div>BIRTH</div>
          <div>May 1995</div>
        </div>
        <div>
          <div>ADDRESS</div>
          <div>Semarang</div>
        </div>
        <div>
          <div>PHONE</div>
          <div>+62 8988862662</div>
        </div>
        <div>
          <div>MAIL</div>
          <div>andriar.fazzan@gmail.com</div>
        </div>
      </div>
    </div>

    <div class="profile-container">
      <div class="detail-diri">
        <ul style="list-style-type:disc;">
          <li v-for="(work, index) in workExperiences" :key="index">
            <div>
              {{ work.company }}
              <span class="a-label-yellow" v-if="work.current">on going</span>
            </div>
            <div class="subtitle">
              {{
                `${work.title} ${work.startAt} - ${work.endAt} (${work.location}) as ${work.status}`
              }}
            </div>
          </li>
        </ul>
      </div>
    </div>

    <p class="title">
      What have I made
      <span>?</span>
    </p>
    <div class="container-card">
      <div class="card" v-for="(image, index) in images" :key="index">
        <div class="image">
          <img
            :src="image.href.toString()"
            v-lazy="image.href.toString()"
            :alt="image.title"
          />
        </div>
        <div class="details">
          <div class="center">
            <div
              @click="goTo(image.link)"
              style="cursor:pointer; margin-bottom: 10px; color: #2f495e"
            >
              {{ image.title }}
            </div>
            <viewer :images="image.others" v-viewer="propsViewer">
              <img
                v-for="(src, index) in image.others"
                :src="src"
                :key="index"
                v-lazy="src"
                :alt="image.title"
                class="small-img"
                @click="show()"
              />
            </viewer>
          </div>
        </div>
      </div>
    </div>

    <modal name="my-first-modal">
      <div class="container-modal">
        <div class="title-modal">{{ project.title }}</div>
        <div class="container-modal-body">
          <div class="subtitle-modal">DATE</div>
          <div>{{ project.date }}</div>
        </div>
        <div class="container-modal-body">
          <div class="subtitle-modal">DESCRIPTION</div>
          <div>{{ project.description }}</div>
        </div>
        <div class="container-modal-body">
          <div class="subtitle-modal">AS</div>
          <div class="container-as-modal-1">
            <div
              class="container-as-modal"
              v-for="(person, index) in project.team"
              :key="index"
            >
              <div>{{ person.name }}</div>
              <div class="as-modal">{{ person.as }}</div>
            </div>
          </div>
        </div>
      </div>
    </modal>

    <footer>&copy;2020, All Rights Reserved.</footer>
  </div>
</template>

<script>
// @ is an alias to /src
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
import Vue from "vue";
import { page } from "vue-analytics";
import VueLoadImage from "vue-load-image";
import { RotateSquare2 } from "vue-loading-spinner";

Vue.use(Viewer);
export default {
  name: "Home",
  components: {
    "vue-load-image": VueLoadImage,
    RotateSquare2,
  },
  data() {
    return {
      profile: require("@/assets/pp.jpg"),
      workExperiences: [
        {
          company: "WIR GROUP",
          title: "Frontend Developer",
          startAt: "Aug 2020",
          endAt: "Juli 2021",
          location: "Yogyakarta",
          status: "Contract 12 Month",
          current: true,
        },
        {
          company: "PT. RENJANA MEMBANGUN NUSANTARA",
          title: "Software Engineer",
          startAt: "Sept 2018",
          endAt: "Aug 2018",
          location: "Semarang",
          status: "Employee",
          current: false,
        },
        {
          company: "FTI UKSW",
          title: "Lecturer Assistant",
          startAt: "Jun 2018",
          endAt: "Aug 2018",
          location: "Salatiga",
          status: "Contract 4 Month",
          current: false,
        },
        {
          company: "LPMAI UKSW",
          title: "Software Developer",
          startAt: "Jan 2018",
          endAt: "Apr 2018",
          location: "Salatiga",
          status: "Intern",
          current: false,
        },
        {
          company: "PT. INDONESIA COMNET PLUS",
          title: "Software Developer",
          startAt: "Oct 2017",
          endAt: "Dec 2017",
          location: "Jakarta",
          status: "Intern",
          current: false,
        },
        {
          company: "FTI UKSW",
          title: "IT Support (laboran)",
          startAt: "Sept 2015",
          endAt: "Sept 2017",
          location: "Salatiga",
          status: "Employee",
          current: false,
        },
      ],
      socialMedia: [
        {
          image: require("@/assets/icons/instagram.svg"),
          link: "https://www.instagram.com/andriar.fazzan/",
          id: "@andriar.fazzan",
          desciption: "Profil Instagram Andriar Mafazan Rizkiansah",
        },
        {
          image: require("@/assets/icons/twitter.svg"),
          link: "https://twitter.com/andriarfazzan",
          id: "@andriarfazzan",
          desciption: "Profil Twitter Andriar Mafazan Rizkiansah",
        },
        {
          image: require("@/assets/icons/linkedin.svg"),
          link:
            "https://www.linkedin.com/in/andriar-mafazan-rizkiansah-0b3b09164/",
          id: "andriar-mafazan-rizkiansah-0b3b09164",
          desciption: "Profil LinkedIn Andriar Mafazan Rizkiansah",
        },
        {
          image: require("@/assets/icons/github.svg"),
          link: "https://github.com/andriar",
          id: "andriar",
          desciption: "Profil Github Andriar Mafazan Rizkiansah",
        },
      ],
      project: {
        title: "",
        description: "",
        as: "",
        link: "",
        client: "",
        date: "",
        team: [
          {
            name: "",
            as: "",
          },
        ],
      },
      images: [
        {
          title: "Kemensos Test KND",
          description: "is an apps to test online (Tes CPNS Disabilitas).",
          as: "Frontend Developer",
          client: "KEMENTRIAN SOSIAL INDONESIA",
          date: "May 2020",
          team: [
            {
              name: "Andriar Mafazan",
              as: "Frontend Developer CMS and Client",
            },
          ],
          link: "http://pes-dev.ojekin.xyz",
          href: "https://i.ibb.co/mrsBjfC/kemensos-1.jpg",
          others: [
            "https://i.ibb.co/mrsBjfC/kemensos-1.jpg",
            "https://i.ibb.co/YZ5Hz9P/kemensos-2.jpg",
          ],
        },
        {
          title: "Mediv",
          description: "Mediv is an e-commerce application from KIMIA FARMA.",
          as: "Frontend Developer",
          client: "KIMIA FARMA",
          date: "August 2020",
          team: [
            {
              name: "Andriar Mafazan",
              as: "Frontend Developer Backoffice (CMS)",
            },
            {
              name: "Andriar Mafazan",
              as: "Frontend Developer Backoffice (CMS)",
            },
            {
              name: "Andriar Mafazan",
              as: "Frontend Developer Backoffice (CMS)",
            },
            {
              name: "Andriar Mafazan",
              as: "Frontend Developer Backoffice (CMS)",
            },
            {
              name: "Andriar Mafazan",
              as: "Frontend Developer Backoffice (CMS)",
            },
          ],
          link:
            "https://play.google.com/store/apps/details?id=com.kimiafarma.mediv",
          href: "https://i.ibb.co/YW59vwf/mockuper.jpg",
          others: [
            "https://i.ibb.co/GPj1rsp/mediv3.jpg",
            "https://i.ibb.co/jypjR2z/mediv2.jpg",
            "https://i.ibb.co/G5yTrmF/mediv1.jpg",
          ],
        },
        {
          title: "Polapikir",
          description: "des 1",
          as: "Frontend Developer",
          link: "https://play.google.com/store/apps/details?id=com.polapikir",
          href: "https://i.ibb.co/mzsWcsG/mockuper.jpg",
          others: [
            "https://i.ibb.co/Yy7K2Vk/polapikir1.jpg",
            "https://i.ibb.co/K7bBNM1/polapikir2.jpg",
            "https://i.ibb.co/8X2nj3n/polapikir3.jpg",
          ],
        },
        {
          title: "My Food Diary",
          description: "des 1",
          as: "Frontend Developer",
          link: "https://myfooddiary.id/",
          href: "https://i.ibb.co/gyb4PpB/mockuper.jpg",
          others: [
            "https://i.ibb.co/DL1tWKV/nutri1.jpg",
            "https://i.ibb.co/99QL32M/nutri2.jpg",
            "https://i.ibb.co/1sMZ1T4/nutri4.jpg",
            "https://i.ibb.co/23S4MvN/nutri3.jpg",
          ],
        },
        {
          title: "Omnia 3V",
          description: "des 2",
          as: "Frontend Developer",
          link:
            "https://play.google.com/store/apps/details?id=com.company3v.omnia",
          href: "https://i.ibb.co/n01tbYC/mockuper.jpg",
          others: [
            "https://i.ibb.co/ctxBPgV/omnia1.jpg",
            "https://i.ibb.co/JRBVLSM/omnia3.jpg",
            "https://i.ibb.co/k4kyf9b/omnia2.jpg",
            "https://i.ibb.co/HPbpPBX/omnia5.jpg",
            "https://i.ibb.co/6gsm0bB/omnia4.jpg",
          ],
        },
        {
          title: "Papringan",
          description: "des 2",
          as: "Frontend Developer",
          href: "https://i.ibb.co/J3Nz5cd/mockuper.jpg",
          others: [
            "https://i.ibb.co/QMkC3FX/papringan1.jpg",
            "https://i.ibb.co/7pvF61N/papringan2.jpg",
            "https://i.ibb.co/1zKCNJQ/papringan4.jpg",
            "https://i.ibb.co/Tm3y8X9/papringan3.jpg",
          ],
        },
        {
          title: "Infografis BKK Jateng",
          description: "des 2",
          as: "Frontend Developer",
          href: "https://i.ibb.co/DfbmyQ2/mockuper.jpg",
          others: [
            "https://i.ibb.co/3sPfn0n/infografis1.jpg",
            "https://i.ibb.co/9VctJxv/infografis2.jpg",
            "https://i.ibb.co/tbtvBTS/infografis3.jpg",
            "https://i.ibb.co/qjp6w23/infografis4.jpg",
          ],
        },
        {
          title: "DAMS",
          description: "des 2",
          as: "Frontend Developer",
          href: "https://i.ibb.co/StJ5LFj/mockuper.jpg",
          others: [
            "https://i.ibb.co/XLsnj36/dams1.jpg",
            "https://i.ibb.co/vYRft0n/dams2.jpg",
            "https://i.ibb.co/ccX8VxZ/dams3.jpg",
            "https://i.ibb.co/f9pGFj4/dams4.jpg",
          ],
        },
        {
          title: "CRMS",
          description: "des 2",
          as: "Frontend Developer",
          href: "https://i.ibb.co/7p7SmvP/mockuper.jpg",
          others: [
            "https://i.ibb.co/x721kWQ/crms1.jpg",
            "https://i.ibb.co/bKpKFd4/crms2.jpg",
            "https://i.ibb.co/t257Z1F/crms3.jpg",
            "https://i.ibb.co/7Q7HGJs/crms4.jpg",
          ],
        },
      ],
      propsViewer: {
        inline: true,
        button: true,
        navbar: true,
        title: true,
        toolbar: true,
        tooltip: true,
        movable: true,
        zoomable: true,
        rotatable: true,
        scalable: true,
        transition: true,
        fullscreen: true,
        keyboard: true,
        url: "data-source",
      },
    };
  },
  mounted() {
    this.track2();
  },
  methods: {
    show() {
      const viewer = this.$el.querySelector(".small-img").$viewer;
      viewer.show();
      console.info("ajja");
    },
    track2() {
      page("/");
    },
    selectedProject(payload) {
      this.project = payload;
      this.$modal.show("my-first-modal");
    },
    goTo(url) {
      window.open(url);
    },
  },
};
</script>

<style lang="scss">
.small-img {
  cursor: pointer;
  border-radius: 3px;
  height: 20px;
  width: 20px;
  margin-right: 5px;
  margin-left: 5px;
}
.title {
  color: #efbb35;
  font-size: 3.3em;
  font-weight: 100;
  text-align: center;
  position: relative;
}

.title span {
  font-size: 2em;
  font-weight: 300;
}

.home {
  background-color: #222831;
  min-height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
}

@keyframes pulse {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.container-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  justify-content: center;
  animation: pulse 5s;
}
.card {
  transform: translate(0%);
  width: 360px;
  height: auto;
  margin: 5px 5px 5px 5px;
}
.card .image {
  width: 100%;
  height: auto;
  overflow: hidden;
  background-size: cover;
}
.card .image img {
  width: 100%;
  transition: 0.5s;
}
.card:hover .image img {
  opacity: 0.5;
  transform: translateX(30%); /*100%*/
}
.card .details {
  position: absolute;
  top: 0;
  left: 0;
  width: 70%; /*100%*/
  height: 100%;
  background: #efbb35;
  transition: 0.5s;
  transform-origin: left;
  transform: perspective(2000px) rotateY(-90deg);
}
.card:hover .details {
  transform: perspective(2000px) rotateY(0deg);
}
.card .details .center {
  padding: 20px;
  text-align: center;
  background: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.card .details .center a {
  margin: 0;
  padding: 0;
  color: #ff3636;
  line-height: 20px;
  font-size: 16px;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
}
.card .details .center a span {
  font-size: 14px;
  color: #262626;
}
.card .details .center p {
  margin: 10px 0;
  padding: 0;
  color: #262626;
}
.card .details .center ul {
  margin: 10px auto 0;
  padding: 0;
  display: table;
}
.card .details .center ul li {
  list-style: none;
  margin: 0 5px;
  float: left;
}
.card .details .center ul li a {
  display: block;
  background: #262626;
  color: #fff;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  transform: 0.5s;
}
.card .details .center ul li a:hover {
  background: #ff3636;
}

footer {
  text-align: center;
  font-size: 12px;
  padding: 10px;
  background-color: #222831;
  color: white;
}

.a-desc {
  text-align: justify;
  color: #fff;
  padding-right: 20px;
}

.a-name {
  color: #fff;
  padding-right: 20px;
  font-size: 26px;
  margin-bottom: 8px;
}

.a-title {
  color: #fff;
  padding-right: 20px;
  font-size: 20px;
  margin-bottom: 8px;
}

.a-nickname {
  color: #2f495e;
}

.a-label {
  border-radius: 4px;
  background-color: rebeccapurple;
  padding: 0px 4px 0px 4px;
  font-weight: 400;
}

.a-label-yellow {
  border-radius: 4px;
  background-color: #efbb35;
  padding: 0px 4px 0px 4px;
  font-weight: 400;
}

.profile-container {
  // justify-content: center;
  // align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 35px 0px 35px 0px;
}

.profile {
  max-width: 850px;
  display: flex;
  align-items: center;
  padding: 20px;
  // flex-direction: column;
  // background-color: #2f495e;
  // border-radius: 10px;
}

.profile-picture {
  max-height: 200px;
  max-width: 200px;
  border-radius: 200px;
  border: 4px white solid;
}

.a-socmed {
  display: flex;
}

.a-socmed img {
  margin: 5px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.loader {
  margin: 100px;
}

.detail-diri {
  // width: 850px;
  display: flex;
  align-items: center;
  padding: 20px;
  flex-direction: row;
  background-color: #2c333f;
  border-radius: 10px;
  margin: 30px 0px 30px 0px;
  flex-wrap: wrap;
}

.detail-diri div {
  flex-direction: column;
  flex: 2;
  min-width: 180px;
  margin: 2px 0px 2px 0px;
}

.detail-diri div div:nth-child(1) {
  color: white;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 5px;
}

.detail-diri div div:nth-child(2) {
  color: white;
}

.detail-diri ul {
  color: white;
}

.detail-diri ul li {
  margin-bottom: 15px;
}

.subtitle {
  color: #969595;
}

.container-modal {
  padding: 20px;
}

.container-modal-body {
  padding: 10px 0px 10px 0px;
}

.title-modal {
  font-size: 24px;
}

.subtitle-modal {
  padding-bottom: 3px;
  font-size: 10px;
  font-weight: bolder;
  letter-spacing: 1px;
}

.container-as-modal-1 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.container-as-modal {
  margin-bottom: 5px;
  min-width: 200px;
}

.as-modal {
  font-size: 12px;
  color: #969595;
  padding-right: 20px;
}

@media screen and (max-width: 768px) {
  .profile {
    flex-direction: column-reverse;
    align-items: center;
  }

  .profile-picture {
    margin-bottom: 30px;
  }

  .a-desc {
    text-align: center;
    padding-right: 0px;
    line-height: 1.3rem;
  }

  .a-name {
    text-align: center;
  }

  .a-title {
    text-align: center;
    margin: 20px 0px 20px 0px;
  }

  .title {
    font-size: 36px;
  }

  .modal {
    margin: 20px;
  }

  // .detail-diri {
  //   flex-direction: column;
  //   align-items: flex-start;
  // }

  .detail-diri div {
    margin-bottom: 10px;
  }
}
</style>
