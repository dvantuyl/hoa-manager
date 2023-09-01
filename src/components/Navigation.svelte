<script lang="ts">
	import NavLink from './NavLink.svelte';
	let className = '';
	export { className as class };
</script>

<nav class={className}>
	<ul role="list">
		<NavLink href="/" tag="a" isAnchorLink={true}>Home</NavLink>
		<NavLink href="/about" tag="a" isAnchorLink={true}>About</NavLink>
	</ul>
</nav>
