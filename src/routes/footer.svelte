<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
	<p>Repository link: <a href="https://github.com/Odzen/blog" target="_blank">GitHub</a></p>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
	}

	p {
		color: var(--text-2);
	}
</style>
