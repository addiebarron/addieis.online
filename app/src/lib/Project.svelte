<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let project, sudo;
</script>

<li
  class="project"
  class:greyed={!project.show}
  style="background-image: url('{project.imagesrc || '/images/placeholder.png'}');"
>
  <h2 class="project-text">
    <a
      href={project.url}
      target="_blank"
      rel="noopener"
    >{project.title ? project.title.toLowerCase() : ''}</a>
  </h2>
  <p class="project-text">
    <span>{project.description ? project.description.toLowerCase() : ''}</span>
  </p>
  {#if sudo}
    <div class="project-buttons">
      <button class="edit" on:click={() => dispatch('edit')}>✎</button>
      <button class="delete" on:click={() => dispatch('delete')}>×</button>
    </div>
  {/if}
</li>

<style lang="scss">
  @import "../styles/theme";

  .project {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 250px;
    min-width: 100%;
    max-width: 375px;
    padding: 20px;
    @include shad;
    border: solid 1px black;
    background-color: pink;
    background-size: cover;
    background-blend-mode: multiply;
    // Hack for a focus indicator outline that includes box shadow
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
    }
    &:focus-within:after {
      outline: dashed 2px black;
      outline-offset: 0.6rem;
    }
    // Hover indicator
    &:hover {
      transform: translate(-2px, -2px);
      box-shadow: 14px 14px black;
      background-color: white;
    }
    &.greyed {
      opacity: 0.5;
    }

    // Title and description
    .project-text {
      & > span,
      & > a {
        line-height: 1.2em;
        padding: 0.1em 0;
        background-color: white;
      }
      a::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }
    }

    // Editing buttons
    div.project-buttons {
      position: absolute;
      top: 15px;
      right: 15px;
      height: 30px;
      z-index: 2; // Make clickable above link hack
      button {
        width: 30px;
        height: 30px;
        font-size: 15px;
        border-radius: 50%;
        border: solid 1px lightgrey;
        background: white;
        cursor: pointer;
        &:hover {
          color: white;
        }
        &.edit:hover {
          background: rgb(56, 216, 69);
        }
        &.delete:hover {
          background: rgb(255, 134, 134);
        }
      }
    }
  }
</style>
