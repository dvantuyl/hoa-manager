<article class="flex h-full flex-col pb-10 pt-16">
	<div class="flex-auto prose dark:prose-invert">
		<h1>Quickstart</h1>
		<p class="lead">
			This guide will get you all set up and ready to use the Protocol API. We'll cover how to get
			started using one of our API clients and how to make your first API request. We'll also look
			at where to go next to find all the information you need to take full advantage of our
			powerful REST API.
		</p>
		<div
			class="my-6 flex gap-2.5 rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 leading-6 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-200 dark:[--tw-prose-links-hover:theme(colors.emerald.300)] dark:[--tw-prose-links:theme(colors.white)]"
		>
			<svg
				viewBox="0 0 16 16"
				aria-hidden="true"
				class="mt-1 h-4 w-4 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200"
				><circle cx="8" cy="8" r="8" stroke-width="0" /><path
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M6.75 7.75h1.5v3.5"
				/><circle cx="8" cy="4" r=".5" fill="none" /></svg
			>
			<div class="[&amp;>:first-child]:mt-0 [&amp;>:last-child]:mb-0">
				<p>
					Before you can make requests to the Protocol API, you will need to grab your API key from
					your dashboard. You find it under <a href="#">Settings » API</a>.
				</p>
			</div>
		</div>
		<h2 class="scroll-mt-24" id="choose-your-client">
			<a class="group text-inherit no-underline hover:text-inherit" href="#choose-your-client"
				><div
					class="absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]"
				>
					<div
						class="group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600"
					>
						<svg
							viewBox="0 0 20 20"
							fill="none"
							stroke-linecap="round"
							aria-hidden="true"
							class="h-5 w-5 stroke-zinc-500 transition dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white"
							><path
								d="m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3"
							/></svg
						>
					</div>
				</div>
				Choose your client</a
			>
		</h2>
		<p>
			Before making your first API request, you need to pick which API client you will use. In
			addition to good ol' cURL HTTP requests, Protocol offers clients for JavaScript, Python, and
			PHP. In the following example, you can see how to install each client.
		</p>
		<div
			class="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10"
		>
			<div
				class="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent"
			>
				<div
					class="-mb-px flex gap-4 text-xs font-medium"
					role="tablist"
					aria-orientation="horizontal"
				>
					<button
						class="border-b py-3 transition ui-not-focus-visible:outline-none border-emerald-500 text-emerald-400"
						id="headlessui-tabs-tab-:r5:"
						role="tab"
						type="button"
						aria-selected="true"
						tabindex="0"
						data-headlessui-state="selected"
						aria-controls="headlessui-tabs-panel-:r9:">cURL</button
					><button
						class="border-b py-3 transition ui-not-focus-visible:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
						id="headlessui-tabs-tab-:r6:"
						role="tab"
						type="button"
						aria-selected="false"
						tabindex="-1"
						data-headlessui-state=""
						aria-controls="headlessui-tabs-panel-:ra:">JavaScript</button
					><button
						class="border-b py-3 transition ui-not-focus-visible:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
						id="headlessui-tabs-tab-:r7:"
						role="tab"
						type="button"
						aria-selected="false"
						tabindex="-1"
						data-headlessui-state=""
						aria-controls="headlessui-tabs-panel-:rb:">Python</button
					><button
						class="border-b py-3 transition ui-not-focus-visible:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
						id="headlessui-tabs-tab-:r8:"
						role="tab"
						type="button"
						aria-selected="false"
						tabindex="-1"
						data-headlessui-state=""
						aria-controls="headlessui-tabs-panel-:rc:">PHP</button
					>
				</div>
			</div>
			<div>
				<div
					id="headlessui-tabs-panel-:r9:"
					role="tabpanel"
					tabindex="0"
					data-headlessui-state="selected"
					aria-labelledby="headlessui-tabs-tab-:r5:"
				>
					<div class="group dark:bg-white/2.5">
						<div class="relative">
							<pre class="overflow-x-auto p-4 text-xs text-white"><code class="language-bash"
									><span
										><span style="color: var(--shiki-token-comment)"
											># cURL is most likely already installed on your machine</span
										></span
									>
  <span><span style="color: var(--shiki-color-text)">curl --version</span></span>
  <span /></code
								></pre>
							<button
								type="button"
								class="group/button absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"
								><span
									aria-hidden="false"
									class="pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300"
									><svg
										viewBox="0 0 20 20"
										aria-hidden="true"
										class="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400"
										><path
											stroke-width="0"
											d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
										/><path
											fill="none"
											stroke-linejoin="round"
											d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
										/></svg
									>Copy</span
								><span
									aria-hidden="true"
									class="pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300 translate-y-1.5 opacity-0"
									>Copied!</span
								></button
							>
						</div>
					</div>
				</div>
				<span
					id="headlessui-tabs-panel-:ra:"
					role="tabpanel"
					tabindex="-1"
					aria-labelledby="headlessui-tabs-tab-:r6:"
					style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
				/><span
					id="headlessui-tabs-panel-:rb:"
					role="tabpanel"
					tabindex="-1"
					aria-labelledby="headlessui-tabs-tab-:r7:"
					style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
				/><span
					id="headlessui-tabs-panel-:rc:"
					role="tabpanel"
					tabindex="-1"
					aria-labelledby="headlessui-tabs-tab-:r8:"
					style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
				/>
			</div>
		</div>
		<div class="not-prose">
			<a
				class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
				href="/sdks"
				>Check out our list of first-party SDKs<svg
					viewBox="0 0 20 20"
					fill="none"
					aria-hidden="true"
					class="mt-0.5 h-5 w-5 relative top-px -mr-1"
					><path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
					/></svg
				></a
			>
		</div>
		<h2 class="scroll-mt-24" id="making-your-first-api-request">
			<a
				class="group text-inherit no-underline hover:text-inherit"
				href="#making-your-first-api-request"
				><div
					class="absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]"
				>
					<div
						class="group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600"
					>
						<svg
							viewBox="0 0 20 20"
							fill="none"
							stroke-linecap="round"
							aria-hidden="true"
							class="h-5 w-5 stroke-zinc-500 transition dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white"
							><path
								d="m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3"
							/></svg
						>
					</div>
				</div>
				Making your first API request</a
			>
		</h2>
		<p>
			After picking your preferred client, you are ready to make your first call to the Protocol
			API. Below, you can see how to send a GET request to the Conversations endpoint to get a list
			of all your conversations. In the cURL example, results are limited to ten conversations, the
			default page length for each client.
		</p>
		<div
			class="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10"
		>
			<div
				class="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent"
			>
				<div
					class="-mb-px flex gap-4 text-xs font-medium"
					role="tablist"
					aria-orientation="horizontal"
				>
					<button
						class="border-b py-3 transition ui-not-focus-visible:outline-none border-emerald-500 text-emerald-400"
						id="headlessui-tabs-tab-:rd:"
						role="tab"
						type="button"
						aria-selected="true"
						tabindex="0"
						data-headlessui-state="selected"
						aria-controls="headlessui-tabs-panel-:rh:">cURL</button
					><button
						class="border-b py-3 transition ui-not-focus-visible:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
						id="headlessui-tabs-tab-:re:"
						role="tab"
						type="button"
						aria-selected="false"
						tabindex="-1"
						data-headlessui-state=""
						aria-controls="headlessui-tabs-panel-:ri:">JavaScript</button
					><button
						class="border-b py-3 transition ui-not-focus-visible:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
						id="headlessui-tabs-tab-:rf:"
						role="tab"
						type="button"
						aria-selected="false"
						tabindex="-1"
						data-headlessui-state=""
						aria-controls="headlessui-tabs-panel-:rj:">Python</button
					><button
						class="border-b py-3 transition ui-not-focus-visible:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
						id="headlessui-tabs-tab-:rg:"
						role="tab"
						type="button"
						aria-selected="false"
						tabindex="-1"
						data-headlessui-state=""
						aria-controls="headlessui-tabs-panel-:rk:">PHP</button
					>
				</div>
			</div>
			<div>
				<div
					id="headlessui-tabs-panel-:rh:"
					role="tabpanel"
					tabindex="0"
					data-headlessui-state="selected"
					aria-labelledby="headlessui-tabs-tab-:rd:"
				>
					<div class="group dark:bg-white/2.5">
						<div
							class="flex h-9 items-center gap-2 border-y border-b-white/7.5 border-t-transparent bg-white/2.5 bg-zinc-900 px-4 dark:border-b-white/5 dark:bg-white/1"
						>
							<div class="dark flex">
								<span
									class="font-mono text-[0.625rem] font-semibold leading-6 text-emerald-500 dark:text-emerald-400"
									>GET</span
								>
							</div>
							<span class="h-0.5 w-0.5 rounded-full bg-zinc-500" /><span
								class="font-mono text-xs text-zinc-400">/v1/conversations</span
							>
						</div>
						<div class="relative">
							<pre class="overflow-x-auto p-4 text-xs text-white"><code class="language-bash"
									><span
										><span style="color: var(--shiki-color-text)"
											>curl -G https://api.protocol.chat/v1/conversations \</span
										></span
									>
  <span
										><span style="color: var(--shiki-color-text)">  -H </span><span
											style="color: var(--shiki-token-string-expression)"
											>"Authorization: Bearer"</span
										><span style="color: var(--shiki-color-text)"> \</span></span
									>
  <span><span style="color: var(--shiki-color-text)">  -d limit=10</span></span>
  <span /></code
								></pre>
							<button
								type="button"
								class="group/button absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"
								><span
									aria-hidden="false"
									class="pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300"
									><svg
										viewBox="0 0 20 20"
										aria-hidden="true"
										class="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400"
										><path
											stroke-width="0"
											d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
										/><path
											fill="none"
											stroke-linejoin="round"
											d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
										/></svg
									>Copy</span
								><span
									aria-hidden="true"
									class="pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300 translate-y-1.5 opacity-0"
									>Copied!</span
								></button
							>
						</div>
					</div>
				</div>
				<span
					id="headlessui-tabs-panel-:ri:"
					role="tabpanel"
					tabindex="-1"
					aria-labelledby="headlessui-tabs-tab-:re:"
					style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
				/><span
					id="headlessui-tabs-panel-:rj:"
					role="tabpanel"
					tabindex="-1"
					aria-labelledby="headlessui-tabs-tab-:rf:"
					style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
				/><span
					id="headlessui-tabs-panel-:rk:"
					role="tabpanel"
					tabindex="-1"
					aria-labelledby="headlessui-tabs-tab-:rg:"
					style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
				/>
			</div>
		</div>
		<div class="not-prose">
			<a
				class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
				href="/conversations"
				>Read the docs for the Conversations endpoint<svg
					viewBox="0 0 20 20"
					fill="none"
					aria-hidden="true"
					class="mt-0.5 h-5 w-5 relative top-px -mr-1"
					><path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
					/></svg
				></a
			>
		</div>
		<h2 class="scroll-mt-24" id="whats-next">
			<a class="group text-inherit no-underline hover:text-inherit" href="#whats-next"
				>What's next?</a
			>
		</h2>
		<p>
			Great, you're now set up with an API client and have made your first request to the API. Here
			are a few links that might be handy as you venture further into the Protocol API:
		</p>
		<ul>
			<li><a href="#">Grab your API key from the Protocol dashboard</a></li>
			<li><a href="/conversations">Check out the Conversations endpoint</a></li>
			<li><a href="/errors">Learn about the different error messages in Protocol</a></li>
		</ul>
	</div>
	<footer class="mx-auto mt-16 w-full max-w-2xl lg:max-w-5xl">
		<div class="relative h-8">
			<form class="absolute inset-0 flex items-center justify-center gap-6 md:justify-start">
				<p class="text-sm text-zinc-600 dark:text-zinc-400">Was this page helpful?</p>
				<div
					class="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10"
				>
					<button
						type="submit"
						class="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
						data-response="yes">Yes</button
					>
					<div class="bg-zinc-900/10 dark:bg-white/10" />
					<button
						type="submit"
						class="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
						data-response="no">No</button
					>
				</div>
			</form>
		</div>
	</footer>
</article>
