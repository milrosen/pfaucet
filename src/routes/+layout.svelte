<script>
  export const prerender = true;
  import Header from "../components/header.svelte";
  import Card from "../components/card.svelte";
  // @ts-ignore
  import BigCard from "../components/bigCard.svelte";
  import Longcard from "../components/longcard.svelte";

  const cards = [
    {
      title: "the family issue",
      imageUrl:
        "https://image.isu.pub/181112164757-5a30cf73060010165ffb1f205042c582/jpg/page_1_thumb_large.jpg",
      link: "https://issuu.com/plumbersfaucet/docs/the_family_issue_2018_1.5",
      author: "Plumber's Faucet",
      blurb: "I hate my wife",
      id: 1,
      paragraph:
        "Life is soul-crushingly short. We at the Faucet are steadfastly commited to giving you as many reasons as you want to regret each and every moment you live. Don't cherish your family. Give into the hatred and despair.",
    },
    {
      title: "the halloween issue",
      imageUrl:
        "https://image.isu.pub/211110070030-77b045347e9ba7cc245ab3f30b0f5a58/jpg/page_1_thumb_large.jpg",
      link: "https://issuu.com/plumbersfaucet/docs/week_after_halloween_issue_eda66eaae72aef",
      author: "Plumber's Faucet",
      blurb: "Aaahh spooky",
      id: 2,
    },
    {
      title: "s/c er i/e al  Issue",
      imageUrl:
        "https://image.isu.pub/210112224634-5a0115335e7538724581a46acec6452e/jpg/page_1_thumb_large.jpg",
      link: "https://issuu.com/plumbersfaucet/docs/cereal_issue",
      author: "Plumber's Faucet",
      blurb: "this is serial",
      id: 3,
    },
    {
      title: "the halloween issue",
      imageUrl:
        "https://image.isu.pub/211110070030-77b045347e9ba7cc245ab3f30b0f5a58/jpg/page_1_thumb_large.jpg",
      link: "https://issuu.com/plumbersfaucet/docs/week_after_halloween_issue_eda66eaae72aef",
      author: "Plumber's Faucet",
      blurb: "Aaahh spooky",
      id: 4,
    },
    {
      title: "the family issue",
      imageUrl:
        "https://image.isu.pub/181112164757-5a30cf73060010165ffb1f205042c582/jpg/page_1_thumb_large.jpg",
      link: "https://issuu.com/plumbersfaucet/docs/the_family_issue_2018_1.5",
      author: "Plumber's Faucet",
      blurb: "I hate my wife",
      id: 5,
    },
    {
      title: "s/c er i/e al  Issue",
      imageUrl:
        "https://image.isu.pub/210112224634-5a0115335e7538724581a46acec6452e/jpg/page_1_thumb_large.jpg",
      link: "https://issuu.com/plumbersfaucet/docs/cereal_issue",
      author: "Plumber's Faucet",
      blurb: "this is serial",
      id: 6,
    },
    {
      title: "the halloween issue",
      imageUrl:
        "https://image.isu.pub/211110070030-77b045347e9ba7cc245ab3f30b0f5a58/jpg/page_1_thumb_large.jpg",
      link: "https://issuu.com/plumbersfaucet/docs/week_after_halloween_issue_eda66eaae72aef",
      author: "Plumber's Faucet",
      blurb: "Aaahh spooky",
      id: 7,
    },
  ];
</script>

<Header />

<div class="articles-grid">
  {#each cards as card (card.id)}
    {#if card.id == 1} <BigCard {card} />{/if}
    {#if card.id == 2 || card.id == 3} <Longcard {card} />{/if}
    {#if card.id >= 4} <Card {card} />{/if}
  {/each}
</div>

<style>
  :root {
    --black: #282a28;
    --cream: #fff;
    --red: #e64042;
  }

  :global(body) {
    background-color: var(--cream);
    margin-top: 0;
  }

  .articles-grid {
    display: grid;
    gap: 2px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.8fr 0.8fr 1fr;
    background-color: var(--black);
    margin: 2rem;
    margin-top: 0;
    height: 65vw;
  }

  @media only screen and (max-width: 1050px) and (min-width: 600px) {
    .articles-grid {
      height: 100vw;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 0.7fr 0.7fr;
    }
    :global(.articles-grid div:nth-child(1)) {
      order: 0;
    }
    :global(.articles-grid div:nth-child(2)) {
      order: 4;
    }
    :global(.articles-grid div:nth-child(3)) {
      order: 5;
    }
    :global(.articles-grid div:nth-child(4)) {
      order: 1;
    }
    :global(.articles-grid div:nth-child(5)) {
      order: 2;
    }
    :global(.articles-grid div:nth-child(6)) {
      order: 3;
    }
    :global(.articles-grid div:nth-child(7)) {
      order: 6;
    }
  }
  @media only screen and (max-width: 600px) {
    .articles-grid {
      height: 250vw;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  }
</style>
