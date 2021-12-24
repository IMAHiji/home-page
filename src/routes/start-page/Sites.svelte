<script lang="ts">
	import sites from './sites';
	export const { pages } = sites;
</script>

<div class="sites-wrapper">
	<div class="sites-background">
		<div class="background-overlay" />
		<img src="taipei.webp" alt="background-taipei" />
	</div>
	<h1 title="sites">Sites</h1>
	<ul class="sites-list" role="list">
		{#each pages as page}
			<li class="sites-list-item" role="listitem">
				<a target="_blank" href={page.url}>
					<svg width="100" height="100">
						<use xlink:href="sprite.svg#{page.icon}" />
					</svg>
					{page.title}
				</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	.sites-wrapper {
		@apply mt-3 flex flex-col items-center flex-nowrap h-screen w-screen relative;
	}

	.sites-background {
		@apply h-full w-full absolute top-0 left-0 -z-10;
	}

	.background-overlay {
		@apply bg-slate-400 opacity-50 h-screen w-full absolute left-0 top-0 -z-0;
	}

	.sites-list {
		@apply mt-3  grid grid-cols-4 gap-4 z-10;
	}

	.sites-list-item {
		@apply border-2 border-emerald-800 h-48 w-48 flex flex-col justify-center items-center;
	}
	a {
		@apply flex flex-col items-center;
	}
</style>
