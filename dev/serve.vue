<script lang="ts">
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
import { EOS_ARROW_ROTATE_ANIMATED } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  components: {
   EOS_ARROW_ROTATE_ANIMATED
  }
});
</script>

<template>
  <div id="app">
    <EOS_ARROW_ROTATE_ANIMATED size="200" color="red" rotate="90"/>
  </div>
</template>
