<script lang="ts">
	import { firestore, auth, storage } from '$firebase';
	import { FirebaseApp } from 'sveltefire';
</script>

<FirebaseApp {auth} {firestore} {storage}>
	<slot />
</FirebaseApp>
