<template>
	<div class="list">
		<ul>
			<ListItem v-for="todo in todos" :todo="todo"/>
		</ul>
		<AddButton/>
	</div>
</template>

<script>
import AddButton from "./AddButton";
import ListItem from "./ListItem";
import { mapGetters } from "vuex";

export default {
  name: "List",
  components: {
    AddButton,
    ListItem
  },
  mounted() {
    this.$store.dispatch("GET_TASKS");
  },
  computed: {
    ...mapGetters(["todos"])
  }
};
</script>

<style scoped lang="less">
.list {
  position: relative;
  width: 750px;
  background-color: #fff;
  padding: 93px 100px 192px 107px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 90px;
  ul {
    margin: 0;
    padding: 0;
  }
}
</style>
