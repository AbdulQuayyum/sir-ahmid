<template>
	<div>
			<a-card :bordered="false" class="header-not-solid" :bodyStyle="{padding: 0,}">

				<!-- Information Card 2 -->
				<cardinfo3></cardinfo3>
				<!-- / Information Card 2 -->
			</a-card >
	</div>
</template>

<script>

import cardinfo3 from "../components/Cards/cardinfo3"
export default ({
	components: {
        cardinfo3
	}
})

</script>

<style>
</style>