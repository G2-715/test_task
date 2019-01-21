<template>
	<div
		:class="{checkbox : true, checked : checked}"
		@click="check"
	>
		<img
			:class="{'checkbox__indicator': true, 'visible' : checked}"
			src="../assets/checked.png"
			alt="checked"
		>
	</div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    checked: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    check() {
      this.$emit("check");
    }
  }
};
</script>

<style scoped lang="less">
.checkbox {
  min-width: 59px;
  height: 59px;
  border: 7px solid #eef0f5;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  -webkit-transition: border 0.2s;
  -moz-transition: border 0.2s;
  -ms-transition: border 0.2s;
  -o-transition: border 0.2s;
  transition: border 0.2s;

  &__indicator {
    width: 29px;
    height: 23px;
    opacity: 0;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -ms-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
  }
}

.checked {
  border: 7px solid #50e3a4;
}

.visible {
  opacity: 1;
}
</style>
