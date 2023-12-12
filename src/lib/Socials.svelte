<script>
  import IconLink from "$lib/IconLink.svelte";
  import GitHub from "$lib/icons/GitHub.svelte";
  import LinkedIn from "$lib/icons/LinkedIn.svelte";
</script>

<div>
  <IconLink to="https://github.com/addiebarron" title="GitHub">
    <GitHub slot="svg-icon"/>
  </IconLink>
  <IconLink to="https://linkedin.com/in/addie-barron" title="LinkedIn">
    <LinkedIn slot="svg-icon"/> 
  </IconLink>
</div>

<style lang="scss">
  div {
    margin: 0.5rem 0; 
    text-align: center;
    @media only screen and (max-width: 890px) {
      width: 50%;
      margin: 0.5rem auto;
    }
  }
</style>
