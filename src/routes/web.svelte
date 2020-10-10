<div>
    <div class="infoline">
        <div class="links"><span><a href="/web">web</a></span></div>
        <div class="links"><span><a href="/apps">apps</a></span></div>
		<div class="links"><span><a href="/writing">writing</a></span></div>
		<div class="links"><span><a href="/graphics">graphics</a></span></div>
        <div class="links"><span><a href="/photos">photos</a></span></div>
    </div>
    <h1>Web</h1>
    <div>
        <hr>
        <h2>Kitebot - Sapper</h2>
        <h3>Statically Generated Website - JS / TS / Svelte / AWS Amplify / GitHub</h3>
        <p>My site, Kitebot, is a static site existing on Amazon's content delivery network via AWS Amplify. It's built using Sapper, a web framework powered by Svelte.</p>
        <p>Instead of requiring servers running 24/7 to stay online, I only have a client side application. When changes are made and pushed to the GitHub repository, a webhook is triggered that calls AWS Amplify to rebuild the entire project as HTML/CSS/JS files.</p>
        <p>Those files are then distributed to edge servers all around the world for quicker retrieval by client browsers, which download the static files and then generate a performant site on the user's device.</p>
        <p>Each route is itself a .svelte file, and by separating logic into components, pages can load quickly without pulling down the entire site with each load.</p>
        <p>Another advantage of this pattern is the option to pre-fetch assets you know the user may need, resulting in very snappy navigation. It also has a formidable Lighthouse score, and with the included Service Worker the site can be installed as an app on many modern devices.</p>
        <hr>
    </div>

</div>

<style>
    
</style>