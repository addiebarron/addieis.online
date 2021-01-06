<script>
  import { onMount } from "svelte";
  export let project;

  let thisImage;
  let loaded = false;

  let stagger = (1 / project.id) * 1000;

  onMount(() => {
    thisImage.onload = () => {
      loaded = true;
      setTimeout(() => thisImage.removeAttribute("style"), stagger);
    };
    thisImage.src = project.imagePath || "/placeholder.png";
  });
</script>

<style lang="scss">
  @import "../styles/theme";

  .project {
    @include shad;
    border: solid 1px black;
    overflow: hidden;
    &:hover img.background.loaded {
      opacity: 1;
    }
    width: min(100%, 375px);
    a.rect {
      display: block;
      position: relative;
      height: 250px;
      width: 100%;
      img.background {
        display: block;
        width: 100%;
        height: 250px;
        object-fit: cover; // no ie
        object-position: center; // no ie
        opacity: 0.75;
        @include filter(saturate(60%));
        @include transition(opacity);
        &:not(.loaded) {
          opacity: 0;
        }
      }
      .text {
        position: absolute;
        left: 0;
        padding: 20px;
        span {
          display: inline-block;
          background-color: white;
          padding: 0 5px;
          line-height: 1.2em;
          border: solid 1px $border-color;
        }

        &.title {
          top: 0;
          word-break: break-all;
        }

        &.description {
          bottom: 0;
          line-height: 1.2em;
          font-style: italic;
        }
      }

      &:hover {
        & .background {
          border-width: 2px;
        }
      }
    }
  }
</style>

<div class="project">
  <a href={project.url} target="blank" class="rect">
    <!-- svelte-ignore missing-declaration -->
    <img
      bind:this={thisImage}
      alt={project.title}
      class="background"
      class:loaded
      style="transition-delay:{stagger}ms;" />
    <div class="text title"><span>{project.title.toLowerCase()}</span></div>
    <div class="text description">
      <span>{project.description.toLowerCase()}</span>
    </div>
  </a>
</div>
