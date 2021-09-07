<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let project, sudo;
</script>

<div
  class="project"
  class:greyed={!project.show}
  style="background-image: url('{project.imagesrc ||
    '/images/placeholder.png'}');"
>
  <a href={project.url} target="blank" class="rect">
    <div class="text title">
      <span>{project.title ? project.title.toLowerCase() : ""}</span>
    </div>
    <div class="text description">
      <span>{project.description ? project.description.toLowerCase() : ""}</span
      >
    </div>
  </a>
  {#if sudo}
    <div class="project-buttons">
      <button class="edit" on:click={() => dispatch("edit")}>✎</button>
      <button class="delete" on:click={() => dispatch("delete")}>×</button>
    </div>
  {/if}
</div>

<style lang="scss">
  @import "../styles/theme";

  .project {
    position: relative;
    @include shad;
    border: solid 1px black;
    overflow: hidden;
    width: min(100%, 375px);
    background-color: pink;
    background-size: cover;
    background-blend-mode: multiply;
    &:hover {
      transform: translate(-2px, -2px);
      box-shadow: 14px 14px black;
      background-color: white;
    }
    &.greyed {
      opacity: 0.5;
    }
    a.rect {
      display: block;
      position: relative;
      height: 250px;
      width: 100%;
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
          font-size: 1.4em;
          font-weight: bold;
          word-break: break-all;
        }

        &.description {
          bottom: 0;
          line-height: 1.2em;
          font-style: italic;
        }
      }
    }

    .project-buttons {
      position: absolute;
      top: 15px;
      right: 15px;
      height: 30px;
      button {
        width: 30px;
        height: 30px;
        font-size: 15px;
        border-radius: 50%;
        border: solid 1px lightgrey;
        background: white;
        cursor: pointer;
        &:hover {
          background: rgb(255, 134, 134);
          color: white;
        }
      }
    }
  }
</style>
