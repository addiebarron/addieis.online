<script>
  import Socials from "$lib/Socials.svelte";

  let numClicks = 0;
  function testAuth() {
    numClicks++;
    if (numClicks >= 10) window.location = "/projects?sudo";
  }
</script>

<svelte:head>
  <title>addie b</title>
</svelte:head>

<div class="home">
  <div class="me" on:click={testAuth} />
  <div class="about-me">
    <div class="text">
      <h1>Hi! I'm Addie.</h1>
      <p>
        I'm a software developer and internet technologist. I am currently
        looking for work!
        <a href="/resume">Take a look at my resume</a>.
      </p>
      <p>
        My coding work is mostly in javascript and python. I have experience
        building full-stack applications and static sites. This site was built
        using
        <a target="_blank" href="https://sapper.svelte.dev">SvelteKit</a>
        and a custom NodeJS backend.
      </p>
      <p>
        Outside of work, I lead the tech team at
        <a target="_blank" href="https://phillycommunitywireless.org">Philly
          Community Wireless</a>
        to help build community-owned internet infrastructure.
      </p>
      <Socials />
    </div>
  </div>
</div>

<style lang="scss">
  @import "../styles/theme";

  .home {
    display: grid;
    grid-template-columns: repeat(auto-fit, 500px);
    //grid-template-rows: 400px 1fr;
    @media only screen and (max-width: 450px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(auto-fill, 1fr);
      padding-bottom: 20px;
    }
    justify-content: space-around;
    grid-column-gap: 0;
    width: 1050px;
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
      background: url("/images/a.jpg") no-repeat right bottom;
      background-size: 105%;
      background-clip: content-box;
      @include transition((transform), 0.2s, ease);
    }
    .about-me {
      font-size: 18px;
      a:focus {
        color: black;
        outline: dashed 2px black;
        outline-offset: 5px;
      }
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
