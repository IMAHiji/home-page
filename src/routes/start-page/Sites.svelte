<script lang="ts">
	import sites from './sites';
	export const { pages } = sites;
</script>

<div class="sites-wrapper">
	<h1 title="sites">Sites</h1>
	<ul class="sites-list" role="list">
		{#each pages as page}
			<li class="sites-list-item" role="listitem">
				<a target="_blank" href={page.url}>{page.title}</a>
				<svg width="100" height="100">
					<use xlink:href="sprite.svg#{page.icon}" />
				</svg>
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	.sites-wrapper {
		@apply mt-3 flex flex-col items-center flex-nowrap;
	}

	.sites-list {
		@apply mt-3  grid grid-cols-4 gap-4;
	}

	.sites-list-item {
		@apply border-2 border-emerald-800 h-48 w-48 flex flex-col justify-center items-center;
	}
</style>
