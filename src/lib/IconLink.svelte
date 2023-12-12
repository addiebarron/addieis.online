<script>
  export let to, title;
</script>

<style lang="scss">
  @use "../styles/placeholders";
  @use "../styles/mixins";

  a {
    display: inline-block;
    height: 2.5rem;
    width: 2.5rem;
    &:focus {
      outline: dashed 2px black;
      outline-offset: 3px;
    }
    svg {
      width: 100%;
      height: 100%;
      path {
        @include mixins.transition((fill));
        fill: black;
      }
    }
    span {
      @extend %sr-only;
    }
  }
</style>

<a
  {title}
  href={to}
  target="_blank"
  >
  <slot name="svg-icon"/>
  <span>{title}</span>
</a>
