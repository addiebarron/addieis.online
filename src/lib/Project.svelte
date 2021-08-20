<script>
  export let project;
</script>

<div class="project">
  <a href={project.url} target="blank" class="rect">
    <!-- svelte-ignore missing-declaration -->
    <img
      alt={project.title}
      class="background"
      src={project.imageSrc || "/images/placeholder.png"}/>
    <div class="text title"><span>{project.title ? project.title.toLowerCase() : ""}</span></div>
    <div class="text description">
      <span>{project.description ? project.description.toLowerCase() : ""}</span>
    </div>
  </a>
</div>

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