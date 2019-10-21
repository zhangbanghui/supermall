<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #e9e9e9;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  box-shadow: 0px -1px 3px rgba(100, 100, 100, 0.1);
}

</style>