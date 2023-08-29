<script lang="ts">
	import { firestore, auth, storage } from '$firebase';
	import { FirebaseApp } from 'sveltefire';
	import '../app.css';
</script>

<FirebaseApp {auth} {firestore} {storage}>
	<slot />
</FirebaseApp>
