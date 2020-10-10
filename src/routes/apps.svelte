<script lang="ts">

</script>

<div>
    <h1>Apps</h1>
    <div>
        <hr>
        <h2><a target="_blank" href="https://alexa.amazon.ca/spa/index.html#skills/dp/B0796LR9LP/?ref=skill_dsk_skb_sr_0&qid=f52d2814-b111-4abc-b4b0-a2cea337dca9">Top Comment</a> - Alexa</h2>
        <h3>Serverless Voice Application - JS / Node / AWS / Lambda / SSML</h3>
        <p>Most Alexa apps are serverless functions stored on the cloud. The backends are generally written in Javascript, and they're invoked by a voice command.</p>
        <p>My Alexa app reads a recent, highly rated short story from the subreddit "<a target="_blank" href="www.reddit.com/r/writingprompts">/r/writingprompts</a>" on Reddit.</p>
        <p>Depending on your market, language, and your settings, you may be able to invoke it by simply saying "Alexa, open Top Comment."</p>
        <p>When invoked, a <a target="_blank" href="https://aws.amazon.com/lambda/">Lambda</a> function runs on Amazon Web Services servers, fetches data and returns text marked up with Speech Synthesis Markup Language (SSML) tags for Alexa to speak.</p>
        <p>This project got me acquainted with AWS, and introduced me to SSML, which is easily one of the most neato things out there, breaking down human language into not just phonetic segments (vowels and constanants), but also prosody (rate, pitch, timbre and more).</p>
        <p>SSML can take a robotic, lifeless reading and, with enough attention to detail, make it near indistinguishable from a human voice. I hope someday to have a good excuse to put a bunch of time into learning the in's and out's.</p>
        <hr>
        <h2 class="deprecated">NoIron Workouts - Windows Phone (deprecated)</h2>
        <h3>Static Phone Application - XAML / C# / XAP / Visual Studio</h3>
        <p>I produced a suite of Windows Phone apps that included workout routines, instructions, and images for bodyweight fitness movements. Each app was static, meaning that all assets were delivered with the install package, and the app functioned as well offline as online.</p>
        <p>Layout was built using basic XAML and the controls were written in C#, both of which I haven't used since.</p>
        <p>Unfortunately, despite being one of the coolest implementations of a smartphone to date, Windows Phone no longer exists, and so neither do my early developer efforts. You'll just have to take my word for it (that they were terrible ;).</p>
        <p>Having my work disappear with the platform was a little disappointing, but shaped how I looked at future projects and how I wanted to pursue my education. Tying yourself to one platform limits your options, and makes your skills less transferable. This may have been an influence in my later interest in Progressive Web Apps, PWA's, which exist as websites that you can use on anything with a browser, and install on most modern devices.</p>
    </div>

</div>

<style>
    .deprecated {
        color: grey;
    }
</style>