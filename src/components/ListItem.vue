<template>
	<li class="list-item">
		<span :class="{'list-item__text': true, 'active': !todo.completed}">{{ todo.title }}</span>
		<div class="list-item__checkbox">
			<Checkbox @check="toggleTaskStatus" :checked="todo.completed"/>
		</div>
	</li>
</template>

<script>
  import Checkbox from "./Checkbox";

  export default {
    name: "ListItem",
    components: {
      Checkbox
    },
    data() {
      return {
        active: true
      };
    },
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    methods: {
      toggleTaskStatus() {
        this.$store.commit("UPDATE_TASK_STATUS", {
          taskId: this.todo.id,
          status: !this.todo.completed
        });
      }
    }
  };
</script>

<style scoped lang="less">
	.list-item {
		list-style: none;
		display: flex;
		justify-content: space-between;
		margin-bottom: 67px;

		&:last-child {
			margin-bottom: 0;
		}

		&__text {
			padding-right: 30px;
			color: #bdc0ca;
			font-family: "Gotham Rounded - Book", sans-serif;
			font-size: 33px;
			font-weight: 400;
			line-height: 59px;
			text-transform: capitalize;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			-webkit-transition: color 0.2s;
			-moz-transition: color 0.2s;
			-ms-transition: color 0.2s;
			-o-transition: color 0.2s;
			transition: color 0.2s;
			-ms-word-break: break-all;
			word-break: break-all;
		}

		&__checkbox {
			display: flex;
			align-items: start;
		}
	}

	.active {
		color: #3e434f;
	}
</style>
