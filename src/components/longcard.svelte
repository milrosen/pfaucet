<script lang="ts">
	export let card: {
		imageUrl: string;
		title: string;
		blurb: string;
		author: string;
		link: string;
	};

	$: ({ imageUrl, title, blurb, author, link } = card);
</script>

<div class="long-card">
	<a href={link}>
		<p>{title}</p>
		<p2>{blurb}</p2>
		<p3>{author}</p3>
	</a>
	<div class="image-scaling-container">
		<img src={imageUrl} alt={title} />
	</div>
</div>

<style>
	a {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		color: inherit;
		position: absolute;
		inset: 10px;
		width: 50%;
		background-color: var(--cream);
	}
	p {
		margin: 0;
		margin-bottom: 0.5rem;
		padding: 0px 5px;
		background-color: var(--cream);
		text-transform: uppercase;
		font-size: 2.5vmax;
	}
	p2 {
		color: var(--red);
		text-transform: uppercase;
		border-style: solid;
		border-width: 0px 2px;
		padding: 0px 3px;
		font-size: 0.8rem;
		transform: rotate(-8deg);
		margin-left: 1rem;
		margin-right: auto;
	}
	p3 {
		margin-top: auto;
		opacity: 0.5;
		font-size: 0.4rem;
	}
	.long-card {
		width: 100%;
		height: 100%;
		position: relative;
		color: var(--black);
		justify-self: center;
		z-index: 1;
		background-color: var(--cream);
		grid-column: span 2;
		display: flex;
	}
	.image-scaling-container {
		position: absolute;
		inset: 10px;
		width: 50%;
		left: 50%;
		overflow: hidden;
	}
	img {
		width: 100%;
		object-fit: cover;
		transform: scale(110%) translateY(-28%);
	}
</style>
