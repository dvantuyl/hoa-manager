<script>
	import Header from './Header.svelte';
	import Navigation from './Navigation.svelte';
	import Footer from './Footer.svelte';
	import Logo from './Logo.svelte';
</script>

<div class="h-full lg:ml-72 xl:ml-80">
	<div class="drawer">
		<input id="toggle-navigation" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">
			<header class="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
				<div
					class="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10 xl:w-80"
				>
					<div class="hidden lg:flex">
						<a href="/" aria-label="Home">
							<Logo class="h-6" />
						</a>
					</div>
					<Header />
					<Navigation class="hidden lg:mt-10 lg:block" />
				</div>
			</header>

			<div class="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
				<main class="flex-auto">
					<slot />
				</main>
				<Footer />
			</div>
		</div>
		<div class="drawer-side lg:hidden">
			<label for="toggle-navigation" class="drawer-overlay" />
			<Navigation class="p-4 w-80 min-h-full bg-base-200 mt-14" />
		</div>
	</div>
</div>
