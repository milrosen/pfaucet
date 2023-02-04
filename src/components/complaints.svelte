<script lang="ts">
	let complaints: HTMLAnchorElement;
	let flying = false;
	let minleft: number, maxleft: number, mintop: number, maxtop: number;
	let flynumber = 0;
	let messages = ['complaints', 'no', "please don't", "we're perfect", 'complaints'];
	let index = 0;

	let moveAway = () => {
		if (flying && flynumber <= 6) {
			complaints.style.left = Math.random() * (maxleft - minleft) + minleft + 'px';
			complaints.style.top = Math.random() * (maxtop - mintop) + mintop + 'px';
			flynumber++;
		} else if (!flying) {
			let rect = complaints.getBoundingClientRect();

			minleft = -rect.left;
			maxleft = window.innerWidth - rect.right;
			mintop = 50;
			maxtop = window.innerHeight - rect.bottom;

			flying = true;
			moveAway();
		}
		if (flynumber >= 7 && index < messages.length - 1) {
			complaints.style.left = '0px';
			complaints.style.top = '0px';
			index++;
		}
	};
</script>

<a href="/" on:mouseenter={moveAway} bind:this={complaints} on:click={moveAway}>
	<span>{messages[index]}</span>
</a>

<style>
	a {
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		display: flex;
		align-items: center;
		background-color: var(--cream);
		color: var(--black);
		border: 3px solid var(--black);
		margin: 3px;
		padding: 3px;
		position: relative;
		top: 0;
		left: 0;
		transition: color 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), box-shadow 0.2s linear,
			top 100ms linear, left 100ms linear;
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
	@media only screen and (max-width: 560px) {
		span {
			padding: 5px;
		}
	}
	a:hover {
		box-shadow: 0.5px 0.5px var(--black), 1px 1px var(--black), 1.5px 1.5px var(--black),
			2px 2px var(--black);
		color: var(--red);
	}
	span:hover::after {
		transform: scaleX(101%);
	}
</style>
