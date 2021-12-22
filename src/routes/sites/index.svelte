<script lang="ts">
	import sites from './sites';
	export const { pages } = sites;
</script>

<h1>Sites</h1>
<ul class="sites-list">
	{#each pages as page}
		<li class="sites-list-item">
			<a target="_blank" href={page.url}>{page.title}</a>
		</li>
	{/each}
</ul>

<style lang="postcss">
	.sites-list-item {
		@apply m-5 border-8 border-emerald-800;
	}

	.sites-list {
		@apply grid;
	}
</style>
