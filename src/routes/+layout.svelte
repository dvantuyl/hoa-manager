<script lang="ts">
	import { firestore, auth, storage } from '$firebase';
	import { FirebaseApp } from 'sveltefire';
	import Layout from '$components/Layout.svelte';
	import '../app.css';
</script>

<FirebaseApp {auth} {firestore} {storage}>
	<div class="w-full">
		<Layout>
			<slot />
		</Layout>
	</div>
</FirebaseApp>
