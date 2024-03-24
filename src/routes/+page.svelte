<script>
  import Link from "$lib/Link.svelte";
</script>

<svelte:head>
  <title>addie b</title>
</svelte:head>

<div class="home">
  <div class="me" />
  <div class="text">
    <h1>Hi, I'm Addie!</h1>
    <p>
      I'm a professional technologist & amateur ecologist working and living in
      unceded
      <Link to="https://www.lenape-nation.org/" newTab>Lenapehoking</Link>.
    </p>
    <br />
    <p class="skew">Here's what I do...</p>

    <br /><br />

    <h2>AT WORK</h2>
    <ul>
      <li>
        I'm a software engineer building an online classroom for young learners
        at
        <Link to="https://outschool.com" newTab>Outschool</Link>
      </li>
    </ul>

    <br />

    <h2>NOT AT WORK</h2>
    <ul>
      <li>
        I tend fruit trees and other urban food crops as a Lead Orchard
        Volunteer with the <Link to="https://www.phillyorchards.org/" newTab
          >Philadelphia Orchard Project</Link
        >
      </li>
      <li>
        I help build community controlled mesh networks as a Tech Advisory Board
        member at
        <Link to="https://pcw.fi" newTab>Philly Community Wireless</Link>
      </li>
      <li>
        I garden, play the drums, ride my bike, run tabletop games, and read in
        the park.
      </li>
    </ul>
    <br />

    <!-- <h2>FOR FUN</h2>
    <ul>
      <li>
        I garden, play the drums, ride my bike, run tabletop games, and chill
        hard.
      </li>
    </ul> -->
    <!-- <Socials /> -->
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins";
  @use "../styles/placeholders";

  p,
  h1,
  h2,
  li {
    @extend %paragraph;
  }

  p.skew {
    left: 20%;
  }

  h1,
  h2 {
    font-size: 2rem;
    font-style: italic;
    font-weight: bold;
    padding: 0 1rem;
  }

  li {
    padding-left: 1.6rem;

    &:before {
      content: "•";
      display: inline-block;
      position: relative;
      font-weight: bold;
      width: 0;
      left: -1rem;
    }
    position: relative;
    &:nth-of-type(1) {
      left: 10%;
    }
    &:nth-of-type(2) {
      left: 20%;
    }
    &:nth-of-type(3) {
      left: 30%;
    }
  }

  .home {
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-column-gap: 20px;
    padding: 20px;
    padding-right: 30px;
    justify-content: space-around;
    .me {
      @include mixins.circular(150px);
      border: solid 1px black;
      margin: 0 auto;
      background: url("/images/me.jpg") no-repeat right bottom;
      background-size: contain;
    }
    .text {
      max-width: 600px;
    }
  }

  @media only screen and (max-width: 1145px) {
    .home {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(auto-fill, 1fr);
    }
    .text {
      margin: auto;
      max-width: 700px;
      padding-top: 20px;
    }
    li {
      max-width: 70%;
    }
  }
</style>
