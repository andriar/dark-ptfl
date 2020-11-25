<template>
  <div class="home">
    <p class="title">
      What have I made
      <span>?</span>
    </p>
    <div class="container-card">
      <div class="card" v-for="(image, index) in images" :key="index">
        <div class="image">
          <img :src="image.href.toString()" />
        </div>
        <div class="details">
          <div class="center">
            <a :href="image.link" target="_blank" rel="noopener noreferrer">
              {{ image.title }}
              <br />
              <span>{{ image.as }}</span>
            </a>
            <viewer :images="image.others" v-viewer="propsViewer">
              <img
                v-for="src in image.others"
                :src="src"
                :key="src"
                class="small-img"
                @click="show()"
              />
            </viewer>
          </div>
        </div>
      </div>
    </div>
    <footer>&copy;2020, All Rights Reserved.</footer>
  </div>
</template>

<script>
// @ is an alias to /src
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
import Vue from "vue";
import { page } from "vue-analytics";

Vue.use(Viewer);
export default {
  name: "Home",
  components: {},
  data() {
    return {
      images: [
        {
          title: "Mediv",
          description: "E-commerce by Kimia Farma",
          as: "Frontend Developer",
          link: "https://myfooddiary.id/",
          href: require("@/assets/mediv/mockuper.jpg"),
          others: [
            require("@/assets/mediv/mediv1.jpg"),
            require("@/assets/mediv/mediv2.jpg"),
            require("@/assets/mediv/mediv3.jpg"),
          ],
        },
        {
          title: "My Food Diary",
          description: "des 1",
          as: "Frontend Developer",
          link: "https://myfooddiary.id/",
          href: require("@/assets/nutri/mockuper.jpg"),
          others: [
            require("@/assets/nutri/nutri1.jpg"),
            require("@/assets/nutri/nutri2.jpg"),
            require("@/assets/nutri/nutri3.jpg"),
            require("@/assets/nutri/nutri4.jpg"),
          ],
        },
        {
          title: "Omnia 3V",
          description: "des 2",
          as: "Frontend Developer",
          link:
            "https://play.google.com/store/apps/details?id=com.company3v.omnia",
          href: require("@/assets/omnia/mockuper.jpg"),
          others: [
            require("@/assets/omnia/omnia1.jpg"),
            require("@/assets/omnia/omnia2.jpg"),
            require("@/assets/omnia/omnia3.jpg"),
            require("@/assets/omnia/omnia4.jpg"),
            require("@/assets/omnia/omnia5.jpg"),
          ],
        },
        {
          title: "Papringan",
          description: "des 2",
          as: "Frontend Developer",
          href: require("@/assets/papringan/mockuper.jpg"),
          others: [
            require("@/assets/papringan/papringan1.jpg"),
            require("@/assets/papringan/papringan2.jpg"),
            require("@/assets/papringan/papringan3.jpg"),
            require("@/assets/papringan/papringan4.jpg"),
          ],
        },
        {
          title: "Infografis BKK Jateng",
          description: "des 2",
          as: "Frontend Developer",
          href: require("@/assets/infografis/mockuper.jpg"),
          others: [
            require("@/assets/infografis/infografis1.jpg"),
            require("@/assets/infografis/infografis2.jpg"),
            require("@/assets/infografis/infografis3.jpg"),
            require("@/assets/infografis/infografis4.jpg"),
          ],
        },
        {
          title: "DAMS",
          description: "des 2",
          as: "Frontend Developer",
          href: require("@/assets/dams/mockuper.jpg"),
          others: [
            require("@/assets/dams/dams1.jpg"),
            require("@/assets/dams/dams2.jpg"),
            require("@/assets/dams/dams3.jpg"),
            require("@/assets/dams/dams4.jpg"),
          ],
        },
        {
          title: "CRMS",
          description: "des 2",
          as: "Frontend Developer",
          href: require("@/assets/crms/mockuper.jpg"),
          others: [
            require("@/assets/crms/crms1.jpg"),
            require("@/assets/crms/crms2.jpg"),
            require("@/assets/crms/crms3.jpg"),
            require("@/assets/crms/crms4.jpg"),
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
</style>
