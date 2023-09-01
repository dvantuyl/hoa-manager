<script lang="ts">
	import { clsx } from 'clsx';

	export let href: string;
	export let tag: string;
	export let active = false;
	export let isAnchorLink = false;
</script>

<a
	{href}
	aria-current={active ? 'page' : undefined}
	class={clsx(
		'flex justify-between gap-2 py-1 pr-3 text-sm transition',
		isAnchorLink ? 'pl-7' : 'pl-4',
		active
			? 'text-zinc-900 dark:text-white'
			: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
	)}
>
	<span class="truncate">
		<slot />
	</span>
</a>
