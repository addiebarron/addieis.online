<script>
  export let to;
  export let newTab = false;

</script>

<!-- markup (zero or more items) goes here -->

<a href={to} target={newTab ? '_blank' : undefined}><slot /></a>
