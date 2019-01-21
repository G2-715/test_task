<template>
	<div id="app">
		<List/>
		<transition name="fall">
			<Modal v-if="isModalVisible"/>
		</transition>
	</div>
</template>

<script>
import Modal from "./components/Modal";
import List from "./components/List.vue";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    List,
    Modal
  },
  computed: {
    ...mapGetters(["isModalVisible"])
  }
};
</script>

<style lang="less">
#app {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 30px 0;
  background-color: #f0efe9;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.fall-enter-active,
.fall-leave-active {
  transition: transform 0.3s;
}

.fall-enter,
.fall-leave-to {
  transform: translateY(-100%);
}
</style>
