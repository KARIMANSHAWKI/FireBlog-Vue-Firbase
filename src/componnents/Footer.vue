<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }"
            >FireBlogs</router-link
          >
          <ul>
            <li>
              <a href="#"><youtube class="svg-icon" /></a>
            </li>
            <li>
              <a href="#"><twitter class="svg-icon" /></a>
            </li>
            <li>
              <a href="#"><instgram class="svg-icon" /></a>
            </li>
            <li>
              <a href="#"><linkedin class="svg-icon" /></a>
            </li>
          </ul>
        </div>

        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'blogs' }"
              >Blogs</router-link
            >
            <router-link class="link" :to="{ name: 'newpost' }"
              >Create Post</router-link
            >
            <router-link class="link" :to="{ name: 'login' }"
              >Login/Register</router-link
            >
          </ul>
        </div>
      </div>

      <div class="right">
        <p>Coprights 2021 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>
<script>
import youtube from "../assets/Icons/youtube-brands.svg";
import linkedin from "../assets/Icons/linkedin-brands.svg";
import twitter from "../assets/Icons/twitter-brands.svg";
import instgram from "../assets/Icons/instagram-brands.svg";

export default {
  name: "footer-vue",
  components: {
    youtube,
    linkedin,
    twitter,
    instgram,
  },
};
</script>
<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 100px 25px;
  background-color: #303030;

  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (min-width: 800px) {
      flex-direction: row;
      align-items: initial;
      gap: 0;
    }

    > div {
      display: flex;
      flex: 1;
    }

    .left {
      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }

      .header {
        font-size: 27px;
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        @media (min-width: 800px) {
            text-align:initial
        }
      }

      ul {
        gap: 16px;
        list-style: none;
        display: flex;
        margin-top: 20px;
      }

      .col-1,
      .col-2 {
        gap: 32px;
        display: flex;
        flex: 1;
        @media (min-width: 800px) {
          gap: 0;
        }
      }

      .col-1 {
        flex-direction: column;

        h2 {
          text-align: center;
          @media (min-width: 800px) {
            text-align: initial;
          }
        }

        ul {
          margin-top: auto;

          li {
            display: flex;
            align-items: center;
            .svg-icon {
              width: 24px;
              height: auto;
              color: #fff;
            }
          }
        }
      }

      .col-2 {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          @media (min-width: 800px) {
            flex-direction: column;
          }

          .link {
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }

    .right {
      gap: 32px;
      color: #fff;
      align-items: center;
      flex-direction: column;
      @media (min-width: 800px) {
        align-items: flex-end;
        gap: 0;
      }

      p {
        margin-top: auto;
      }
    }
  }
}
</style>
