<script lang="ts">
	export let span: string;
	export let href: string;
</script>

<a {href}>
	<span>{span}</span>
</a>

<style>
	a {
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		display: flex;
		align-items: center;
		background-color: rgba(0, 0, 0, 0);
		color: var(--black);
		border: 3px solid var(--black);
		margin: 3px;
		padding: 3px;
		position: relative;
		transition: color 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), box-shadow 0.2s linear;
	}
	span {
		padding: 20px;
	}
	span::after {
		content: '';
		display: block;
		background-color: var(--black);
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		overflow: hidden;
		transform-origin: 0 0;
		transform: scaleX(0%);
		transition: transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	a:hover {
		box-shadow: 0.5px 0.5px var(--black), 1px 1px var(--black), 1.5px 1.5px var(--black),
			2px 2px var(--black);
		color: var(--red);
	}
	span:hover::after {
		transform: scaleX(101%);
	}

	@media only screen and (max-width: 560px) {
		span {
			padding: 5px;
		}
	}
</style>
