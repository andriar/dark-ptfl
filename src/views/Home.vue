<template>
  <div class="home">
    <p class="title">What have I made? <span>?</span></p>
    <div class="container-card">
      <div class="card" v-for="image in images" :key="image">
        <div class="image">
          <img :src="image.href.toString()" />
        </div>
        <div class="details">
          <div class="center">
            <a :href="image.link" target="_blank" rel="noopener noreferrer">
              {{ image.title }}<br /><span>{{ image.as }}</span>
            </a>
            <ul>
              <li>
                <a href="#"
                  ><i class="fa fa-facebook" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-google-plus" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-linkedin" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-instagram" aria-hidden="true"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  data() {
    return {
      images: [
        {
          title: "My Food Diary",
          description: "des 1",
          as: "Frontend Developer",
          link: "https://myfooddiary.id/",
          href: require("@/assets/nutri/mockuper.png"),
        },
        {
          title: "Omnia 3V",
          description: "des 2",
          as: "Frontend Developer",
          link:
            "https://play.google.com/store/apps/details?id=com.company3v.omnia",
          href: require("@/assets/omnia/mockuper.png"),
        },
        {
          title: "Papringan",
          description: "des 2",
          as: "Frontend Developer",
          href: require("@/assets/papringan/mockuper.png"),
        },
        {
          title: "Infografis BKK Jateng",
          description: "des 2",
          as: "Frontend Developer",
          href: require("@/assets/infografis/mockuper.png"),
        },
        {
          title: "DAMS",
          description: "des 2",
          as: "Frontend Developer",
          href: require("@/assets/dams/mockuper.png"),
        },
        {
          title: "CRMS",
          description: "des 2",
          as: "Frontend Developer",
          href: require("@/assets/crms/mockuper.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.title {
  color: #efbb35;
  font-size: 3.3em;
  font-weight: 100;
  text-align: center;
  position: relative;
}

.title span {
  font-size: 4.3em;
  font-weight: 900;
}

.home {
  background-color: #222831;
  min-height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
}

.container-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  justify-content: center;
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
}
.card .details .center a {
  margin: 0;
  padding: 0;
  color: #ff3636;
  line-height: 20px;
  font-size: 16px;
  // text-transform: uppercase;
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
</style>
