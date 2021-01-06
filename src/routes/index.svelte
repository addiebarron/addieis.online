<script context="module">
  export async function preload(page, session) {
    const { CMS_API_URL } = session;

    return { apiURL: CMS_API_URL };
  }
</script>

<script>
  import Socials from "../components/Socials.svelte";

  import { onMount } from "svelte";
  import jQuery from "jquery";

  export let apiURL;

  onMount(() => {
    let count = 0;

    jQuery(document)
      // allow links within nested <a> elements
      .on("click", ".link", function (e) {
        e.preventDefault();
        window.open(this.href, "_blank");
      })
      // open admin with 5 clicks on me
      .on("click", ".me", (e) => {
        count += 1;
        if (count >= 5) window.location = apiURL + "/admin";
      });

    // slide text in
    // setTimeout(function () {
    //   document.querySelector(".slide-in").classList.add("loaded");
    // }, 500);
  });
</script>

<style lang="scss">
  @import "../styles/theme";

  .home {
    display: grid;
    grid-template-columns: repeat(auto-fit, 400px);
    //grid-template-rows: 400px 1fr;
    @media only screen and (max-width: 450px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(auto-fill, 1fr);
      padding-bottom: 20px;
    }
    justify-content: space-around;
    grid-column-gap: 50px;
    width: 900px;
    max-width: 100%;
    margin: auto;
    padding: 20px;
    & > div {
      width: 100%;
    }
    .me {
      border: solid 1px $border-color;
      @include circular(200px);
      margin: auto;
      @media only screen and (max-width: 890px) {
        @include circular(150px);
        margin: 0 auto 20px auto;
      }
      background: url("/a.jpg") no-repeat right bottom;
      background-size: 105%;
      background-clip: content-box;
      @include transition((transform), 0.2s, ease);
    }
    .about-me {
      font-size: 18px;
      .text {
        margin: auto;
        padding-bottom: 10px;
        h1,
        p {
          display: inline-block;
          font-size: 1em; //o
          font-weight: normal; //o
          line-height: 2em;
          padding: 0 10px;
          background: white;
          @include shad(10px, 1);
          border: solid 1px $border-color;
          margin-bottom: 20px;
        }
      }
    }
  }
</style>

<svelte:head>
  <title>addie b</title>
</svelte:head>

<div class="home">
  <div class="me" />
  <div class="about-me">
    <div class="text slide-in">
      <h1>hi! i'm addie</h1>
      <p>
        i'm a self-taught web programmer and artist currently working as a
        support engineer.
      </p>
      <p>
        my work is mostly in javascript and python. i'm experienced with
        wordpress, full stack node applications, and web extensions. this site
        was built in
        <a target="_blank" href="https://svelte.dev">svelte</a>
      </p>
      <p>
        i'm interested in decentralization, web communities, radical networks,
        open source, and weird digital art.
      </p>
      <p>
        currently working at
        <a
          class="bandcamp"
          target="blank"
          href="https://bandcamp.com/about">bandcamp</a>.
      </p>
      <Socials />
    </div>
  </div>
</div>
